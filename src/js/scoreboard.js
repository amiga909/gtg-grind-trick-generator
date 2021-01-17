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
    //this.$points.html(this.points);
    this.$spinsRemaining.html(this.spins);
    this.$locksRemaining.html(this.locks);
    if (this.locks < 0) {
      this.$locksRemaining.addClass("token-in-minus");
    } else {
      this.$locksRemaining.removeClass("token-in-minus");
    }
    this.$removesRemaining.html(this.removes);
    if (this.removes < 0) {
      this.$removesRemaining.addClass("token-in-minus");
    } else {
      this.$removesRemaining.removeClass("token-in-minus");
    }
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
    this.animateScore(this.points, this.points + p);
    this.points = this.points + p;
    this.render();
  }

  isLastSpin() {
    return this.spins === 0 ? true : false;
  }

  isValidTokensCount() {
    return this.removes >= 0 && this.locks >= 0;
  }

  animateScore(start, end, duration = 250) {
    // animateValue( 100, 25, 5000);
    if (start === end) {
      return;
    }
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {
      current += increment;
      this.$points.html(current);
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
    this.$points.html(this.points);
  }
}
