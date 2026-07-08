<script setup>
import { computed } from "vue";
import AppIcon from "./AppIcon.vue";
import { LETTERS, useGame } from "../composables/useGame.js";
import { useSettings } from "../composables/useSettings.js";

const { state, startGame, goToStart } = useGame();
const { settings } = useSettings();

const standings = computed(() =>
  [...state.players].sort((a, b) => a.letters - b.letters)
);
const winners = computed(() =>
  standings.value.filter((p) => p.letters === standings.value[0]?.letters)
);
const winnerNames = computed(() =>
  winners.value.map((p) => p.name).join(" & ")
);

function lettersOf(player) {
  return LETTERS.slice(0, player.letters).split("").join(" ");
}

const CONFETTI_COLORS = ["#e71a00", "#ff5a43", "#ffffff", "#8c1000"];
const confetti = Array.from({ length: 40 }, (_, i) => ({
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 2.5}s`,
  duration: `${2.6 + Math.random() * 2}s`,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
}));
</script>

<template>
  <section class="gameover rise-in">
    <div class="confetti" aria-hidden="true">
      <i
        v-for="(piece, i) in confetti"
        :key="i"
        :style="{
          left: piece.left,
          animationDelay: piece.delay,
          animationDuration: piece.duration,
          background: piece.color,
        }"
      />
    </div>

    <h2 class="gameover__title sticker-text">Game Over</h2>

    <p class="gameover__winner">
      <AppIcon name="trophy" :size="18" />
      <strong>{{ winnerNames }}</strong>
      {{ winners.length > 1 ? "share the crown!" : "takes the crown!" }}
    </p>

    <div class="gameover__standings panel">
      <table class="data-table">
        <tbody>
          <tr v-for="(player, i) in standings" :key="player.name + i">
            <td class="rank">{{ i + 1 }}.</td>
            <td class="name" :class="{ out: player.letters >= LETTERS.length }">
              {{ player.name }}
            </td>
            <td class="letters">
              <span v-if="player.letters > 0">{{ lettersOf(player) }}</span>
              <span v-else class="clean">clean!</span>
              <span v-if="player.letters >= LETTERS.length" class="out-tag"
                >out</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="gameover__actions">
      <button class="btn btn--go" @click="startGame(settings, 'group')">
        <AppIcon name="play" :size="18" /> Rematch
      </button>
      <button class="btn" @click="goToStart()">Change setup</button>
    </div>
  </section>
</template>

<style scoped>
.gameover {
  position: relative;
  width: min(560px, 100%);
  margin: 0 auto;
  padding: 30px 16px 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.gameover__title {
  font-size: clamp(26px, 7vw, 38px);
  font-weight: 900;
  text-transform: uppercase;
}

.gameover__winner {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  color: var(--text-dim);
}

.gameover__winner strong {
  font-family: var(--font-display);
  font-size: 19px;
  text-transform: uppercase;
  color: var(--red-hi);
  text-shadow: var(--glow-red-hi);
}

.gameover__standings {
  width: 100%;
  margin-top: 12px;
  padding: 8px 16px;
  text-align: left;
}

.rank {
  width: 34px;
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--text-dim);
}

.name {
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
}

.name.out {
  text-decoration: line-through;
  color: var(--text-dim);
}

.letters {
  text-align: right;
  font-family: var(--font-display);
  font-weight: 900;
  letter-spacing: 0.12em;
  color: var(--red);
  text-shadow: var(--glow-red);
}

.letters .clean {
  color: var(--text-dim);
  text-shadow: none;
  font-weight: 600;
  letter-spacing: normal;
}

.out-tag {
  margin-left: 8px;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-dim);
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 2px 8px;
}

.gameover__actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.confetti {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.confetti i {
  position: absolute;
  top: -12px;
  width: 8px;
  height: 14px;
  border-radius: 2px;
  opacity: 0;
  animation-name: confetti-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes confetti-fall {
  0% {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
  100% {
    opacity: 0.15;
    transform: translateY(90vh) rotate(660deg);
  }
}
</style>
