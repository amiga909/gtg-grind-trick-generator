<script setup>
import { computed, ref, watch } from "vue";
import AppIcon from "./AppIcon.vue";
import SlotReel from "./SlotReel.vue";
import TrickExplainPanel from "./TrickExplainPanel.vue";
import TrickListPanel from "./TrickListPanel.vue";
import { useGame } from "../composables/useGame.js";
import { useSettings } from "../composables/useSettings.js";

const REEL_STAGGER_MS = 320;

const { state, landTrick, skipTrick, giveUp, onReelsSettled } = useGame();
const { settings, reelSpeedMs } = useSettings();

const openPanel = ref(null); // 'explain' | 'tricklist' | null
const stoppedReels = ref(0);

const visibleReels = computed(() =>
  state.spin ? state.spin.reels.filter((reel) => !reel.hidden) : []
);
const isResult = computed(() => state.phase === "result");
const isLastSpin = computed(() => state.spinsUsed >= state.spinsTotal);

watch(
  () => state.spinId,
  () => {
    stoppedReels.value = 0;
    openPanel.value = null;
  }
);

function onReelStopped() {
  stoppedReels.value += 1;
  if (stoppedReels.value >= visibleReels.value.length) {
    onReelsSettled();
  }
}
</script>

<template>
  <section class="game">
    <div class="machine panel">
      <div class="machine__lights" aria-hidden="true">
        <span v-for="i in 14" :key="i" :style="{ '--i': i }" />
      </div>

      <div class="machine__reels">
        <SlotReel
          v-for="(reel, index) in visibleReels"
          :key="reel.name"
          :label="reel.label"
          :pool="reel.pool"
          :winner="reel.winner"
          :spin-id="state.spinId"
          :duration="reelSpeedMs() + index * REEL_STAGGER_MS"
          @stopped="onReelStopped"
        />
      </div>
    </div>

    <transition name="result">
      <div v-if="isResult" class="result">
        <div class="result__name sticker-text">{{ state.spin.name }}</div>
        <div class="result__score">
          <AppIcon name="zap" :size="18" />
          {{ state.spin.score }} point{{ state.spin.score === 1 ? "" : "s" }}
          <span v-if="isLastSpin" class="result__last">— last spin!</span>
        </div>

        <div class="result__actions">
          <button class="btn" @click="openPanel = 'explain'">
            <AppIcon name="question" :size="18" /> Explain
          </button>
          <button class="btn" @click="skipTrick(settings)">
            <AppIcon name="forward" :size="18" /> Skip
          </button>
          <button class="btn btn--go" @click="landTrick(settings)">
            <AppIcon name="check" :size="18" /> Aight! +{{ state.spin.score }}
          </button>
        </div>
        <div class="result__actions result__actions--secondary">
          <button class="btn btn--ghost" @click="giveUp()">
            <AppIcon name="flag" :size="16" /> Give up
          </button>
          <button
            class="btn btn--ghost"
            :disabled="state.tricks.length + state.skipped.length === 0"
            @click="openPanel = 'tricklist'"
          >
            <AppIcon name="list" :size="16" /> Trick list ({{ state.tricks.length }})
          </button>
        </div>
      </div>
    </transition>

    <TrickExplainPanel
      v-if="openPanel === 'explain'"
      :trick="state.spin"
      @close="openPanel = null"
    />
    <TrickListPanel v-if="openPanel === 'tricklist'" @close="openPanel = null" />
  </section>
</template>

<style scoped>
.game {
  width: min(680px, 100%);
  margin: 0 auto;
  padding: 18px 16px 40px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.machine {
  position: relative;
  padding: 26px 18px 20px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
    linear-gradient(180deg, var(--bg-2), var(--bg-1));
  box-shadow:
    0 18px 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

/* blinking marquee lights along the top edge */
.machine__lights {
  position: absolute;
  top: 9px;
  left: 18px;
  right: 18px;
  display: flex;
  justify-content: space-between;
}

.machine__lights span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: var(--glow-red);
  animation: marquee 1.4s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}

.machine__lights span:nth-child(even) {
  background: #fff;
  box-shadow: var(--glow-white);
}

@keyframes marquee {
  0%,
  100% {
    opacity: 0.25;
  }
  50% {
    opacity: 1;
  }
}

.machine__reels {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}

.result {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.result__name {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(22px, 6vw, 34px);
  line-height: 1.25;
  text-transform: uppercase;
}

.result__score {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: var(--font-display);
  font-size: 15px;
  color: var(--text);
  text-shadow: var(--glow-white);
}

.result__last {
  color: var(--red-hi);
}

.result__actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.result__actions--secondary .btn {
  font-size: 12px;
  padding: 8px 14px;
  color: var(--text-dim);
}

.result-enter-active {
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
}

.result-enter-from {
  opacity: 0;
  transform: translateY(18px) scale(0.96);
}

.result-leave-active {
  transition: opacity 0.15s ease;
}

.result-leave-to {
  opacity: 0;
}
</style>
