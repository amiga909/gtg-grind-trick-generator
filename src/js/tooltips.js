import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/animations/scale-subtle.css";
import "tippy.js/animations/scale-extreme.css";

import "tippy.js/themes/light.css";

const ERROR_MSG_COLOR = "#e71b00";
const ERROR_MSG = {
  noMoreSpinningReels: `<span style="color:${ERROR_MSG_COLOR};">Error. 
    At least one reel must be active and unlocked. 
    Toggle the reels to unlock or enable reels.</span>`,
  tooManyTokensUsed: `<span style="color:${ERROR_MSG_COLOR};">Error. You used too many tokens. 
    Toggle the reels to remove <i class="fa fa-lock fa-1x"></i> and 
    <i class="fa fa-ban fa-1x"></i> tokens from the slot machine.</span>`,
  dupeTrick: `<span style="color:${ERROR_MSG_COLOR};">Error. You already got that trick. 
    Toggle the reels to change the trick or press skip to skip this spin.</span>`,
};

const CONFIG = {
  // all screens
  soundButton: { screen: "all", text: "Toggle sound" },

  logoText: {
    screen: "all",
    text: "Home",
    props: { placement: "left" },
  },
  helpBtn: {
    screen: "all",
    text: "Explain in-screen controls",
  },
  scoreboard_score: {
    screen: "all",
    text: `Current score `,
    props: { placement: "bottom" },
  },
  scoreboard_spins: {
    screen: "all",
    text: `Current spin / Total spins `,
  },
  configButton: {
    screen: "all",
    text: "Settings", //props: { maxWidth: "50px" },
  },
  trickNamingBtn: {
    screen: "all",
    text: "Tricktionary", //props: { maxWidth: "50px" },
  },
  aboutBtn: { screen: "all", text: "How to play" }, //props: { maxWidth: "50px" },
  //
  startLevelSelect: {
    screen: "Start",
    text: `Change difficulty. <br>Press <i class="fa fa-wrench fa-1x"></i>  for details.`,
  },
  startGame: {
    screen: "Start",
    text: "Start the game",
  },
  //
  "trickList-continueBtn": {
    screen: "Slotmachine",
    text: "Skip this trick",
  },
  endGameButton: {
    screen: "Slotmachine",
    text:
      "This is the last spin. If you can't to the trick, press this button to end the game.",
    props: { maxWidth: "25vw" },
  },

  addTricklistBtn: {
    screen: "Slotmachine",
    text: "Add trick to tricklist",
  },
  explainTrick: {
    screen: "Slotmachine",
    text: "Show trick info",
  },
  grindReel: {
    screen: "Slotmachine",
    text: `Press a reel to lock it ( <i class="fa fa-lock fa-1x"></i>), press again to disable (<i class="fa fa-ban fa-1x"></i>), press again to enable.`,
  },
  tricklistBtn: {
    screen: "Slotmachine",
    text: `Show tricklist`,
  },
  giveUpButton: {
    screen: "Slotmachine",
    text: "Abort the game",
  },

  //
  configSubmit: {
    screen: "Configuration",
    text: "Apply the changes and restart the game.",
  },
  configReset: {
    screen: "Configuration",
    text: "Factory reset. Resets settings and app cache.",
  },
  configLevelSelect: {
    screen: "Configuration",
    text:
      "Choose a preset with included tricks and tokens per game. Press Apply button below to activate.",
  },
  configSpeedSelect: {
    screen: "Configuration",
    text: "Change duration of the slot machine spin animation.",
  },
  configManualOptions: {
    screen: "Configuration",
    text: "Configure your own game.",
  },

  //

  //
  endScreen: {
    screen: "manual",

    text: "",
    props: { offset: 8, maxWidth: "90vw" },
  },
  errorMsgTokens: {
    screen: "manual",
    text: ``,
    props: {},
  },
  errorMsgTricklist: {
    screen: "manual",
    text: ``,
    props: {},
  },
};

const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export class Tooltips {
  constructor($helpBtn, screens) {
    this.$helpBtn = $helpBtn;
    this.screens = screens;
    this.$tooltips = $("[data-p-tooltip]");
    this.$helpBtnStart = $("#helpButtonStart");
    this.$mask = $("#tooltips-mask");
    // keep page scrollable while tooltip is open
    this.$explainTrickMask = $("#tooltips-slots-mask");

    this.config = CONFIG;
    this.ERROR_MSG = ERROR_MSG;
    this.helpTooltips = [];
    this.isVisible = false;
    this.init();
    this.registerListener();
  }

  registerListener() {
    const btnClick = throttle(() => {
      if (this.isVisible) {
        this.hide();
      } else {
        this.show();
      }
    }, 500);

    this.$mask.on("click", (e) => {
      e.preventDefault();
      //e.stopPropagation();
      this.hide();
    });

    this.$helpBtn.on("click", (e) => {
      e.preventDefault();
      btnClick();
    });
    this.$helpBtnStart.on("click", (e) => {
      e.preventDefault();
      btnClick();
    });
  }

  show() {
    this.$mask.show();
    this.$helpBtn.addClass("pure-button-disabled");
    this.isVisible = true;
    this.helpTooltips.forEach((t) => {
      if (t.instance.props.content) {
        if (t.screen === "all" || t.screen === this.screens.activeScreen) {
          t.instance.enable();
          t.instance.show();
        }
      }
    });
  }
  hide() {
    this.isVisible = false;
    this.$helpBtn.removeClass("pure-button-disabled");
    this.$explainTrickMask.hide();
    this.$mask.hide();
  }
  updateTooltip(name, htmlContent) {
    this.helpTooltips.forEach((t) => {
      if (t.name === name) {
        t.instance.setContent(htmlContent);
      }
    });
  }

  showTooltip(name, keepScrollable = false) {
    this.helpTooltips.forEach((t) => {
      if (t.name === name) {
        t.instance.enable();
        t.instance.show();
        if (keepScrollable) {
          t.instance.setProps({
            onHide: () => {
              setTimeout(() => {
                this.$explainTrickMask.hide();
              }, 10);
            },
          });
          this.$explainTrickMask.show();
        } else {
          this.$mask.show();
        }
      }
    });
  }

  init() {
    this.$tooltips.each((i, el) => {
      let $el = $(el);
      let name = $el.data("p-tooltip");
      let config = this.config[name];
      if (!config) {
        console.error("missing tooltip config", name);
      }
      let text = config.text;
      let props = {
        theme: "light",
        animation: "scale",
        allowHTML: true,
        touch: true,
        trigger: "manual",
      };

      if (config.props) {
        props = { ...props, ...config.props };
      }

      props.content = text;

      let t = tippy($el[0], props);
      t.disable();
      this.helpTooltips.push({
        instance: t,
        name: name,
        screen: config.screen,
      });
    });
  }
}
