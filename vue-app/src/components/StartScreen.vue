<script setup>
import AppIcon from "./AppIcon.vue";
import { CUSTOM_LEVEL, LEVELS, useSettings } from "../composables/useSettings.js";
import { useGame } from "../composables/useGame.js";

const emit = defineEmits(["open-settings"]);

const { settings, applyLevel } = useSettings();
const { state, startGame } = useGame();

function selectLevel(levelId) {
  applyLevel(levelId);
  if (levelId === CUSTOM_LEVEL) {
    emit("open-settings");
  }
}
</script>

<template>
  <section class="start rise-in">
    <img
      class="start__logo"
      src="/img/gtg-logo.svg"
      alt="AIGHT — Aggressive Inline Grind Hammer Trickgame"
    />
    <p class="start__tagline">
      Spin the slot machine &middot; land the trick &middot; stack the points
    </p>

    <div class="start__levels">
      <button
        v-for="level in LEVELS"
        :key="level.id"
        class="level-card panel"
        :class="{ 'level-card--active': settings.level === level.id }"
        @click="selectLevel(level.id)"
      >
        <span class="level-card__name">{{ level.name }}</span>
        <span class="level-card__tagline">{{ level.tagline }}</span>
      </button>
    </div>

    <button class="btn btn--go start__go" @click="startGame(settings)">
      <AppIcon name="play" :size="20" /> Start game
    </button>

    <p v-if="state.bestScore > 0" class="start__best">
      <AppIcon name="trophy" :size="15" /> Best score: {{ state.bestScore }}
    </p>
  </section>
</template>

<style scoped>
.start {
  width: min(560px, 100%);
  margin: 0 auto;
  padding: 34px 16px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
}

/* full-width banner like the original start screen */
.start__logo {
  width: min(500px, 95%);
  padding-bottom: 16px;
  border-bottom: 1px solid #fff;
  filter: drop-shadow(0 8px 34px rgba(231, 26, 0, 0.35));
}

.start__tagline {
  color: var(--text-dim);
  font-size: 17px;
}

.start__levels {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  margin-top: 10px;
}

.level-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 14px;
  text-align: left;
  transition: transform 0.15s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.level-card:hover {
  transform: translateY(-2px);
  border-color: var(--line-strong);
}

.level-card--active {
  border-color: var(--red);
  box-shadow: var(--glow-red);
}

.level-card__name {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 17px;
  text-transform: uppercase;
  color: var(--text);
}

.level-card--active .level-card__name {
  color: var(--red);
  text-shadow: var(--glow-red);
}

.level-card__tagline {
  font-size: 14px;
  color: var(--text-dim);
}

.start__go {
  margin-top: 14px;
  font-size: 18px;
  padding: 16px 34px;
}

.start__best {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--red-hi);
  font-size: 15px;
}
</style>
