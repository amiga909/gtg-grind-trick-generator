<script setup>
import { ref } from "vue";
import AppIcon from "./AppIcon.vue";
import CollectionPanel from "./CollectionPanel.vue";
import {
  CUSTOM_LEVEL,
  LEVELS,
  MAX_PLAYERS,
  MAX_ROUNDS,
  MIN_PLAYERS,
  MIN_ROUNDS,
  useSettings,
} from "../composables/useSettings.js";
import { useGame } from "../composables/useGame.js";
import { BADGES, useCollection } from "../composables/useCollection.js";

const emit = defineEmits(["open-settings"]);

const { settings, applyLevel } = useSettings();
const { startGame } = useGame();
const { uniqueTrickCount, landedGrindCount, totalGrinds, earnedBadges } =
  useCollection();

const MODES = [
  {
    id: "solo",
    name: "Solo",
    tagline: "Endless session — build your trick collection",
  },
  {
    id: "group",
    name: "Group",
    tagline: "S.K.A.T.E with your crew — bail and collect A·I·G·H·T",
  },
];

const step = ref("mode"); // 'mode' | 'setup'
const showCollection = ref(false);

function chooseMode(modeId) {
  settings.mode = modeId;
  step.value = "setup";
}

function selectLevel(levelId) {
  applyLevel(levelId);
  if (levelId === CUSTOM_LEVEL) {
    emit("open-settings");
  }
}

function stepRounds(delta) {
  settings.rounds = Math.min(
    MAX_ROUNDS,
    Math.max(MIN_ROUNDS, settings.rounds + delta)
  );
}

function addPlayer() {
  if (settings.players.length < MAX_PLAYERS) {
    settings.players.push(`Player ${settings.players.length + 1}`);
  }
}

function removePlayer(index) {
  if (settings.players.length > MIN_PLAYERS) {
    settings.players.splice(index, 1);
  }
}
</script>

<template>
  <!-- step 1: pick a mode, nothing else -->
  <section v-if="step === 'mode'" class="start rise-in">
    <img
      class="start__logo"
      src="/img/gtg-logo.svg"
      alt="AIGHT — Aggressive Inline Grind Hammer Trickgame"
    />
    <p class="start__tagline">
      Spin the slot machine &middot; land the trick &middot; stack the points
    </p>

    <div class="start__modes">
      <button
        v-for="mode in MODES"
        :key="mode.id"
        class="mode-card panel"
        @click="chooseMode(mode.id)"
      >
        <span class="mode-card__name">{{ mode.name }}</span>
        <span class="mode-card__tagline">{{ mode.tagline }}</span>
        <span class="mode-card__go"><AppIcon name="play" :size="16" /></span>
      </button>
    </div>
  </section>

  <!-- step 2: difficulty + mode specifics + start -->
  <section v-else class="start setup rise-in">
    <div class="setup__top">
      <button class="btn btn--ghost setup__back" @click="step = 'mode'">
        &lsaquo; Back
      </button>
    </div>
    <h2 class="setup__title sticker-text">
      {{ settings.mode === "solo" ? "Solo Session" : "Group Game" }}
    </h2>

    <div class="setup__section">
      <span class="setup__label">Difficulty</span>
      <div class="pills">
        <button
          v-for="level in LEVELS"
          :key="level.id"
          class="pill"
          :class="{ 'pill--active': settings.level === level.id }"
          :title="level.tagline"
          @click="selectLevel(level.id)"
        >
          {{ level.name }}
        </button>
      </div>
      <p class="setup__hint">
        {{ LEVELS.find((l) => l.id === settings.level)?.tagline }}
      </p>
    </div>

    <div v-if="settings.mode === 'solo'" class="setup__section">
      <button class="collection-strip panel" @click="showCollection = true">
        <AppIcon name="trophy" :size="16" />
        <span>
          {{ uniqueTrickCount }} tricks &middot; {{ landedGrindCount }}/{{
            totalGrinds
          }}
          grinds &middot; {{ earnedBadges.length }}/{{ BADGES.length }} badges
        </span>
        <span class="collection-strip__arrow">&rsaquo;</span>
      </button>
      <p class="setup__hint">
        No game over — spin as long as you like. The reels favor tricks you
        haven't landed yet.
      </p>
    </div>

    <template v-else>
      <div class="setup__section">
        <span class="setup__label">Players</span>
        <div class="players">
          <div
            v-for="(name, i) in settings.players"
            :key="i"
            class="player-row"
          >
            <input
              v-model="settings.players[i]"
              class="player-input"
              type="text"
              maxlength="14"
              :placeholder="`Player ${i + 1}`"
            />
            <button
              class="stepper__btn"
              :disabled="settings.players.length <= MIN_PLAYERS"
              :aria-label="`Remove player ${i + 1}`"
              @click="removePlayer(i)"
            >
              &times;
            </button>
          </div>
          <button
            class="btn btn--ghost players__add"
            :disabled="settings.players.length >= MAX_PLAYERS"
            @click="addPlayer()"
          >
            + Add player
          </button>
        </div>
      </div>

      <div class="setup__section">
        <div class="spins-row">
          <span class="setup__label">Rounds</span>
          <div class="stepper">
            <button
              class="stepper__btn"
              :disabled="settings.rounds <= MIN_ROUNDS"
              @click="stepRounds(-1)"
            >
              &minus;
            </button>
            <span class="stepper__value">{{ settings.rounds }}</span>
            <button
              class="stepper__btn"
              :disabled="settings.rounds >= MAX_ROUNDS"
              @click="stepRounds(1)"
            >
              +
            </button>
          </div>
        </div>
        <p class="setup__hint">
          Like S.K.A.T.E — everyone attempts the same trick. Bail and you
          collect a letter of A&middot;I&middot;G&middot;H&middot;T; five
          letters and you're out.
        </p>
      </div>
    </template>

    <button class="btn btn--go setup__go" @click="startGame(settings)">
      <AppIcon name="play" :size="20" />
      {{ settings.mode === "solo" ? "Start session" : "Start game" }}
    </button>

    <CollectionPanel v-if="showCollection" @close="showCollection = false" />
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

.start__modes {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 14px;
}

.mode-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 24px 20px;
  text-align: left;
  transition: transform 0.15s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.mode-card:hover {
  transform: translateY(-2px);
  border-color: var(--red);
  box-shadow: var(--glow-red);
}

.mode-card__name {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 24px;
  text-transform: uppercase;
  color: var(--text);
}

.mode-card:hover .mode-card__name {
  color: var(--red);
  text-shadow: var(--glow-red);
}

.mode-card__tagline {
  font-size: 15px;
  color: var(--text-dim);
}

.mode-card__go {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--red-hi);
}

/* ---------- setup step ---------- */

.setup {
  align-items: stretch;
  text-align: left;
  gap: 18px;
}

.setup__top {
  display: flex;
}

.setup__back {
  font-size: 12px;
  padding: 7px 12px;
}

.setup__title {
  font-size: clamp(24px, 6vw, 32px);
  text-transform: uppercase;
  text-align: center;
}

.setup__section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.setup__label {
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.pill {
  flex: 1;
  min-width: 72px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 11px 10px;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  background: var(--panel-strong);
  color: var(--text-dim);
  transition: color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}

.pill:hover {
  color: var(--text);
  border-color: var(--red-hi);
}

.pill--active {
  color: #fff;
  border-color: var(--red);
  background: linear-gradient(135deg, var(--red-hi), var(--red));
  box-shadow: var(--glow-red);
}

.setup__hint {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--text-dim);
}

.collection-strip {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 16px;
  font-size: 15px;
  color: var(--text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.collection-strip:hover {
  border-color: var(--red-hi);
  box-shadow: var(--glow-red-hi);
}

.collection-strip__arrow {
  margin-left: auto;
  font-size: 22px;
  line-height: 1;
  color: var(--red-hi);
}

.players {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.player-row {
  display: flex;
  gap: 8px;
}

.player-input {
  flex: 1;
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
  background: var(--bg-2);
  border: 1px solid var(--line-strong);
  border-radius: 10px;
  padding: 9px 12px;
}

.player-input:focus {
  outline: none;
  border-color: var(--red-hi);
  box-shadow: var(--glow-red-hi);
}

.players__add {
  align-self: flex-start;
  font-size: 12px;
  padding: 8px 14px;
}

.spins-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.stepper {
  display: flex;
  align-items: center;
  gap: 4px;
}

.stepper__btn {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--line-strong);
  background: var(--panel-strong);
  font-size: 20px;
  color: var(--text);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.stepper__btn:hover {
  border-color: var(--red-hi);
  box-shadow: var(--glow-red-hi);
}

.stepper__btn:disabled {
  opacity: 0.35;
  pointer-events: none;
}

.stepper__value {
  min-width: 44px;
  text-align: center;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 20px;
}

.setup__go {
  margin-top: 8px;
  font-size: 18px;
  padding: 16px 34px;
}
</style>
