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
    Toggle the reels to change the trick or spin a new trick if you have spins left.</span>`,
};

const CONFIG = {
  // all screens
  soundButton: { screen: "all", text: "Toggle sound" },
  helpBtn: {
    screen: "all",
    text: "Explains in-screen controls",
    position: "",
  },
  scoreboard: {
    screen: "all",
    text: `Current score<br>
    Remaining spins <i class="fa fa-play-circle fa-1x"></i><br>
    Remaining locks <i class="fa fa-lock fa-1x"></i>  <br>
    Remaining removes <i class="fa fa-ban fa-1x"></i> `, //props: { maxWidth: "50px" },
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
  randomizeButton: {
    screen: "Slotmachine",
    text: "Spin the reels",
    position: "",
  },
  addTricklistBtn: {
    screen: "Slotmachine",
    text: "Add trick to tricklist",
  },
  explainTrick: {
    screen: "Slotmachine",
    text: "Show trick info",
  },
  //
  configSubmit: {
    screen: "Configuration",
    text: "Apply the changes and restart the game",
  },
  configReset: {
    screen: "Configuration",
    text: "Reset all settings and restart game",
  },
  //
  giveUpButton: {
    screen: "Trick List",
    text: "Abort the game",
  },
  trickListContinueBtn: {
    screen: "Trick List",
    text: "Continue the game and spin next trick",
  },
  //
  endScreen: {
    screen: "manual",

    text: "",
    props: { offset: 8, maxWidth: "80vh" },
  },
  errorMsgTokens: {
    screen: "manual",
    text: ``,
    props: {},
  }, errorMsgTricklist: {
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

    this.$mask.hide();
  }
  updateTooltip(name, htmlContent) {
    this.helpTooltips.forEach((t) => {
      if (t.name === name) {
        t.instance.setContent(htmlContent);
      }
    });
  }

  showTooltip(name) {
    this.helpTooltips.forEach((t) => {
      if (t.name === name) {
        t.instance.enable();
        t.instance.show();
        this.$mask.show();
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
      //  $el.css({ 'text-decoration': 'underline' });

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
