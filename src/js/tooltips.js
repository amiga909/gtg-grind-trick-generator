import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/animations/scale-subtle.css";
import "tippy.js/animations/scale-extreme.css";

import "tippy.js/themes/light.css";

const CONFIG = {
  soundButton: { type: "nav", text: "Toggle sound" },
  randomizeButton: { text: "Spin the reels", position: "" },
  helpBtn: {
    type: "nav",
    text: "",
    position: "",
  },

  configButton: {
    type: "nav",
    text: "Choose difficulty", //props: { maxWidth: "50px" },
  },
  trickNamingBtn: {
    type: "nav",
    text: "Open  Tricktionary",//props: { maxWidth: "50px" },
  },
  
  aboutBtn: { type: "nav", text: "How to play" },//props: { maxWidth: "50px" },


  addTricklistBtn: {
    type: "slot-menu",
    text: "Add current trick to tricklist. ",
  },
  giveUpButton: {
    type: "slot-menu",
    text: "Abort the game. ",
  },

  /*approachSlot: {
    type: 'slot',
    text:
      ' <b>Fakie</b> Skate backwards to the obstacle <b>Switch</b> Grinding in the unnatural mirrored position of a grind.<br>',
    props: { placement: 'top-end', offset: 2 },
    slotName: 'Approach',
  },
  spinToSlot: {
    type: 'slot',
    text:
      '<b>Inspin</b> If the obstacle is on the left and approach is forwards, Inspin is counter-clockwise. If the obstacle is on the right, Inspin is clockwise.',
    props: { placement: 'bottom-end', offset: 2 },
    slotName: 'SpinTo',
  },*/
  endScreen: {
    type: "slot",
    text: "",
    //'<b>Switch</b>blalbblalblalblalba blalblalblalba blalblalblalba blalblalblalba blalblalblalba blalblalblalba lalblalba bblalblalblalba blalblalblalba blalblalblalba blalblalblalba lalblalblalba <br>  <b>Fakie</b>blalblalblalba blalblalblalba <br> <b>Inspin</b>bl blalbblalblalblalba blalblalblalba blalblalblalba blalblalblalba blalblalblalba blalblalblalba lalblalba blalblalblalba alblalblalba <br>   <b>Frontside Unity</b>grindSlot <br> <img width="300" heigth="300" src="./img/bog/1.jpg">  <br>Open book of grinds  ',
    props: { offset: 8 , maxWidth: "80vh"},
    slotName: "Grind",
  },
  /*
  grindVariationSlot: {
    type: 'slot',
    text:
      '<b>Topside</b> INside X <img width=100 heigth=100 src="./img/bog/1.jpg">  ',
    props: { placement: 'bottom-end', offset: 2 },
    slotName: 'GrindVariation',
  },
  spinOffSlot: {
    type: 'slot',
    text: 'f the obstacle is on the left and approach is forwa',
    props: {
      placement: 'top-start',

      offset: 2,
    },
    slotName: 'SpinOff',
  },*/
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
  constructor($helpBtn, App) {
    this.$helpBtn = $helpBtn;
    this.App = App;
    this.$tooltips = $("[data-p-tooltip]");
    this.$helpBtnStart = $("#helpButtonStart");
    this.$mask = $("#tooltips-mask");

    this.config = CONFIG;
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
        // this.init();
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
    this.App.$randomizeButton.addClass("pure-button-disabled");
    this.isVisible = true;
    this.helpTooltips.forEach((t) => {
      if (t.instance.props.content) {
        if (t.type !== "slot-menu" || !this.App.isEndsreen) {
          t.instance.enable();

          t.instance.show();
        }
      }
    });
  }
  hide() {
    this.isVisible = false;
    this.$helpBtn.removeClass("pure-button-disabled");
    this.App.$randomizeButton.removeClass("pure-button-disabled");

    this.$mask.hide();
  }
  updateTooltip(name, htmlContent) {
    this.helpTooltips.forEach((t) => {
      if (t.name === name) {
        t.instance.setContent(htmlContent);
      }
      // t.instance.hide();
      // t.instance.disable();
    });
  }

  showTooltip(name) {
    this.helpTooltips.forEach((t) => {
      if (t.name === name) {
        console.log("show " + name);
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
      this.helpTooltips.push({ instance: t, name: name });
    });
  }
}
