import "purecss/build/pure-min.css";
import "purecss/build/grids-responsive-min.css";

import "./sw-handler";

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
    this.$randomizeButtonStart = $("#randomizeButtonStart");

    this.$soundOnOff = $("#sound");

    this.$addTricklistBtn = $("#addTricklistBtn");
    this.$helpBtn = $("#helpButton");

    this.$spinNextButton = $("#trickList-continueBtn");
    this.$abortButton = $("#abortButton");

    this.$endScreen = $("#endScreen");
    this.$trickHelpButton = $("#trickHelpButton");
    this.$currentScore = $("#currentScore");

    this.configurator = new Configuration();
    this.$levelStartSelect = $("#start-screen-levels");
    this.$levelStartSelect.val(this.configurator.getLevel());
    this.$bannerLogoText = $("#banner-head-logo-text");
    this.$bannerLogoAbout = $("#banner-about-text-link");

    this.slotSpeed = this.configurator.getSpeed();
    this.includedTricks = this.configurator.getIncludedTricks();

    this.audioplayer = new Audioplayer(this.$soundOnOff);

    this.slotMachine = new SlotMachine(
      this.slotSpeed,
      this.includedTricks,
      this.configurator.hasNoApproachSlot(),
      this.configurator.hasNoVariationSlot()
    );

    this.resultParser = new ResultParser();

    this.screens = new Screens();
    this.tricklist = new Tricklist();
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

    this.screens.show("Start");
    if (location.href.includes("tricktionary")) {
      this.screens.show("Tricktionary");
    }
    if (location.href.includes("about")) {
      this.screens.show("About");
    }
    //debug gameover
  //  this.screens.show("GameOver", "up");
    this.registerListener();
  }

  registerListener() {
    this.$bannerLogoText.on("click", (e) => {
      location.reload();
    });
    this.$bannerLogoAbout.on("click", (e) => {
      location.reload();
    });

    $(".bog-slot").on("click", (e) => {
      // tmp: remove lock feature?
      return false;
      if (this.isEndScreen) {
        const onResultChange = () => {
          this.showEndScreen(false);
        };
        const afterSlotChange = () => {
          const states = this.slotMachine.countSlotStates();
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

    this.$randomizeButtonStart.on("click", (e) => {
      e.preventDefault();
      this.scoreboard.startGame();
      this.tricklist.clearList();

      this.onClickStart();
      this.scoreboard.useSpin();
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
      if (!this.hasTrickDupeErrorPrompt()) {
        this.addToTricklist(this.scoreboard.isLastSpin());
      }
    });

    this.$trickHelpButton.on("click", () => {
      if (this.isEndScreen) {
        this.tooltips.showTooltip("endScreen", true);
      }
    });

    this.$abortButton.on("click", (e) => {
      e.preventDefault();
      location.reload();
    });

    this.$spinNextButton.on("click", (e) => {
      e.preventDefault();
      this.triggerNextSpin();
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

    this.triggerNextSpin({ hasNewScore: true });
  }

  triggerNextSpin(options = null) {
    if (this.scoreboard.hasNoMoreSpins()) {
      this.gameOverScreen.render(
        this.scoreboard.points,
        this.tricklist.getStorage()
      );
      this.screens.show("GameOver", "up");
     
    } else {
    }
    const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

    const tadaAnim = 700;
    const hasNewScore = options && options.hasNewScore === true ? true : false;
    const isInvalidSpin = this.scoreboard.isInvalidSpin();

    if (hasNewScore) {
      $(".scoreboard-points").addClass("tada");
      delay(tadaAnim).then(() => {
        $(".scoreboard-points").removeClass("tada");
      });
    }

    if (this.scoreboard.isLastSpin()) {
      this.scoreboard.useSpin();
    } else if (!this.scoreboard.isInvalidSpin()) {
      delay(hasNewScore ? 500 : 0).then(() => {
        this.scoreboard.useSpin();
        $(".scoreboard-spins").addClass("tada");
      });
    }

    $("body").addClass("disable_clicks");
    let totalDelay = hasNewScore ? tadaAnim * 2 : tadaAnim;
    totalDelay = this.scoreboard.isInvalidSpin() ? totalDelay / 2 : totalDelay;
    delay(totalDelay).then(() => {
      $("body").removeClass("disable_clicks");
      $(".scoreboard-spins").removeClass("tada");
      $("body").removeClass("disable_clicks");

      if (this.scoreboard.isInvalidSpin()) {
        this.gameOverScreen.render(
          this.scoreboard.points,
          this.tricklist.getStorage()
        );
        this.screens.show("GameOver", "up");
      } else {
        this.onClickStart();
      }
      $(".scoreboard-spins").removeClass("tada");
    });
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

  // unused
  hasTokenErrorPrompt() {
    let hasPrompt = false;
    if (!this.scoreboard.isValidTokensCount()) {
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
        // eslint-disable-next-line
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

    this.slotMachineResult = this.resultParser.parse(winners);
    let text = this.resultParser.getHelpTableForTrick(this.slotMachineResult);
    text = `<span style="font-weight: bold;text-decoration: underline;">${this.slotMachineResult.parsed}</span> ${text}`;
    this.tooltips.updateTooltip("endScreen", text);

    this.$endScreen.find("#endscreen-text").html(this.slotMachineResult.parsed);
    this.$endScreen.fadeIn(500, () => {
      if (animateBottom) {
        setTimeout(() => {
          this.screens.scrollDown($("#tricklistBtn-count")[0]);
        }, 100);
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
