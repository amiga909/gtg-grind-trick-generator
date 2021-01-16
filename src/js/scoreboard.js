import { SLOT_STATES } from "./slotmachine";

export class Scoreboard {
  constructor(config) {
    this.tokensTotal = config; // config.spins;config.locks;config.removes;

    this.points = 0;
    this.spins = this.tokensTotal.spins;
    this.locks = this.tokensTotal.locks;
    this.removes = this.tokensTotal.removes;

    this.$points = $("#sb-total-points");
    this.$spinsRemaining = $("#sb-spins-remaining");
    this.$locksRemaining = $("#sb-locks-remaining");
    this.$removesRemaining = $("#sb-removes-remaining");

    this.$spinsTotal = $("#sb-spins-total");
    this.$locksTotal = $("#sb-locks-total");
    this.$removesTotal = $("#sb-removes-total");

    this.startGame();
  }

  startGame() {
    this.points = 0;
    this.spinsRemaining = this.tokensTotal.spins;
    this.locksRemaining = this.tokensTotal.locks;
    this.removesRemaining = this.tokensTotal.removes;
    this.render();
  }

  render() {
    this.$points.html(this.points);
    this.$spinsRemaining.html(this.spins);
    this.$locksRemaining.html(this.locks);
    this.$removesRemaining.html(this.removes);
    this.$spinsTotal.html(this.tokensTotal.spins);
    this.$locksTotal.html(this.tokensTotal.locks);
    this.$removesTotal.html(this.tokensTotal.removes);
  }

  set(stateCount = {}) {
    if (stateCount[SLOT_STATES.disabled]) {
      this.removes =
        this.tokensTotal.removes - stateCount[SLOT_STATES.disabled];
    }
    if (stateCount[SLOT_STATES.locked]) {
      this.locks = this.tokensTotal.locks - stateCount[SLOT_STATES.locked];
    }
    this.render();
  }
  useSpin() {
    this.spins = this.spins - 1;
    this.render();
  }

  setPoints(p) {
    this.points = this.points + p;
    this.render();
  }

  isLastSpin() {
    return this.spins === 0 ? true : false;
  }

  isValidTokensCount() {
    return this.removes >= 0 && this.locks >= 0;
  }
}
