import { reactive, watch } from "vue";
import { GRINDS, RARE_GRIND_NAME_PARTS } from "../game/trickData.js";

const STORAGE_KEY = "aight-settings-v3";

export const CUSTOM_LEVEL = 4;

export const MIN_PLAYERS = 2;
export const MAX_PLAYERS = 6;

export const LEVELS = [
  { id: 1, name: "Chill", tagline: "Basic grinds, no spins" },
  { id: 2, name: "Juicy", tagline: "Topsides, negatives & 360s" },
  { id: 3, name: "Nuts", tagline: "Everything up to 720s" },
  { id: CUSTOM_LEVEL, name: "Custom", tagline: "Your own rules" },
];

export const REEL_SPEEDS = [
  { id: "verySlow", name: "Very slow", ms: 2300 },
  { id: "slow", name: "Slow", ms: 1400 },
  { id: "normal", name: "Normal", ms: 800 },
  { id: "fast", name: "Fast", ms: 500 },
  { id: "veryFast", name: "Very fast", ms: 300 },
];

const ALL_TRICKS_OFF = {
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
  spins360: false,
  spins540: false,
  spins720: false,
  spins900: false,
};

const LEVEL_PRESETS = {
  1: { ...ALL_TRICKS_OFF },
  2: {
    ...ALL_TRICKS_OFF,
    negative: true,
    topside: true,
    spins360: true,
    grabs: true,
    crossgrab: true,
  },
  3: {
    ...Object.fromEntries(Object.keys(ALL_TRICKS_OFF).map((k) => [k, true])),
    spins900: false,
  },
};

// Grinds each difficulty preset switches off, matched by substring so
// FS/BS variants are covered. Nuts (3) and Custom allow everything.
const LEVEL_EXCLUDED_GRINDS = {
  1: [...RARE_GRIND_NAME_PARTS, "Pudslide", "Fastslide"],
  2: ["Closed Book", "Open Book", "Citric Acid", "Darkslide", "Sidewalk"],
  3: [],
};

function presetGrinds(levelId) {
  const parts = LEVEL_EXCLUDED_GRINDS[levelId] || [];
  const grinds = {};
  for (const grind of GRINDS) {
    if (parts.some((part) => grind.name.includes(part))) {
      grinds[grind.name] = false;
    }
  }
  return grinds;
}

function defaultSettings() {
  return {
    mode: "solo", // solo | group
    level: 1,
    players: ["Player 1", "Player 2"],
    reelSpeed: "normal",
    introMusic: true,
    tricks: { ...ALL_TRICKS_OFF },
    // Per-grind training filter: grind name -> false when switched off.
    // Missing entries mean "on", so new grinds default to enabled.
    grinds: presetGrinds(1),
    // Each mode's parked difficulty config ({ level, tricks, grinds }).
    // The top-level fields always hold the current mode's config; the
    // other mode's is stored here and swapped in on mode change, so solo
    // and group each keep their own custom setup.
    modeConfigs: {},
  };
}

function loadSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const defaults = defaultSettings();
    const merged = {
      ...defaults,
      ...stored,
      tricks: { ...defaults.tricks, ...(stored && stored.tricks) },
    };
    if (
      !Array.isArray(merged.players) ||
      merged.players.length < MIN_PLAYERS ||
      merged.players.some((name) => typeof name !== "string")
    ) {
      merged.players = [...defaults.players];
    }
    merged.players = merged.players.slice(0, MAX_PLAYERS);
    if (merged.mode !== "solo" && merged.mode !== "group") {
      merged.mode = "solo";
    }
    merged.introMusic = merged.introMusic !== false;
    if (!merged.grinds || typeof merged.grinds !== "object") {
      merged.grinds = {};
    }
    if (!merged.modeConfigs || typeof merged.modeConfigs !== "object") {
      merged.modeConfigs = {};
    }
    return merged;
  } catch {
    return defaultSettings();
  }
}

const settings = reactive(loadSettings());

watch(
  settings,
  () => localStorage.setItem(STORAGE_KEY, JSON.stringify(settings)),
  { deep: true }
);

// Swap difficulty configs when the mode changes: park the previous
// mode's config and restore the new mode's (first switch ever keeps the
// current config, so both modes start out identical).
watch(
  () => settings.mode,
  (mode, prevMode) => {
    if (!prevMode || mode === prevMode) {
      return;
    }
    settings.modeConfigs[prevMode] = JSON.parse(
      JSON.stringify({
        level: settings.level,
        tricks: settings.tricks,
        grinds: settings.grinds,
      })
    );
    const parked = settings.modeConfigs[mode];
    if (parked) {
      settings.level = parked.level;
      Object.assign(settings.tricks, ALL_TRICKS_OFF, parked.tricks);
      settings.grinds = { ...parked.grinds };
    }
  }
);

export function useSettings() {
  const applyLevel = (levelId) => {
    settings.level = levelId;
    if (LEVEL_PRESETS[levelId]) {
      Object.assign(settings.tricks, LEVEL_PRESETS[levelId]);
      settings.grinds = presetGrinds(levelId);
    }
  };

  // Touching a single trick toggle turns the level into "Custom".
  const setTrick = (key, value) => {
    settings.tricks[key] = value;
    settings.level = CUSTOM_LEVEL;
  };

  const reset = () => {
    Object.assign(settings, defaultSettings());
    Object.assign(settings.tricks, ALL_TRICKS_OFF);
  };

  const grindEnabled = (name) => settings.grinds[name] !== false;
  // Presets define a grind selection too, so custom picks flip the level.
  const setGrind = (name, value) => {
    settings.grinds[name] = value;
    settings.level = CUSTOM_LEVEL;
  };
  const setAllGrinds = (value) => {
    for (const grind of GRINDS) {
      settings.grinds[grind.name] = value;
    }
    settings.level = CUSTOM_LEVEL;
  };

  const levelName = (id = settings.level) =>
    LEVELS.find((l) => l.id === id)?.name ?? "";

  const reelSpeedMs = () =>
    (REEL_SPEEDS.find((s) => s.id === settings.reelSpeed) ?? REEL_SPEEDS[2]).ms;

  return {
    settings,
    applyLevel,
    setTrick,
    reset,
    levelName,
    reelSpeedMs,
    grindEnabled,
    setGrind,
    setAllGrinds,
  };
}
