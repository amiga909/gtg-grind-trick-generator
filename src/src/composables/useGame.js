import { computed, reactive } from "vue";
import { generateSpin } from "../game/trickGenerator.js";
import { useCollection } from "./useCollection.js";

// Group mode is S.K.A.T.E with the letters A.I.G.H.T: bail a trick and
// you collect the next letter; five letters and you are out.
export const LETTERS = "AIGHT";

// The player who starts a turn may swap the trick this many times
// before attempting it; everyone after them plays the locked-in trick.
export const REROLLS_PER_TURN = 3;

// How many recent grinds solo mode avoids repeating (a sliding window,
// since an endless session cycles through the pool many times).
const SOLO_REPEAT_WINDOW = 15;

const state = reactive({
  screen: "start", // start | game | gameover
  phase: "idle", // idle | spinning | result
  mode: "group", // solo | group
  points: 0, // solo session score
  spinsUsed: 0,
  spinsTotal: 5,
  spin: null, // current generateSpin() result
  spinId: 0, // increments per spin, drives the reel animation
  tricks: [], // landed tricks: { name, orig, score } (solo)
  skipped: [],
  usedGrinds: [],
  newBadges: [], // badges earned by the last landed trick (solo)

  // group (S.K.A.T.E) state
  players: [], // { name, letters }
  round: 0,
  roundsTotal: 0,
  turnOrder: [], // player indices attempting the current trick, in order
  turnPos: 0, // position within turnOrder
  rerollsLeft: 0, // trick swaps the turn's starting player has left
});

const collection = useCollection();

const activeIndices = () =>
  state.players
    .map((player, index) => ({ player, index }))
    .filter(({ player }) => player.letters < LETTERS.length)
    .map(({ index }) => index);

export function useGame() {
  const spinsLeft = computed(() => state.spinsTotal - state.spinsUsed);
  const isSolo = computed(() => state.mode === "solo");
  const currentPlayer = computed(() =>
    state.mode === "group" && state.turnOrder.length > state.turnPos
      ? state.players[state.turnOrder[state.turnPos]]
      : null
  );
  const isLastRound = computed(
    () => state.round >= state.roundsTotal || activeIndices().length <= 1
  );

  const startGame = (settings, mode = settings.mode || "group") => {
    state.mode = mode;
    state.points = 0;
    state.spinsUsed = 0;
    state.tricks = [];
    state.skipped = [];
    state.usedGrinds = [];
    state.newBadges = [];
    state.screen = "game";

    if (mode === "solo") {
      state.spinsTotal = Infinity;
      nextSpin(settings);
      return;
    }

    state.players = settings.players.map((name, i) => ({
      name: String(name).trim() || `Player ${i + 1}`,
      letters: 0,
    }));
    state.roundsTotal = Math.max(1, Number(settings.rounds) || 5);
    state.round = 0;
    beginRound(settings);
  };

  // One round = one trick that every player still in the game attempts.
  // The starting player rotates each round and gets fresh rerolls.
  const beginRound = (settings) => {
    state.round += 1;
    const active = activeIndices();
    const start = (state.round - 1) % active.length;
    state.turnOrder = [...active.slice(start), ...active.slice(0, start)];
    state.turnPos = 0;
    state.rerollsLeft = REROLLS_PER_TURN;
    nextSpin(settings);
  };

  /**
   * Group: the starting player swaps the trick for a fresh spin. Only
   * possible before anyone attempted it, and at most 3 times per turn.
   */
  const rerollTrick = (settings) => {
    if (state.mode !== "group" || state.turnPos !== 0 || state.rerollsLeft <= 0) {
      return;
    }
    state.rerollsLeft -= 1;
    nextSpin(settings);
  };

  const nextSpin = (settings) => {
    state.spinsUsed += 1;
    // Solo trains you: never-landed and often-skipped grinds come up more.
    const bias = state.mode === "solo" ? collection.grindBias() : null;
    state.spin = generateSpin(
      settings.tricks,
      state.usedGrinds,
      bias,
      settings.grinds
    );
    state.usedGrinds.push(
      state.spin.reels.find((r) => r.name === "Grind").winner.name
    );
    if (state.mode === "solo" && state.usedGrinds.length > SOLO_REPEAT_WINDOW) {
      state.usedGrinds.shift();
    }
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

  /** Group: resolve the current player's attempt at the round's trick. */
  const attempt = (landed, settings) => {
    const player = state.players[state.turnOrder[state.turnPos]];
    if (!landed) {
      player.letters += 1;
    }
    if (state.turnPos + 1 < state.turnOrder.length) {
      state.turnPos += 1; // same trick, next player
      return;
    }
    if (state.round >= state.roundsTotal || activeIndices().length <= 1) {
      endGame();
    } else {
      beginRound(settings);
    }
  };

  const landTrick = (settings) => {
    state.points += state.spin.score;
    state.tricks.push(currentTrick());
    state.newBadges =
      state.mode === "solo" ? collection.recordLand(state.spin) : [];
    nextSpin(settings);
  };

  const skipTrick = (settings) => {
    state.skipped.push(currentTrick());
    if (state.mode === "solo") {
      collection.recordSkip(state.spin);
    }
    nextSpin(settings);
  };

  const endGame = () => {
    state.screen = "gameover";
    state.phase = "idle";
  };

  // Solo sessions have no game over: ending one just returns to start.
  const giveUp = () => {
    if (state.mode === "solo") {
      goToStart();
    } else {
      endGame();
    }
  };

  const goToStart = () => {
    state.screen = "start";
    state.phase = "idle";
    state.spin = null;
    state.newBadges = [];
  };

  return {
    state,
    spinsLeft,
    isSolo,
    currentPlayer,
    isLastRound,
    startGame,
    onReelsSettled,
    attempt,
    rerollTrick,
    landTrick,
    skipTrick,
    giveUp,
    goToStart,
  };
}
