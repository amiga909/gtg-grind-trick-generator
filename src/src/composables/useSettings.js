import { reactive, watch } from "vue";

const STORAGE_KEY = "aight-settings-v3";

export const CUSTOM_LEVEL = 4;

export const MIN_PLAYERS = 2;
export const MAX_PLAYERS = 6;
export const MIN_ROUNDS = 1;
export const MAX_ROUNDS = 10;

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
    mode: "solo", // solo | group
    level: 1,
    players: ["Player 1", "Player 2"],
    rounds: 5,
    reelSpeed: "normal",
    introMusic: true,
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
    merged.rounds = Math.min(
      MAX_ROUNDS,
      Math.max(MIN_ROUNDS, Number(merged.rounds) || 5)
    );
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
