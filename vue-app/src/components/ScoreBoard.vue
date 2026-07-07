<script setup>
import { ref, watch } from "vue";
import { useGame } from "../composables/useGame.js";
import { useSettings } from "../composables/useSettings.js";

const { state } = useGame();
const { levelName } = useSettings();

const pointsPop = ref(false);

watch(
  () => state.points,
  () => {
    pointsPop.value = false;
    requestAnimationFrame(() => {
      pointsPop.value = true;
    });
  }
);
</script>

<template>
  <div class="scoreboard panel">
    <div class="scoreboard__block">
      <span class="scoreboard__caption">Score</span>
      <span class="scoreboard__value" :class="{ pop: pointsPop }">{{ state.points }}</span>
    </div>
    <div class="scoreboard__divider" />
    <div class="scoreboard__block">
      <span class="scoreboard__caption">Spin {{ state.spinsUsed }}/{{ state.spinsTotal }}</span>
      <span class="scoreboard__pips">
        <i
          v-for="i in Math.min(state.spinsTotal, 10)"
          :key="i"
          :class="{ used: i <= state.spinsUsed }"
        />
      </span>
    </div>
    <div class="scoreboard__divider" />
    <div class="scoreboard__block">
      <span class="scoreboard__caption">Level</span>
      <span class="scoreboard__level">{{ levelName() }}</span>
    </div>
  </div>
</template>

<style scoped>
.scoreboard {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 8px 20px;
}

.scoreboard__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  min-width: 64px;
}

.scoreboard__caption {
  font-family: var(--font-display);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.scoreboard__value {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 900;
  color: var(--text);
  text-shadow: var(--glow-white);
}

.scoreboard__value.pop {
  animation: pop 0.6s ease;
}

.scoreboard__pips {
  display: flex;
  gap: 5px;
  padding: 8px 0;
}

.scoreboard__pips i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(255, 90, 67, 0.9);
  box-shadow: var(--glow-red-hi);
}

.scoreboard__pips i.used {
  background: rgba(255, 255, 255, 0.14);
  box-shadow: none;
}

.scoreboard__level {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 700;
  color: var(--red-hi);
  text-shadow: var(--glow-red);
  padding-top: 4px;
}

.scoreboard__divider {
  width: 1px;
  height: 34px;
  background: var(--line);
}
</style>
