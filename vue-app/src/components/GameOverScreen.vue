<script setup>
import { onMounted, ref } from "vue";
import AppIcon from "./AppIcon.vue";
import { useGame } from "../composables/useGame.js";
import { useSettings } from "../composables/useSettings.js";

const HYPE_TEXTS = [
  "Congrats, you got",
  "Sick, you got",
  "You laced it, you got",
  "Bonkers, that's",
  "Call your mum, you got",
  "Aight! You got",
  "Lush! You have",
  "Gnarly, you have",
  "Banger! You got",
  "Full send! That's",
  "You got the flow,",
  "Stoked! You got",
  "Dope! You got",
  "Epic sesh! You got",
  "You killed it and got",
  "Boss mode, you got",
  "Massive flex!",
  "Sweet action! You got",
];

const { state, startGame, goToStart } = useGame();
const { settings } = useSettings();

const hype =
  state.points === 0
    ? "At least it can not get worse..."
    : HYPE_TEXTS[Math.floor(Math.random() * HYPE_TEXTS.length)];

// Count the score up from 0 for the arcade feel.
const displayedPoints = ref(0);
onMounted(() => {
  const target = state.points;
  if (target === 0) {
    return;
  }
  const stepMs = Math.max(Math.floor(600 / target), 20);
  const timer = setInterval(() => {
    displayedPoints.value += 1;
    if (displayedPoints.value >= target) {
      clearInterval(timer);
    }
  }, stepMs);
});

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
    <div v-if="state.points > 0" class="confetti" aria-hidden="true">
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
    <p class="gameover__hype">{{ hype }}</p>
    <div class="gameover__points">{{ displayedPoints }}</div>
    <p class="gameover__points-caption">points</p>

    <p v-if="state.isNewBest" class="gameover__best">
      <AppIcon name="trophy" :size="17" /> New best score!
    </p>
    <p v-else-if="state.bestScore > 0" class="gameover__best gameover__best--old">
      Best: {{ state.bestScore }}
    </p>

    <div class="gameover__tricks panel" v-if="state.tricks.length">
      <h3>Landed tricks</h3>
      <table class="data-table">
        <tbody>
          <tr v-for="(trick, i) in state.tricks" :key="i">
            <td class="pts">+{{ trick.score }}</td>
            <td>{{ trick.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="gameover__tricks panel" v-if="state.skipped.length">
      <h3>Skipped</h3>
      <table class="data-table">
        <tbody>
          <tr v-for="(trick, i) in state.skipped" :key="i">
            <td class="pts pts--skipped">{{ trick.score }}</td>
            <td>{{ trick.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="gameover__actions">
      <button class="btn btn--go" @click="startGame(settings)">
        <AppIcon name="play" :size="18" /> Play again
      </button>
      <button class="btn" @click="goToStart()">Change level</button>
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
  gap: 8px;
  text-align: center;
}

.gameover__title {
  font-size: clamp(26px, 7vw, 38px);
  font-weight: 900;
  text-transform: uppercase;
}

.gameover__hype {
  color: var(--text-dim);
  font-size: 18px;
}

.gameover__points {
  font-family: var(--font-display);
  font-size: 74px;
  font-weight: 900;
  line-height: 1;
  color: var(--red-hi);
  text-shadow: var(--glow-red-hi);
}

.gameover__points-caption {
  font-family: var(--font-display);
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.gameover__best {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  color: var(--red-hi);
  font-weight: 600;
}

.gameover__best--old {
  color: var(--text-dim);
}

.gameover__tricks {
  width: 100%;
  margin-top: 14px;
  padding: 14px 16px;
  text-align: left;
}

.gameover__tricks h3 {
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--red-hi);
  margin-bottom: 6px;
}

.pts {
  width: 46px;
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--red-hi);
}

.pts--skipped {
  color: var(--text-dim);
  text-decoration: line-through;
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
