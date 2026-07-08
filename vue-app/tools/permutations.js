/**
 * Enumerates every trick name the slot machine can produce and writes
 * them to src/assets/permutations2.txt (repo root).
 *
 * Replaces the legacy `node -r esm tools/permutations.js`, which broke
 * because the `esm` loader shim does not work on modern Node.
 *
 * Run from vue-app/: node tools/permutations.js
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {
  APPROACHES,
  GRINDS,
  SPINS_OFF_GROOVE,
  SPINS_OFF_SOUL,
  SPINS_TO_GROOVE_BS,
  SPINS_TO_GROOVE_FS,
  SPINS_TO_GROOVE_FS_FAKIE,
  SPINS_TO_SOUL,
  SPINS_TO_SOUL_FAKIE,
  variationByName,
} from "../src/game/trickData.js";
import { nameTrick } from "../src/game/trickNamer.js";

const OUT_FILE = join(
  dirname(fileURLToPath(import.meta.url)),
  "../../src/assets/permutations2.txt"
);

function spinTosFor(grind, approach) {
  const isFakie = approach.isFakie === true;
  if (!grind.isGroove) {
    return isFakie ? SPINS_TO_SOUL_FAKIE : SPINS_TO_SOUL;
  }
  if (grind.name.includes("FS ")) {
    return isFakie ? SPINS_TO_GROOVE_FS_FAKIE : SPINS_TO_GROOVE_FS;
  }
  return SPINS_TO_GROOVE_BS;
}

const results = new Set();

for (const grind of GRINDS) {
  const variations = [null, ...grind.variations.map(variationByName)];
  const approaches = APPROACHES.filter(
    (approach) => !(grind.noSwitch && approach.isSwitch)
  );
  for (const variation of variations) {
    for (const approach of approaches) {
      const spinOffs = grind.isGroove ? SPINS_OFF_GROOVE : SPINS_OFF_SOUL;
      for (const spinTo of spinTosFor(grind, approach)) {
        for (const spinOff of spinOffs) {
          const { parsed } = nameTrick([
            { name: "Approach", winner: approach },
            { name: "SpinTo", winner: spinTo },
            { name: "Grind", winner: grind },
            { name: "GrindVariation", winner: variation },
            { name: "SpinOff", winner: spinOff },
          ]);
          results.add(parsed);
        }
      }
    }
  }
}

const uniques = [...results];
writeFileSync(
  OUT_FILE,
  `PERMUTATIONS uniq (${uniques.length})\n${uniques.join("\n")}\n`
);
console.log(`PERMUTATIONS uniq (${uniques.length}) -> ${OUT_FILE}`);
