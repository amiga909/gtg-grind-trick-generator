import { reactive } from "vue";

/**
 * Text-to-speech sampler: trick names are concatenations of a small
 * token vocabulary, so one audio sample per token is enough to read
 * any trick aloud. All samples are preloaded and decoded before the
 * app starts; missing samples (not every token is recorded yet) are
 * skipped when speaking.
 */

const AUDIO_BASE = "audio/";

// Sample key (lowercase spoken token) -> file in public/audio.
// Multi-word keys are matched greedily before single words, so
// "Top Soul" uses the dedicated sample instead of "Top" + "Soul".
export const SAMPLE_FILES = {
  270: "270.wav",
  450: "450.wav",
  540: "540.wav",
  630: "630.wav",
  720: "720.mp3",
  810: "810.mp3",
  900: "900.wav",
  acid: "Acid.wav",
  "alley-oop": "Alley-Oop.mp3",
  backside: "Backside.wav",
  backslide: "Backslide.wav",
  "byn soul": "Byn Soul.wav",
  "cab driver": "Cab driver.wav",
  channel: "Channel.wav",
  christ: "Christ.wav",
  "citric acid": "Citric Acid.wav",
  "closed book": "Closed Book.wav",
  "cloudy night": "Cloudy Night.wav",
  "cross-grab": "Crossgrab.wav",
  darkslide: "Darkslide.wav",
  fakie: "Fakie.wav",
  fastslide: "Fastslide.wav",
  fishbrain: "Fishbrain.wav",
  frontside: "Frontside.wav",
  "full torque": "Full Torque.wav",
  fullcab: "Fullcab.wav",
  grab: "Grab.wav",
  halfcab: "Halfcab.wav",
  "hot dog": "Hotdog.wav",
  hurricane: "Hurricane.mp3",
  kindgrind: "Kindgrind.wav",
  makio: "Makio.wav",
  misfit: "Misfit.wav",
  mistrial: "Mistrial.wav",
  mizou: "Mizou.wav",
  negative: "Negative.wav",
  "open book": "Open Book.wav",
  overpuss: "Overpuss.wav",
  pstar: "PStar.wav",
  pudslide: "Pudslide.wav",
  rocket: "Rocket.wav",
  rough: "Rough.wav",
  royale: "Royale.wav",
  savannah: "Savannah.wav",
  sidewalk: "Sidewalk.wav",
  soul: "Soul.wav",
  soyale: "Soyale.wav",
  "stub soul": "Stub Soul.wav",
  "sunny day": "Sunny Day.wav",
  sweatstance: "Sweatstance.wav",
  switch: "Switch.wav",
  tabernacle: "Tabernacle.wav",
  teakettle: "Teakettle.wav",
  torque: "Torque.wav",
  tough: "Tough.wav",
  "training wheel": "Training Wheel.wav",
  unity: "Unity.wav",
  wheelbarrow: "Wheelbarrow.wav",
  "x-grind": "X-Grind.mp3",
  "to 180 out": "to 180 out.mp3",
  "to 180 rewind out": "to 180 rewind out.mp3",
  "to 360 out": "to 360 out.mp3",
  "to 360 rewind out": "to 360 rewind out.mp3",
  "to 540 out": "to 540 out.mp3",
  "to 540 rewind out": "to 540 rewind out.mp3",
  "to 720 out": "to 720 out.mp3",
  "to 720 rewind out": "to 720 rewind out.mp3",
  // spoken "to fakie" — the written name is "to Fakie out"
  "to fakie out": "to Fakie.mp3",
  // never appears in parsed names (the namer drops it), kept for safety
  "to forwards out": "to Forwards.mp3",
  "top soul": "Top Soul.mp3",
  top: "Top.wav",
  true: "True.wav",
};

// Written form -> spoken form, applied before tokenizing.
const SPOKEN = [
  [/\bBS\b/g, "Backside"],
  [/\bFS\b/g, "Frontside"],
  [/\bAO\b/g, "Alley-Oop"],
  [/&/g, " "],
];

const MAX_PHRASE_WORDS = 4; // longest sample key ("to 540 rewind out")

/**
 * Splits a trick name into sample keys, longest match first. Words
 * without a sample are dropped. Exported for tests.
 */
export function matchSamples(name, hasSample) {
  let text = name;
  for (const [pattern, spoken] of SPOKEN) {
    text = text.replace(pattern, spoken);
  }
  const words = text.split(/\s+/).filter(Boolean);

  const keys = [];
  let i = 0;
  while (i < words.length) {
    let matched = false;
    for (let len = MAX_PHRASE_WORDS; len >= 1; len--) {
      const key = words.slice(i, i + len).join(" ").toLowerCase();
      if (hasSample(key)) {
        keys.push(key);
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      i += 1; // sample not recorded yet
    }
  }
  return keys;
}

const MUTE_KEY = "aight-muted";

const state = reactive({
  ready: false,
  loaded: 0,
  total: Object.keys(SAMPLE_FILES).length,
  failed: [], // files that could not be fetched/decoded
  // guarded: this module is also imported in node-based tests
  muted:
    typeof localStorage !== "undefined" &&
    localStorage.getItem(MUTE_KEY) === "1",
});

let ctx = null;
const buffers = new Map();
let playing = [];

export async function preloadSpeech() {
  if (ctx) {
    return; // already preloading/preloaded
  }
  ctx = new (window.AudioContext || window.webkitAudioContext)();

  await Promise.all(
    Object.entries(SAMPLE_FILES).map(async ([key, file]) => {
      try {
        const res = await fetch(AUDIO_BASE + encodeURIComponent(file));
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const buffer = await ctx.decodeAudioData(await res.arrayBuffer());
        buffers.set(key, buffer);
      } catch {
        state.failed.push(file);
      }
      state.loaded += 1;
    })
  );
  state.ready = true;
}

export function stopSpeech() {
  for (const source of playing) {
    try {
      source.stop();
    } catch {
      // already ended
    }
  }
  playing = [];
}

export function toggleMute() {
  state.muted = !state.muted;
  localStorage.setItem(MUTE_KEY, state.muted ? "1" : "0");
  if (state.muted) {
    stopSpeech();
  }
}

/** Reads a trick name aloud from the preloaded samples. */
export function speakTrick(name) {
  if (!state.ready || !ctx || state.muted) {
    return;
  }
  if (ctx.state === "suspended") {
    ctx.resume();
  }
  stopSpeech();

  const GAP_S = 0.06;
  let at = ctx.currentTime + 0.05;
  for (const key of matchSamples(name, (k) => buffers.has(k))) {
    const source = ctx.createBufferSource();
    source.buffer = buffers.get(key);
    source.connect(ctx.destination);
    source.start(at);
    at += source.buffer.duration + GAP_S;
    playing.push(source);
  }
}

export function useSpeech() {
  return { speechState: state, preloadSpeech, speakTrick, stopSpeech, toggleMute };
}
