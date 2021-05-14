import "jquery-slotmachine/dist/jquery.slotmachine.min.css";
import "jquery-slotmachine/dist/slotmachine.min";
import "jquery-slotmachine/dist/jquery.slotmachine.min";

import { Trickdata } from "./trickdata.js";
let CONFIG = null;

export const SLOT_STATES = {
  enabled: "enabled",
  disabled: "disabled",
  locked: "locked",
  unavailable: "unavailable",
};
const SLOT_MACHINE_NO_OF_SPINS = 1;

export class SlotMachine {
  constructor(slotSpeed, includedTricks, hasNoApproachSlot = false) {
    this.includedTricks = includedTricks;
    this.hasNoApproachSlot = hasNoApproachSlot;
    this.slotSpeed = slotSpeed;
    this.$slots = $(".bog-slot");
    this.$approaches = $("#approaches");
    this.$spinsToGrind = $("#spinsToGrind");
    this.$grinds = $("#grinds");
    this.$grindVariations = $("#grindVariations");
    this.$spinsOffGrind = $("#spinsOffGrind");
    this.grindsInTricklist = [];
    this.trickdata = new Trickdata();
    CONFIG = this.trickdata.get();

    this.slots = [];

    this.initSlots();
    if (this.hasNoApproachSlot) {
      $(".bog-slot-1").hide();
    } else {
      $(".bog-slot-1").show();
    }
  }

  initSlots() {
    this.slots = [
      {
        name: "Grind",
        next: 1,
        machine: null,
        dom: this.$grinds,
        data: CONFIG.GRINDS_FOR_SLOTS,
        state: SLOT_STATES.enabled,
        winner: null,
      },
      {
        name: "GrindVariation",
        next: this.hasNoApproachSlot ? 3 : 2,
        machine: null,
        dom: this.$grindVariations,
        data: null,
        state: SLOT_STATES.enabled,
        winner: null,
      },
      {
        name: "Approach",
        next: 3,
        machine: null,
        dom: this.$approaches,
        data: CONFIG.APPROACHES,
        state: SLOT_STATES.enabled,
        winner: null,
      },
      {
        name: "SpinTo",
        next: 4,
        machine: null,
        dom: this.$spinsToGrind,
        data: CONFIG.SPINS_TO_GRIND,
        state: SLOT_STATES.enabled,
        winner: null,
      },
      {
        name: "SpinOff",
        machine: null,
        dom: this.$spinsOffGrind,
        data: CONFIG.SPINS_OFF_GRIND,
        state: SLOT_STATES.enabled,
        winner: null,
      },
    ];
    this.setSlotStates();
  }
  setSlotStates() {
    this.slots.forEach((slot) => {
      this.setSlotState(slot.name, slot.state, slot.dom.closest(".bog-slot"));
    });
  }
  countSlotStates() {
    const states = {};
    this.slots.forEach((slot) => {
      if (states[slot.state]) {
        states[slot.state] = states[slot.state] + 1;
      } else {
        states[slot.state] = 1;
      }
    });
    return states;
  }
  onSpinStart() {
    this.slots.forEach((slot) => {
      if (slot.state === SLOT_STATES.disabled) {
        // reset disabled before spin
        // this.setSlotState(slot.name, SLOT_STATES.enabled, slot.dom.closest(".bog-slot"));
      }
      if (slot.state !== SLOT_STATES.locked) {
        slot.dom.closest(".bog-slot-header").removeClass("bog-slot-visible");
        this.resetScore(slot.dom);
      }
    });
  }

  run() {
    this.onSpinStart();

    return new Promise((resolve, reject) => {
      const nextId = this.getFirstSlotIndex();
      this.startSlot(nextId, resolve);
    });
  }

  onClickSlot($slot, callbacks) {
    const name = $slot.data("name");
    const index = this.getSlotIndexByName(name);
    const slot = this.slots[index];

    const isClickable = this.slots[index].state !== SLOT_STATES.unavailable;
    if (isClickable) {
      this.toggleSlotState(name, $slot, callbacks);
      callbacks.on.afterSlotChange.call(callbacks.scope);
    }
  }

  getFirstSlotIndex() {
    let grindSlot = this.slots[0];
    if (grindSlot.state === SLOT_STATES.locked) {
      return this.getNextSlotIndex(grindSlot);
    } else {
      return 0;
    }
  }

  getNextSlotIndex(currentSlot) {
    let nextSlotId = -1;

    if (currentSlot && currentSlot.next) {
      const nextSlot = this.slots[currentSlot.next];
      const isSkipped = [SLOT_STATES.unavailable, SLOT_STATES.locked].includes(
        nextSlot.state
      );
      if (!isSkipped) {
        nextSlotId = currentSlot.next;
      } else {
        nextSlotId = this.getNextSlotIndex(nextSlot);
      }
    }

    return nextSlotId;
  }

  getNextState(state, slotName) {
    let newState = "";

    if (state === SLOT_STATES.unavailable) {
      console.error("unavailable slot state", slotName, state);
    } else if (state === SLOT_STATES.enabled) {
      newState = SLOT_STATES.disabled;
    } else if (state === SLOT_STATES.disabled) {
      newState = SLOT_STATES.enabled;
    } else if (state === SLOT_STATES.locked) {
      newState = SLOT_STATES.enabled;
    } else {
      console.error("invalid slot state", slotName, state);
    }

    // disable grind reel lock
    if (slotName === "Grind") {
      newState = SLOT_STATES.enabled;
    }

    return newState;
  }

  isValidState() {
    let isValid = true;
    const disabledSlots = this.slots.filter((s) => {
      return s.state === SLOT_STATES.disabled;
    });
    const lockedSlots = this.slots.filter((s) => {
      return s.state === SLOT_STATES.locked;
    });
    const enabledSlots = this.slots.filter((s) => {
      return s.state === SLOT_STATES.enabled;
    });
    const unavailableSlots = this.slots.filter((s) => {
      return s.state === SLOT_STATES.unavailable;
    });
    if (
      disabledSlots.length + lockedSlots.length + unavailableSlots.length ===
      5
    ) {
      //alert("At least one reel must be active and unlocked");
      return (isValid = false);
    }
    return isValid;
  }

  toggleSlotState(slotName, $slot, callbacks) {
    const index = this.getSlotIndexByName(slotName);
    const state = this.slots[index].state;
    let newState = this.getNextState(state, slotName);

    this.setSlotState(slotName, newState, $slot);
    if (
      (state === SLOT_STATES.enabled && newState === SLOT_STATES.disabled) ||
      (state === SLOT_STATES.disabled && newState === SLOT_STATES.enabled)
    ) {
      callbacks.on.onResultChange.call(callbacks.scope, false);
    }
    return newState;
  }

  getSlotIndexByName(name) {
    let index = 0;
    let c = 0;
    this.slots.forEach((s) => {
      if (s.name === name) {
        index = c;
      }
      c = c + 1;
    });
    return index;
  }

  getWinnerSlots() {
    const winners = this.slots.map((s) => {
      if (s.state === SLOT_STATES.enabled || s.state === SLOT_STATES.locked) {
        return s;
      } else {
        return null;
      }
    });
    return winners;
  }

  getTrickScore() {
    let total = 0;
    this.getWinnerSlots().forEach((w) => {
      let score = w && w.winner ? w.winner.scores : 0;
      if (w && w.name === "GrindVariation") {
        const variation = CONFIG.VARIATIONS.filter((v) => {
          return v.name === w.winner.name;
        })[0];
        score = variation && variation.scores ? variation.scores : 0;
      }
      total = total + parseInt(score, 10);
    });

    return total;
  }

  showScores($slot) {
    $slot.find(".slotBgIconContainerRight").show();
  }
  resetScore($slot) {
    $slot.parent().parent().find(".slotBgIconContainerRight").html("");
  }
  renderScore($slot, score = 0) {
    if (score) {
      const html = `<img class="bogSlot-score-img"  src="img/score-${score}.svg"></img>`; //`<span class="number-circle-slot">${scores}</span>`

      $slot
        .parent()
        .parent()
        .find(".slotBgIconContainerRight")
        .html(html)
        .show();
    } else {
      this.hideScores($slot.parent().parent());
    }
  }

  hideScores($slot) {
    $slot.find(".slotBgIconContainerRight").hide();
  }

  setSlotState(slotName, state, $slot) {
    const index = this.getSlotIndexByName(slotName);
    this.slots[index].state = state;

    const $header = $slot.find(".bog-slot-header");
    // clear states in gui
    for (const [key, value] of Object.entries(SLOT_STATES)) {
      $slot.removeClass("bog-slot-" + value);
    }

    $slot.addClass("bog-slot-" + state);

    const isHidden = [SLOT_STATES.unavailable, SLOT_STATES.disabled].includes(
      state
    );
    if (!isHidden) {
      $header.addClass("bog-slot-visible");
    } else {
      $header.removeClass("bog-slot-visible");
    }

    if (state === SLOT_STATES.enabled) {
      this.showScores($slot);
    }

    if (state === SLOT_STATES.unavailable) {
      this.hideScores($slot);
    }

    if (state === SLOT_STATES.locked) {
      $slot.find(".slot-state-lock-bg-icon--locked ").show();
      this.showScores($slot);
    } else {
      $slot.find(".slot-state-lock-bg-icon--locked").hide();
    }
    if (state === SLOT_STATES.disabled) {
      $slot.find(".slot-state-lock-bg-icon--disabled").show();
      this.hideScores($slot);
    } else {
      $slot.find(".slot-state-lock-bg-icon--disabled").hide();
    }
  }

  onCompleteSlot(resolve, slot, activeNodeIndex) {
    const index = this.getSlotIndexByName(slot.name);
    const $active = slot.dom.find(`.bogLink:eq(${activeNodeIndex + 1})`);
    let theWinner = slot.data[$active.data("index") - 1];
    //console.log($active.data("index"));
    if (String($active.data("index")) === "-1") {
      theWinner = { scores: 0, name: "None" };
      console.log(theWinner);
    }
    let score = theWinner.scores;
    this.slots[index].winner = theWinner;

    const data = null;

    if (slot.name === "Grind") {
      this.grindsInTricklist.push(theWinner.name);
      // grind variations
      const filteredVariations = this.filterTrickConfiguration(
        "GrindVariation",
        theWinner.variations
      );
      const index = this.getSlotIndexByName("GrindVariation");
      if (filteredVariations.length === 0) {
        this.slots[index].previousState =
          this.slots[index].state !== SLOT_STATES.unavailable
            ? this.slots[index].state
            : this.slots[index].previousState;
        this.setSlotState(
          "GrindVariation",
          SLOT_STATES.unavailable,
          this.slots[index].dom.closest(".bog-slot")
        );
      } else if (this.slots[index].state === SLOT_STATES.unavailable) {
        // bug: if was disabled, then unavailabe, disable is not memorized

        this.setSlotState(
          "GrindVariation",
          this.slots[index].previousState,
          this.slots[index].dom.closest(".bog-slot")
        );
      }
      this.slots[1].data = filteredVariations;

      this.slots[2].data = CONFIG.APPROACHES;
      if (theWinner.noSwitch === true) {
        this.slots[2].data = this.slots[2].data.filter(
          (e) => e.isSwitch === false
        );
      }

      const grindSlot = this.slots[this.getSlotIndexByName("Grind")];
      this.slots[3].data = this.trickdata.getSpinToData(grindSlot.winner);

      this.slots[4].data = this.trickdata.getSpinOffData(grindSlot.winner);
    } else if (slot.name === "Approach") {
      const grindSlot = this.slots[this.getSlotIndexByName("Grind")];
      const approachSlot = this.slots[this.getSlotIndexByName("Approach")];
      this.slots[3].data = this.trickdata.getSpinToData(
        grindSlot.winner,
        approachSlot.winner
      );

      this.slots[4].data = this.trickdata.getSpinOffData(grindSlot.winner);
    } else if (slot.name === "GrindVariation") {
      const variation = CONFIG.VARIATIONS.filter((v) => {
        return v.name === theWinner.name;
      })[0];
      score = variation && variation.scores ? variation.scores : 0;
    }

    this.renderScore(slot.dom, score);

    const nextId = this.getNextSlotIndex(slot);
    if (nextId > 0) {
      this.startSlot(nextId, resolve);
    } else {
      resolve(this.getSpinWinners());
    }
  }

  getSpinWinners() {
    let winners = [];
    this.slots.forEach((slot) => {
      if ([SLOT_STATES.enabled, SLOT_STATES.locked].includes(slot.state)) {
        winners.push({
          name: slot.name,
          winner: slot.winner,
        });
      }
    });
    return winners;
  }

  startSlot(index, resolve) {
    const slotState = this.slots[index].state;
    if (slotState === SLOT_STATES.locked) {
      //this.slots[index].disabled = true;
    } else {
      this.renderSlot(index, this.slots[index].data);
      const $header = this.slots[index].dom.closest(".bog-slot-header");

      if ([SLOT_STATES.enabled].includes(slotState)) {
        $header.addClass("bog-slot-visible");
      }

      this.slots[index].machine.shuffle(5, (activeNodeIndex) => {
        this.onCompleteSlot(resolve, this.slots[index], activeNodeIndex);
      });
    }
  }

  filterLocked(entries) {
    const variationSlot = this.slots[this.getSlotIndexByName("GrindVariation")];
    if (variationSlot.state === SLOT_STATES.locked) {
      entries = entries.filter((e) => {
        let hasVariation = false;
        let vars = e.variations;
        if (
          vars &&
          vars.filter((ee) => {
            return ee.name === variationSlot.winner.name;
          }).length
        ) {
          hasVariation = true;
        }

        return hasVariation;
      });
    }

    const spinToSlot = this.slots[this.getSlotIndexByName("SpinTo")];

    if (spinToSlot.state === SLOT_STATES.locked) {
      let isSoulSpin = this.isSoulSpin(spinToSlot.winner.name);
      entries = entries.filter((e) => {
        if (
          (e.isGrooveGrind && !isSoulSpin) ||
          (!e.isGrooveGrind && isSoulSpin)
        ) {
          return true;
        } else {
          return false;
        }
      });
    }
    const spinOffSlot = this.slots[this.getSlotIndexByName("SpinOff")];
    if (spinOffSlot.state === SLOT_STATES.locked) {
      let isSoulSpin = this.isSoulSpin(spinOffSlot.winner.name);
      entries = entries.filter((e) => {
        if (
          (e.isGrooveGrind && !isSoulSpin) ||
          (!e.isGrooveGrind && isSoulSpin)
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    return entries;
  }

  // groove, soul spins have +/- 90
  isSoulSpin(name) {
    const degree = name.replace(/\D/g, "");
    let isSoulSpin = false;
    let soulGrinds = CONFIG.SPINS_TO_GRIND.forEach((s) => {
      let degreeLex = s.name.replace(/\D/g, "");
      if (degreeLex === degree) {
        isSoulSpin = true;
      }
    });
    return isSoulSpin;
  }

  filterTrickListData(name, data) {
    let entries = data;

    if (name === "Grind") {
      entries = entries.filter((e) => {
        const isAdded = this.grindsInTricklist.includes(e.name);

        return !isAdded;
      });
    }
    return entries;
  }

  filterTrickConfiguration(name, data) {
    let entries = data;

    if (name === "Grind") {
      entries = CONFIG.GRINDS_FOR_SLOTS;

      entries = entries.filter((e) => {
        const isExcluded =
          this.includedTricks.heelRoll === "off" &&
          (e.name.includes("Wheelbarrow") ||
            e.name.includes("Training Wheel") ||
            e.name.includes("Hot Dog") ||
            e.name.includes("Closed Book") ||
            e.name.includes("Open Book") ||
            e.name.includes("Byn Soul") ||
            e.name.includes("Sidewalk") ||
            e.name.includes("Citric Acid"));
        const isAdded = this.grindsInTricklist.includes(e.name);

        return !isExcluded && !isAdded;
      });
      entries = this.filterLocked(entries);
      if (entries.length === 0) {
        // all grinds used, reset
        entries = CONFIG.GRINDS_FOR_SLOTS;
      }

      // check if locked grindvariation exists and filter that shit.
      // or locked spin (with 270/450)
    } else if (name === "SpinTo" || name === "SpinOff") {
      if (this.includedTricks.spins360 === "off") {
        entries = entries.filter(
          (e) => !e.name.includes("360") && !e.name.includes("270")
        );
      }
      if (this.includedTricks.spins540 === "off") {
        entries = entries.filter(
          (e) => !e.name.includes("540") && !e.name.includes("450")
        );
      }
      if (this.includedTricks.spins720 === "off") {
        entries = entries.filter(
          (e) => !e.name.includes("720") && !e.name.includes("630")
        );
      }
      if (this.includedTricks.spins900 === "off") {
        entries = entries.filter(
          (e) => !e.name.includes("900") && !e.name.includes("810")
        );
      }
    } else if (name === "Approach") {
      if (this.includedTricks.switch === "off") {
        entries = entries.filter((e) => e.isSwitch !== true);
      }
      if (this.includedTricks.fakie === "off") {
        entries = entries.filter((e) => e.isFakie !== true);
      }
    } else if (name === "GrindVariation") {
      if (this.includedTricks.negative === "off") {
        entries = entries.filter((e) => !e.name.includes("Negative"));
      }
      if (this.includedTricks.rough === "off") {
        entries = entries.filter((e) => !e.name.includes("Rough"));
      }
      if (this.includedTricks.tough === "off") {
        entries = entries.filter((e) => !e.name.includes("Tough"));
      }
      if (this.includedTricks.channel === "off") {
        entries = entries.filter((e) => !e.name.includes("Channel"));
      }
      if (this.includedTricks.christ === "off") {
        entries = entries.filter((e) => !e.name.includes("Christ"));
      }
    }

    return entries;
  }
  renderSlot(slotIndex = 0, data = null) {
    const filteredData = this.filterTrickConfiguration(
      this.slots[slotIndex].name,
      data
    );
    /* const filteredTrickListData = this.filterTrickListData(
      this.slots[slotIndex].name,
      filteredData
    );*/
    this.slots[slotIndex].data = filteredData;
    let $node = this.slots[slotIndex].dom;

    if (this.slots[slotIndex].machine) {
      const cssId = `slot_${String(Math.floor(Math.random() * 10000000))}`;
      $node.html("");
      $(`<div class="${$node.attr("class")}" id="${cssId}"></div>`).insertAfter(
        $node
      );
      $node.remove();
      try {
        this.slots[slotIndex].machine.destroy();
      } catch (err) {
        this.slots[slotIndex].machine = null;
      }
      // cssId: generate fresh node for slotmachine (re-init problem)
      $node = $(`#${cssId}`);
      this.slots[slotIndex].dom = $node;
    }
    let index = 0;
    let reelRows = [];
    filteredData.map((s) => {
      index += 1;
      let iconClass = s.icon ? `bogLink-icon-${s.icon}` : "";
      iconClass = "";

      let name = s.url
        ? `<a target="_blank" href="${s.url}">${s.name}</a>`
        : s.name;

      name = this.slots[slotIndex].name === "Grind" ? name : s.name;
      name = s.name;

      let htmlSlot = `
        <div data-index="${index}" class="bogLink">
          <div class="${iconClass}">${name}
          </div>
        </div>
        `;
      if (s.repeat) {
        for (let i = 0; i < s.repeat; i++) {
          reelRows.push(htmlSlot);
        }
      } else if (this.slots[slotIndex].name === "GrindVariation") {
        const variation = CONFIG.VARIATIONS.filter((v) => {
          return v.name === s.name;
        })[0];
        if (variation && variation.repeat) {
          for (let i = 0; i < variation.repeat; i++) {
            reelRows.push(htmlSlot);
          }
        }
      }

      reelRows.push(htmlSlot);
    });
    // None type
    /*
    if (this.slots[slotIndex].name !== "Grind") {
      console.log("reelRows", reelRows, this.slots[slotIndex].name);
      for (let i = 0; i < 4; i++) {
        reelRows.push(`
        <div data-index="-1" class="bogLink">
          <div class="emptyRow">None
          </div>
        </div>
        `);
      }
    }*/

    const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
    $node.html(shuffleArray(reelRows).join(""));
    // dont animate disabled reels
    let delay = this.slotSpeed;
    if (this.slots[slotIndex].state === SLOT_STATES.disabled) {
      delay = 0;
    }

    this.slots[slotIndex].machine = $node.slotMachine({
      active: 0,
      delay: delay,
      spins: SLOT_MACHINE_NO_OF_SPINS,
    });
  }
}
