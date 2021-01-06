/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var purecss_build_pure_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! purecss/build/pure-min.css */ "./node_modules/purecss/build/pure-min.css");
/* harmony import */ var purecss_build_grids_responsive_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! purecss/build/grids-responsive-min.css */ "./node_modules/purecss/build/grids-responsive-min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration */ "./src/js/configuration.js");
/* harmony import */ var _slotmachine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slotmachine */ "./src/js/slotmachine.js");
/* harmony import */ var _resultparser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resultparser */ "./src/js/resultparser.js");
/* harmony import */ var _tricknames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tricknames */ "./src/js/tricknames.js");
/* harmony import */ var _trickdata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trickdata */ "./src/js/trickdata.js");
/* harmony import */ var _tricklist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tricklist */ "./src/js/tricklist.js");
/* harmony import */ var _tooltips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tooltips */ "./src/js/tooltips.js");
/* harmony import */ var _modalscreens__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modalscreens */ "./src/js/modalscreens.js");
/* harmony import */ var _audioplayer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./audioplayer */ "./src/js/audioplayer.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }














var CONFIG = "";

var GrindTrickRandomizer = /*#__PURE__*/function () {
  function GrindTrickRandomizer() {
    _classCallCheck(this, GrindTrickRandomizer);

    this.$startScreen = $("#l-content-modal");
    this.$randomizeButton = $("#randomizeButton");
    this.$randomizeButtonStart = $("#randomizeButtonStart");
    this.$randomizeButtonSlots = $("#randomizeButton2");
    this.$soundOnOff = $("#sound");
    this.$loadingScreen = $("#loading-screen");
    this.$aboutBtn = $("#aboutBtn");
    this.$trickNamingBtn = $("#trickNamingBtn");
    this.$configButton = $("#configButton");
    this.$tricklistBtn = $("#tricklistBtn");
    this.$tricklistBtnStart = $("#tricklistButtonStart");
    this.$addTricklistBtn = $("#addTricklistBtn");
    this.$helpBtn = $("#helpButton");
    this.$abortButton = $("#abortButton");
    this.$endScreen = $("#endScreen");
    this.configurator = new _configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration();
    this.slotSpeed = this.configurator.getSpeed();
    this.includedTricks = this.configurator.getIncludedTricks();
    this.audioplayer = new _audioplayer__WEBPACK_IMPORTED_MODULE_12__.Audioplayer(this.$soundOnOff);
    this.slotMachine = new _slotmachine__WEBPACK_IMPORTED_MODULE_5__.SlotMachine(this.slotSpeed, this.includedTricks);
    this.resultParser = new _resultparser__WEBPACK_IMPORTED_MODULE_6__.ResultParser();
    this.trickNames = new _tricknames__WEBPACK_IMPORTED_MODULE_7__.Tricknames();
    this.tricklist = new _tricklist__WEBPACK_IMPORTED_MODULE_9__.Tricklist(this.$tricklistBtn);
    this.tooltips = new _tooltips__WEBPACK_IMPORTED_MODULE_10__.Tooltips(this.$helpBtn, this);
    this.modalScreen = new _modalscreens__WEBPACK_IMPORTED_MODULE_11__.ModalScreen();
    this.trickdata = new _trickdata__WEBPACK_IMPORTED_MODULE_8__.Trickdata();
    CONFIG = this.trickdata.get();
    this.slotMachineResult = {
      parsed: "",
      orig: ""
    };
  }

  _createClass(GrindTrickRandomizer, [{
    key: "init",
    value: function init() {
      this.audioplayer.init(this.configurator.getSound());
      this.$loadingScreen.fadeOut("slow");
      this.registerListener();
    }
  }, {
    key: "registerListener",
    value: function registerListener() {
      var _this = this;

      $(".bog-slot").on("click", function (e) {
        if (_this.isEndScreen) {
          var onResultChange = function onResultChange() {
            _this.$addTricklistBtn.removeClass("pure-button-disabled");

            _this.showEndScreen();
          };

          _this.slotMachine.onClickSlot($(e.currentTarget), {
            scope: _this,
            cb: onResultChange
          });
        }
      });
      this.$randomizeButton.on("click", function (e) {
        e.preventDefault();

        _this.onClickStart();
      });
      this.$randomizeButtonStart.on("click", function (e) {
        e.preventDefault();

        _this.onClickStart();
      });
      this.$randomizeButtonSlots.on("click", function (e) {
        e.preventDefault();

        _this.onClickStart();
      });
      this.$aboutBtn.on("click", function (e) {
        e.preventDefault();

        _this.modalScreen.show("about", "About");
      });
      this.$trickNamingBtn.on("click", function (e) {
        e.preventDefault();

        _this.modalScreen.show("reference", "Tricktionary");
      });
      this.$configButton.on("click", function (e) {
        e.preventDefault();

        _this.modalScreen.show("configuration", "Configuration");
      });
      this.$tricklistBtn.on("click", function (e) {
        e.preventDefault();

        _this.modalScreen.show("tricklist", "Trick List");
      });
      this.$tricklistBtnStart.on("click", function (e) {
        e.preventDefault();

        _this.modalScreen.show("tricklist", "Trick List");
      });
      this.$abortButton.on("click", function (e) {
        e.preventDefault();
        location.reload();
      });
      document.body.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();

          if (!_this.$randomizeButton.hasClass("pure-button-disabled")) {
            _this.onClickStart();
          }
        }
      });
      this.$soundOnOff.on("click", function (e) {
        e.preventDefault();
        $("#soundIconOn").toggle();
        $("#soundIconOff").toggle();

        if ($("#soundIconOff").is(":visible")) {
          _this.turnSoundOff();
        } else {
          _this.turnSoundOn();
        }
      });

      if (localStorage.getItem("sound") === "on") {
        this.$soundOnOff.trigger("click");
      }

      this.$addTricklistBtn.on("click", function () {
        _this.addToTricklist();

        _this.$addTricklistBtn.addClass("pure-button-disabled");
      });
    }
  }, {
    key: "addToTricklist",
    value: function addToTricklist() {
      this.modalScreen.show("tricklist", "Trick List");
      this.tricklist.addTrick(this.slotMachineResult.parsed, this.slotMachineResult.orig);
    }
  }, {
    key: "turnSoundOn",
    value: function turnSoundOn() {
      localStorage.setItem("sound", "on");
      this.$soundOnOff.addClass("pure-button-active").css({
        opacity: 1
      });
      this.audioplayer.unmute();
    }
  }, {
    key: "turnSoundOff",
    value: function turnSoundOff() {
      localStorage.setItem("sound", "off");
      this.$soundOnOff.removeClass("pure-button-active").css({
        opacity: 0.5
      });
      this.audioplayer.mute();
    }
  }, {
    key: "onClickStart",
    value: function onClickStart() {
      var _this2 = this;

      if (!this.slotMachine.isValidState()) {
        return false;
      }

      this.$startScreen.hide();
      this.modalScreen.hide();
      this.$helpBtn.addClass("pure-button-disabled");
      this.$configButton.addClass("pure-button-disabled");
      this.$randomizeButton.addClass("pure-button-disabled");
      this.isEndScreen = false;
      this.audioplayer.stop();
      this.$addTricklistBtn.removeClass("pure-button-disabled");

      if (this.$soundOnOff.hasClass("pure-button-active")) {
        this.audioplayer.play("start");
      }

      this.hideEndScreen();
      this.slotMachine.run().then(function (results) {
        _this2.$helpBtn.removeClass("pure-button-disabled");

        _this2.$configButton.removeClass("pure-button-disabled");

        _this2.$randomizeButton.removeClass("pure-button-disabled");

        _this2.showEndScreen();
      })["catch"](function (error) {
        console.error("catch", error);
      });
    }
  }, {
    key: "getTricktionaryEntries",
    value: function getTricktionaryEntries(slots, result) {
      var html = "";
      var htmlRows = [];
      var approach = slots.filter(function (s) {
        return s && s.name === "Approach";
      })[0] || null;
      var spinTo = slots.filter(function (s) {
        return s && s.name === "SpinTo";
      })[0] || null;
      var grind = slots.filter(function (s) {
        return s && s.name === "Grind";
      })[0] || null;
      var grindSynonymData = CONFIG.GRIND_SYNONYMS_THUMB.filter(function (s) {
        return result.parsed.includes(s.name);
      })[0];
      var grindVariation = slots.filter(function (s) {
        return s && s.name === "GrindVariation";
      })[0] || null;
      var spinOff = slots.filter(function (s) {
        return s && s.name === "SpinOff";
      })[0] || null;

      if (approach) {
        var approachName = approach.winner.name;
        var switchTxt = approachName.includes("Switch") ? "<b>Switch</b>: ".concat(CONFIG.GLOSSARY["Switch"], " <br/>") : "";
        switchTxt = switchTxt === "" && approachName.includes("Natural") ? "<b>Natural</b>: ".concat(CONFIG.GLOSSARY["Natural"], " <br/>") : switchTxt;
        var fakieTxt = approachName.includes("Fakie") ? "<b>Fakie</b>: ".concat(CONFIG.GLOSSARY["Fakie"], " <br/>") : "";
        fakieTxt = fakieTxt === "" && approachName.includes("Forwards") ? "<b>Forwards</b>: ".concat(CONFIG.GLOSSARY["Forwards"], " <br/>") : fakieTxt;
        htmlRows.push("".concat(fakieTxt).concat(switchTxt));
      }

      if (spinTo) {
        var spinToName = spinTo.winner.name;
        var inSpinTxt = spinToName.includes("Inspin") ? "<b>Inspin</b>: ".concat(CONFIG.GLOSSARY["Inspin"], " <br/>") : "";
        var outSpinTxt = spinToName.includes("Outspin") ? "<b>Outspin</b>: ".concat(CONFIG.GLOSSARY["Outspin"], " <br/>") : "";
        htmlRows.push("".concat(inSpinTxt).concat(outSpinTxt));
      }

      if (grind) {
        var grindName = grind.winner.name;
        var grindData = CONFIG.GRINDS.filter(function (g) {
          return g.name === grindName;
        })[0];
        var name = "";
        var data = null;

        if (grindSynonymData) {
          data = grindSynonymData;
        } else {
          data = grindData;
        }

        var cleanedName = data.name.replace(/BS /, "Backside ");
        cleanedName = cleanedName.replace(/FS /, "Frontside ");
        htmlRows.push("<b>".concat(cleanedName, "</b>: ").concat(data.comment ? data.comment : "", "\n       ").concat(data.thumbUrl ? "<img height=250 width=250 src='" + data.thumbUrl + "'></img>" : "", "     "));
      }

      if (grindVariation) {
        var _name = grindVariation.winner.name;

        if (grindSynonymData && grindSynonymData.isTopside) {// skip
        } // to do: parse combos: rough+topside..


        var varData = CONFIG.VARIATIONS.filter(function (g) {
          return g.name === _name;
        })[0];
        htmlRows.push("<b>".concat(_name, "</b>: ").concat(varData && varData.comment ? varData.comment : "", "  "));
      }

      return htmlRows.join("<br/>");
    }
  }, {
    key: "showEndScreen",
    value: function showEndScreen() {
      var animateBottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.isEndScreen = true;
      var winners = this.slotMachine.slots.map(function (s) {
        if (s.state === "enabled" || s.state === "locked") {
          return s;
        } else {
          return null;
        }
      });
      this.slotMachineResult = this.resultParser.parse(winners);
      var text = this.getTricktionaryEntries(winners, this.slotMachineResult);
      this.tooltips.updateTooltip("endScreen", text);
      this.$endScreen.find("#endscreen-text").html(this.slotMachineResult.parsed);
      this.$endScreen.fadeIn(500, function () {
        if (animateBottom) {
          $(".l-content").animate({
            scrollTop: $(document).height()
          }, "fast");
        }
      });
    }
  }, {
    key: "hideEndScreen",
    value: function hideEndScreen() {
      this.$endScreen.hide();
    }
  }]);

  return GrindTrickRandomizer;
}();

$(document).ready(function () {
  var s = new GrindTrickRandomizer();
  s.init();
});

/***/ }),

/***/ "./src/js/audioplayer.js":
/*!*******************************!*\
  !*** ./src/js/audioplayer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Audioplayer": () => /* binding */ Audioplayer
/* harmony export */ });
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SOUND_PATH = "https://grind-trick-generator.herokuapp.com/assets/sounds/";
var SOUNDS = [{
  start: "joker-full-stretched.mp3"
  /* loop: "joker-loop.mp3", end: "joker-end.mp3" */

}, {
  start: "spark-start.mp3",
  loop: "spark-loop.mp3",
  end: "spark-end.mp3"
}, {
  start: "juhui-start.mp3",
  loop: "juhui-loop.mp3",
  end: "juhui-end.mp3"
}];
var Audioplayer = /*#__PURE__*/function () {
  function Audioplayer($soundButton) {
    _classCallCheck(this, Audioplayer);

    this.$soundButton = $soundButton;
    this.howler = {};
  }

  _createClass(Audioplayer, [{
    key: "init",
    value: function init() {
      var _this = this;

      var soundIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.howler = {};
      var index = soundIndex;
      this.howler.start = new howler__WEBPACK_IMPORTED_MODULE_0__.Howl({
        preload: true,
        src: [SOUND_PATH + SOUNDS[index].start],
        onend: function onend() {
          if (SOUNDS[index].loop) {
            _this.playAudio("loop");
          }
        }
      });

      if (SOUNDS[index].loop) {
        this.howler.loop = new howler__WEBPACK_IMPORTED_MODULE_0__.Howl({
          preload: true,
          loop: true,
          src: [SOUND_PATH + SOUNDS[index].loop],
          onend: function onend() {
            if (_this.isEndScreen) {
              _this.howler.loop.stop();

              _this.playAudio("end");
            }
          }
        });
      }

      if (SOUNDS[index].end) {
        this.howler.end = new howler__WEBPACK_IMPORTED_MODULE_0__.Howl({
          preload: true,
          src: [SOUND_PATH + SOUNDS[index].end]
        });
      }
    }
  }, {
    key: "mute",
    value: function mute() {
      var muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.howler.end) {
        this.howler.end.mute(muted);
      }

      if (this.howler.loop) {
        this.howler.loop.mute(muted);
      }

      this.howler.start.mute(muted);
    }
  }, {
    key: "unmute",
    value: function unmute() {
      this.mute(false);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.howler.end) {
        this.howler.end.stop();
      }

      if (this.howler.loop) {
        this.howler.loop.stop();
      }

      this.howler.start.stop();
    }
  }, {
    key: "play",
    value: function play(part) {
      this.howlerAudioSoundId = this.howler[part].play();
    }
  }]);

  return Audioplayer;
}();

/***/ }),

/***/ "./src/js/configuration.js":
/*!*********************************!*\
  !*** ./src/js/configuration.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Configuration": () => /* binding */ Configuration
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Configuration = /*#__PURE__*/function () {
  function Configuration() {
    _classCallCheck(this, Configuration);

    this.$soundSelect = $("#soundSelect");
    this.$speedSelect = $("#speedSelect");
    this.$submit = $("#config-submit");
    this.$reset = $("#config-reset");
    this.$roughSelect = $("#rough-select");
    this.$toughSelect = $("#tough-select");
    this.$heelRollSelect = $("#heelRoll-select");
    this.$spins360Select = $("#spins360-select");
    this.$spins540Select = $("#spins540-select");
    this.$negativeSelect = $("#negative-select");
    this.$switchSelect = $("#switch-select");
    this.$channelSelect = $("#channel-select");
    this.$christSelect = $("#christ-select");
    this.configs = [//   { $dom: this.$levelSelect, key: "levelSelect", value: "" },
    {
      $dom: this.$soundSelect,
      key: "soundSelect",
      value: 0
    }, {
      $dom: this.$speedSelect,
      key: "speedSelect",
      value: 0
    }, {
      $dom: this.$switchSelect,
      key: "switchCheckbox",
      value: "on"
    }, {
      $dom: this.$negativeSelect,
      key: "negativeCheckbox",
      value: "on"
    }, {
      $dom: this.$roughSelect,
      key: "roughCheckbox",
      value: "off"
    }, {
      $dom: this.$toughSelect,
      key: "toughCheckbox",
      value: "off"
    }, {
      $dom: this.$spins360Select,
      key: "spins360Checkbox",
      value: "on"
    }, {
      $dom: this.$heelRollSelect,
      key: "heelRollCheckbox",
      value: "off"
    }, {
      $dom: this.$spins540Select,
      key: "spins540Checkbox",
      value: "off"
    }, {
      $dom: this.$channelSelect,
      key: "channelCheckbox",
      value: "off"
    }, {
      $dom: this.$christSelect,
      key: "christCheckbox",
      value: "off"
    }];
    this.initStoreables();
    this.registerListener();
  }

  _createClass(Configuration, [{
    key: "initStoreables",
    value: function initStoreables() {
      var _this = this;

      this.configs.forEach(function (param) {
        var val = localStorage.getItem(param.key) || param.value;

        if (param.key.includes("Checkbox")) {
          _this.initCheckboxes(val, param);
        } else {
          _this.initSelects(val, param);
        }
      });
    }
  }, {
    key: "initSelects",
    value: function initSelects(val, param) {
      var _this2 = this;

      if (val) {
        param.$dom.val(val);
      }

      param.value = param.$dom.val();
      param.$dom.on("change", function (e) {
        _this2.$submit.removeClass("pure-button-disabled");

        param.value = param.$dom.val();
      });
    }
  }, {
    key: "initCheckboxes",
    value: function initCheckboxes(val, param) {
      var _this3 = this;

      val = val && val === "on" ? "on" : "off";

      if (val === "on") {
        param.$dom.prop("checked", true);
      } else {
        param.$dom.prop("checked", false);
      }

      param.value = val;
      param.$dom.on("change", function (e) {
        _this3.$submit.removeClass("pure-button-disabled");

        param.value = param.$dom.is(":checked") ? "on" : "off";
      });
    }
  }, {
    key: "registerListener",
    value: function registerListener() {
      var _this4 = this;

      this.$submit.on("click", function (e) {
        e.preventDefault();

        _this4.configs.forEach(function (param) {
          if (param.value) {
            localStorage.setItem(param.key, param.value);
          }
        });

        location.reload();
      });
      this.$reset.on("click", function (e) {
        localStorage.clear();
        location.reload();
      });
    }
  }, {
    key: "getSound",
    value: function getSound() {
      var idx = this.configs.filter(function (s) {
        return s.key == "soundSelect";
      })[0].value;
      return idx > 0 ? idx - 1 : 0;
    }
  }, {
    key: "getSpeed",
    value: function getSpeed() {
      var value = this.configs.filter(function (s) {
        return s.key == "speedSelect";
      })[0].value;
      return value;
    }
  }, {
    key: "getIncludedTricks",
    value: function getIncludedTricks() {
      return {
        "switch": this.$switchSelect.is(":checked") ? "on" : "off",
        negative: this.$negativeSelect.is(":checked") ? "on" : "off",
        rough: this.$roughSelect.is(":checked") ? "on" : "off",
        tough: this.$toughSelect.is(":checked") ? "on" : "off",
        heelRoll: this.$heelRollSelect.is(":checked") ? "on" : "off",
        spins360: this.$spins360Select.is(":checked") ? "on" : "off",
        spins540: this.$spins540Select.is(":checked") ? "on" : "off",
        channel: this.$channelSelect.is(":checked") ? "on" : "off",
        christ: this.$christSelect.is(":checked") ? "on" : "off"
      };
    }
  }]);

  return Configuration;
}();

/***/ }),

/***/ "./src/js/modalscreens.js":
/*!********************************!*\
  !*** ./src/js/modalscreens.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalScreen": () => /* binding */ ModalScreen
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MODAL_WINDOW_ICONS = {
  configuration: "fa-wrench",
  about: "fa-info-circle",
  reference: "fa-book",
  tricklist: "fa-list"
};
var ModalScreen = /*#__PURE__*/function () {
  function ModalScreen() {
    var _this = this;

    _classCallCheck(this, ModalScreen);

    this.$container = $("#modal-screen-window");
    this.$contents = $(".modal-screen-text");
    this.$closeBtn = $("#modal-screen-close-btn");
    this.$title = $("#modal-screen-title");
    this.$titleIcon = $("#modal-screen-title-icon");
    this.currentWindow = "";
    this.$closeBtn.on("click", function (e) {
      e.preventDefault();

      _this.hide();
    });
  }

  _createClass(ModalScreen, [{
    key: "show",
    value: function show() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      this.currentWindow = id;
      this.$title.html(title);
      this.$titleIcon.removeClass().addClass("fa fa-1x " + MODAL_WINDOW_ICONS[id]);
      $("#modal-screen--" + id).show();
      this.$container.show();
      $("html, body").animate({
        scrollTop: 0
      }, "fast");
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.currentWindow) {
        $("#modal-screen--" + this.currentWindow).hide();
      }

      this.$container.hide();
      $("html, body").animate({
        scrollTop: 0
      }, "fast");
    }
  }]);

  return ModalScreen;
}();

/***/ }),

/***/ "./src/js/resultparser.js":
/*!********************************!*\
  !*** ./src/js/resultparser.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultParser": () => /* binding */ ResultParser
/* harmony export */ });
/* harmony import */ var _testdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testdata.js */ "./src/js/testdata.js");
/* harmony import */ var _trickdata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trickdata.js */ "./src/js/trickdata.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CONFIG = null;
var ResultParser = /*#__PURE__*/function () {
  function ResultParser() {
    _classCallCheck(this, ResultParser);

    this.trickdata = new _trickdata_js__WEBPACK_IMPORTED_MODULE_1__.Trickdata();
    CONFIG = this.trickdata.get();
  }

  _createClass(ResultParser, [{
    key: "parse",
    value: function parse() {
      var slots = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var parsed = "";
      var resultOrig = [];
      var tokens = [];
      var approach = slots.filter(function (s) {
        return s && s.name === "Approach";
      })[0] || null;
      var spinTo = slots.filter(function (s) {
        return s && s.name === "SpinTo";
      })[0] || null;
      var grind = slots.filter(function (s) {
        return s && s.name === "Grind";
      })[0] || null;
      var grindVariation = slots.filter(function (s) {
        return s && s.name === "GrindVariation";
      })[0] || null;
      var spinOff = slots.filter(function (s) {
        return s && s.name === "SpinOff";
      })[0] || null;

      if (!approach) {
        approach = {
          winner: {
            name: "Forwards & Natural"
          }
        };
      }

      if (approach) {
        resultOrig.push(approach.winner.name);
      }

      if (spinTo) {
        resultOrig.push(spinTo.winner.name);
      }

      if (grindVariation) {
        resultOrig.push(grindVariation.winner.name + " " + grind.winner.name);
      } else {
        resultOrig.push(grind.winner.name);
      }

      if (spinOff) {
        resultOrig.push(spinOff.winner.name);
      }

      var isGrooveGrind = grind.winner.isGrooveGrind === true;
      var isFakie = !!(approach && approach.winner.isFakie === true);
      var isSwitch = !!(approach && approach.winner.isSwitch === true);
      var hasSpin = !!spinTo;
      var isInspin = !!(spinTo && spinTo.winner.name.includes("Inspin") === true);
      var isOutspin = !!(spinTo && spinTo.winner.name.includes("Outspin") === true);
      var isReverse = false;

      if (!isGrooveGrind && !isFakie) {
        isReverse = spinTo && (spinTo.winner.name.includes("180") || spinTo.winner.name.includes("540"));
      } else if (!isGrooveGrind && isFakie) {
        isReverse = spinTo && spinTo.winner.name.includes("360");
      }

      var isTopside = grindVariation && grindVariation.winner.name.includes("Topside");
      var isNegative = grindVariation && grindVariation.winner.name.includes("Negative");
      var isRough = grindVariation && grindVariation.winner.name.includes("Rough");
      var approachName = this.parseApproachName(approach, isFakie, hasSpin, isGrooveGrind);
      var spinName = this.parseSpinName(spinTo, isGrooveGrind, isInspin, isOutspin, isFakie);

      if (approachName && (spinName === "Halfcab" || spinName === "Fullcab" || spinName === "True Halfcab" || spinName === "True Fullcab")) {
        approachName = approachName.replace("Fakie", "").replace(" ", "");
      }

      if (approachName) {
        tokens.push(approachName);
      }

      if (spinName) {
        tokens.push(spinName);
      }

      if (grindVariation) {
        tokens.push(grindVariation.winner.name);
      }

      if (grind) {
        tokens.push(grind.winner.name);
      }

      if (spinOff) {
        tokens.push("to ".concat(this.parseSpinOff(spinOff, hasSpin, isInspin), " out"));
      }

      var result = tokens.join(" ");
      result = this.replaceGrindSynonyms(result, grind.winner.name, {
        isReverse: isReverse || false,
        isTopside: isTopside || false,
        isNegative: isNegative || false,
        isRough: isRough || false
      });
      result = this.parseSpinsAfter(result); // Fakie Switch Outspin 360 Tough Soul to 180 revert out
      // Zerospin BS Pudslide

      result = result.replace("Topside", "Top");
      result = result.replace("Alley-oop", "AO");
      result = result.replace(/  /g, " ");
      result = result.replace(/  /g, " ");
      return {
        parsed: result.trim(),
        orig: resultOrig.join(" | ")
      };
    }
  }, {
    key: "parseSpinsAfter",
    value: function parseSpinsAfter(result) {
      //spinOff
      result = result.replace("to Outspin 180", "to 180");
      result = result.replace("to Inspin 180", "to 180");
      result = result.replace("to Outspin 360", "to 360");
      result = result.replace("to Inspin 360", "to 360");
      result = result.replace("to Outspin 540", "to 540");
      result = result.replace("to Inspin 540", "to 540");
      result = result.replace("to Outspin 90 out", "");
      result = result.replace("to Inspin 90 out", "");
      result = result.replace("to Outspin 270", "to 270");
      result = result.replace("to Inspin 270", "to 270");
      result = result.replace("to Outspin 450", "to 450");
      result = result.replace("to Inspin 450", "to 450"); // spinTo

      result = result.replace("Inspin 360", "360");
      result = result.replace("Outspin 90", "");
      result = result.replace("Inspin 90", "");
      result = result.replace("Outspin 270", "270");
      result = result.replace("Inspin 270", "270");
      result = result.replace("Outspin 450", "450");
      result = result.replace("Inspin 450", "450");
      result = result.replace("Outspin 630", "630");
      result = result.replace("Inspin 630", "630");
      return result;
    }
  }, {
    key: "parseApproachName",
    value: function parseApproachName(approach, isFakie, hasSpin, isGrooveGrind) {
      var approachName = approach && approach.winner.name ? approach.winner.name : "";

      if (approachName === "Forwards & Natural") {
        approachName = "";
      } else if (approachName === "Fakie & Natural") {
        approachName = "Fakie";
      } else if (approachName === "Forwards & Switch") {
        approachName = "Switch";
      } else if (approachName === "Fakie & Switch") {
        approachName = "Fakie Switch";
      }

      if (isFakie && !hasSpin && !isGrooveGrind) {
        approachName = "Zerospin";

        if (approach.winner.name.includes("Switch")) {
          approachName = "Switch Zerospin";
        }
      }

      return approachName;
    }
  }, {
    key: "parseSpinName",
    value: function parseSpinName(spinTo, isGrooveGrind, isInspin, isOutspin, isFakie) {
      var spinName = spinTo && spinTo.winner.name ? spinTo.winner.name : "";

      if (!isGrooveGrind && !isFakie) {
        if (isInspin && spinTo && spinTo.winner.name.includes("180")) {
          spinName = "Alley-oop";
        } else if (!isInspin && spinTo && spinTo.winner.name.includes("180")) {
          spinName = "True";
        }

        if (isInspin && spinTo && spinTo.winner.name.includes("540")) {
          spinName = "540 Alley-oop";
        } else if (!isInspin && spinTo && spinTo && spinTo.winner.name.includes("540")) {
          spinName = "540 True";
        }

        if (!isInspin && spinTo && spinTo.winner.name.includes("360")) {
          spinName = "Hurricane";
        }

        if (isInspin && spinTo && spinTo.winner.name.includes("360") && !isFakie && !isGrooveGrind) {
          spinName = "360";
        }
      }

      if (!isGrooveGrind && isFakie) {
        if (isInspin && spinTo && spinTo.winner.name.includes("180")) {
          spinName = "Halfcab";
        }

        if (isInspin && spinTo && spinTo.winner.name.includes("360")) {
          spinName = "Fullcab";
        }

        if (isOutspin && spinTo && spinTo.winner.name.includes("180")) {
          spinName = "True Halfcab";
        }

        if (isOutspin && spinTo && spinTo.winner.name.includes("360")) {
          spinName = "True Fullcab";
        }
      }

      return spinName;
    }
  }, {
    key: "parseSpinOff",
    value: function parseSpinOff(spinOff, hasSpin, isInspin) {
      var spinOffStr = spinOff.winner.name;

      if (hasSpin) {
        // get revert out
        if (isInspin && spinOff.winner.name.includes("Inspin")) {
          spinOffStr = spinOffStr.replace("Inspin", "");
        }

        if (isInspin && spinOff.winner.name.includes("Outspin")) {
          spinOffStr = spinOffStr.replace("Outspin", "");
          spinOffStr += " revert";
        }

        if (!isInspin && spinOff.winner.name.includes("Inspin")) {
          spinOffStr = spinOffStr.replace("Inspin", "");
          spinOffStr += " revert";
        }

        if (!isInspin && spinOff.winner.name.includes("Outspin")) {
          spinOffStr = spinOffStr.replace("Outspin", "");
        }
      }

      return spinOffStr;
    }
  }, {
    key: "meetsSynonymProps",
    value: function meetsSynonymProps(syn, props) {
      // grind meets requirements
      var isValid = true;

      if (syn.isReverse === true && props.isReverse !== true) {
        isValid = false;
      }

      if (syn.isTopside === true && props.isTopside !== true) {
        isValid = false;
      }

      if (syn.isNegative === true && props.isNegative !== true) {
        isValid = false;
      }

      if (syn.isRough === true && props.isRough !== true) {
        isValid = false;
      }

      return isValid;
    }
  }, {
    key: "replaceGrindSynonyms",
    value: function replaceGrindSynonyms(resultStr, grindName, props) {
      var _this = this;

      var result = resultStr;
      var candidates = CONFIG.GRIND_SYNONYMS.filter(function (syn) {
        return syn.name === grindName;
      }); // console.log("candidates",candidates)

      var synonym = null;
      candidates.forEach(function (syn) {
        if (synonym === null && _this.meetsSynonymProps(syn, props)) {
          synonym = syn;
        }
      });

      if (synonym) {
        //   console.log('not iffed ß ', resultStr, synonym );
        // if (isValid) {
        // console.log('iffed ß ', entry);
        result = result.replace(grindName, synonym.newName);

        if (synonym.isReverse) {
          result = result.replace("Alley-oop", "");
        }

        if (synonym.isTopside) {
          result = result.replace("Topside", "");
        }

        if (synonym.isNegative) {
          result = result.replace("Negative&", "");
          result = result.replace("Negative", "");
        }

        if (synonym.isRough) {
          result = result.replace("Rough", "");
        }
      }

      return result;
    }
  }]);

  return ResultParser;
}();

function testParser() {
  var s = new ResultParser();
  _testdata_js__WEBPACK_IMPORTED_MODULE_0__.testData.forEach(function (entry, i) {
    if (s.parse(entry.data).parsed !== entry.expected) {
      console.error(i, entry, s.parse(entry.data));
    }
  });
}

testParser();

/***/ }),

/***/ "./src/js/slotmachine.js":
/*!*******************************!*\
  !*** ./src/js/slotmachine.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlotMachine": () => /* binding */ SlotMachine
/* harmony export */ });
/* harmony import */ var jquery_slotmachine_dist_jquery_slotmachine_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-slotmachine/dist/jquery.slotmachine.min.css */ "./node_modules/jquery-slotmachine/dist/jquery.slotmachine.min.css");
/* harmony import */ var jquery_slotmachine_dist_slotmachine_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-slotmachine/dist/slotmachine.min */ "./node_modules/jquery-slotmachine/dist/slotmachine.min.js");
/* harmony import */ var jquery_slotmachine_dist_slotmachine_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_slotmachine_dist_slotmachine_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_slotmachine_dist_jquery_slotmachine_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-slotmachine/dist/jquery.slotmachine.min */ "./node_modules/jquery-slotmachine/dist/jquery.slotmachine.min.js");
/* harmony import */ var jquery_slotmachine_dist_jquery_slotmachine_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_slotmachine_dist_jquery_slotmachine_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _trickdata_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trickdata.js */ "./src/js/trickdata.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var CONFIG = null;
var SLOT_STATES = {
  enabled: "enabled",
  disabled: "disabled",
  locked: "locked",
  unavailable: "unavailable"
};
var SLOT_MACHINE_NO_OF_SPINS = 1;
var SlotMachine = /*#__PURE__*/function () {
  function SlotMachine(slotSpeed, includedTricks) {
    _classCallCheck(this, SlotMachine);

    this.includedTricks = includedTricks;
    this.slotSpeed = slotSpeed;
    this.$slots = $(".bog-slot");
    this.$approaches = $("#approaches");
    this.$spinsToGrind = $("#spinsToGrind");
    this.$grinds = $("#grinds");
    this.$grindVariations = $("#grindVariations");
    this.$spinsOffGrind = $("#spinsOffGrind");
    this.trickdata = new _trickdata_js__WEBPACK_IMPORTED_MODULE_3__.Trickdata();
    CONFIG = this.trickdata.get();
    this.slots = [];
    this.initSlots();
  }

  _createClass(SlotMachine, [{
    key: "initSlots",
    value: function initSlots() {
      this.slots = [{
        name: "Grind",
        next: 1,
        machine: null,
        dom: this.$grinds,
        data: CONFIG.GRINDS_FOR_SLOTS,
        state: SLOT_STATES.enabled,
        winner: null
      }, {
        name: "GrindVariation",
        next: 2,
        machine: null,
        dom: this.$grindVariations,
        data: null,
        // depends on grind
        state: SLOT_STATES.enabled,
        winner: null
      }, {
        name: "Approach",
        next: 3,
        machine: null,
        dom: this.$approaches,
        data: CONFIG.APPROACHES,
        state: SLOT_STATES.enabled,
        winner: null
      }, {
        name: "SpinTo",
        next: 4,
        machine: null,
        dom: this.$spinsToGrind,
        data: CONFIG.SPINS_TO_GRIND,
        state: SLOT_STATES.enabled,
        winner: null
      }, {
        name: "SpinOff",
        machine: null,
        dom: this.$spinsOffGrind,
        data: CONFIG.SPINS_OFF_GRIND,
        state: SLOT_STATES.enabled,
        winner: null
      }];
      this.setSlotStates();
    }
  }, {
    key: "setSlotStates",
    value: function setSlotStates() {
      var _this = this;

      this.slots.forEach(function (slot) {
        _this.setSlotState(slot.name, slot.state, slot.dom.closest(".bog-slot"));
      });
    }
  }, {
    key: "onSpinStart",
    value: function onSpinStart() {
      this.slots.forEach(function (slot) {
        if (slot.state !== SLOT_STATES.locked) {
          slot.dom.closest(".bog-slot-header").removeClass("bog-slot-visible");
        }
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      this.onSpinStart();
      return new Promise(function (resolve, reject) {
        var nextId = _this2.getFirstSlotIndex();

        _this2.startSlot(nextId, resolve);
      });
    }
  }, {
    key: "onClickSlot",
    value: function onClickSlot($slot, callback) {
      var name = $slot.data("name");
      var index = this.getSlotIndexByName(name);
      var slot = this.slots[index];
      var isClickable = this.slots[index].state !== SLOT_STATES.unavailable;

      if (isClickable) {
        this.toggleSlotState(name, $slot, callback);
      }
    }
  }, {
    key: "getFirstSlotIndex",
    value: function getFirstSlotIndex() {
      var grindSlot = this.slots[0];

      if (grindSlot.state === SLOT_STATES.locked) {
        return this.getNextSlotIndex(grindSlot);
      } else {
        return 0;
      }
    }
  }, {
    key: "getNextSlotIndex",
    value: function getNextSlotIndex(currentSlot) {
      var nextSlotId = -1;

      if (currentSlot && currentSlot.next) {
        var nextSlot = this.slots[currentSlot.next];
        var isSkipped = [SLOT_STATES.unavailable, SLOT_STATES.locked].includes(nextSlot.state);

        if (!isSkipped) {
          nextSlotId = currentSlot.next;
        } else {
          // console.log('recusrice getNextSlotId', currentSlot, nextSlot);
          nextSlotId = this.getNextSlotIndex(nextSlot);
        }
      }

      return nextSlotId;
    }
  }, {
    key: "getNextState",
    value: function getNextState(state, slotName) {
      var newState = "";

      if (state === SLOT_STATES.unavailable) {
        console.error("unavailable slot state", slotName, state);
      } else if (state === SLOT_STATES.enabled) {
        newState = SLOT_STATES.locked;
      } else if (state === SLOT_STATES.locked) {
        newState = slotName === "Grind" ? SLOT_STATES.enabled : SLOT_STATES.disabled;
      } else if (state === SLOT_STATES.disabled) {
        newState = SLOT_STATES.enabled;
      } else {
        console.error("invalid slot state", slotName, state);
      }

      return newState;
    }
  }, {
    key: "isValidState",
    value: function isValidState() {
      var isValid = true;
      var disabledSlots = this.slots.filter(function (s) {
        return s.state === SLOT_STATES.disabled;
      });
      var lockedSlots = this.slots.filter(function (s) {
        return s.state === SLOT_STATES.locked;
      });
      var enabledSlots = this.slots.filter(function (s) {
        return s.state === SLOT_STATES.enabled;
      });
      var unavailableSlots = this.slots.filter(function (s) {
        return s.state === SLOT_STATES.unavailable;
      });

      if (disabledSlots.length + lockedSlots.length + unavailableSlots.length === 5) {
        alert("At least one reel must be active and unlocked");
        return isValid = false;
      }

      return isValid;
    }
  }, {
    key: "toggleSlotState",
    value: function toggleSlotState(slotName, $slot, callback) {
      var index = this.getSlotIndexByName(slotName);
      var state = this.slots[index].state;
      var newState = this.getNextState(state, slotName);

      if (state === SLOT_STATES.unavailable) {//console.log('cant change slot');
      } else if (state === SLOT_STATES.enabled) {
        newState = SLOT_STATES.locked;
      } else if (state === SLOT_STATES.locked) {
        newState = slotName === "Grind" ? SLOT_STATES.enabled : SLOT_STATES.disabled;
      } else if (state === SLOT_STATES.disabled) {
        newState = SLOT_STATES.enabled;
      } else {
        console.error("invalid slot state", slotName, state);
      } //console.log(slotName + "  state " +state + "  newState " +newState)


      this.setSlotState(slotName, newState, $slot);

      if (state === SLOT_STATES.locked && newState === SLOT_STATES.disabled || state === SLOT_STATES.disabled && newState === SLOT_STATES.enabled) {
        callback.cb.call(callback.scope, false);
      }
    }
  }, {
    key: "getSlotIndexByName",
    value: function getSlotIndexByName(name) {
      var index = 0;
      var c = 0;
      this.slots.forEach(function (s) {
        if (s.name === name) {
          index = c;
        }

        c = c + 1;
      });
      return index;
    }
  }, {
    key: "setSlotState",
    value: function setSlotState(slotName, state, $slot) {
      var index = this.getSlotIndexByName(slotName);
      this.slots[index].state = state;
      var $header = $slot.find(".bog-slot-header"); // clear states in gui

      for (var _i = 0, _Object$entries = Object.entries(SLOT_STATES); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        $slot.removeClass("bog-slot-" + value);
      }

      $slot.addClass("bog-slot-" + state);
      var isHidden = [SLOT_STATES.unavailable, SLOT_STATES.disabled].includes(state);

      if (!isHidden) {
        $header.addClass("bog-slot-visible");
      } else {
        $header.removeClass("bog-slot-visible");
      }

      if (state === SLOT_STATES.enabled) {}

      if (state === SLOT_STATES.unavailable) {}

      if (state === SLOT_STATES.locked) {
        //$header.find('.slot-state-lock-icon').show();
        $slot.find(".slot-state-lock-bg-icon--locked ").show();
      } else {
        //$header.find('.slot-state-lock-icon').hide();
        $slot.find(".slot-state-lock-bg-icon--locked").hide();
      }

      if (state === SLOT_STATES.disabled) {
        $slot.find(".slot-state-lock-bg-icon--disabled").show();
      } else {
        $slot.find(".slot-state-lock-bg-icon--disabled").hide();
      }
    }
  }, {
    key: "onCompleteSlot",
    value: function onCompleteSlot(resolve, slot, activeNodeIndex) {
      var index = this.getSlotIndexByName(slot.name);
      var $active = slot.dom.find(".bogLink:eq(".concat(activeNodeIndex + 1, ")"));
      var theWinner = slot.data[$active.data("index") - 1];
      this.slots[index].winner = theWinner;
      var data = null;

      if (slot.name === "Grind") {
        // grind variations
        var filteredVariations = this.filterTrickConfiguration("GrindVariation", theWinner.variations);

        if (filteredVariations.length === 0) {
          var _index = this.getSlotIndexByName("GrindVariation");

          this.setSlotState("GrindVariation", SLOT_STATES.unavailable, this.slots[_index].dom.closest(".bog-slot"));
        }

        this.slots[1].data = filteredVariations; // approach

        this.slots[2].data = CONFIG.APPROACHES;

        if (theWinner.noSwitch === true) {
          this.slots[2].data = this.slots[2].data.filter(function (e) {
            return e.isSwitch === false;
          });
        } // spinTo


        var grindSlot = this.slots[this.getSlotIndexByName("Grind")];
        this.slots[3].data = this.trickdata.getSpinToData(grindSlot.winner); // spinOff

        this.slots[4].data = this.trickdata.getSpinOffData(grindSlot.winner);
      }

      if (slot.name === "Approach") {
        // spinTo
        var _grindSlot = this.slots[this.getSlotIndexByName("Grind")];
        var approachSlot = this.slots[this.getSlotIndexByName("Approach")];
        this.slots[3].data = this.trickdata.getSpinToData(_grindSlot.winner, approachSlot.winner); // spinOff

        this.slots[4].data = this.trickdata.getSpinOffData(_grindSlot.winner);
      }

      var nextId = this.getNextSlotIndex(slot);

      if (nextId > 0) {
        this.startSlot(nextId, resolve);
      } else {
        resolve(this.getSpinWinners());
      }
    }
  }, {
    key: "getSpinWinners",
    value: function getSpinWinners() {
      var winners = [];
      this.slots.forEach(function (slot) {
        if ([SLOT_STATES.enabled, SLOT_STATES.locked].includes(slot.state)) {
          winners.push({
            name: slot.name,
            winner: slot.winner
          });
        }
      });
      return winners;
    }
  }, {
    key: "startSlot",
    value: function startSlot(index, resolve) {
      var _this3 = this;

      var slotState = this.slots[index].state;

      if (slotState === SLOT_STATES.locked) {//this.slots[index].disabled = true;
      } else {
        this.renderSlot(index, this.slots[index].data);
        var $header = this.slots[index].dom.closest(".bog-slot-header");

        if ([SLOT_STATES.enabled].includes(slotState)) {
          $header.addClass("bog-slot-visible");
        }

        this.slots[index].machine.shuffle(5, function (activeNodeIndex) {
          _this3.onCompleteSlot(resolve, _this3.slots[index], activeNodeIndex);
        });
      }
    }
  }, {
    key: "filterLocked",
    value: function filterLocked(entries) {
      var variationSlot = this.slots[this.getSlotIndexByName("GrindVariation")];

      if (variationSlot.state === SLOT_STATES.locked) {
        entries = entries.filter(function (e) {
          var hasVariation = false;
          var vars = e.variations;

          if (vars && vars.filter(function (ee) {
            return ee.name === variationSlot.winner.name;
          }).length) {
            hasVariation = true;
          }

          return hasVariation;
        });
      }

      var spinToSlot = this.slots[this.getSlotIndexByName("SpinTo")];

      if (spinToSlot.state === SLOT_STATES.locked) {
        var isSoulSpin = this.isSoulSpin(spinToSlot.winner.name);
        entries = entries.filter(function (e) {
          if (e.isGrooveGrind && !isSoulSpin || !e.isGrooveGrind && isSoulSpin) {
            return true;
          } else {
            return false;
          }
        });
      }

      var spinOffSlot = this.slots[this.getSlotIndexByName("SpinOff")];

      if (spinOffSlot.state === SLOT_STATES.locked) {
        var _isSoulSpin = this.isSoulSpin(spinOffSlot.winner.name);

        entries = entries.filter(function (e) {
          if (e.isGrooveGrind && !_isSoulSpin || !e.isGrooveGrind && _isSoulSpin) {
            return true;
          } else {
            return false;
          }
        });
      }

      return entries;
    } // groove, soul spins have +/- 90

  }, {
    key: "isSoulSpin",
    value: function isSoulSpin(name) {
      var degree = name.replace(/\D/g, "");
      var isSoulSpin = false;
      var soulGrinds = CONFIG.SPINS_TO_GRIND.forEach(function (s) {
        var degreeLex = s.name.replace(/\D/g, "");

        if (degreeLex === degree) {
          isSoulSpin = true;
        }
      });
      return isSoulSpin;
    }
  }, {
    key: "filterTrickConfiguration",
    value: function filterTrickConfiguration(name, data) {
      var entries = data;

      if (name === "Grind") {
        entries = CONFIG.GRINDS_FOR_SLOTS;

        if (this.includedTricks.heelRoll === "off") {
          entries = entries.filter(function (e) {
            var isHeelRoll = e.name.includes("Wheelbarrow") || e.name.includes("Training Wheel") || e.name.includes("Hot Dog") || e.name.includes("Biscuit") || e.name.includes("Byn Soul") || e.name.includes("Sidewalk") || e.name.includes("Citric Acid");
            return !isHeelRoll;
          });
        }

        entries = this.filterLocked(entries); // check if locked grindvariation exists and filter that shit.
        // or locked spin (with 270/450)
      } else if (name === "SpinTo" || name === "SpinOff") {
        if (this.includedTricks.spins360 === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("360") && !e.name.includes("450");
          });
        }

        if (this.includedTricks.spins540 === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("540") && !e.name.includes("630");
          });
        }
      } else if (name === "Approach") {
        if (this.includedTricks["switch"] === "off") {
          entries = entries.filter(function (e) {
            return e.isSwitch !== true;
          });
        }
      } else if (name === "GrindVariation") {
        if (this.includedTricks.negative === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("Negative");
          });
        }

        if (this.includedTricks.rough === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("Rough");
          });
        }

        if (this.includedTricks.tough === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("Tough");
          });
        }

        if (this.includedTricks.channel === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("Channel");
          });
        }

        if (this.includedTricks.christ === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("Christ");
          });
        }
      }

      return entries;
    }
  }, {
    key: "renderSlot",
    value: function renderSlot() {
      var _this4 = this;

      var slotIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var filteredData = this.filterTrickConfiguration(this.slots[slotIndex].name, data);
      this.slots[slotIndex].data = filteredData;
      var $node = this.slots[slotIndex].dom;

      if (this.slots[slotIndex].machine) {
        var cssId = "slot_".concat(String(Math.floor(Math.random() * 10000000)));
        $node.html("");
        $("<div class=\"".concat($node.attr("class"), "\" id=\"").concat(cssId, "\"></div>")).insertAfter($node);
        $node.remove();

        try {
          this.slots[slotIndex].machine.destroy();
        } catch (err) {
          // console.log(err);
          this.slots[slotIndex].machine = null;
        } // cssId: generate fresh node for slotmachine (re-init problem)


        $node = $("#".concat(cssId));
        this.slots[slotIndex].dom = $node;
      }

      var index = 0;
      var html = filteredData.map(function (s) {
        index += 1;
        var iconClass = s.icon ? "bogLink-icon-".concat(s.icon) : "";
        iconClass = "";
        var name = s.url ? "<a target=\"blank\" href=\"".concat(s.url, "\">").concat(s.name, "</a>") : s.name;
        name = _this4.slots[slotIndex].name === "Grind" ? name : s.name;
        name = s.name;
        var htmlSlot = "<div data-index=\"".concat(index, "\" class=\"bogLink\"><div class=\"").concat(iconClass, "\">").concat(name, "</div></div>");
        return htmlSlot;
      });

      var shuffleArray = function shuffleArray(arr) {
        return arr.sort(function () {
          return Math.random() - 0.5;
        });
      };

      $node.html(shuffleArray(html).join(""));
      this.slots[slotIndex].machine = $node.slotMachine({
        active: 0,
        delay: this.slotSpeed,
        spins: SLOT_MACHINE_NO_OF_SPINS
      });
    }
  }]);

  return SlotMachine;
}();

/***/ }),

/***/ "./src/js/testdata.js":
/*!****************************!*\
  !*** ./src/js/testdata.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testData": () => /* binding */ testData
/* harmony export */ });
var testData = [{
  expected: "540 Cloudy Night",
  data: [{
    name: "Grind",
    winner: {
      name: "PStar",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 540"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Topside"
    }
  }]
}, {
  expected: "540 True Cloudy Night",
  data: [{
    name: "Grind",
    winner: {
      name: "PStar",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 540"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Topside"
    }
  }]
}, {
  expected: "Top Teakettle",
  data: [{
    name: "Grind",
    winner: {
      name: "PStar",
      isGrooveGrind: false
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Rough Topside"
    }
  }]
}, {
  expected: "AO Acid to 360 revert out",
  data: [{
    name: "Grind",
    winner: {
      name: "Acid",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 180"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Outspin 360"
    }
  }]
}, {
  expected: "AO Soul to 360 out",
  data: [{
    name: "Grind",
    winner: {
      name: "Soul"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 180"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Inspin 360"
    }
  }]
}, {
  expected: "Soyale",
  data: [{
    name: "Grind",
    winner: {
      name: "Torque Soul"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 180"
    }
  }]
}, {
  expected: "Kindgrind to 180 out",
  data: [{
    name: "Grind",
    winner: {
      name: "Mizou"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Topside"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 180"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Inspin 180"
    }
  }]
}, {
  expected: "Fullcab Kindgrind",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Mizou"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Topside"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 360"
    }
  }]
}, {
  expected: "360 Sweatstance to 180 revert out",
  data: [{
    name: "Grind",
    winner: {
      name: "Mizou"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Topside"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 360"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Outspin 180"
    }
  }]
}, {
  expected: "Halfcab Sidewalk",
  data: [{
    name: "Grind",
    winner: {
      name: "Sidewalk",
      isGrooveGrind: false
    }
  }, {
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 180"
    }
  }]
}, {
  expected: "Rough Sweatstance",
  data: [{
    name: "Grind",
    winner: {
      name: "Mizou",
      isGrooveGrind: false
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Rough Topside"
    }
  }]
}, {
  expected: "True Tough Top Acid",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards & Natural",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Acid",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 180"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Tough Topside"
    }
  }]
}, {
  expected: "Fakie BS Pudslide",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "BS Pudslide",
      isGrooveGrind: true
    }
  }]
}, {
  expected: "True Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards & Natural",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 180"
    }
  }]
}, {
  expected: "Halfcab Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 180"
    }
  }]
}, {
  expected: "True Halfcab Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 180"
    }
  }]
}, {
  expected: "True Fullcab Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 360"
    }
  }]
}, {
  expected: "Grab Fishbrain",
  data: [{
    name: "Grind",
    winner: {
      name: "Makio",
      isGrooveGrind: false
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Grab Topside"
    }
  }]
}, {
  expected: "Zerospin Christ Fishbrain to 180 out",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Makio",
      isGrooveGrind: false
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Christ Topside"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Outspin 180"
    }
  }]
}, {
  expected: "AO Fishbrain to 180 revert out",
  data: [{
    name: "Grind",
    winner: {
      name: "Makio"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Topside"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 180"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Outspin 180"
    }
  }]
}, {
  expected: "Fullcab Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 360"
    }
  }]
}, {
  expected: "360 Soul",
  data: [{
    name: "Grind",
    winner: {
      name: "Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 360"
    }
  }]
}, {
  expected: "360 Negative Soul to 180 revert out",
  data: [{
    name: "Grind",
    winner: {
      name: "Soul",
      isGrooveGrind: false
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Negative"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 360"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Outspin 180"
    }
  }]
}, {
  expected: "Hurricane Soul",
  data: [{
    name: "Grind",
    winner: {
      name: "Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 360"
    }
  }]
}, {
  expected: "Stub Soul",
  data: [{
    name: "Grind",
    winner: {
      name: "X-Grind",
      isGrooveGrind: false
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Negative"
    }
  }]
}, {
  expected: "Top Stub Soul",
  data: [{
    name: "Grind",
    winner: {
      name: "X-Grind",
      isGrooveGrind: false
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Negative&Topside"
    }
  }]
}, {
  expected: "True Fullcab Top Stub Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "X-Grind",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 360"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Negative&Topside"
    }
  }]
}, {
  expected: "True Soyale to 180 out",
  data: [{
    name: "Grind",
    winner: {
      name: "Torque Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 180"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Outspin 180"
    }
  }]
}, {
  expected: "True Fullcab Soyale to 540 revert out",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Torque Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 360"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Inspin 540"
    }
  }]
}, {
  expected: "True Fullcab Top Soyale to 180 out",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Torque Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 360"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Topside"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Outspin 180"
    }
  }]
}, {
  expected: "True Kindgrind",
  data: [{
    name: "Grind",
    winner: {
      name: "Mizou",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 180"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Topside"
    }
  }]
}, {
  expected: "True Top Teakettle",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards & Natural",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "PStar",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 180"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Rough Topside"
    }
  }]
}, {
  expected: "Switch Hurricane Teakettle",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards & Switch",
      isFakie: false,
      isSwitch: true
    }
  }, {
    name: "Grind",
    winner: {
      name: "PStar",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 360"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Rough"
    }
  }]
}, {
  expected: "Switch AO Top Teakettle",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards & Switch",
      isFakie: false,
      isSwitch: true
    }
  }, {
    name: "Grind",
    winner: {
      name: "PStar",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 180"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Rough Topside"
    }
  }]
}, {
  expected: "360 Torque Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards & Natural",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Torque Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 360"
    }
  }]
}, {
  expected: "Switch 360 Torque Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards & Switch",
      isFakie: false,
      isSwitch: true
    }
  }, {
    name: "Grind",
    winner: {
      name: "Torque Soul",
      isGrooveGrind: false
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "360 Inspin"
    }
  }]
}, {
  expected: "Zerospin Acid to 360 out",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Acid",
      isGrooveGrind: false
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Outspin 360"
    }
  }]
}, {
  expected: "Zerospin Acid to 360 out",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Acid",
      isGrooveGrind: false
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Inspin 360"
    }
  }]
}, {
  expected: "Fakie BS Royale",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "BS Royale",
      isGrooveGrind: true
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 90"
    }
  }]
}, {
  expected: "Fakie Switch 450 BS Royale",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Switch",
      isFakie: true,
      isSwitch: true
    }
  }, {
    name: "Grind",
    winner: {
      name: "BS Royale",
      isGrooveGrind: true
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 450"
    }
  }]
}, {
  expected: "Fakie 270 BS Royale",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "BS Royale",
      isGrooveGrind: true
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 270"
    }
  }]
}, {
  expected: "True BS Tabernacle",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards & Natural",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "BS Tabernacle",
      isGrooveGrind: false,
      isSoulGroove: true
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 180"
    }
  }]
}, {
  expected: "True Fullcab BS Tabernacle",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Natural",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "BS Tabernacle",
      isGrooveGrind: false,
      isSoulGroove: true
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 360"
    }
  }]
}, {
  expected: "Switch Zerospin BS Tabernacle",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie & Switch",
      isFakie: true,
      isSwitch: true
    }
  }, {
    name: "Grind",
    winner: {
      name: "BS Tabernacle",
      isGrooveGrind: false,
      isSoulGroove: true
    }
  }]
}];

/***/ }),

/***/ "./src/js/tooltips.js":
/*!****************************!*\
  !*** ./src/js/tooltips.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tooltips": () => /* binding */ Tooltips
/* harmony export */ });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var tippy_js_animations_scale_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js/animations/scale.css */ "./node_modules/tippy.js/animations/scale.css");
/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tippy.js/animations/scale-subtle.css */ "./node_modules/tippy.js/animations/scale-subtle.css");
/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tippy.js/animations/scale-extreme.css */ "./node_modules/tippy.js/animations/scale-extreme.css");
/* harmony import */ var tippy_js_themes_light_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tippy.js/themes/light.css */ "./node_modules/tippy.js/themes/light.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _CONFIG;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var CONFIG = (_CONFIG = {
  soundButton: {
    text: "Toggle sound",
    position: ""
  },
  randomizeButton: {
    text: "Spin the reels",
    position: ""
  },
  helpBtn: {
    type: "nav",
    text: "",
    position: ""
  },
  configButton: {
    type: "nav",
    text: "Include <br>more <br>tricks"
  },
  trickNamingBtn: {
    type: "nav",
    text: "Open <br>Tricktionary"
  }
}, _defineProperty(_CONFIG, "soundButton", {
  type: "nav",
  text: "Toggle sound"
}), _defineProperty(_CONFIG, "aboutBtn", {
  type: "nav",
  text: "About this app"
}), _defineProperty(_CONFIG, "addTricklistBtn", {
  type: "slot-menu",
  text: "Add current trick to tricklist. "
}), _defineProperty(_CONFIG, "giveUpButton", {
  type: "slot-menu",
  text: "Abort the game. "
}), _defineProperty(_CONFIG, "endScreen", {
  type: "slot",
  text: "",
  //'<b>Switch</b>blalbblalblalblalba blalblalblalba blalblalblalba blalblalblalba blalblalblalba blalblalblalba lalblalba bblalblalblalba blalblalblalba blalblalblalba blalblalblalba lalblalblalba <br>  <b>Fakie</b>blalblalblalba blalblalblalba <br> <b>Inspin</b>bl blalbblalblalblalba blalblalblalba blalblalblalba blalblalblalba blalblalblalba blalblalblalba lalblalba blalblalblalba alblalblalba <br>   <b>Frontside Unity</b>grindSlot <br> <img width="300" heigth="300" src="./img/bog/1.jpg">  <br>Open book of grinds  ',
  //props: { placement: 'top-start', offset: 2 },
  slotName: "Grind"
}), _CONFIG);

var throttle = function throttle(func, limit) {
  var inThrottle;
  return function () {
    var args = arguments;
    var context = this;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(function () {
        return inThrottle = false;
      }, limit);
    }
  };
};

var Tooltips = /*#__PURE__*/function () {
  function Tooltips($helpBtn, App) {
    _classCallCheck(this, Tooltips);

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

  _createClass(Tooltips, [{
    key: "registerListener",
    value: function registerListener() {
      var _this = this;

      var btnClick = throttle(function () {
        if (_this.isVisible) {
          _this.hide();
        } else {
          // this.init();
          _this.show();
        }
      }, 500);
      this.$mask.on("click", function () {
        _this.hide();
      });
      this.$helpBtn.on("click", function () {
        btnClick();
      });
      this.$helpBtnStart.on("click", function () {
        btnClick();
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.$mask.show();
      this.$helpBtn.addClass("pure-button-disabled");
      this.App.$randomizeButton.addClass("pure-button-disabled");
      this.isVisible = true;
      this.helpTooltips.forEach(function (t) {
        if (t.instance.props.content) {
          t.instance.enable();
          t.instance.show();
        }
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.isVisible = false;
      this.$helpBtn.removeClass("pure-button-disabled");
      this.App.$randomizeButton.removeClass("pure-button-disabled");
      this.$mask.hide();
    }
  }, {
    key: "updateTooltip",
    value: function updateTooltip(name, htmlContent) {
      this.helpTooltips.forEach(function (t) {
        if (t.name === name) {
          t.instance.setContent(htmlContent);
        } // t.instance.hide();
        // t.instance.disable();

      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.$tooltips.each(function (i, el) {
        var $el = $(el);
        var name = $el.data("p-tooltip");
        var config = _this2.config[name];

        if (!config) {
          console.error("missing tooltip config", name);
        }

        var text = config.text;
        var props = {
          theme: "light",
          animation: "scale",
          allowHTML: true,
          touch: true,
          trigger: "manual"
        };

        if (config.props) {
          props = _objectSpread(_objectSpread({}, props), config.props);
        }

        props.content = text; //  $el.css({ 'text-decoration': 'underline' });

        var t = (0,tippy_js__WEBPACK_IMPORTED_MODULE_5__.default)($el[0], props);
        t.disable();

        _this2.helpTooltips.push({
          instance: t,
          name: name
        });
      });
    }
  }]);

  return Tooltips;
}();

/***/ }),

/***/ "./src/js/trickdata.js":
/*!*****************************!*\
  !*** ./src/js/trickdata.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trickdata": () => /* binding */ Trickdata
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var APPROACHES = [{
  name: "Fakie",
  url: "http://skateyeg.com/bog/05.0_Fakie.html",
  isFakie: true,
  isSwitch: false
}, {
  name: "Switch",
  url: "http://skateyeg.com/bog/04.0_Switch.html",
  isFakie: false,
  isSwitch: true
}, {
  name: "Fakie & Switch",
  url: "http://skateyeg.com/bog/04.0_Switch.html",
  isFakie: true,
  isSwitch: true
}]; // SPINS:
// 4 variants:
// Groove grinds vs. Soul grinds. Groove grinds dont have a 180 because 90 degree spins do not count
// forwards vs fakie: zerospin, halfcab naming

var SPINS_TO_GRIND = [{
  name: "Outspin 180"
}, {
  name: "Inspin 180",
  url: ""
}, {
  name: "Inspin 360",
  url: ""
}, {
  name: "Outspin 360",
  url: ""
}, {
  name: "Inspin 540",
  url: ""
}, {
  name: "Outspin 540",
  url: ""
}];
var SPINS_FAKIE_TO_GRIND = [{
  name: "Inspin 180",
  url: ""
}, {
  name: "Outspin 180",
  url: ""
}, {
  name: "Inspin 360",
  url: ""
}, {
  name: "Outspin 360",
  url: ""
}];
var SPINS_TO_GRIND_GROOVE_FS = [{
  name: "Inspin 90",
  url: ""
}, {
  name: "Outspin 270",
  url: ""
}, {
  name: "Inspin 450",
  url: ""
}, {
  name: "Outspin 630",
  url: ""
}];
var SPINS_TO_GRIND_GROOVE_BS = [{
  name: "Outspin 90",
  url: ""
}, {
  name: "Inspin 270",
  url: ""
}, {
  name: "Outspin 450",
  url: ""
}, {
  name: "Inspin 630",
  url: ""
}];
var SPINS_FAKIE_TO_GRIND_GROOVE_FS = [{
  name: "Inspin 90",
  url: ""
}, {
  name: "Outspin 270",
  url: ""
}, {
  name: "Inspin 450",
  url: ""
}, {
  name: "Outspin 630",
  url: ""
}];
var SPINS_FAKIE_TO_GRIND_GROOVE_BS = [{
  name: "Outspin 90",
  url: ""
}, {
  name: "Inspin 270",
  url: ""
}, {
  name: "Outspin 450",
  url: ""
}, {
  name: "Inspin 630",
  url: ""
}];
var HYBRID_COMMENT = "A hybrid between Soul and Groove grind";
var SOUL_GRINDS = [{
  name: "Soul",
  url: "http://skateyeg.com/bog/02.0_Soul.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    Tough: true,
    "Rough Topside": true,
    "Tough Topside": true
  }
}, {
  name: "Acid",
  url: "http://skateyeg.com/bog/05.0_Acid.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    Tough: true,
    "Rough Topside": true,
    "Tough Topside": true
  }
}, {
  name: "Makio",
  url: "http://skateyeg.com/bog/01.0_Makio.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    Tough: true,
    // Grabs: enac: You can grab it as a Plain (Safety), Cross Grab (Mute),
    // Backside Grab, Rocket, Parallel, or Stale.
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true,
    "Rough Topside": true,
    "Tough Topside": true,
    "Grab Topside": true,
    "Rocket Topside": true,
    "Cross-Grab Topside": true,
    "Christ Topside": true
  }
}, {
  name: "PStar",
  url: "http://skateyeg.com/bog/04.0_PStar.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    Tough: true,
    "Rough Topside": true,
    "Tough Topside": true
  }
}, {
  name: "Torque Soul",
  url: "http://skateyeg.com/bog/08.0_Torque_Soul.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    Tough: true,
    "Rough Topside": true,
    "Tough Topside": true
  }
}, {
  name: "Mistrial",
  url: "http://skateyeg.com/bog/07.0_Mistrial.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    Tough: true,
    "Rough Topside": true,
    "Tough Topside": true
  }
}, {
  name: "Citric Acid",
  url: "http://skateyeg.com/bog/05.1_Citric_Acid.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    Tough: true,
    "Rough Topside": true,
    "Tough Topside": true
  }
}, {
  name: "Hot Dog",
  noSwitch: true,
  url: "http://skateyeg.com/bog/11.0_Hot_Dog.html",
  comment: "Only possible on a narrow box obstacle that can be grinded on both sides.",
  variations: {
    Rough: true,
    Tough: true
  }
}, {
  name: "Mizou",
  url: "http://skateyeg.com/bog/03.0_Mizou.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    Tough: true,
    "Rough Topside": true,
    "Tough Topside": true
  }
}, {
  name: "Sidewalk",
  url: "http://skateyeg.com/bog/04.1_Sidewalk.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    Tough: true,
    "Rough Topside": true,
    "Tough Topside": true
  }
}, {
  name: "X-Grind",
  url: "http://skateyeg.com/bog/06.0_X_Grind.html",
  comment: "A regular X-Grind has the front foot Topside. A Topside X-Grind has the back foot Topside. A Negative X-Grind is called Stub Soul.",
  variations: {
    Topside: true,
    Negative: true,
    "Negative&Topside": true,
    Rough: true,
    Tough: true,
    "Rough Topside": true,
    "Tough Topside": true,
    "Tough&Rough": true
  }
}, {
  name: "Training Wheel",
  url: "",
  noThumb: true,
  comment: "The front skate is rolling on the wheel on the heel, the back skate is on Topside soul.",
  variations: {
    Rough: true,
    Tough: true
  }
}, {
  name: "BS Tabernacle",
  url: "http://skateyeg.com/bog/12.1_Backside_Tabernacle.html",
  comment: HYBRID_COMMENT,
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "FS Tabernacle",
  url: "http://skateyeg.com/bog/12.0_Tabernacle.html",
  comment: HYBRID_COMMENT,
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "BS Darkslide",
  url: "http://skateyeg.com/bog/14.1_Backside_Darkslide.html",
  comment: HYBRID_COMMENT,
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "FS Darkslide",
  url: "http://skateyeg.com/bog/14.0_Darkslide.html",
  comment: HYBRID_COMMENT,
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "BS Wheelbarrow",
  url: "http://skateyeg.com/bog/15.1_Backside_Wheelbarrow.html",
  comment: HYBRID_COMMENT,
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "FS Wheelbarrow",
  url: "http://skateyeg.com/bog/15.0_Wheelbarrow.html",
  comment: HYBRID_COMMENT,
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "BS Byn Soul",
  noThumb: true,
  url: "",
  comment: "Turning the soul foot on a Soul grind into a torque",
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "FS Byn Soul",
  noThumb: true,
  url: "",
  comment: "Turning the soul foot on a Soul grind into a torque",
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "Biscuit",
  noThumb: true,
  noSwitch: true,
  url: "",
  comment: "Grinding on the soul plates with both feet, with toes facing each other.",
  variations: {
    Rough: true,
    Tough: true
  }
}]; // GROOVE_GRINDS
// Most Grinds based on h-block and have a backside and frontside variant.
// No alley-oop grind variant. For example an alley-oop Royale is a Full Torque

var GROOVE_GRINDS = [{
  name: "FS Royale",
  url: "http://skateyeg.com/bog/03.0_Royale.html",
  variations: {
    Channel: true
  }
}, {
  name: "FS Unity",
  url: "http://skateyeg.com/bog/07.0_Unity.html",
  variations: {
    Channel: true
  }
}, {
  name: "FS Torque",
  url: "http://skateyeg.com/bog/05.0_Torque.html",
  variations: {
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true,
    Channel: true
  }
}, {
  name: "BS Cab driver",
  url: "http://skateyeg.com/bog/09.1_Backside_Cab_driver.html",
  variations: {
    Channel: true
  }
}, {
  name: "BS Backslide",
  url: "http://skateyeg.com/bog/06.1_Backside_Backslide.html",
  variations: {
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true,
    Channel: true
  }
}, {
  name: "FS Backslide",
  url: "http://skateyeg.com/bog/06.0_Backslide.html",
  variations: {
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true,
    Channel: true
  }
}, {
  name: "BS Pudslide",
  url: "http://skateyeg.com/bog/11.1_Backside_Pudslide.html",
  variations: {
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true
  }
}, {
  name: "BS Full Torque",
  url: "http://skateyeg.com/bog/04.1_Backside_Full_Torque.html",
  comment: "Same as Fahrvergnuegen, Farhve, Nugen",
  variations: {
    Channel: true
  }
}, {
  name: "BS Fastslide",
  url: "http://skateyeg.com/bog/10.1_Backside_Fastslide.html",
  variations: {
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true,
    Channel: true
  }
}, {
  name: "BS Unity",
  url: "http://skateyeg.com/bog/07.1_Backside_Unity.html",
  variations: {
    Channel: true
  }
}, {
  name: "BS Torque",
  url: "http://skateyeg.com/bog/05.1_Backside_Torque.html",
  variations: {
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true,
    Channel: true
  }
}, {
  name: "BS Royale",
  url: "http://skateyeg.com/bog/03.1_Backside_Royale.html",
  variations: {
    Channel: true
  }
}, {
  name: "FS Fastslide",
  url: "http://skateyeg.com/bog/10.0_Fastslide.html",
  variations: {
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true,
    Channel: true
  }
}, {
  name: "FS Cab driver",
  url: "http://skateyeg.com/bog/09.0_Cab_driver.html",
  variations: {
    Channel: true
  }
}, {
  name: "FS Pudslide",
  url: "http://skateyeg.com/bog/11.0_Pudslide.html",
  variations: {
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true
  }
}, {
  name: "FS Full Torque",
  url: "http://skateyeg.com/bog/04.0_Full_Torque.html",
  comment: "Same as Fahrvergnuegen, Farhve, Nugen",
  variations: {
    Channel: true
  }
}, {
  name: "Backside",
  url: "http://skateyeg.com/bog/02.0_Backside.html",
  variations: {
    Channel: true
  }
}, {
  name: "Frontside",
  url: "http://skateyeg.com/bog/01.0_Frontside.html",
  variations: {
    Channel: true
  }
}, {
  name: "FS Savannah",
  url: "http://skateyeg.com/bog/09.0_Savannah_(AO_Unity).html",
  variations: {
    Channel: true
  }
}, {
  name: "BS Savannah",
  url: "http://skateyeg.com/bog/09.1_Backside_Savannah_(AO_BS_Unity).html",
  variations: {
    Channel: true
  }
}];
var GRIND_SYNONYMS = [// Mistrial
{
  newName: "Misfit",
  name: "Mistrial",
  comment: "Alley-oop Topside Mistrial",
  isReverse: true,
  isTopside: true,
  url: "http://skateyeg.com/bog/07.0_Misfit_(AO_Topside_Mistrial).html"
}, {
  newName: "Overpuss",
  name: "Mistrial",
  comment: "Topside Mistrial",
  isTopside: true,
  url: " http://skateyeg.com/bog/10.0_Overpuss_(Topside_Mistrial).html"
}, // Torque Soul
{
  newName: "Soyale",
  name: "Torque Soul",
  isReverse: true,
  comment: "Alley-oop Torque Soul",
  url: "http://skateyeg.com/bog/04.0_Soyale_(AO_Torque_Soul).html"
}, // Makio
{
  newName: "Fishbrain",
  comment: "Topside Makio",
  name: "Makio",
  isTopside: true,
  url: "http://skateyeg.com/bog/01.0_Fishbrain_(Topside_Makio).html"
}, // Mizou
{
  newName: "Kindgrind",
  name: "Mizou",
  comment: "Alley-oop Topside Mizou",
  isReverse: true,
  isTopside: true,
  url: "http://skateyeg.com/bog/03.0_Kindgrind_(AO_Topside_Mizou).html"
}, {
  newName: "Sweatstance",
  name: "Mizou",
  comment: "Topside Mizou",
  isTopside: true,
  url: "http://skateyeg.com/bog/02.0_Sweatstance_(Topside_Mizou).html"
}, // PStar

/*  these 2 do not work
 */
{
  newName: "Top Teakettle",
  name: "PStar",
  comment: "Rough PStar",
  isTopside: true,
  isRough: true,
  url: ""
}, {
  newName: "Teakettle",
  name: "PStar",
  comment: "Rough PStar",
  isRough: true,
  url: "http://skateyeg.com/bog/13.0_Tea_Kettle.html"
}, {
  newName: "Cloudy Night",
  name: "PStar",
  comment: "Alley-oop Topside PStar",
  isTopside: true,
  isReverse: true,
  url: "http://skateyeg.com/bog/06.0_Cloudy_Night_(AO_Topside_PStar).html"
}, {
  newName: "Sunny Day",
  name: "PStar",
  comment: "Topside PStar",
  isTopside: true,
  url: "http://skateyeg.com/bog/05.0_Sunny_Day_(Topside_PStar).html"
}, // X-Grind
{
  newName: "Stub Soul",
  name: "X-Grind",
  isNegative: true,
  url: ""
}];
var VARIATIONS = [{
  name: "Topside",
  url: "http://skateyeg.com/bog/03.0_Topside_(Top).html"
}, {
  name: "Negative",
  url: "http://skateyeg.com/bog/11.0_Negative.html",
  comment: "Grinding on the inside soul plate instead of the outside soul plate."
}, {
  name: "Rough",
  url: "http://skateyeg.com/bog/08.0_Rough_(Heel).html",
  comment: "Grinding on the heel instead of the whole soul foot (Rough Mizou, Rough Sweatstance, ..)"
}, {
  name: "Tough",
  url: "http://skateyeg.com/bog/07.0_Tough_(Toe).html",
  comment: "Grinding on the toe instead of the whole soul foot (Tough Soyale, Tough Top Soyale, ..)"
}, {
  name: "Channel",
  url: "http://skateyeg.com/bog/18.0_Channel.html",
  comment: "Grinding a groove trick between the wheels (Channel Frontside, ..)"
}, {
  name: "Rocket",
  url: "http://skateyeg.com/bog/06.0_Rocket.html",
  comment: "Extending both legs out straight and crossing one hand over the front of both legs and grabbing the opposite outside soul plate."
}, {
  name: "Grab",
  url: "http://skateyeg.com/bog/17.0_Grabbed.html",
  comment: "Grabbing the free foot while doing a one-footed grind."
}, {
  name: "Cross-Grab",
  noThumb: true,
  url: "",
  comment: "Grabbing the free skate with the opposite hand. Also called Mute Grab."
}, {
  name: "Christ",
  url: "http://skateyeg.com/bog/09.0_Christ.html",
  comment: "Setting the other foot on top of the toe in a soul grind position."
}];
var OBSTACLE_VARIATIONS = [{
  name: "Darkside",
  url: "http://skateyeg.com/bog/13.0_Darkside.html"
}, {
  name: "Farside",
  url: "http://skateyeg.com/bog/12.0_Farside.html"
}, {
  name: "Disaster",
  url: "http://skateyeg.com/bog/14.0_Disaster.html"
}]; // @TODO: Revert only if Inspin

var SPINS_OFF_GRIND = [{
  name: "Inspin 180",
  url: ""
}, {
  name: "Outspin 180 ",
  url: ""
}, {
  name: "Inspin 180",
  url: ""
}, {
  name: "Outspin 180 ",
  url: ""
}, {
  name: "Outspin 360",
  url: ""
}, {
  name: "Inspin 360",
  url: ""
}, {
  name: "Outspin 540",
  url: ""
}, {
  name: "Inspin 540",
  url: ""
}];
var SPINS_OFF_GROOVE_GRIND = [{
  name: "Fakie",
  url: ""
}, {
  name: "Forwards",
  url: ""
}, {
  name: "270",
  url: ""
}, {
  name: "450",
  url: ""
}, {
  name: "630",
  url: ""
}];
var GLOSSARY = {
  // parsed tokens
  AO: "Alley-oop. Forwards to 180 Inspin to a soul grind.",
  True: "Truespin. Forwards to 180 Outspin to a Soul grind.",
  Hurricane: "Forwards to 360 Outspin to a Soul grind.",
  Halfcab: "Fakie to 180 Inspin to a Soul grind.",
  Fullcab: "Fakie to 360 Inspin to a Soul grind.",
  "True Halfcab": "Fakie to 180 Outspin to a Soul grind.",
  "True Fullcab": "Fakie to 360 Outspin to a Soul grind.",
  Zerospin: "Fakie to a Soul grind, no rotation.",
  Revert: "Rewind. to a Soul grind, Spinning off a grind the opposite direction of the natural momentum set by the initial grind spin.",
  // slot tokens
  450: "360 spin to a Groove grind. The longer way (360 + 90 degrees).",
  270: "360 spin to a Groove grind. The shorter way (360 - 90 degrees).",
  Inspin: "Spin towards obstacle.",
  Outspin: 'Spin away from obstacle, "blindside".',
  Switch: "Grinding in the unnatural mirrored position of a grind.",
  Fakie: "Approach obstacle skating backwards.",
  Forwards: "Approach obstacle skating backwards.",
  Natural: "Natural is the opposite of Switch."
};
var GRINDS = [];
SOUL_GRINDS.forEach(function (g) {
  g.isGrooveGrind = false;
  GRINDS.push(g);
});
GROOVE_GRINDS.forEach(function (g) {
  g.isGrooveGrind = true;
  GRINDS.push(g);
});
var GRINDS_FOR_SLOTS = [];
GRINDS.forEach(function (g) {
  g.thumbUrl = g.noThumb !== true ? getThumbUrl(g.name) : "";
  GRINDS_FOR_SLOTS.push(g); // duplicate soul grinds to even out cause groove grinds have fs/bs

  if (g.isGrooveGrind !== true && g.isSoulGroove !== true) {
    GRINDS_FOR_SLOTS.push(JSON.parse(JSON.stringify(g)));
  }
});
GRINDS_FOR_SLOTS.forEach(function (g, index) {
  if (g.variations) {
    (function () {
      var arrayHash = [];

      var _loop = function _loop() {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            variation = _Object$entries$_i[0],
            count = _Object$entries$_i[1];

        if (count === true || count === 1) {
          arrayHash.push({
            name: variation
          });
        } else {
          count.forEach(function () {
            arrayHash.push({
              name: variation
            });
          });
        }
      };

      for (var _i = 0, _Object$entries = Object.entries(g.variations); _i < _Object$entries.length; _i++) {
        _loop();
      }

      GRINDS_FOR_SLOTS[index].variations = arrayHash;
    })();
  }
});
var VARIATIONS_THUMB = [];
VARIATIONS.forEach(function (v) {
  v.thumbUrl = v.noThumb !== true ? getThumbUrl(v.name) : "";
  VARIATIONS_THUMB.push(v);
});
var GRIND_SYNONYMS_THUMB = [];
GRIND_SYNONYMS.forEach(function (v) {
  v.thumbUrl = v.noThumb !== true ? getThumbUrl(v.name) : "";
  GRIND_SYNONYMS_THUMB.push(v);
});

function getThumbUrl(name) {
  var thumbName = name.replace(" ", "");
  thumbName = thumbName.replace(" ", "");
  return "img/captures/200x200/" + thumbName + ".jpg";
}

var Trickdata = /*#__PURE__*/function () {
  function Trickdata() {
    _classCallCheck(this, Trickdata);
  }

  _createClass(Trickdata, [{
    key: "get",
    value: function get() {
      return {
        GRINDS_FOR_SLOTS: GRINDS_FOR_SLOTS,
        APPROACHES: APPROACHES,
        SPINS_TO_GRIND: SPINS_TO_GRIND,
        SPINS_FAKIE_TO_GRIND: SPINS_FAKIE_TO_GRIND,
        SPINS_TO_GRIND_GROOVE_FS: SPINS_TO_GRIND_GROOVE_FS,
        SPINS_TO_GRIND_GROOVE_BS: SPINS_TO_GRIND_GROOVE_BS,
        SPINS_FAKIE_TO_GRIND_GROOVE_FS: SPINS_FAKIE_TO_GRIND_GROOVE_FS,
        SPINS_FAKIE_TO_GRIND_GROOVE_BS: SPINS_FAKIE_TO_GRIND_GROOVE_BS,
        SOUL_GRINDS: SOUL_GRINDS,
        GROOVE_GRINDS: GROOVE_GRINDS,
        VARIATIONS: VARIATIONS,
        VARIATIONS_THUMB: VARIATIONS_THUMB,
        OBSTACLE_VARIATIONS: OBSTACLE_VARIATIONS,
        SPINS_OFF_GROOVE_GRIND: SPINS_OFF_GROOVE_GRIND,
        SPINS_OFF_GRIND: SPINS_OFF_GRIND,
        GRINDS: GRINDS,
        GRIND_SYNONYMS: GRIND_SYNONYMS,
        GRIND_SYNONYMS_THUMB: GRIND_SYNONYMS_THUMB,
        GLOSSARY: GLOSSARY
      };
    }
    /*
    filterSoulGrinds() {
    const filteredGrinds = GRINDS_FOR_SLOTS.filter((g) => {
      return v.isGrooveGrind === false;
    });
    return filteredGrinds;
    }
    filterGrooveGrinds() {
    const filteredGrinds = GRINDS_FOR_SLOTS.filter((g) => {
      return v.isGrooveGrind === true;
    });
    return filteredGrinds;
    }
    filterGrindsByVariationName(grindVariationName) {
    const filteredGrinds = GRINDS_FOR_SLOTS.filter((g) => {
      let v = g.variations;
      if (v.includes(grindVariationName)) {
        return v;
      }
    });
    return filteredGrinds;
    }*/

  }, {
    key: "getSpinToData",
    value: function getSpinToData(grind) {
      var approach = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var data = null;
      var isFakie = approach && approach.isFakie === true ? true : false;
      var isGrooveGrind = grind.isGrooveGrind === true;
      var isFrontsideGroove = isGrooveGrind && grind.name.includes("FS ");

      if (!isGrooveGrind) {
        data = isFakie ? SPINS_FAKIE_TO_GRIND : SPINS_TO_GRIND;
      } else if (isFrontsideGroove && isFakie) {
        data = SPINS_FAKIE_TO_GRIND_GROOVE_FS;
      } else if (isFrontsideGroove && !isFakie) {
        data = SPINS_TO_GRIND_GROOVE_FS;
      } else if (!isFrontsideGroove && isFakie) {
        data = SPINS_TO_GRIND_GROOVE_BS;
      } else if (!isFrontsideGroove && !isFakie) {
        data = SPINS_TO_GRIND_GROOVE_BS;
      }

      return data;
    }
  }, {
    key: "getSpinOffData",
    value: function getSpinOffData(grind) {
      var isGrooveGrind = grind.isGrooveGrind === true;
      return isGrooveGrind ? SPINS_OFF_GROOVE_GRIND : SPINS_OFF_GRIND;
    }
  }]);

  return Trickdata;
}();

/***/ }),

/***/ "./src/js/tricklist.js":
/*!*****************************!*\
  !*** ./src/js/tricklist.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tricklist": () => /* binding */ Tricklist
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tricklist = /*#__PURE__*/function () {
  function Tricklist($tricklistBtn) {
    _classCallCheck(this, Tricklist);

    this.$tricklistBtn = $tricklistBtn;
    this.$tricklistBtnStart = $("#start-screen-tricklistBtn-container");
    this.$clear = $("#trickList-clearlistBtn");
    this.$sendMail = $("#trickList-sendMailBtn");
    this.$continue = $("#trickList-continueBtn");
    this.$list = $("#trickList-tableBody");
    this.results = [];
    this.storageKey = "tricklist";
    this.registerListener();
    this.getStorage();
    this.render();
    this.toggleControlDisabled();
  }

  _createClass(Tricklist, [{
    key: "registerListener",
    value: function registerListener() {
      var _this = this;

      this.$clear.on("click", function (e) {
        e.preventDefault();

        _this.clearList();
      });
      this.$continue.on("click", function (e) {
        //this.hide();
        $("#randomizeButton").trigger("click");
      });
      $("body").on("click", ".clearTrick", function (e) {
        e.preventDefault();
        var index = $(e.currentTarget).data("index");

        _this.clearTrick(index);
      });
      this.$sendMail.on("click", function (e) {
        var mailBody = _this.$list.text();

        mailBody = mailBody.replace(/\s/g, " ");
        mailBody = mailBody.replace(/ {3}/g, " ");
        mailBody = mailBody.replace(/ {7}/g, " ----- ");
        mailBody = mailBody.replace(/ {2}/g, " ");
        var title = "Tricklist made with ".concat(document.location.href);
        window.open("mailto:?subject=".concat(title, "&body=").concat(mailBody));
      });
    }
  }, {
    key: "getStorage",
    value: function getStorage() {
      if (localStorage.getItem(this.storageKey)) {
        this.results = localStorage.getItem(this.storageKey).split(",");
      }
    }
  }, {
    key: "toggleControlDisabled",
    value: function toggleControlDisabled() {
      if (this.results.length > 0) {
        this.$tricklistBtn.removeClass("pure-button-disabled");
        $("#start-screen-tricklistBtn-count").html(this.results.length);
        this.$tricklistBtnStart.show();
      } else {
        this.$tricklistBtn.addClass("pure-button-disabled");
      }
    }
  }, {
    key: "clearTrick",
    value: function clearTrick() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var tmp = this.results;
      tmp.splice(index, 1);
      this.results = tmp;
      localStorage.removeItem(this.storageKey);
      localStorage.setItem(this.storageKey, this.results);
      this.render();
    }
  }, {
    key: "clearList",
    value: function clearList() {
      this.results = [];
      this.$list.html(""); //  this.hide();

      localStorage.removeItem(this.storageKey);
      this.$tricklistBtn.addClass("pure-button-disabled");
    }
  }, {
    key: "addTrick",
    value: function addTrick(fullTrickName, origName) {
      var resultStr = fullTrickName + " (" + origName + ")";
      this.results.push(resultStr);
      localStorage.setItem(this.storageKey, this.results);
      var row = this.renderRow(resultStr, this.results.length - 1);
      $(row).hide().prependTo(this.$list).fadeIn();
      this.toggleControlDisabled();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var html = "";
      this.results.reverse().forEach(function (trick, index) {
        html += _this2.renderRow(trick, _this2.results.length - 1 - index);
      });
      this.$list.html("");
      this.$list.html(html);
    }
  }, {
    key: "renderRow",
    value: function renderRow(name, index) {
      return "<tr>\n    <td>".concat(index + 1, "</td> \n    <td>").concat(name, "</td> \n    <td> <button data-index=\"").concat(index, "\" class=\"clearTrick pure-button pure-button-secondary\">\n    <i class=\"fa fa-trash fa-2x\"></i> \n     </button></td>\n</tr>");
    }
  }]);

  return Tricklist;
}();

/***/ }),

/***/ "./src/js/tricknames.js":
/*!******************************!*\
  !*** ./src/js/tricknames.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tricknames": () => /* binding */ Tricknames
/* harmony export */ });
/* harmony import */ var _trickdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trickdata.js */ "./src/js/trickdata.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var CONFIG = null;
var Tricknames = /*#__PURE__*/function () {
  function Tricknames() {
    _classCallCheck(this, Tricknames);

    this.$dom = $("#trickNamingContent");
    this.$termsTable = $("#reference-terms-table-body");
    this.trickdata = new _trickdata_js__WEBPACK_IMPORTED_MODULE_0__.Trickdata();
    CONFIG = this.trickdata.get();
    this.renderTerms();
    this.renderGrinds();
    this.renderGrindSynonyms();
    this.renderVariations();
    this.renderNotImplemented();
  }

  _createClass(Tricknames, [{
    key: "renderNotImplemented",
    value: function renderNotImplemented() {
      // dupes content?
      return false;
      var rows = [];
      var variations = CONFIG.OBSTACLE_VARIATIONS;
      variations.forEach(function (v) {
        rows.push("<tr class=\" \">\n    <td>".concat(v.name, "</td>\n    <td><a target=\"blank\" href=\"").concat(v.url, "\">").concat(new URL(v.url).hostname, "</a></td>\n  </tr>"));
      });
      $("#trickNamingContentNotImplementedTable").append(rows.join(""));
      var html = $("#trickNamingContentNotImplemented").html();
      this.$dom.append(html);
    }
  }, {
    key: "renderTerms",
    value: function renderTerms() {
      var rows = [];
      var terms = CONFIG.GLOSSARY;
      var orderedTerms = Object.keys(terms).sort().reduce(function (obj, key) {
        obj[key] = terms[key];
        return obj;
      }, {});

      for (var _i = 0, _Object$entries = Object.entries(orderedTerms); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        rows.push("<tr class=\" \">\n    <td>".concat(key, "</td>\n    <td> ").concat(value, "</td>\n  </tr>"));
      }

      this.$termsTable.append(rows.join(""));
    }
  }, {
    key: "renderGrinds",
    value: function renderGrinds() {
      var rows = [];
      var grinds = CONFIG.GRINDS;
      grinds = grinds.sort(this.compare);
      grinds.forEach(function (grind) {
        var url = grind.url ? "<a target=\"blank\" href=\"".concat(grind.url, "\">").concat(new URL(grind.url).hostname, "</a>") : "";
        var comment = grind.comment ? "<br/>".concat(grind.comment) : "";
        var thumb = grind.thumbUrl ? "<img class=\"tricktionary_thumb_img\" src=\"".concat(grind.thumbUrl, "\"> </img>") : "";
        rows.push("<tr class=\"\">\n    <td>".concat(grind.name, "</td>\n    <td>").concat(url).concat(comment).concat(thumb, "</td>\n    \n  </tr>"));
      });
      var html = "<h4>Grinds</h4>\n    Trick graphics are made with Book of Grinds, skateyeg.com\n    <table class=\"pure-table pure-table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Link</th>\n        </tr>\n      </thead>\n      <tbody>\n      ".concat(rows.join(""), " </tbody></table>");
      this.$dom.append(html);
    }
  }, {
    key: "renderGrindSynonyms",
    value: function renderGrindSynonyms() {
      var rows = [];
      var vars = CONFIG.GRIND_SYNONYMS_THUMB;
      vars = vars.sort(this.compare);
      vars.forEach(function (variaton) {
        if (variaton.url === "" && !variaton.comment) {
          return true;
        }

        var url = variaton.url ? new URL(variaton.url).hostname : "";
        var comment = variaton.comment ? "<br/>".concat(variaton.comment) : "";
        var thumb = variaton.thumbUrl ? "<img class=\"tricktionary_thumb_img\" src=\"".concat(variaton.thumbUrl, "\"> </img>") : "";
        rows.push("<tr class=\" \">\n    <td>".concat(variaton.newName, "</td>\n    <td><a target=\"blank\" href=\"").concat(variaton.url, "\">").concat(url, "</a>").concat(comment).concat(thumb, "</td>\n  </tr>"));
        rows = rows.sort();
      });
      var html = "<h4>Grind Synonyms</h4>\n    <table class=\"pure-table pure-table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Link</th>\n        </tr>\n      </thead>\n      <tbody>\n      ".concat(rows.join(""), " </tbody></table>");
      this.$dom.append(html);
    }
  }, {
    key: "renderVariations",
    value: function renderVariations() {
      var rows = [];
      var vars = CONFIG.VARIATIONS_THUMB;
      vars = vars.sort(this.compare);
      vars.forEach(function (variaton) {
        var url = variaton.url ? new URL(variaton.url).hostname : "";
        var comment = variaton.comment ? "<br/>".concat(variaton.comment) : "";
        var thumb = variaton.thumbUrl ? "<img class=\"tricktionary_thumb_img\" src=\"".concat(variaton.thumbUrl, "\"> </img>") : "";
        rows.push("<tr class=\" \">\n    <td>".concat(variaton.name, "</td>\n    <td><a target=\"blank\" href=\"").concat(variaton.url, "\">").concat(url, "</a>").concat(comment).concat(thumb, "</td>\n  </tr>"));
        rows = rows.sort();
      });
      var html = "<h4>Grind Variations</h4>\n    <table class=\"pure-table pure-table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Link</th>\n        </tr>\n      </thead>\n      <tbody>\n      ".concat(rows.join(""), " </tbody></table>");
      this.$dom.append(html);
    }
  }, {
    key: "compare",
    value: function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }

      if (a.name > b.name) {
        return 1;
      }

      return 0;
    }
  }]);

  return Tricknames;
}();

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/js/app.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkGTG"] = self["webpackChunkGTG"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=app.js.map