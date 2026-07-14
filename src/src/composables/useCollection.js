import { computed, reactive, watch } from "vue";
import { GRINDS, RARE_GRIND_NAME_PARTS } from "../game/trickData.js";

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
  { id: "switch-hitter", name: "Switch Hitter", desc: "Land your first switch trick" },
  { id: "rewind", name: "Rewind", desc: "Land your first rewind spin out" },
  { id: "first-540", name: "Five Forty", desc: "Land your first 540 / 450" },
  { id: "first-720", name: "Seven Twenty", desc: "Land your first 720 / 630" },
  { id: "first-900", name: "Niner", desc: "Land your first 900 / 810" },
  { id: "true-1", name: "True Believer", desc: "Land a truespin grind" },
  { id: "true-3", name: "True Romance", desc: "Land truespins on 3 different grinds" },
  { id: "true-5", name: "True Legend", desc: "Land truespins on 5 different grinds" },
  { id: "ao-1", name: "Alley Cat", desc: "Land an alley-oop grind" },
  { id: "ao-3", name: "Oop Troop", desc: "Land alley-oops on 3 different grinds" },
  { id: "ao-5", name: "King of the Alley", desc: "Land alley-oops on 5 different grinds" },
  { id: "cab-company", name: "Cab Company", desc: "Land a Halfcab and a Fullcab trick" },
  { id: "grab-bag", name: "Grab Bag", desc: "Land a normal, a rocket and a cross grab" },
  { id: "grinds-5", name: "Grind Rookie", desc: "Land 5 different grinds" },
  { id: "grinds-10", name: "Grind Worker", desc: "Land 10 different grinds" },
  { id: "grinds-20", name: "Grind Boss", desc: "Land 20 different grinds" },
  { id: "half-collection", name: "Halfway There", desc: "Land half of all grinds" },
  { id: "soul-plate", name: "Soul Searcher", desc: "Land every soul-plate grind" },
  { id: "groove", name: "Groove Master", desc: "Land every groove grind" },
  { id: "rare-breed", name: "Rare Breed", desc: "Land every rare grind" },
  { id: "full-collection", name: "Tricktionary Complete", desc: "Land every grind" },
  { id: "tricks-10", name: "Bag of Tricks", desc: "Land 10 different tricks" },
  { id: "tricks-20", name: "Trick Collector", desc: "Land 20 different tricks" },
  { id: "tricks-30", name: "Dirty Thirty", desc: "Land 30 different tricks" },
  { id: "tricks-40", name: "Top 40", desc: "Land 40 different tricks" },
  { id: "tricks-50", name: "Half Century", desc: "Land 50 different tricks" },
  { id: "tricks-100", name: "Trickipedia", desc: "Land 100 different tricks" },
  { id: "tricks-1000", name: "Trick Machine", desc: "Land 1,000 different tricks" },
  { id: "tricks-10000", name: "10,000 Hours", desc: "Land 10,000 different tricks" },
  { id: "century", name: "Century Club", desc: "Land 100 tricks in total" },
  { id: "hot-streak", name: "Hot Streak", desc: "Land 5 tricks in a row without skipping" },
  { id: "comeback-kid", name: "Comeback Kid", desc: "Land a trick you skipped 3+ times" },
  { id: "daily-grind", name: "Daily Grind", desc: "Land tricks on 7 different days" },
  { id: "hammer", name: "Hammer Time", desc: "Land a trick worth 10+ points" },
  { id: "nukes", name: "Nukes", desc: "Land a trick worth 15+ points" },
];

const SOUL_PLATE_GRINDS = GRINDS.filter((g) => !g.isGroove && !g.isSoulGroove);
const GROOVE_GRINDS = GRINDS.filter((g) => g.isGroove);
const RARE_GRINDS = GRINDS.filter((g) =>
  RARE_GRIND_NAME_PARTS.some((part) => g.name.includes(part))
);

function defaultCollection() {
  return {
    tricks: {}, // { [exact trick name]: { landed, skipped } }
    grinds: {}, // { [grindName]: { landed, skipped } }
    trueGrinds: {}, // { [grindName]: land count } for truespin tricks
    aoGrinds: {}, // { [grindName]: land count } for alley-oop tricks
    variationsLanded: {}, // { [raw variation reel name]: true }
    days: {}, // { [YYYY-MM-DD]: true } days with at least one land
    streak: 0, // lands in a row without a skip
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

function landedTrickCount() {
  return Object.values(collection.tricks).filter((stats) => stats.landed > 0)
    .length;
}

function hasLandedMatching(pattern) {
  return Object.entries(collection.tricks).some(
    ([name, stats]) => stats.landed > 0 && pattern.test(name)
  );
}

function hasVariation(pattern) {
  return Object.keys(collection.variationsLanded).some((name) =>
    pattern.test(name)
  );
}

/** Badge conditions, evaluated against the just-landed spin. */
function badgeEarned(id, spin, winners) {
  const spins = `${winners.SpinTo} ${winners.SpinOff}`;
  const landed = landedGrindNames();

  // Threshold badges: "<kind>-<count>" ids share one rule per kind.
  const threshold = Number(id.slice(id.lastIndexOf("-") + 1));
  if (id.startsWith("true-")) {
    return Object.keys(collection.trueGrinds).length >= threshold;
  }
  if (id.startsWith("ao-")) {
    return Object.keys(collection.aoGrinds).length >= threshold;
  }
  if (id.startsWith("grinds-")) {
    return landed.length >= threshold;
  }
  if (id.startsWith("tricks-")) {
    return landedTrickCount() >= threshold;
  }

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
    case "switch-hitter":
      return winners.Approach.includes("Switch");
    case "rewind":
      return spin.name.includes("rewind");
    case "cab-company":
      return (
        hasLandedMatching(/\bHalfcab\b/) && hasLandedMatching(/\bFullcab\b/)
      );
    case "grab-bag":
      return (
        hasVariation(/^Grab/) &&
        hasVariation(/^Rocket/) &&
        hasVariation(/^Cross-Grab/)
      );
    case "rare-breed":
      return RARE_GRINDS.every((g) => landed.includes(g.name));
    case "hot-streak":
      return collection.streak >= 5;
    case "comeback-kid":
      return collection.tricks[spin.name].skipped >= 3;
    case "daily-grind":
      return Object.keys(collection.days).length >= 7;
    case "hammer":
      return spin.score >= 10;
    case "nukes":
      return spin.score >= 15;
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

    // Truespin / alley-oop lands per grind, matched on the parsed name
    // (synonym tricks like Soyale absorb the AO and don't count).
    if (/\bTrue\b/.test(spin.name)) {
      collection.trueGrinds[winners.Grind] =
        (collection.trueGrinds[winners.Grind] || 0) + 1;
    }
    if (/\bAO\b/.test(spin.name)) {
      collection.aoGrinds[winners.Grind] =
        (collection.aoGrinds[winners.Grind] || 0) + 1;
    }
    if (winners.GrindVariation !== "None") {
      collection.variationsLanded[winners.GrindVariation] = true;
    }
    collection.days[new Date().toISOString().slice(0, 10)] = true;
    collection.streak += 1;

    const earned = [];
    for (const badge of BADGES) {
      if (!collection.badges[badge.id] && badgeEarned(badge.id, spin, winners)) {
        collection.badges[badge.id] = new Date().toISOString();
        earned.push(badge);
      }
    }
    return earned;
  };

  /** Wipes all lifetime progress: tricks, grinds, lands and badges. */
  const resetCollection = () => {
    Object.assign(collection, defaultCollection());
  };

  const recordSkip = (spin) => {
    statsIn(collection.tricks, spin.name).skipped += 1;
    statsIn(collection.grinds, spinWinners(spin).Grind).skipped += 1;
    collection.streak = 0;
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
  const uniqueTrickCount = computed(landedTrickCount);
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
    resetCollection,
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
