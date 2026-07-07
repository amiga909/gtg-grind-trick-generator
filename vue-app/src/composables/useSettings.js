import { reactive, watch } from "vue";

const STORAGE_KEY = "aight-settings-v3";

export const CUSTOM_LEVEL = 4;

export const MIN_SPINS = 2;
export const MAX_SPINS = 10;

export const LEVELS = [
  { id: 1, name: "Chill", tagline: "Basic grinds, no spins" },
  { id: 2, name: "Juicy", tagline: "Topsides, negatives & 360s" },
  { id: 3, name: "Nuts", tagline: "Everything up to 720s" },
  { id: CUSTOM_LEVEL, name: "Custom", tagline: "Your own rules" },
];

export const REEL_SPEEDS = [
  { id: "verySlow", name: "Very slow", ms: 4200 },
  { id: "slow", name: "Slow", ms: 3200 },
  { id: "normal", name: "Normal", ms: 2300 },
  { id: "fast", name: "Fast", ms: 1400 },
  { id: "veryFast", name: "Very fast", ms: 800 },
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
  rareGrinds: false,
  spins360: false,
  spins540: false,
  spins720: false,
  spins900: false,
};

const LEVEL_PRESETS = {
  1: { ...ALL_TRICKS_OFF },
  2: {
    ...ALL_TRICKS_OFF,
    rareGrinds: true,
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

function defaultSettings() {
  return {
    level: 1,
    spinsPerGame: 5,
    reelSpeed: "normal",
    tricks: { ...ALL_TRICKS_OFF },
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
    merged.spinsPerGame = Math.min(
      MAX_SPINS,
      Math.max(MIN_SPINS, merged.spinsPerGame)
    );
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

export function useSettings() {
  const applyLevel = (levelId) => {
    settings.level = levelId;
    if (LEVEL_PRESETS[levelId]) {
      Object.assign(settings.tricks, LEVEL_PRESETS[levelId]);
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

  const levelName = (id = settings.level) =>
    LEVELS.find((l) => l.id === id)?.name ?? "";

  const reelSpeedMs = () =>
    (REEL_SPEEDS.find((s) => s.id === settings.reelSpeed) ?? REEL_SPEEDS[2]).ms;

  return { settings, applyLevel, setTrick, reset, levelName, reelSpeedMs };
}
