import "purecss/build/pure-min.css";
import "purecss/build/grids-responsive-min.css";

import "font-awesome/css/font-awesome.min.css";
import "../css/style.scss";

import { Configuration } from "./configuration";
import { SlotMachine } from "./slotmachine";
import { ResultParser } from "./resultparser";
import { Screens } from "./screens";
import { Trickdata } from "./trickdata";
import { Tricklist } from "./tricklist";
import { Tooltips } from "./tooltips";
import { Scoreboard } from "./scoreboard";

import { Audioplayer } from "./audioplayer";
//import { renderThumb, renderTable } from "./helperfunctions.js";

let CONFIG = "";

class GrindTrickRandomizer {
  constructor() {
    this.$randomizeButton = $("#randomizeButton");
    this.$randomizeButtonStart = $("#randomizeButtonStart");
    this.$randomizeButtonSlots = $("#randomizeButton2");

    this.$soundOnOff = $("#sound");

    this.$tricklistBtn = $("#tricklistBtn");
    this.$addTricklistBtn = $("#addTricklistBtn");
    this.$helpBtn = $("#helpButton");
    this.$abortButton = $("#abortButton");

    this.$endScreen = $("#endScreen");
    this.$endScreenText = $("#endscreen-text");

    this.configurator = new Configuration();
    this.slotSpeed = this.configurator.getSpeed();
    this.includedTricks = this.configurator.getIncludedTricks();

    this.audioplayer = new Audioplayer(this.$soundOnOff);
    this.slotMachine = new SlotMachine(this.slotSpeed, this.includedTricks);
    this.resultParser = new ResultParser();

    this.screens = new Screens();
    this.tricklist = new Tricklist(this.$tricklistBtn);
    this.tooltips = new Tooltips(this.$helpBtn, this);
    this.scoreboard = new Scoreboard(this.configurator.getGameConfig()); 

    this.trickdata = new Trickdata();
    CONFIG = this.trickdata.get();

    this.slotMachineResult = { parsed: "", orig: "" };
  }

  init() {
    this.audioplayer.init(this.configurator.getSound());
    this.screens.show("Start");

    this.registerListener();
  }

  registerListener() {
    $(".bog-slot").on("click", (e) => {
      if (this.isEndScreen) {
        const onResultChange = () => {
          this.$addTricklistBtn.removeClass("pure-button-disabled");
          this.showEndScreen();
        };
        this.slotMachine.onClickSlot($(e.currentTarget), {
          scope: this,
          cb: onResultChange,
        });
      }
    });

    this.$randomizeButton.on("click", (e) => {
      e.preventDefault();
      this.onClickStart();
    });

    this.$randomizeButtonStart.on("click", (e) => {
      e.preventDefault();
      this.scoreboard.startGame();
      this.onClickStart();
    });
    this.$randomizeButtonSlots.on("click", (e) => {
      e.preventDefault();
      this.onClickStart();
    });

    this.$abortButton.on("click", (e) => {
      e.preventDefault();
      location.reload();
    });

    document.body.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        if (!this.$randomizeButton.hasClass("pure-button-disabled")) {
          this.onClickStart();
        }
      }
    });

    this.$soundOnOff.on("click", (e) => {
      e.preventDefault();
      $("#soundIconOn").toggle();
      $("#soundIconOff").toggle();
      if ($("#soundIconOff").is(":visible")) {
        this.turnSoundOff();
      } else {
        this.turnSoundOn();
      }
    });
    if (localStorage.getItem("sound") === "on") {
      this.$soundOnOff.trigger("click");
    }

    this.$addTricklistBtn.on("click", () => {
      this.addToTricklist();
      this.$addTricklistBtn.addClass("pure-button-disabled");
    });

    this.$endScreenText.on("click", () => {
      if (this.isEndScreen) {
        this.screens.scrollDown();

        this.tooltips.showTooltip("endScreen");
      }
    });
  }

  addToTricklist() {
    this.screens.show("Trick List");

    let points = 1; // TODO
    this.tricklist.addTrick(
      this.slotMachineResult.parsed,
      this.slotMachineResult.orig,
      points
    );
  }

  turnSoundOn() {
    localStorage.setItem("sound", "on");
    this.$soundOnOff.addClass("pure-button-active").css({ opacity: 1 });
    this.audioplayer.unmute();
  }

  turnSoundOff() {
    localStorage.setItem("sound", "off");
    this.$soundOnOff.removeClass("pure-button-active").css({ opacity: 0.5 });
    this.audioplayer.mute();
  }

  onClickStart() {
    if (!this.slotMachine.isValidState()) {
      return false;
    }
    this.screens.show("Slotmachine");
    this.screens.disableNav();

    this.isEndScreen = false;
    this.audioplayer.stop();

    this.$addTricklistBtn.removeClass("pure-button-disabled");

    if (this.$soundOnOff.hasClass("pure-button-active")) {
      this.audioplayer.play("start");
    }

    this.hideEndScreen();

    this.slotMachine
      .run()
      .then((results) => {
        this.screens.enableNav();

        this.showEndScreen();
      })
      .catch((error) => {
        console.error("catch", error);
      });
  }

  showEndScreen(animateBottom = true) {
    this.isEndScreen = true;
    const winners = this.slotMachine.slots.map((s) => {
      if (s.state === "enabled" || s.state === "locked") {
        return s;
      } else {
        return null;
      }
    });
    this.slotMachineResult = this.resultParser.parse(winners);
    const text = this.resultParser.getHelpTableForTrick(this.slotMachineResult);
    this.tooltips.updateTooltip("endScreen", text);

    this.$endScreen.find("#endscreen-text").html(this.slotMachineResult.parsed);
    this.$endScreen.fadeIn(500, () => {
      if (animateBottom) {
        $(".l-content").animate({ scrollTop: $(document).height() }, "fast");
      }
    });
  }

  hideEndScreen() {
    this.$endScreen.hide();
  }
}

$(document).ready(() => {
  const s = new GrindTrickRandomizer();

  s.init();
});
