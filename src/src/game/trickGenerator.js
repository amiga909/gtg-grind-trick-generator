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
} from "./trickData.js";
import { nameTrick } from "./trickNamer.js";

const NONE = { name: "None", score: 0 };

/**
 * Generates one spin of the slot machine: for each of the 5 reels the
 * pool of possible entries (for the reel animation) and the winner,
 * plus the parsed trick name and its score.
 *
 * The grind is decided first because it constrains everything else:
 * which variations exist, whether switch is possible, and which spin
 * tables apply (soul vs. groove frontside/backside).
 *
 * @param settings   `tricks` settings object from useSettings.
 * @param usedGrinds grind names already spun this game; they are
 *                   avoided until every grind has been used once.
 * @param grindBias  optional weight multipliers per grind name, used by
 *                   solo mode to favor never-landed and often-skipped grinds.
 * @param grindToggles optional per-grind training filter from useSettings
 *                   (`grinds`): grind names mapped to false never spin up.
 */
export function generateSpin(
  settings,
  usedGrinds = [],
  grindBias = null,
  grindToggles = null
) {
  const grindPool = grindCandidates(settings, usedGrinds, grindBias, grindToggles);
  const grind = pickWeighted(grindPool);

  const variationPool = variationCandidates(grind, settings);
  const variation = hasVariationReel(settings)
    ? pickWeighted(variationPool)
    : null;

  const approachPool = approachCandidates(grind, settings);
  const approach = hasApproachReel(settings) ? pickWeighted(approachPool) : null;

  const spinToPool = spinToCandidates(grind, approach, settings);
  const spinTo = pickWeighted(spinToPool);

  const spinOffPool = spinOffCandidates(grind, settings);
  const spinOff = pickWeighted(spinOffPool);

  const reels = [
    reel("Approach", "Approach", approachPool, approach),
    reel("SpinTo", "Spin in", spinToPool, spinTo),
    reel("Grind", "Grind", grindPool, grind),
    reel("GrindVariation", "Variation", variationPool, variation),
    reel("SpinOff", "Spin out", spinOffPool, spinOff),
  ];

  const { parsed, orig } = nameTrick(
    reels.map(({ name, winner }) => ({ name, winner }))
  );

  return { reels, name: parsed, orig, score: scoreSpin(reels) };
}

function reel(name, label, pool, winner) {
  return { name, label, pool, winner, hidden: winner === null };
}

// The approach/variation reels disappear entirely when the settings
// allow nothing beyond the default (forwards approach, no variation).
export function hasApproachReel(settings) {
  return settings.fakie || settings.switch;
}

export function hasVariationReel(settings) {
  return (
    settings.negative ||
    settings.topside ||
    settings.rough ||
    settings.tough ||
    settings.channel ||
    settings.christ ||
    settings.grabs ||
    settings.rocket ||
    settings.crossgrab
  );
}

function pickWeighted(pool) {
  const total = pool.reduce((sum, entry) => sum + (entry.weight || 1), 0);
  let roll = Math.random() * total;
  for (const entry of pool) {
    roll -= entry.weight || 1;
    if (roll < 0) {
      return entry;
    }
  }
  return pool[pool.length - 1];
}

function grindCandidates(settings, usedGrinds, grindBias, grindToggles) {
  let pool = GRINDS;
  if (grindToggles) {
    const picked = pool.filter((grind) => grindToggles[grind.name] !== false);
    // With every grind switched off there is nothing left to spin, so
    // the selection is ignored rather than breaking the game.
    if (picked.length > 0) {
      pool = picked;
    }
  }

  const unused = pool.filter((grind) => !usedGrinds.includes(grind.name));
  if (unused.length > 0) {
    pool = unused;
  }

  // Soul grinds appear twice as often to even the odds against groove
  // grinds, which are listed once per FS/BS variant.
  return pool.map((grind) => {
    const soulFactor = grind.isGroove || grind.isSoulGroove ? 1 : 2;
    const biasFactor = (grindBias && grindBias[grind.name]) || 1;
    return { ...grind, weight: grind.weight * soulFactor * biasFactor };
  });
}

function variationCandidates(grind, settings) {
  const excludedParts = [
    [settings.negative, "Negative"],
    [settings.topside, "Topside"],
    [settings.rough, "Rough"],
    [settings.tough, "Tough"],
    [settings.channel, "Channel"],
    [settings.christ, "Christ"],
    [settings.grabs, "Grab"], // also removes Cross-Grab combos
    [settings.rocket, "Rocket"],
    [settings.crossgrab, "Cross-Grab"],
  ]
    .filter(([enabled]) => !enabled)
    .map(([, part]) => part);

  const allowed = grind.variations
    .filter((name) => !excludedParts.some((part) => name.includes(part)))
    .map(variationByName);

  return [...allowed, variationByName("None")];
}

function approachCandidates(grind, settings) {
  return APPROACHES.filter(
    (approach) =>
      (settings.switch || !approach.isSwitch) &&
      (settings.fakie || !approach.isFakie) &&
      !(grind.noSwitch && approach.isSwitch)
  );
}

function spinToCandidates(grind, approach, settings) {
  const isFakie = approach ? approach.isFakie : false;
  let pool;
  if (!grind.isGroove) {
    pool = isFakie ? SPINS_TO_SOUL_FAKIE : SPINS_TO_SOUL;
  } else if (grind.name.includes("FS ")) {
    pool = isFakie ? SPINS_TO_GROOVE_FS_FAKIE : SPINS_TO_GROOVE_FS;
  } else {
    pool = SPINS_TO_GROOVE_BS;
  }
  return filterSpinDegrees(pool, settings);
}

function spinOffCandidates(grind, settings) {
  const pool = grind.isGroove ? SPINS_OFF_GROOVE : SPINS_OFF_SOUL;
  return filterSpinDegrees(pool, settings);
}

// Each setting covers a full rotation and its groove-grind equivalent
// (360 soul spin ≙ 270 groove spin, etc.). 180s are always allowed.
function filterSpinDegrees(pool, settings) {
  const excludedDegrees = [
    [settings.spins360, ["360", "270"]],
    [settings.spins540, ["540", "450"]],
    [settings.spins720, ["720", "630"]],
    [settings.spins900, ["900", "810"]],
  ]
    .filter(([enabled]) => !enabled)
    .flatMap(([, degrees]) => degrees);

  return pool.filter(
    (spin) => !excludedDegrees.some((degree) => spin.name.includes(degree))
  );
}

function scoreSpin(reels) {
  return reels.reduce(
    (total, { winner }) => total + ((winner || NONE).score || 0),
    0
  );
}
