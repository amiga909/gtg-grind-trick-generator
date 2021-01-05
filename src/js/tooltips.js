import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/scale-extreme.css';

import 'tippy.js/themes/light.css';

const CONFIG = {
  soundButton: { text: 'Toggle sound', position: '' },
  randomizeButton: { text: 'Spin the reels', position: '' },
  helpBtn: {
    type: 'nav',
    text: 'Show help text bubbles. ',
    position: '',
  },
  configButton: {
    type: 'nav',
    text: 'Configure generator.<br> Include and exclude tricks. ',
  },

  trickNamingBtn: {
    type: 'nav',
    text: 'Open Tricktionary.<br> Look up trick names. ',
  },
  soundButton: { type: 'nav', text: 'Toggle sound' },
  aboutBtn: { type: 'nav', text: 'About this app' },

  addTricklistBtn: {
    type: 'slot-menu',
    text: 'Add current trick to tricklist. ',
  },
  giveUpButton: {
    type: 'slot-menu',
    text: 'Abort the game. ',
  },

  approachSlot: {
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
  },
  grindSlot: {
    type: 'slot',
    text:
      '<b>Frontside Unity</b>grindSlot <br> <img width="250" heigth="250" src="./img/bog/1.jpg">  <br>Open book of grinds  ',
    props: { placement: 'top-start', offset: 2 },
    slotName: 'Grind',
  },
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
  constructor($helpBtn, App) {
    this.$helpBtn = $helpBtn;
    this.App = App;
    this.$tooltips = $('[data-p-tooltip]')
    this.$helpBtnStart = $('#helpButtonStart');
    this.$mask = $('#tooltips-mask');

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

    this.$mask.on('click', () => {
     this.hide();
    });

    this.$helpBtn.on('click', () => {
      btnClick();
    });
    this.$helpBtnStart.on('click', () => {
      btnClick();
    });
    /*
    this.$helpBtn.on(
      'touchend mouseup',
      throttle(() => {
        console.log("mouseup hide")
        this.hide();
      }, hideDelay)
    );
 
    this.$helpBtnStart.on(
      'touchstart mousedown',
      throttle(() => {
        this.init();
        this.show();
      }, throttleStart)
    );

    this.$helpBtnStart.on(
      'touchend mouseup',
      throttle(() => {
        this.hide();
      }, hideDelay)
    ); */
  }

  show() {
    this.$mask.show();
    this.$helpBtn.addClass('pure-button-disabled');
    this.App.$randomizeButton.addClass('pure-button-disabled');
    this.isVisible = true;
    this.helpTooltips.forEach((t) => {
      if (t.instance.props.content) {
         t.instance.enable();
       
        
        t.instance.show();
      }
    });
  }
  hide() {
    //  console.log('hide');
    this.isVisible = false;
    this.$helpBtn.removeClass('pure-button-disabled');
    this.App.$randomizeButton.removeClass('pure-button-disabled');

    this.helpTooltips.forEach((t) => {
      // t.instance.hide();
      // t.instance.disable();
    });
    this.$mask.hide();
  }

  init() {
     
    this.$tooltips.each((i, el) => {
      let $el = $(el);
      let name = $el.data('p-tooltip');
      let config = this.config[name];
      if (!config) {
        console.error('missing tooltip config', name);
      }
      let text = config.text;
      let props =  {
        theme: 'light',
        animation: 'scale',
        allowHTML: true,
         touch: true,
        trigger: 'manual',
       
        
      };  

      props.onHide = (instance) => {
        // ...
  //   console.log("tippy onHide", instance)
        // instance.disable();
     //  this.hide();
        //  tippy.hideAll(instance)
      };
      props.onShow = (instance) => {
        // ...
       console.log("tippy onShow", instance)
        // instance.disable();
      // this.hide();
        //  tippy.hideAll(instance)
      };

      if (config.props) {
        props = { ...props, ...config.props };
      }
      if (config.slotName) {
      }
      props.content = text;
      //  $el.css({ 'text-decoration': 'underline' });

      //if (text !== '') {
      let t = tippy($el[0], props);
      t.disable();
      this.helpTooltips.push({ instance: t, name: name });
      // }
    });
  }
}
