<script setup>
import AppModal from "./AppModal.vue";
import {
  LEVELS,
  CUSTOM_LEVEL,
  REEL_SPEEDS,
  useSettings,
} from "../composables/useSettings.js";

defineEmits(["close"]);

const { settings, applyLevel, setTrick, reset } = useSettings();

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
  {
    title: "Special",
    options: [
      [
        "rareGrinds",
        "Rare grinds (Hot Dog, Citric Acid, Sidewalk, Wheelbarrow, Darkslide, Training Wheel, Byn Soul, Closed/Open Book)",
      ],
    ],
  },
];

</script>

<template>
  <AppModal title="Settings" @close="$emit('close')">
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
    </template>

    <h3 class="section-title">Game</h3>
    <label class="option option--inline">
      <span>Reel speed</span>
      <select class="select" v-model="settings.reelSpeed">
        <option v-for="speed in REEL_SPEEDS" :key="speed.id" :value="speed.id">
          {{ speed.name }}
        </option>
      </select>
    </label>

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

.number-input {
  width: 78px;
}

.hint {
  color: var(--text-dim);
  font-size: 14px;
  margin-top: 10px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}
</style>
