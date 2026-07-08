import { computed, reactive, watch } from "vue";
import { GRINDS } from "../game/trickData.js";

const STORAGE_KEY = "aight-collection-v1";

/**
 * Lifetime trick collection for solo mode: every exact trick name you
 * have landed or skipped (ever, across sessions), the per-grind stats
 * derived from them, and milestone badges. Persisted on the device.
 */

export const BADGES = [
  { id: "first-trick", name: "First Blood", desc: "Land your first trick" },
  { id: "first-topside", name: "Top Mission", desc: "Land your first topside" },
  { id: "first-negative", name: "Negative Creep", desc: "Land your first negative" },
  { id: "first-540", name: "Five Forty", desc: "Land your first 540 / 450" },
  { id: "first-720", name: "Seven Twenty", desc: "Land your first 720 / 630" },
  { id: "first-900", name: "Niner", desc: "Land your first 900 / 810" },
  { id: "soul-plate", name: "Soul Searcher", desc: "Land every soul-plate grind" },
  { id: "groove", name: "Groove Master", desc: "Land every groove grind" },
  { id: "half-collection", name: "Halfway There", desc: "Land half of all grinds" },
  { id: "full-collection", name: "Tricktionary Complete", desc: "Land every grind" },
  { id: "century", name: "Century Club", desc: "Land 100 tricks in total" },
  { id: "hammer", name: "Hammer Time", desc: "Land a trick worth 10+ points" },
];

const SOUL_PLATE_GRINDS = GRINDS.filter((g) => !g.isGroove && !g.isSoulGroove);
const GROOVE_GRINDS = GRINDS.filter((g) => g.isGroove);

function defaultCollection() {
  return {
    tricks: {}, // { [exact trick name]: { landed, skipped } }
    grinds: {}, // { [grindName]: { landed, skipped } }
    landedTotal: 0,
    badges: {}, // { [badgeId]: ISO date earned }
  };
}

function loadCollection() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultCollection(), ...stored };
  } catch {
    return defaultCollection();
  }
}

const collection = reactive(loadCollection());

watch(
  collection,
  () => localStorage.setItem(STORAGE_KEY, JSON.stringify(collection)),
  { deep: true }
);

function statsIn(map, name) {
  if (!map[name]) {
    map[name] = { landed: 0, skipped: 0 };
  }
  return map[name];
}

function landedGrindNames() {
  return Object.keys(collection.grinds).filter(
    (name) => collection.grinds[name].landed > 0
  );
}

function spinWinners(spin) {
  const winners = {};
  for (const reel of spin.reels) {
    winners[reel.name] = reel.winner ? reel.winner.name : "None";
  }
  return winners;
}

function includesAny(text, parts) {
  return parts.some((part) => text.includes(part));
}

/** Badge conditions, evaluated against the just-landed spin. */
function badgeEarned(id, spin, winners) {
  const spins = `${winners.SpinTo} ${winners.SpinOff}`;
  const landed = landedGrindNames();
  switch (id) {
    case "first-trick":
      return collection.landedTotal >= 1;
    case "first-topside":
      return winners.GrindVariation.includes("Topside");
    case "first-negative":
      return winners.GrindVariation.includes("Negative");
    case "first-540":
      return includesAny(spins, ["540", "450"]);
    case "first-720":
      return includesAny(spins, ["720", "630"]);
    case "first-900":
      return includesAny(spins, ["900", "810"]);
    case "soul-plate":
      return SOUL_PLATE_GRINDS.every((g) => landed.includes(g.name));
    case "groove":
      return GROOVE_GRINDS.every((g) => landed.includes(g.name));
    case "half-collection":
      return landed.length >= Math.ceil(GRINDS.length / 2);
    case "full-collection":
      return landed.length >= GRINDS.length;
    case "century":
      return collection.landedTotal >= 100;
    case "hammer":
      return spin.score >= 10;
    default:
      return false;
  }
}

export function useCollection() {
  /** Records a landed spin and returns any newly earned badges. */
  const recordLand = (spin) => {
    const winners = spinWinners(spin);
    statsIn(collection.tricks, spin.name).landed += 1;
    statsIn(collection.grinds, winners.Grind).landed += 1;
    collection.landedTotal += 1;

    const earned = [];
    for (const badge of BADGES) {
      if (!collection.badges[badge.id] && badgeEarned(badge.id, spin, winners)) {
        collection.badges[badge.id] = new Date().toISOString();
        earned.push(badge);
      }
    }
    return earned;
  };

  const recordSkip = (spin) => {
    statsIn(collection.tricks, spin.name).skipped += 1;
    statsIn(collection.grinds, spinWinners(spin).Grind).skipped += 1;
  };

  /**
   * Trainer bias: grinds you have never landed spin up more often, and
   * grinds you skip more than you land come up more often too.
   */
  const grindBias = () => {
    const bias = {};
    for (const grind of GRINDS) {
      const stats = collection.grinds[grind.name];
      if (!stats || stats.landed === 0) {
        bias[grind.name] = 2.5;
      } else if (stats.skipped > stats.landed) {
        bias[grind.name] = 2;
      }
    }
    return bias;
  };

  // The collection itself counts exact trick names (full combination of
  // approach, spins, grind and variation). The grind numbers only feed
  // the completable badges and the tricktionary checkmarks.
  const uniqueTrickCount = computed(
    () =>
      Object.values(collection.tricks).filter((stats) => stats.landed > 0)
        .length
  );
  const landedGrindCount = computed(() => landedGrindNames().length);
  const totalGrinds = GRINDS.length;
  const grindProgressPercent = computed(() =>
    Math.round((landedGrindCount.value / totalGrinds) * 100)
  );
  const earnedBadges = computed(() =>
    BADGES.filter((badge) => collection.badges[badge.id])
  );
  const hasBadge = (id) => Boolean(collection.badges[id]);
  const grindLandedCount = (name) => collection.grinds[name]?.landed || 0;

  return {
    collection,
    recordLand,
    recordSkip,
    grindBias,
    uniqueTrickCount,
    landedGrindCount,
    totalGrinds,
    grindProgressPercent,
    earnedBadges,
    hasBadge,
    grindLandedCount,
  };
}
