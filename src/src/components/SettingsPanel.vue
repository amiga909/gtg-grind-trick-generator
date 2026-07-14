<script setup>
import AppModal from "./AppModal.vue";
import { GRINDS, RARE_GRIND_NAME_PARTS } from "../game/trickData.js";
import {
  LEVELS,
  CUSTOM_LEVEL,
  REEL_SPEEDS,
  useSettings,
} from "../composables/useSettings.js";

defineEmits(["close"]);

const {
  settings,
  applyLevel,
  setTrick,
  reset,
  grindEnabled,
  setGrind,
  setAllGrinds,
} = useSettings();

const TRICK_GROUPS = [
  {
    title: "Approach",
    options: [
      ["fakie", "Fakie tricks"],
      ["switch", "Switch tricks"],
    ],
  },
  {
    title: "Grind variations",
    options: [
      ["topside", "Topside grinds"],
      ["negative", "Negative grinds"],
      ["rough", "Rough / heel grinds (Teakettle, Rough Mizou, ..)"],
      ["tough", "Tough / toe grinds (Tough Soyale, ..)"],
      ["christ", "Christ grinds"],
      ["grabs", "Normal grabs"],
      ["rocket", "Rocket grabs"],
      ["crossgrab", "Cross grabs"],
      ["channel", "Channel grinds"],
    ],
  },
  {
    title: "Spins",
    options: [
      ["spins360", "360 / 270 spins"],
      ["spins540", "540 / 450 spins"],
      ["spins720", "720 / 630 spins"],
      ["spins900", "900 / 810 spins"],
    ],
  },
];

const isRare = (name) =>
  RARE_GRIND_NAME_PARTS.some((part) => name.includes(part));

// FS/BS pairs sort next to their base name (like the tricktionary);
// rare grinds go to the end of the list.
const byBaseName = (a, b) =>
  a.name
    .replace(/^(BS|FS)/, "ZZ")
    .localeCompare(b.name.replace(/^(BS|FS)/, "ZZ"));
const grindList = [
  ...GRINDS.filter((g) => !isRare(g.name)).sort(byBaseName),
  ...GRINDS.filter((g) => isRare(g.name)).sort(byBaseName),
];
</script>

<template>
  <AppModal title="Settings" @close="$emit('close')">
    <h3 class="section-title">Game</h3>
    <div class="options">
      <label class="option">
        <span class="switch">
          <input type="checkbox" v-model="settings.introMusic" />
          <span class="track" />
        </span>
        <span>Play intro music</span>
      </label>
      <label class="option option--inline">
        <span>Reel speed</span>
        <select class="select" v-model="settings.reelSpeed">
          <option v-for="speed in REEL_SPEEDS" :key="speed.id" :value="speed.id">
            {{ speed.name }}
          </option>
        </select>
      </label>
    </div>

    <h3 class="section-title">Difficulty preset</h3>
    <div class="levels">
      <button
        v-for="level in LEVELS"
        :key="level.id"
        class="btn"
        :class="{ 'btn--primary': settings.level === level.id }"
        @click="applyLevel(level.id)"
      >
        {{ level.name }}
      </button>
    </div>
    <p class="hint">Changing a toggle below switches the preset to Custom.</p>

    <template v-for="group in TRICK_GROUPS" :key="group.title">
      <h3 class="section-title">{{ group.title }}</h3>
      <div class="options">
        <label v-for="[key, text] in group.options" :key="key" class="option">
          <span class="switch">
            <input
              type="checkbox"
              :checked="settings.tricks[key]"
              @change="setTrick(key, $event.target.checked)"
            />
            <span class="track" />
          </span>
          <span>{{ text }}</span>
        </label>
      </div>
    </template>

    <h3 class="section-title">Grinds</h3>
    <p class="hint hint--top">
      Only grinds switched on spin up &mdash; switch the rest off to train
      specific grinds. With all of them off, everything spins again. The
      difficulty presets pick a selection too (rare grinds are at the end).
    </p>
    <div class="grind-bulk">
      <button class="btn btn--ghost" @click="setAllGrinds(true)">All on</button>
      <button class="btn btn--ghost" @click="setAllGrinds(false)">All off</button>
    </div>
    <div class="options">
      <label v-for="grind in grindList" :key="grind.name" class="option">
        <span class="switch">
          <input
            type="checkbox"
            :checked="grindEnabled(grind.name)"
            @change="setGrind(grind.name, $event.target.checked)"
          />
          <span class="track" />
        </span>
        <span>{{ grind.name }}</span>
      </label>
    </div>

    <p class="hint">Settings are saved on this device and apply to the next game.</p>

    <div class="actions">
      <button class="btn btn--primary" @click="$emit('close')">Done</button>
      <button class="btn btn--ghost" @click="reset()">Reset all</button>
    </div>
  </AppModal>
</template>

<style scoped>
.section-title {
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--red-hi);
  margin: 18px 0 10px;
}

.section-title:first-child {
  margin-top: 0;
}

.levels {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* switch lists: one column on phones, two when space allows */
.options {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
}

@media (min-width: 560px) {
  .options {
    grid-template-columns: 1fr 1fr;
  }
}

.option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 0;
  cursor: pointer;
  font-size: 17px;
}

.option--inline {
  justify-content: space-between;
  max-width: 340px;
}

.grind-bulk {
  display: flex;
  gap: 8px;
  margin-bottom: 6px;
}

.grind-bulk .btn {
  font-size: 12px;
  padding: 7px 14px;
}

.number-input {
  width: 78px;
}

.hint {
  color: var(--text-dim);
  font-size: 14px;
  margin-top: 10px;
}

.hint--top {
  margin: 0 0 10px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}
</style>
