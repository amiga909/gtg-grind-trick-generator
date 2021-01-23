import "purecss/build/pure-min.css";
import "purecss/build/grids-responsive-min.css";

import "font-awesome/css/font-awesome.min.css";
//import "../css/style.scss";

import { Configuration } from "./configuration";
import { SlotMachine } from "./slotmachine";
import { ResultParser } from "./resultparser";
import { Screens } from "./screens";
import { Trickdata } from "./trickdata";
import { Tricklist } from "./tricklist";
import { Tooltips } from "./tooltips";
import { Scoreboard } from "./scoreboard";
import { GameOverScreen } from "./gameover-screen";
import { Audioplayer } from "./audioplayer";

let CONFIG = "";
const DISABLE_SOUND = true;

class GrindTrickRandomizer {
  constructor() {
    this.$randomizeButton = $("#randomizeButton");
    this.$randomizeButtonStart = $("#randomizeButtonStart");
    this.$randomizeButtonStartContainer = $(".randomizeButton2-container");
    this.$randomizeButtonSlots = $("#randomizeButton2");

    this.$soundOnOff = $("#sound");

    this.$tricklistBtn = $("#tricklistBtn");
    this.$addTricklistBtn = $("#addTricklistBtn");
    this.$helpBtn = $("#helpButton");
    this.$endGameButton = $("#endGameButton");
    this.$endGameButtonContainer = $(".endGameButton-container");

    this.$endScreen = $("#endScreen");
    this.$trickHelpButton = $("#trickHelpButton");
    this.$currentScore = $("#currentScore");

    this.configurator = new Configuration();
    this.$levelStartSelect = $("#start-screen-levels");
    this.$levelStartSelect.val(this.configurator.getLevel());
    this.$bannerLogoText = $("#banner-head-logo-text");

    this.slotSpeed = this.configurator.getSpeed();
    this.includedTricks = this.configurator.getIncludedTricks();

    this.audioplayer = new Audioplayer(this.$soundOnOff);
    this.slotMachine = new SlotMachine(this.slotSpeed, this.includedTricks);
    this.resultParser = new ResultParser();

    this.screens = new Screens();
    this.tricklist = new Tricklist(this.$tricklistBtn);
    this.tooltips = new Tooltips(this.$helpBtn, this.screens);
    this.scoreboard = new Scoreboard(this.configurator.getGameConfig());
    this.gameOverScreen = new GameOverScreen();

    this.trickdata = new Trickdata();
    CONFIG = this.trickdata.get();

    this.slotMachineResult = { parsed: "", orig: "" };
  }

  init() {
    if (!DISABLE_SOUND) {
      this.audioplayer.init(this.configurator.getSound());
    }
    this.screens.show("Start"); //Start

    this.registerListener();
  }

  registerListener() {
    this.$bannerLogoText.on("click", (e) => {
      location.reload();
    });

    $(".bog-slot").on("click", (e) => {
      if (this.isEndScreen) {
        const onResultChange = () => {
          this.scoreboard.set(this.slotMachine.countSlotStates());

          this.showEndScreen(false);
        };
        const afterSlotChange = () => {
          this.scoreboard.set(this.slotMachine.countSlotStates());
        };
        this.slotMachine.onClickSlot($(e.currentTarget), {
          scope: this,
          on: {
            onResultChange: onResultChange,
            afterSlotChange: afterSlotChange,
          },
        });
      }
    });

    this.$levelStartSelect.on("change", (e) => {
      e.preventDefault();

      this.configurator.setLevel(this.$levelStartSelect.val());
      this.configurator.submit();
    });

    this.$randomizeButton.on("click", (e) => {
      e.preventDefault();
      this.onClickStart();
    });

    this.$randomizeButtonStart.on("click", (e) => {
      e.preventDefault();
      this.scoreboard.startGame();
      this.tricklist.clearList();
      this.onClickStart();
    });
    this.$randomizeButtonSlots.on("click", (e) => {
      e.preventDefault();
      if (!this.hasTokenErrorPrompt()) {
        this.onClickStart();
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
      if (!this.hasTokenErrorPrompt() && !this.hasTrickDupeErrorPrompt()) {
        this.addToTricklist(this.scoreboard.isLastSpin());
      }
    });

    this.$trickHelpButton.on("click", () => {
      if (this.isEndScreen) {
        // scrollUp: full tooltip visible, cant scroll on tooltip
        //this.screens.scrollUp();
        this.tooltips.showTooltip("endScreen", true);
      }
    });

    this.$endGameButton.on("click", (e) => {
      this.gameOverScreen.render(
        this.scoreboard.points,
        this.tricklist.getStorage()
      );

      this.screens.show("GameOver", "up");
    });
  }

  addToTricklist() {
    const score = this.slotMachine.getTrickScore();
    this.scoreboard.setPoints(score);

    this.tricklist.addTrick(
      this.slotMachineResult.parsed,
      this.slotMachineResult.orig,
      score
    );

    if (this.scoreboard.isLastSpin()) {
      this.gameOverScreen.render(
        this.scoreboard.points,
        this.tricklist.getStorage()
      );
      this.screens.show("GameOver", "up");
    } else {
      this.screens.show("Trick List", "up");
    }
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

  hasTrickDupeErrorPrompt() {
    let hasPrompt = false;
    if (this.tricklist.hasTrick(this.slotMachineResult.parsed)) {
      hasPrompt = true;
      this.tooltips.updateTooltip(
        "errorMsgTricklist",
        this.tooltips.ERROR_MSG.dupeTrick
      );
      this.tooltips.showTooltip("errorMsgTricklist");
    }
    return hasPrompt;
  }

  hasTokenErrorPrompt() {
    let hasPrompt = false;
    if (!this.slotMachine.isValidState()) {
      hasPrompt = true;
      this.tooltips.updateTooltip(
        "errorMsgTokens",
        this.tooltips.ERROR_MSG.noMoreSpinningReels
      );
      this.tooltips.showTooltip("errorMsgTokens");
    } else if (!this.scoreboard.isValidTokensCount()) {
      hasPrompt = true;
      this.tooltips.updateTooltip(
        "errorMsgTokens",
        this.tooltips.ERROR_MSG.tooManyTokensUsed
      );
      this.tooltips.showTooltip("errorMsgTokens");
    }
    return hasPrompt;
  }

  onClickStart() {
    this.screens.show("Slotmachine", "up");
    this.screens.disableNav();
    this.scoreboard.useSpin();

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

  updateTrickScore() {
    this.currentScore = this.slotMachine.getTrickScore();
    let imgPath = "img/score-[SCORE].svg";
    imgPath = imgPath.replace("[SCORE]", this.currentScore);
    this.$currentScore.attr("src", imgPath);
  }

  showEndScreen(animateBottom = true) {
    this.isEndScreen = true;
    const winners = this.slotMachine.getWinnerSlots();

    this.updateTrickScore();
    if (this.scoreboard.isLastSpin()) {
      this.$randomizeButtonStartContainer.hide();
      this.$endGameButtonContainer.show();
    }

    this.slotMachineResult = this.resultParser.parse(winners);
    const text = this.resultParser.getHelpTableForTrick(this.slotMachineResult);
    this.tooltips.updateTooltip("endScreen", text);

    this.$endScreen.find("#endscreen-text").html(this.slotMachineResult.parsed);
    this.$endScreen.fadeIn(500, () => {
      if (animateBottom) {
        this.screens.scrollDown();
      }
    });
  }

  hideEndScreen() {
    this.$endScreen.hide();
  }
}
$(window).on("load", () => {
  const s = new GrindTrickRandomizer();
  s.init();
});
