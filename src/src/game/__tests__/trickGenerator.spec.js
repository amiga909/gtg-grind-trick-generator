import { describe, expect, it } from "vitest";
import { generateSpin } from "../trickGenerator.js";
import { RARE_GRIND_NAME_PARTS } from "../trickData.js";

const ALL_OFF = {
  fakie: false,
  switch: false,
  topside: false,
  negative: false,
  rough: false,
  tough: false,
  channel: false,
  christ: false,
  grabs: false,
  rocket: false,
  crossgrab: false,
  rareGrinds: false,
  spins360: false,
  spins540: false,
  spins720: false,
  spins900: false,
};

const ALL_ON = Object.fromEntries(Object.keys(ALL_OFF).map((k) => [k, true]));

describe("generateSpin", () => {
  it("with everything off only spins the grind and 180 spin reels", () => {
    for (let i = 0; i < 200; i++) {
      const spin = generateSpin(ALL_OFF);
      const byName = Object.fromEntries(spin.reels.map((r) => [r.name, r]));

      expect(spin.name).not.toBe("");
      expect(byName.Approach.hidden).toBe(true);
      expect(byName.GrindVariation.hidden).toBe(true);
      expect(
        RARE_GRIND_NAME_PARTS.some((part) =>
          byName.Grind.winner.name.includes(part)
        )
      ).toBe(false);
      // Only 180s (or nothing) without the bigger-spin settings.
      for (const reel of [byName.SpinTo, byName.SpinOff]) {
        expect(reel.winner.name).toMatch(/^(None|Forwards|Fakie|\D*180)$/);
      }
    }
  });

  it("with everything on produces valid tricks with all reels", () => {
    for (let i = 0; i < 200; i++) {
      const spin = generateSpin(ALL_ON);
      expect(spin.name).not.toBe("");
      expect(spin.score).toBeGreaterThanOrEqual(1);
      expect(spin.reels).toHaveLength(5);
      expect(spin.reels.every((r) => r.pool.length > 0)).toBe(true);
    }
  });

  it("avoids grinds already used this game", () => {
    const used = ["Makio", "Soul", "Acid"];
    for (let i = 0; i < 100; i++) {
      const spin = generateSpin(ALL_ON, used);
      const grind = spin.reels.find((r) => r.name === "Grind").winner;
      expect(used).not.toContain(grind.name);
    }
  });

  it("never picks switch approaches for noSwitch grinds", () => {
    for (let i = 0; i < 300; i++) {
      const spin = generateSpin({ ...ALL_ON, rareGrinds: true });
      const byName = Object.fromEntries(spin.reels.map((r) => [r.name, r]));
      if (byName.Grind.winner.noSwitch) {
        expect(byName.Approach.winner.isSwitch).toBe(false);
      }
    }
  });
});
