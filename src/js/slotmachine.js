import 'jquery-slotmachine/dist/jquery.slotmachine.min.css';
import 'jquery-slotmachine/dist/slotmachine.min';
import 'jquery-slotmachine/dist/jquery.slotmachine.min';

import { Trickdata } from './trickdata.js';
let CONFIG = null;

const SLOT_STATES = {
  enabled: 'enabled',
  disabled: 'disabled',
  locked: 'locked',
  unavailable: 'unavailable',
};
const SLOT_MACHINE_NO_OF_SPINS = 1;

export class SlotMachine {
  constructor(slotSpeed, includedTricks) {
    this.includedTricks = includedTricks;
    this.slotSpeed = slotSpeed;
    this.$slots = $('.bog-slot');
    this.$approaches = $('#approaches');
    this.$spinsToGrind = $('#spinsToGrind');
    this.$grinds = $('#grinds');
    this.$grindVariations = $('#grindVariations');
    this.$spinsOffGrind = $('#spinsOffGrind');

    this.trickdata = new Trickdata();
    CONFIG = this.trickdata.get();

    this.slots = [];

    this.initSlots();
  }

  /*setLockedSlotData(){
    const lockedSlots = this.slots.filter((s) => {
      return s.state === SLOT_STATES.locked;
    });
    this.lockedSlots.forEach((slot) => {
       if(slot.name === 'GrindVariation') {
           let GRIND_DATA = this.trickdata.filterGrindsByVariationName(slot.winner.winner.name);
       }
        if(slot.name === 'SpinTo' || slot.name === 'SpinOff') {
         //let grindData = this.trickdata.filterSoulGrinds();
       }
    });

  } */
  initSlots() {
    this.slots = [
      {
        name: 'Grind',
        next: 1,
        machine: null,
        dom: this.$grinds,
        data: CONFIG.GRINDS_FOR_SLOTS,
        state: SLOT_STATES.enabled,
        winner: null,
      },
      {
        name: 'GrindVariation',
        next: 2,
        machine: null,
        dom: this.$grindVariations,
        data: null, // depends on grind
        state: SLOT_STATES.enabled,
        winner: null,
      },
      {
        name: 'Approach',
        next: 3,
        machine: null,
        dom: this.$approaches,
        data: CONFIG.APPROACHES,
        state: SLOT_STATES.enabled,
        winner: null,
      },
      {
        name: 'SpinTo',
        next: 4,
        machine: null,
        dom: this.$spinsToGrind,
        data: CONFIG.SPINS_TO_GRIND,
        state: SLOT_STATES.enabled,
        winner: null,
      },
      {
        name: 'SpinOff',
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
      this.setSlotState(slot.name, slot.state, slot.dom.closest('.bog-slot'));
    });
  }
  onSpinStart() {
    this.slots.forEach((slot) => {
      if (slot.state !== SLOT_STATES.locked) {
        slot.dom.closest('.bog-slot-header').removeClass('bog-slot-visible');
      }
    });
  }

  run() {
    this.onSpinStart();
    // this.spinWinners = this.keepLockedSpinWinners();

    console.log(' --------------- run  ---------------');
    //console.table('run: keepLockedSpinWinners', this.spinWinners);
    console.table('run: slots', this.slots);
    console.table(
      'run: disabled slots',
      this.slots.filter((s) => {
        return s.disabled === true;
      })
    );

    return new Promise((resolve, reject) => {
      const nextId = this.getFirstSlotIndex();
      this.startSlot(nextId, resolve);
    });
  }

  onClickSlot($slot, callback) {
    const name = $slot.data('name');
    const index = this.getSlotIndexByName(name);
    const slot = this.slots[index];

    const isClickable = this.slots[index].state !== SLOT_STATES.unavailable;
    if (isClickable) {
      this.toggleSlotState(name, $slot, callback);
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
        // console.log('recusrice getNextSlotId', currentSlot, nextSlot);
        nextSlotId = this.getNextSlotIndex(nextSlot);
      }
    }

    return nextSlotId;
  }

  getNextState(state, slotName) {
    let newState = '';
    if (state === SLOT_STATES.unavailable) {
      console.error('unavailable slot state', slotName, state);
    } else if (state === SLOT_STATES.enabled) {
      newState = SLOT_STATES.locked;
    } else if (state === SLOT_STATES.locked) {
      newState =
        slotName === 'Grind' ? SLOT_STATES.enabled : SLOT_STATES.disabled;
    } else if (state === SLOT_STATES.disabled) {
      newState = SLOT_STATES.enabled;
    } else {
      console.error('invalid slot state', slotName, state);
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
      alert('At least one reel must be active and unlocked');
      return (isValid = false);
    }
    return isValid;
  }

  toggleSlotState(slotName, $slot, callback) {
    const index = this.getSlotIndexByName(slotName);
    const state = this.slots[index].state;

    let newState = this.getNextState(state, slotName);

    if (state === SLOT_STATES.unavailable) {
      //console.log('cant change slot');
    } else if (state === SLOT_STATES.enabled) {
      newState = SLOT_STATES.locked;
    } else if (state === SLOT_STATES.locked) {
      newState =
        slotName === 'Grind' ? SLOT_STATES.enabled : SLOT_STATES.disabled;
    } else if (state === SLOT_STATES.disabled) {
      newState = SLOT_STATES.enabled;
    } else {
      console.error('invalid slot state', slotName, state);
    }

    //console.log(slotName + "  state " +state + "  newState " +newState)
    this.setSlotState(slotName, newState, $slot);
    if (
      (state === SLOT_STATES.locked && newState === SLOT_STATES.disabled) ||
      (state === SLOT_STATES.disabled && newState === SLOT_STATES.enabled)
    ) {
      callback.cb.call(callback.scope, false);
    }
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

  setSlotState(slotName, state, $slot) {
    const index = this.getSlotIndexByName(slotName);
    this.slots[index].state = state;

    const $header = $slot.find('.bog-slot-header');
    // clear states in gui
    for (const [key, value] of Object.entries(SLOT_STATES)) {
      $slot.removeClass('bog-slot-' + value);
    }

    $slot.addClass('bog-slot-' + state);

    const isHidden = [SLOT_STATES.unavailable, SLOT_STATES.disabled].includes(
      state
    );
    if (!isHidden) {
      $header.addClass('bog-slot-visible');
    } else {
      $header.removeClass('bog-slot-visible');
    }

    if (state === SLOT_STATES.enabled) {
    }

    if (state === SLOT_STATES.unavailable) {
    }

    if (state === SLOT_STATES.locked) {
      //$header.find('.slot-state-lock-icon').show();
      $slot.find('.slot-state-lock-bg-icon--locked ').show();
    } else {
      //$header.find('.slot-state-lock-icon').hide();
      $slot.find('.slot-state-lock-bg-icon--locked').hide();
    }
    if (state === SLOT_STATES.disabled) {
      $slot.find('.slot-state-lock-bg-icon--disabled').show();
    } else {
      $slot.find('.slot-state-lock-bg-icon--disabled').hide();
    }
  }

  onCompleteSlot(resolve, slot, activeNodeIndex) {
    const index = this.getSlotIndexByName(slot.name);
    const $active = slot.dom.find(`.bogLink:eq(${activeNodeIndex + 1})`);
    const theWinner = slot.data[$active.data('index') - 1];
    this.slots[index].winner = {
      name: slot.name,
      // gives winner.winner ...
      winner: theWinner,
    };

    const data = null;

    if (slot.name === 'Grind') {
      // grind variations
      const filteredVariations = this.filterTrickConfiguration(
        'GrindVariation',
        theWinner.variations
      );
      if (filteredVariations.length === 0) {
        const index = this.getSlotIndexByName('GrindVariation');
        this.setSlotState(
          'GrindVariation',
          SLOT_STATES.unavailable,
          this.slots[index].dom.closest('.bog-slot')
        );
      }
      this.slots[1].data = filteredVariations;

      // approach
      this.slots[2].data = CONFIG.APPROACHES;
      if (theWinner.noSwitch === true) {
        this.slots[2].data = this.slots[2].data.filter(
          (e) => e.isSwitch === false
        );
      }

      // spinTo
      const grindSlot = this.slots[this.getSlotIndexByName('Grind')];
      this.slots[3].data = this.trickdata.getSpinToData(
        grindSlot.winner.winner
      );

      // spinOff
      this.slots[4].data = this.trickdata.getSpinOffData(
        grindSlot.winner.winner
      );
    }
    if (slot.name === 'Approach') {
      // spinTo
      const grindSlot = this.slots[this.getSlotIndexByName('Grind')];
      const approachSlot = this.slots[this.getSlotIndexByName('Approach')];
      this.slots[3].data = this.trickdata.getSpinToData(
        grindSlot.winner.winner,
        approachSlot.winner.winner
      );

      // spinOff
      this.slots[4].data = this.trickdata.getSpinOffData(
        grindSlot.winner.winner
      );
    }

    const nextId = this.getNextSlotIndex(slot);
    if (nextId > 0) {
      this.startSlot(nextId, resolve);
    } else {
      console.log('resolve');
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
      const $header = this.slots[index].dom.closest('.bog-slot-header');

      if ([SLOT_STATES.enabled].includes(slotState)) {
        $header.addClass('bog-slot-visible');
      }

      this.slots[index].machine.shuffle(5, (activeNodeIndex) => {
        this.onCompleteSlot(resolve, this.slots[index], activeNodeIndex);
      });
    }
  }
  filterTrickConfiguration(name, data) {
    let entries = data;

    if (name === 'Grind') {
      if (this.includedTricks.heelRoll === 'off') {
        entries = entries.filter((e) => {
          const isHeelRoll =
            e.name.includes('Wheelbarrow') ||
            e.name.includes('Training Wheel') ||
            e.name.includes('Hot Dog') ||
            e.name.includes('Biscuit') ||
            e.name.includes('Byn Soul') ||
            e.name.includes('Sidewalk') ||
            e.name.includes('Citric Acid');

          return !isHeelRoll;
        });
      }
      const variationSlot = this.slots[
        this.getSlotIndexByName('GrindVariation')
      ];
      if (variationSlot.state === SLOT_STATES.locked) {
        entries = entries.filter((e) => {
          let hasVariation = false;
          let vars = e.variations;
          if (
            vars &&
            vars.filter((ee) => {
              return ee.name === variationSlot.winner.winner.name;
            }).length
          ) {
            hasVariation = true;
          }

          return hasVariation;
        });
      }
      // check if locked grindvariation exists and filter that shit.
      // or locked spin (with 270/450)
    } else if (name === 'SpinTo' || name === 'SpinOff') {
      if (this.includedTricks.spins360 === 'off') {
        entries = entries.filter(
          (e) => !e.name.includes('360') && !e.name.includes('450')
        );
      }
      if (this.includedTricks.spins540 === 'off') {
        entries = entries.filter(
          (e) => !e.name.includes('540') && !e.name.includes('630')
        );
      }
    } else if (name === 'Approach') {
      if (this.includedTricks.switch === 'off') {
        entries = entries.filter((e) => e.isSwitch !== true);
      }
    } else if (name === 'GrindVariation') {
      if (this.includedTricks.negative === 'off') {
        entries = entries.filter((e) => !e.name.includes('Negative'));
      }
      if (this.includedTricks.rough === 'off') {
        entries = entries.filter((e) => !e.name.includes('Rough'));
      }
      if (this.includedTricks.tough === 'off') {
        entries = entries.filter((e) => !e.name.includes('Tough'));
      }
      if (this.includedTricks.channel === 'off') {
        entries = entries.filter((e) => !e.name.includes('Channel'));
      }
      if (this.includedTricks.christ === 'off') {
        entries = entries.filter((e) => !e.name.includes('Christ'));
      }
    }

    return entries;
  }
  renderSlot(slotIndex = 0, data = null) {
    const filteredData = this.filterTrickConfiguration(
      this.slots[slotIndex].name,
      data
    );
    this.slots[slotIndex].data = filteredData;
    let $node = this.slots[slotIndex].dom;

    if (this.slots[slotIndex].machine) {
      const cssId = `slot_${String(Math.floor(Math.random() * 10000000))}`;
      $node.html('');
      $(`<div class="${$node.attr('class')}" id="${cssId}"></div>`).insertAfter(
        $node
      );
      $node.remove();
      try {
        this.slots[slotIndex].machine.destroy();
      } catch (err) {
        // console.log(err);
        this.slots[slotIndex].machine = null;
      }
      // cssId: generate fresh node for slotmachine (re-init problem)
      $node = $(`#${cssId}`);
      this.slots[slotIndex].dom = $node;
    }
    let index = 0;
    const html = filteredData.map((s) => {
      index += 1;
      let iconClass = s.icon ? `bogLink-icon-${s.icon}` : '';
      iconClass = '';

      let name = s.url
        ? `<a target="blank" href="${s.url}">${s.name}</a>`
        : s.name;

      name = this.slots[slotIndex].name === 'Grind' ? name : s.name;
      name = s.name;

      const htmlSlot = `<div data-index="${index}" class="bogLink"><div class="${iconClass}">${name}</div></div>`;

      return htmlSlot;
    });
    const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
    $node.html(shuffleArray(html).join(''));

    this.slots[slotIndex].machine = $node.slotMachine({
      active: 0,
      delay: this.slotSpeed,
      spins: SLOT_MACHINE_NO_OF_SPINS,
    });
  }
}
