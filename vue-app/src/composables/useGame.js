import { computed, reactive } from "vue";
import { generateSpin } from "../game/trickGenerator.js";

const BEST_SCORE_KEY = "aight-best-score";

const state = reactive({
  screen: "start", // start | game | gameover
  phase: "idle", // idle | spinning | result
  points: 0,
  spinsUsed: 0,
  spinsTotal: 5,
  spin: null, // current generateSpin() result
  spinId: 0, // increments per spin, drives the reel animation
  tricks: [], // landed tricks: { name, orig, score }
  skipped: [],
  usedGrinds: [],
  bestScore: Number(localStorage.getItem(BEST_SCORE_KEY)) || 0,
  isNewBest: false,
});

export function useGame() {
  const spinsLeft = computed(() => state.spinsTotal - state.spinsUsed);

  const startGame = (settings) => {
    state.points = 0;
    state.spinsUsed = 0;
    state.spinsTotal = Math.max(1, Number(settings.spinsPerGame) || 5);
    state.tricks = [];
    state.skipped = [];
    state.usedGrinds = [];
    state.isNewBest = false;
    state.screen = "game";
    nextSpin(settings);
  };

  const nextSpin = (settings) => {
    state.spinsUsed += 1;
    state.spin = generateSpin(settings.tricks, state.usedGrinds);
    state.usedGrinds.push(
      state.spin.reels.find((r) => r.name === "Grind").winner.name
    );
    state.spinId += 1;
    state.phase = "spinning";
  };

  // Called by the slot machine once every reel has stopped.
  const onReelsSettled = () => {
    state.phase = "result";
  };

  const currentTrick = () => ({
    name: state.spin.name,
    orig: state.spin.orig,
    score: state.spin.score,
  });

  const landTrick = (settings) => {
    state.points += state.spin.score;
    state.tricks.push(currentTrick());
    advance(settings);
  };

  const skipTrick = (settings) => {
    state.skipped.push(currentTrick());
    advance(settings);
  };

  const advance = (settings) => {
    if (state.spinsUsed >= state.spinsTotal) {
      endGame();
    } else {
      nextSpin(settings);
    }
  };

  const endGame = () => {
    if (state.points > state.bestScore) {
      state.bestScore = state.points;
      state.isNewBest = state.points > 0;
      localStorage.setItem(BEST_SCORE_KEY, String(state.bestScore));
    }
    state.screen = "gameover";
    state.phase = "idle";
  };

  const giveUp = () => {
    endGame();
  };

  const goToStart = () => {
    state.screen = "start";
    state.phase = "idle";
    state.spin = null;
  };

  return {
    state,
    spinsLeft,
    startGame,
    onReelsSettled,
    landTrick,
    skipTrick,
    giveUp,
    goToStart,
  };
}
