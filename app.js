/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/about-screen.js":
/*!********************************!*\
  !*** ./src/js/about-screen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutScreen": () => (/* binding */ AboutScreen)
/* harmony export */ });
/* harmony import */ var _helperfunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperfunctions.js */ "./src/js/helperfunctions.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var REFERENCES = [{
  name: "Book of Grinds",
  url: "<a target=\"_blank\" href=\"http://skateyeg.com/\">skateyeg.com</a>"
}, {
  name: "Tricks Trainer - Aggressive Inline (Android Game by Duff Apps)",
  url: "<a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.dufflagaramot.trickstrainer\">play.google.com</a>"
}, {
  name: "1997 Aggressive inline skating dictionary",
  url: "<a target=\"_blank\" href=\"http://toxboe.net/all/1997-aggressive-inline-skating-dictionary\">toxboe.net</a>"
}, {
  name: "Inline roller skating tricks",
  url: "<a target=\"_blank\" href=\"https://enacademic.com/dic.nsf/enwiki/11512439\">enacademic.com</a>"
}, {
  name: "Rollerblading Explained (In Progress)",
  url: "<a target=\"_blank\" href=\"https://broskowfanboy.wordpress.com/rollerblading-explained-in-progress/\">broskowfanboy</a>"
}, {
  name: "Aggressive Inline Skating Terms",
  url: "<a target=\"_blank\" href=\"https://www.angelfire.com/home/amandalane/sports/aggressiveinline/terms.html/\">angelfire.com</a>"
}, {
  name: "BE-MAG message board",
  url: "<a target=\"_blank\" href=\" https://archive.be-mag.com\">archive.be-mag.com</a>"
}, {
  name: "The Grab and Grind Chart Aggressive Skating",
  url: "<a target=\"_blank\" href=\"https://lurch17.tripod.com/skchart.htm\">lurch17.tripod.com</a>"
}, {
  name: "Art of Rolling Skate Dice",
  url: "<a target=\"_blank\" href=\"https://www.be-mag.com/news/products/art-of-rolling-skate-dice-free-android-app/\">be-mag.com</a>"
}, {
  name: "Grindlocker",
  url: "<a target=\"_blank\" href=\"http://grindlocker.com/\">grindlocker.com</a>"
}, {
  name: "SVG Editor",
  url: "<a target=\"_blank\" href=\"https://github.com/SVG-Edit/svgedit\">svg-edit</a>"
}, {
  name: "AIGHT trick book",
  url: "<a target=\"_blank\" href=\"http://www.aightgame.com/assets/permutations.txt\">List</a>"
}, {
  name: "AIGHT Tricktionary",
  url: "<a target=\"_blank\" href=\"http://www.aightgame.com/tricktionary\">Tricktionary</a>"
}, {
  name: "Rollerblading Rollerblading FB group - vote grind scores",
  url: "<a target=\"_blank\" href=\"https://www.facebook.com/groups/790993714317553/permalink/3764459683637593/\">facebook.com</a>"
}];
var AboutScreen = /*#__PURE__*/function () {
  function AboutScreen() {
    _classCallCheck(this, AboutScreen);

    this.$references = $("#aboutScreenReferences");
    this.render();
    (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_0__.renderTOC)($("#modal-screen--about"));
    $("#modal-screen--about").find(".toc-link").on("click", function (e) {
      var element = $(e.currentTarget).data("anchor");
      document.getElementById(element).scrollIntoView(true);
    });
  }

  _createClass(AboutScreen, [{
    key: "render",
    value: function render() {
      var rows = [];
      REFERENCES.forEach(function (m) {
        rows.push([m.name, "<span style=\"color:black\"> ".concat(m.url, "</span>")]);
      });
      var html = (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_0__.renderTable)("References", ["Name", "URL"], rows);
      html += (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_0__.renderTable)("About AIGHT", ["Author", "Github", "Contact", "Media"], [["Copyright (c) 2021 Roman Hatz", "<a target=\"_blank\" href=\"https://github.com/amiga909/gtg-grind-trick-generator\"> Source Code </a>", "<a href=\"mailto:aight.bladegame@gmail.com\">aight.bladegame@gmail.com</a>", "<a target=\"_blank\" href=\"https://www.youtube.com/watch?v=Pz2Ker7KUSw \">App Video</a>, \n          <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=tVDT8YBsSo8\">Video Teaser</a>, <a target=\"_blank\" href=\"https://soundcloud.com/thaumatorg/aight-game-trailer-music/s-sTRsXBkie3F\">Drum'n'Bass Track</a>"]]);
      this.$references.html(html);
    }
  }]);

  return AboutScreen;
}();

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var purecss_build_pure_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! purecss/build/pure-min.css */ "./node_modules/purecss/build/pure-min.css");
/* harmony import */ var purecss_build_grids_responsive_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! purecss/build/grids-responsive-min.css */ "./node_modules/purecss/build/grids-responsive-min.css");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "./src/js/configuration.js");
/* harmony import */ var _slotmachine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slotmachine */ "./src/js/slotmachine.js");
/* harmony import */ var _resultparser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resultparser */ "./src/js/resultparser.js");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens */ "./src/js/screens.js");
/* harmony import */ var _trickdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trickdata */ "./src/js/trickdata.js");
/* harmony import */ var _tricklist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tricklist */ "./src/js/tricklist.js");
/* harmony import */ var _tooltips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tooltips */ "./src/js/tooltips.js");
/* harmony import */ var _scoreboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scoreboard */ "./src/js/scoreboard.js");
/* harmony import */ var _gameover_screen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gameover-screen */ "./src/js/gameover-screen.js");
/* harmony import */ var _audioplayer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audioplayer */ "./src/js/audioplayer.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 //import "./sw-handler";











var CONFIG = "";
var DISABLE_SOUND = true;

var GrindTrickRandomizer = /*#__PURE__*/function () {
  function GrindTrickRandomizer() {
    var _this = this;

    _classCallCheck(this, GrindTrickRandomizer);

    this.$randomizeButtonStart = $("#randomizeButtonStart");
    this.$soundOnOff = $("#sound");
    this.$addTricklistBtn = $("#addTricklistBtn");
    this.$helpBtn = $("#helpButton");
    this.$spinNextButton = $("#trickList-continueBtn");
    this.$abortButton = $("#abortButton");
    this.$endScreen = $("#endScreen");
    this.$trickHelpButton = $("#trickHelpButton");
    this.$currentScore = $("#currentScore");
    this.configurator = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    this.$levelStartSelect = $("#start-screen-levels");
    this.$levelStartSelect.val(this.configurator.getLevel());
    this.$bannerLogoText = $("#banner-head-logo-text");
    this.$bannerLogoAbout = $("#banner-about-text-link");
    this.slotSpeed = this.configurator.getSpeed();
    this.includedTricks = this.configurator.getIncludedTricks();
    this.audioplayer = new _audioplayer__WEBPACK_IMPORTED_MODULE_11__.Audioplayer(this.$soundOnOff);
    this.slotMachine = new _slotmachine__WEBPACK_IMPORTED_MODULE_3__.SlotMachine(this.slotSpeed, this.includedTricks, this.configurator.hasNoApproachSlot(), this.configurator.hasNoVariationSlot());
    this.resultParser = new _resultparser__WEBPACK_IMPORTED_MODULE_4__.ResultParser();
    this.screens = new _screens__WEBPACK_IMPORTED_MODULE_5__.Screens();
    this.tricklist = new _tricklist__WEBPACK_IMPORTED_MODULE_7__.Tricklist();
    this.tooltips = new _tooltips__WEBPACK_IMPORTED_MODULE_8__.Tooltips(this.$helpBtn, this.screens);
    this.scoreboard = new _scoreboard__WEBPACK_IMPORTED_MODULE_9__.Scoreboard(this.configurator.getGameConfig());
    this.gameOverScreen = new _gameover_screen__WEBPACK_IMPORTED_MODULE_10__.GameOverScreen({
      onStartNew: function onStartNew() {
        $("#gameover-screen").removeClass("gameover-screen-animated-background");

        _this.screens.show("Start");
      }
    });
    this.trickdata = new _trickdata__WEBPACK_IMPORTED_MODULE_6__.Trickdata();
    CONFIG = this.trickdata.get();
    this.slotMachineResult = {
      parsed: "",
      orig: ""
    };
  }

  _createClass(GrindTrickRandomizer, [{
    key: "init",
    value: function init() {
      if (!DISABLE_SOUND) {
        this.audioplayer.init(this.configurator.getSound());
      }

      this.screens.show("Start");

      if (location.href.includes("tricktionary")) {
        this.screens.show("Tricktionary");
      }

      if (location.href.includes("about")) {
        this.screens.show("About");
      } //debug gameover
      // this.openGameOverScreen();


      this.registerListener();
    }
  }, {
    key: "registerListener",
    value: function registerListener() {
      var _this2 = this;

      this.$bannerLogoText.on("click", function (e) {
        window.location.href = window.location.origin;
      });
      this.$bannerLogoAbout.on("click", function (e) {
        location.reload();
      });
      $(".bog-slot").on("click", function (e) {
        // tmp: remove lock feature?
        return false;

        if (_this2.isEndScreen) {
          var onResultChange = function onResultChange() {
            _this2.showEndScreen(false);
          };

          var afterSlotChange = function afterSlotChange() {
            var states = _this2.slotMachine.countSlotStates();

            _this2.scoreboard.set(_this2.slotMachine.countSlotStates());
          };

          _this2.slotMachine.onClickSlot($(e.currentTarget), {
            scope: _this2,
            on: {
              onResultChange: onResultChange,
              afterSlotChange: afterSlotChange
            }
          });
        }
      });
      this.$levelStartSelect.on("change", function (e) {
        e.preventDefault();

        _this2.configurator.setLevel(_this2.$levelStartSelect.val());

        if (_this2.$levelStartSelect.val() === "4") {
          _this2.screens.show("Configuration", "up");
        } else {
          _this2.configurator.submit();
        }
      });
      this.$randomizeButtonStart.on("click", function (e) {
        e.preventDefault();

        _this2.scoreboard.startGame();

        _this2.tricklist.clearList();

        _this2.onClickStart();

        _this2.scoreboard.useSpin();
      });
      this.$soundOnOff.on("click", function (e) {
        e.preventDefault();
        $("#soundIconOn").toggle();
        $("#soundIconOff").toggle();

        if ($("#soundIconOff").is(":visible")) {
          _this2.turnSoundOff();
        } else {
          _this2.turnSoundOn();
        }
      });

      if (localStorage.getItem("sound") === "on") {
        this.$soundOnOff.trigger("click");
      }

      this.$addTricklistBtn.on("click", function () {
        //if (!this.hasTrickDupeErrorPrompt()) {
        _this2.addToTricklist(_this2.scoreboard.isLastSpin()); //}

      });
      this.$trickHelpButton.on("click", function () {
        if (_this2.isEndScreen) {
          _this2.tooltips.showTooltip("endScreen", true);
        }
      });
      this.$abortButton.on("click", function (e) {
        e.preventDefault();
        location.reload();
      });
      this.$spinNextButton.on("click", function (e) {
        e.preventDefault();

        _this2.tricklist.add(_this2.slotMachineResult.parsed, _this2.slotMachineResult.orig, _this2.slotMachine.getTrickScore(), true);

        _this2.triggerNextSpin();
      });
    }
  }, {
    key: "addToTricklist",
    value: function addToTricklist() {
      var score = this.slotMachine.getTrickScore();
      this.scoreboard.setPoints(score);
      this.tricklist.add(this.slotMachineResult.parsed, this.slotMachineResult.orig, score);
      this.triggerNextSpin({
        hasNewScore: true
      });
    }
  }, {
    key: "triggerNextSpin",
    value: function triggerNextSpin() {
      var _this3 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.scoreboard.hasNoMoreSpins()) {
        this.openGameOverScreen();
      } else {}

      var delay = function delay(t) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, t);
        });
      };

      var tadaAnim = 700;
      var hasNewScore = options && options.hasNewScore === true ? true : false;
      var isInvalidSpin = this.scoreboard.isInvalidSpin();

      if (hasNewScore) {
        $(".scoreboard-points").addClass("tada");
        delay(tadaAnim).then(function () {
          $(".scoreboard-points").removeClass("tada");
        });
      }

      if (this.scoreboard.isLastSpin()) {
        this.scoreboard.useSpin();
      } else if (!this.scoreboard.isInvalidSpin()) {
        delay(hasNewScore ? 500 : 0).then(function () {
          _this3.scoreboard.useSpin();

          $(".scoreboard-spins").addClass("tada");
        });
      }

      $("body").addClass("disable_clicks");
      var totalDelay = hasNewScore ? tadaAnim * 2 : tadaAnim;
      totalDelay = this.scoreboard.isInvalidSpin() ? totalDelay / 2 : totalDelay;
      delay(totalDelay).then(function () {
        $("body").removeClass("disable_clicks");
        $(".scoreboard-spins").removeClass("tada");
        $("body").removeClass("disable_clicks");

        if (_this3.scoreboard.isInvalidSpin()) {
          _this3.openGameOverScreen();
        } else {
          _this3.onClickStart();
        }

        $(".scoreboard-spins").removeClass("tada");
      });
    }
  }, {
    key: "openGameOverScreen",
    value: function openGameOverScreen() {
      $("#gameover-screen").addClass("gameover-screen-animated-background");
      this.gameOverScreen.render(this.scoreboard.points, this.tricklist.getStorage(), this.configurator.getGameConfig());
      this.screens.show("GameOver", "up");
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
    key: "hasTrickDupeErrorPrompt",
    value: function hasTrickDupeErrorPrompt() {
      var hasPrompt = false;

      if (this.tricklist.hasTrick(this.slotMachineResult.parsed)) {
        hasPrompt = true;
        this.tooltips.updateTooltip("errorMsgTricklist", this.tooltips.ERROR_MSG.dupeTrick);
        this.tooltips.showTooltip("errorMsgTricklist");
      }

      return hasPrompt;
    } // unused

  }, {
    key: "hasTokenErrorPrompt",
    value: function hasTokenErrorPrompt() {
      var hasPrompt = false;

      if (!this.scoreboard.isValidTokensCount()) {
        hasPrompt = true;
        this.tooltips.updateTooltip("errorMsgTokens", this.tooltips.ERROR_MSG.tooManyTokensUsed);
        this.tooltips.showTooltip("errorMsgTokens");
      }

      return hasPrompt;
    }
  }, {
    key: "onClickStart",
    value: function onClickStart() {
      var _this4 = this;

      this.screens.show("Slotmachine", "up");
      this.screens.disableNav();
      this.isEndScreen = false;
      this.audioplayer.stop();
      this.$addTricklistBtn.removeClass("pure-button-disabled");

      if (this.$soundOnOff.hasClass("pure-button-active")) {
        this.audioplayer.play("start");
      }

      this.hideEndScreen();
      this.slotMachine.run().then(function (results) {
        _this4.screens.enableNav();

        _this4.showEndScreen();
      })["catch"](function (error) {
        // eslint-disable-next-line
        console.error("catch", error);
      });
    }
  }, {
    key: "updateTrickScore",
    value: function updateTrickScore() {
      this.currentScore = this.slotMachine.getTrickScore();
      var imgPath = "img/score-[SCORE].svg";
      imgPath = imgPath.replace("[SCORE]", this.currentScore);
      this.$currentScore.attr("src", imgPath);
    }
  }, {
    key: "showEndScreen",
    value: function showEndScreen() {
      var _this5 = this;

      var animateBottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.isEndScreen = true;
      var winners = this.slotMachine.getWinnerSlots();
      this.updateTrickScore();
      this.slotMachineResult = this.resultParser.parse(winners);
      var text = this.resultParser.getHelpTableForTrick(this.slotMachineResult);
      text = "<span style=\"font-weight: bold;text-decoration: underline;\">".concat(this.slotMachineResult.parsed, "</span> ").concat(text);
      this.tooltips.updateTooltip("endScreen", text);
      this.$endScreen.find("#endscreen-text").html(this.slotMachineResult.parsed);
      this.$endScreen.fadeIn(500, function () {
        if (animateBottom) {
          setTimeout(function () {
            _this5.screens.scrollDown($("#tricklistBtn-count")[0]);
          }, 100);
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

$(window).on("load", function () {
  var s = new GrindTrickRandomizer();
  s.init();
});

/***/ }),

/***/ "./src/js/audioplayer.js":
/*!*******************************!*\
  !*** ./src/js/audioplayer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Audioplayer": () => (/* binding */ Audioplayer)
/* harmony export */ });
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SOUND_PATH = "https://www.aightgame.com/assets/sounds/";
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

      if (this.howler.start) {
        this.howler.start.mute(muted);
      }
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

      if (this.howler.start) {
        this.howler.start.stop();
      }
    }
  }, {
    key: "play",
    value: function play(part) {
      if (this.howler[part]) {
        this.howlerAudioSoundId = this.howler[part].play();
      }
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Configuration": () => (/* binding */ Configuration)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VERSION_KEY = "aight-version";
var CURRENT_VERSION = "2.3";
var LEVEL_CONFIG = {
  1: {
    spinsTotal: "5",
    locksTotal: "4",
    removesTotal: "3",
    channelCheckbox: "off",
    christCheckbox: "off",
    heelRollCheckbox: "off",
    negativeCheckbox: "off",
    topsideCheckbox: "off",
    roughCheckbox: "off",
    spins360Checkbox: "off",
    spins540Checkbox: "off",
    spins720Checkbox: "off",
    spins900Checkbox: "off",
    switchCheckbox: "off",
    fakieCheckbox: "off",
    toughCheckbox: "off",
    grabsCheckbox: "off",
    rocketCheckbox: "off",
    crossgrabCheckbox: "off"
  },
  2: {
    spinsTotal: "5",
    locksTotal: "1",
    removesTotal: "5",
    channelCheckbox: "off",
    christCheckbox: "off",
    heelRollCheckbox: "on",
    negativeCheckbox: "on",
    topsideCheckbox: "on",
    roughCheckbox: "off",
    spins360Checkbox: "on",
    spins540Checkbox: "off",
    spins720Checkbox: "off",
    spins900Checkbox: "off",
    switchCheckbox: "off",
    fakieCheckbox: "off",
    toughCheckbox: "off",
    grabsCheckbox: "on",
    rocketCheckbox: "off",
    crossgrabCheckbox: "on"
  },
  3: {
    spinsTotal: "5",
    locksTotal: "1",
    removesTotal: "5",
    channelCheckbox: "on",
    christCheckbox: "on",
    heelRollCheckbox: "on",
    negativeCheckbox: "on",
    topsideCheckbox: "on",
    roughCheckbox: "on",
    spins360Checkbox: "on",
    spins540Checkbox: "on",
    spins720Checkbox: "on",
    spins900Checkbox: "off",
    fakieCheckbox: "on",
    switchCheckbox: "on",
    toughCheckbox: "on",
    grabsCheckbox: "on",
    rocketCheckbox: "on",
    crossgrabCheckbox: "on"
  }
};
var Configuration = /*#__PURE__*/function () {
  function Configuration() {
    _classCallCheck(this, Configuration);

    this.$levelSelect = $("#levelSelect"); //this.$removesTotal = $("#removesTotalInput");
    // this.$spinsLocks = $("#spinsLocksInput");
    // this.$soundSelect = $("#soundSelect");

    this.$speedSelect = $("#speedSelect");
    this.$submit = $("#config-submit");
    this.$reset = $("#config-reset");
    this.$roughSelect = $("#rough-select");
    this.$toughSelect = $("#tough-select");
    this.$heelRollSelect = $("#heelRoll-select");
    this.$spins360Select = $("#spins360-select");
    this.$spins540Select = $("#spins540-select");
    this.$spins720Select = $("#spins720-select");
    this.$spins900Select = $("#spins900-select");
    this.$negativeSelect = $("#negative-select");
    this.$topsideSelect = $("#topside-select");
    this.$switchSelect = $("#switch-select");
    this.$channelSelect = $("#channel-select");
    this.$christSelect = $("#christ-select");
    this.$fakieSelect = $("#fakie-select");
    this.$grabsSelect = $("#grabs-select");
    this.$rocketSelect = $("#rocket-select");
    this.$crossgrabSelect = $("#crossgrab-select");
    this.$levelSelect = $("#levelSelect");
    this.$spinsTotal = $("#spinsTotalInput"); //   this.$removesTotal = $("#removesTotalInput");
    //  this.$locksTotal = $("#spinsLocksInput");

    this.hasUnsavedChanges = false;
    this.configs = [//{ $dom: this.$soundSelect, key: "soundSelect", value: 0 },
    {
      $dom: this.$speedSelect,
      key: "speedSelect",
      value: 0
    }, {
      $dom: this.$fakieSelect,
      key: "fakieCheckbox",
      value: "off"
    }, {
      $dom: this.$switchSelect,
      key: "switchCheckbox",
      value: "off"
    }, {
      $dom: this.$negativeSelect,
      key: "negativeCheckbox",
      value: "off"
    }, {
      $dom: this.$topsideSelect,
      key: "topsideCheckbox",
      value: "off"
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
      value: "off"
    }, {
      $dom: this.$spins540Select,
      key: "spins540Checkbox",
      value: "off"
    }, {
      $dom: this.$spins720Select,
      key: "spins720Checkbox",
      value: "off"
    }, {
      $dom: this.$spins900Select,
      key: "spins900Checkbox",
      value: "off"
    }, {
      $dom: this.$heelRollSelect,
      key: "heelRollCheckbox",
      value: "off"
    }, {
      $dom: this.$channelSelect,
      key: "channelCheckbox",
      value: "off"
    }, {
      $dom: this.$christSelect,
      key: "christCheckbox",
      value: "off"
    }, {
      $dom: this.$grabsSelect,
      key: "grabsCheckbox",
      value: "off"
    }, {
      $dom: this.$rocketSelect,
      key: "rocketCheckbox",
      value: "off"
    }, {
      $dom: this.$crossgrabSelect,
      key: "crossgrabCheckbox",
      value: "off"
    }, {
      $dom: this.$levelSelect,
      key: "levelSelect",
      value: "1"
    }, {
      $dom: this.$spinsTotal,
      key: "spinsTotal",
      value: 5
    } //  { $dom: this.$removesTotal, key: "removesTotal", value: 3 },
    //  { $dom: this.$locksTotal, key: "locksTotal", value: 2 },
    ];
    this.versionCheck();
    this.initStoreables();
    this.registerListener();
    this.renderLevelText();
  }

  _createClass(Configuration, [{
    key: "versionCheck",
    value: function versionCheck() {
      if (localStorage.getItem(VERSION_KEY) !== CURRENT_VERSION) {
        this.reset();
        localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
      }
    }
    /*
    hasUnsavedSettings() {
      let isUnsaved = false;
      this.configs.forEach((param) => {
        let storedVal = localStorage.getItem(param.key)  ;
        if(!storedVal) {
          
        }
       // console.log(param, " storedVal",storedVal)
        if (!param.key.includes("Checkbox")) {
          //   if value is not stored yet: 
          if (   storedVal !== param.$dom.val()) {
            isUnsaved = true;
            console.log(param, "hot cb", param.value , param.$dom.val())
          }
        } else if (
          (storedVal === "on" && !param.$dom.prop("checked")) ||
          (storedVal === "off" && param.$dom.prop("checked"))
        ) {
           console.log(param, "hot")
          isUnsaved = true;
        }
      });
      return isUnsaved;
    }*/

  }, {
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
        _this2.hasUnsavedChanges = true; //this.setLevel("4");
        // this.$levelSelect.val("4")

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
        _this3.hasUnsavedChanges = true;

        _this3.setLevel("4");

        _this3.$submit.removeClass("pure-button-disabled");

        param.value = param.$dom.is(":checked") ? "on" : "off";
      });
    }
  }, {
    key: "registerListener",
    value: function registerListener() {
      var _this4 = this;

      this.$levelSelect.on("change", function (e) {
        _this4.hasUnsavedChanges = true;

        _this4.setLevel(_this4.$levelSelect.val());
      });
      this.$submit.on("click", function (e) {
        e.preventDefault();

        _this4.submit();
      });
      this.$spinsTotal.on("change", function (e) {
        _this4.hasUnsavedChanges = true;
        var val = parseInt(e.currentTarget.value, 10);

        if (!Number.isInteger(val) || val < 2) {
          _this4.setSpins(2);
        }
      });
      this.$reset.on("click", function (e) {
        e.preventDefault();

        _this4.reset();
      });
      $(".configurator-right-close-btn").on("click.save", function (e) {
        e.preventDefault();
        e.stopPropagation();

        if ($("#modal-screen--configuration").css("display") === "none") {
          return false;
        }

        if (_this4.hasUnsavedChanges) {
          var checkMenu = confirm("You have unsaved changes. \nPress OK to save and apply the settings. This restarts the game.\nPress Cancel to close the settings window and continue the game.");

          if (checkMenu == true) {
            _this4.$submit.trigger("click");
          } else {}
        }
      });
    }
  }, {
    key: "saveToLocalStorage",
    value: function saveToLocalStorage() {
      this.configs.forEach(function (param) {
        if (param.value) {
          localStorage.setItem(param.key, param.value);
        }
      });
    }
  }, {
    key: "submit",
    value: function submit() {
      this.saveToLocalStorage();
      this.hasUnsavedChanges = false;
      location.reload();
    }
  }, {
    key: "reset",
    value: function reset() {
      $("body").html("reset app.."); // clear sw app cache

      caches.keys().then(function (names) {
        var _iterator = _createForOfIteratorHelper(names),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var name = _step.value;
            caches["delete"](name);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      localStorage.clear();

      try {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          var _iterator2 = _createForOfIteratorHelper(registrations),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var registration = _step2.value;
              registration.unregister();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        });
      } catch (err) {}

      location.reload();
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      var value = this.configs.filter(function (s) {
        return s.key == "levelSelect";
      })[0].value;
      return value;
    }
  }, {
    key: "setSpins",
    value: function setSpins(spins) {
      this.configs.forEach(function (param) {
        if (param.key === "spinsTotal") {
          param.value = spins;
        }
      });
      this.$spinsTotal.val(2);
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      // custom level like easy
      var levelConfig = level === "4" ? {} : LEVEL_CONFIG[level];
      this.configs.forEach(function (param) {
        var configValue = levelConfig[param.key] ? levelConfig[param.key] : "";

        if (param.key === "levelSelect") {
          configValue = level;
        }

        if (configValue) {
          param.value = configValue;

          if (param.key.includes("Checkbox")) {
            if (configValue === "on") {
              param.$dom.prop("checked", true);
            } else {
              param.$dom.prop("checked", false);
            }
          } else {
            param.$dom.val(configValue);
          }
        }
      });
      this.renderLevelText(level);
    }
  }, {
    key: "renderLevelText",
    value: function renderLevelText(level) {
      if (!level) {
        var storedLevel = localStorage.getItem("levelSelect") || null;

        if (storedLevel) {
          level = storedLevel;
        } else {
          level = 1;
        }
      }

      var levelText = $("#start-screen-levels option:nth-child(".concat(parseInt(level, 10), ")")).html();
      $("#scoreboard-game-level").html(levelText);
    }
  }, {
    key: "getGameConfig",
    value: function getGameConfig() {
      return {
        level: this.configs.filter(function (s) {
          return s.key == "levelSelect";
        })[0].value,
        spins: this.configs.filter(function (s) {
          return s.key == "spinsTotal";
        })[0].value //removes: this.configs.filter((s) => s.key == "removesTotal")[0].value,
        //locks: this.configs.filter((s) => s.key == "locksTotal")[0].value,

      };
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
    key: "hasNoApproachSlot",
    value: function hasNoApproachSlot() {
      var hasApproach = this.$switchSelect.is(":checked") || this.$fakieSelect.is(":checked");
      return !hasApproach;
    }
  }, {
    key: "hasNoVariationSlot",
    value: function hasNoVariationSlot() {
      var hasVariation = this.$negativeSelect.is(":checked") || this.$topsideSelect.is(":checked") || this.$roughSelect.is(":checked") || this.$toughSelect.is(":checked") || this.$channelSelect.is(":checked") || this.$christSelect.is(":checked") || this.$grabsSelect.is(":checked") || this.$rocketSelect.is(":checked") || this.$crossgrabSelect.is(":checked");
      return !hasVariation;
    }
  }, {
    key: "getIncludedTricks",
    value: function getIncludedTricks() {
      return {
        "switch": this.$switchSelect.is(":checked") ? "on" : "off",
        fakie: this.$fakieSelect.is(":checked") ? "on" : "off",
        negative: this.$negativeSelect.is(":checked") ? "on" : "off",
        topside: this.$topsideSelect.is(":checked") ? "on" : "off",
        rough: this.$roughSelect.is(":checked") ? "on" : "off",
        tough: this.$toughSelect.is(":checked") ? "on" : "off",
        heelRoll: this.$heelRollSelect.is(":checked") ? "on" : "off",
        spins360: this.$spins360Select.is(":checked") ? "on" : "off",
        spins540: this.$spins540Select.is(":checked") ? "on" : "off",
        spins720: this.$spins720Select.is(":checked") ? "on" : "off",
        spins900: this.$spins900Select.is(":checked") ? "on" : "off",
        channel: this.$channelSelect.is(":checked") ? "on" : "off",
        christ: this.$christSelect.is(":checked") ? "on" : "off",
        grabs: this.$grabsSelect.is(":checked") ? "on" : "off",
        rocket: this.$rocketSelect.is(":checked") ? "on" : "off",
        crossgrab: this.$crossgrabSelect.is(":checked") ? "on" : "off"
      };
    }
  }]);

  return Configuration;
}();

/***/ }),

/***/ "./src/js/gameover-screen.js":
/*!***********************************!*\
  !*** ./src/js/gameover-screen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameOverScreen": () => (/* binding */ GameOverScreen)
/* harmony export */ });
/* harmony import */ var _helperfunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperfunctions.js */ "./src/js/helperfunctions.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var TEXTS = ["Congrats, you got ", "Sick, you got ", "You laced it, you got ", "Bonkers, that's  ", "Call your mum, you got  ", "Aight! You got  ", "Lush! You have  ", "Gnarly, you have  ", "JULIEN BAM, das ballert! ", //`Aragon was reborn and made  `,
"Once again, Eugen.. that's another ", "Banger! ", "Full send! ", "Sick Sesh! ", "You got the flow,  ", "Stoked! ", "Hyped! ", "Dope! ", "Aiiiiiit! ", "Ayyyyy! ", "Lit! ", "Epic sesh!", "You killed it and got ", "What a nutter! ", "You got the flow.", "Juiced stuff! ", "Sick!", "YOLO!", "Snatched!", "You are on fire! ", "Boss mode, you got ", "Massive flex! ", "Da Bomb! ", "Bang up job! ", "Fantabulous! ", "Gangster performance! ", "Keep it real! ", "Sweet action!", "OG style ", "Jam-packed sesh!"];
var GameOverScreen = /*#__PURE__*/function () {
  function GameOverScreen() {
    var callbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      onStartNew: null
    };

    _classCallCheck(this, GameOverScreen);

    this.callbacks = callbacks;
    this.$gameOverNewGameButton = $("#gameOverNewGameButton");
    this.$gameOverHighscoreButton = $("#gameOverHighscoreButton");
    this.$highscoresInputName = $("#highscoresInput");
    this.$highscoresSubmit = $("#highscore-submit");
    this.$highscoresMaxSpins = $("#gameOverHighScoresTooMuchSpins");
    this.$highscoresLoading = $("#highscoresLoading");
    this.$points = $("#gameOverPointsTotal");
    this.$tricks = $("#gameOverTricks");
    this.$highscores = $("#gameOverHighScores");
    this.$gameOverText = $("#gameOverText");
    this.$facebookShareBtn = $("#facebookShareBtn");
    this.$whatsappShareBtn = $("#whatsappShareBtn");
    this.$mailShareBtn = $("#mailShareBtn");
    this.csrfToken = "";
    this.isScoreSent = false;
    this.userData = {};

    if (localStorage.getItem("userName")) {
      this.$highscoresInputName.val(localStorage.getItem("userName"));
      this.$highscoresSubmit.removeClass("pure-button-disabled");
    }

    this.registerListener();
  }

  _createClass(GameOverScreen, [{
    key: "registerListener",
    value: function registerListener() {
      var _this = this;

      this.$gameOverNewGameButton.on("click", function (e) {
        e.preventDefault(); //this.callbacks.onStartNew();

        location.reload();
      });
      this.$gameOverHighscoreButton.on("click", function (e) {
        e.preventDefault();

        _this.openHighscore();
      });
      this.$highscoresInputName.on("change keyup", function (e) {
        e.preventDefault();

        var val = _this.$highscoresInputName.val();

        val = val.replace(/[\W_]+/g, "");

        _this.$highscoresInputName.val(val);

        if (_this.isScoreSent === false) {
          _this.$highscoresSubmit.removeClass("pure-button-disabled");
        }

        if (val === "") {
          _this.$highscoresSubmit.addClass("pure-button-disabled");
        }
      });
      this.$highscoresSubmit.on("click", function (e) {
        e.preventDefault();

        _this.saveHighScore().then(function () {
          _this.renderHighScores()["catch"](function (error) {
            _this.onNetworkError(error);
          });
        });

        localStorage.setItem("userName", _this.$highscoresInputName.val());
      });
    }
  }, {
    key: "render",
    value: function render(score, tricks, config) {
      var _this2 = this;

      this.userData = {
        score: score,
        tricks: tricks,
        config: config
      }; //console.log(this.userData.tricks);

      this.animateScore(parseInt(score, 10));
      var txt = TEXTS[Math.floor(Math.random() * TEXTS.length)];
      txt = score === 0 ? "At least it can not get worse..." : txt;
      this.$gameOverText.html(txt);
      var rows = [];
      tricks.tricks.forEach(function (entry) {
        var row = rows.push([entry.points, entry.parsed]);
      });
      var html = (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_0__.renderTable)("", ["Points", "Name"], rows, "red");
      this.$tricks.html(html);
      this.renderHighScores().then(function () {
        _this2.saveScore();
      })["catch"](function (error) {
        _this2.onNetworkError(error);
      });
      this.setTooMuchSpinsText(config);

      if (Number(score) <= 0) {
        this.disableHighscoreEntry();
      } //this.setSharingBar(score, tricks);

    }
  }, {
    key: "onNetworkError",
    value: function onNetworkError(error) {
      this.disableHighscoreEntry();
      this.$highscoresLoading.hide();
      $("#highscoreContTxt").html("Highscores are not available right now."); //console.error(error);
    }
  }, {
    key: "setTooMuchSpinsText",
    value: function setTooMuchSpinsText(config) {
      if (config && config.spins) {
        if (Number(config.spins) > 5) {
          this.disableHighscoreEntry();
          this.$highscoresMaxSpins.show();
        } else {
          this.$highscoresMaxSpins.hide();
        }
      }
    }
  }, {
    key: "disableHighscoreEntry",
    value: function disableHighscoreEntry() {
      this.$highscoresInputName.hide();
      this.$highscoresSubmit.hide();
    }
  }, {
    key: "renderHighScores",
    value: function renderHighScores() {
      var _this3 = this;

      var html = "";
      var rows = [];
      var rank = 0;
      this.$highscores.hide();
      this.$highscoresLoading.show();
      return $.get("/getHighScores", function (data) {
        var scores = data.scores;
        _this3.csrfToken = data.csrfToken;
        scores.forEach(function (d) {
          var payload = {};
          var data = JSON.parse(d.data) || null;

          if (data && d.name && d.score) {
            rank = rank + 1;
            var tricks = data.tricks && data.tricks.tricks && Object.keys(data.tricks.tricks).length > 0 ? data.tricks.tricks : []; // backwards comp

            if (tricks.length === 0) {
              tricks = data.tricks && Object.keys(data.tricks).length > 0 ? data.tricks : [];
            }

            if (tricks.length > 0) {
              tricks = tricks.map(function (dd) {
                return dd.parsed;
              }).join(", ");
            }

            rows.push([rank, d.name, d.score, tricks]);
          }
        });
        html = (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_0__.renderTable)("", ["Rank", "Name", "Score", "Tricks"], rows, "red");
        setTimeout(function () {
          _this3.$highscoresLoading.hide();

          _this3.$highscores.html(html);

          _this3.$highscores.show();
        }, 1000);
      });
    }
  }, {
    key: "animateScore",
    value: function animateScore(end) {
      var _this4 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      if (end === 0) {
        this.$points.html("0");
        return;
      }

      var start = 0;
      var range = end - start;
      var current = start;
      var increment = end > start ? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var timer = setInterval(function () {
        current += increment;

        _this4.$points.html(current);

        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
      this.$points.html(end);
    }
  }, {
    key: "saveHighScore",
    value: function saveHighScore() {
      var _this5 = this;

      if (this.isScoreSent === false) {
        return $.ajax({
          type: "PUT",
          headers: {
            "CSRF-Token": this.csrfToken
          },
          url: "./saveHighScore",
          data: {
            name: this.$highscoresInputName.val(),
            score: this.userData.score,
            tricks: this.userData.tricks,
            config: this.userData.config
          },
          success: function success(data) {
            _this5.isScoreSent = true;

            _this5.disableHighscoreEntry();

            var rankTxt = "th";
            rankTxt = Number(data.rank) === 1 ? "st" : rankTxt;
            rankTxt = Number(data.rank) === 2 ? "nd" : rankTxt;
            rankTxt = Number(data.rank) === 3 ? "rd" : rankTxt;
            var txt = "Congrats, ".concat(localStorage.getItem("userName"), ", you are in ").concat(data.rank).concat(rankTxt, " place.");
            $("#highscoreContTxt").html(txt);
          }
        });
      }
    }
  }, {
    key: "saveScore",
    value: function saveScore() {
      $.ajax({
        type: "PUT",
        headers: {
          "CSRF-Token": this.csrfToken
        },
        url: "./saveScore",
        data: {
          score: this.userData.score,
          tricks: this.userData.tricks,
          config: this.userData.config
        },
        success: function success() {//console.log("saved result");
        }
      });
    }
  }, {
    key: "setSharingBar",
    value: function setSharingBar(score, tricks) {
      var rows = [];
      tricks.forEach(function (entry) {
        var row = rows.push(entry.parsed);
      });
      var content = "My score: ".concat(score, "\r\nMy tricks:\r\n").concat(rows.join("\r\n"));
      var fbLink = "https://www.facebook.com/sharer/sharer.php?u=aightgame.com/&quote=".concat(encodeURIComponent(content));
      this.$facebookShareBtn.attr("href", fbLink);
      var whatsappLink = "whatsapp://send?text=".concat(encodeURIComponent(content), " https://aightgame.com/");
      this.$whatsappShareBtn.attr("href", whatsappLink);
      var contentTelegram = "My score: ".concat(score, ". My tricks: ").concat(rows.join(", "));
      var telegramLink = "https://t.me/share/url?url=https://aightgame.com&text=".concat(encodeURIComponent(contentTelegram));
      this.$mailShareBtn.attr("href", telegramLink);
    }
  }]);

  return GameOverScreen;
}();

/***/ }),

/***/ "./src/js/helperfunctions.js":
/*!***********************************!*\
  !*** ./src/js/helperfunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderThumb": () => (/* binding */ renderThumb),
/* harmony export */   "renderTableNoHeader": () => (/* binding */ renderTableNoHeader),
/* harmony export */   "renderTable": () => (/* binding */ renderTable),
/* harmony export */   "renderTOC": () => (/* binding */ renderTOC)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var renderThumb = function renderThumb() {
  var imageUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var bogLink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var html = "";
  var imageHtml = imageUrl ? "<img class=\"tricktionary_thumb_img\" src=\"".concat(imageUrl, "\"> </img>") : "";

  if (bogLink) {
    var linkContent = imageHtml === "" ? "<a target='_blank' href='http://skateyeg.com/bog/'>Book of Grinds</a>" : imageHtml;
    html = "<a href=\"".concat(bogLink, "\" target=\"_blank\">").concat(linkContent, "</a>");
  } else {
    html = imageHtml;
  }

  return html;
};
var renderTableNoHeader = function renderTableNoHeader() {
  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[], []];
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "blue";
  var rowsHtml = rows.map(function (r) {
    var tds = r.map(function (rr) {
      return "<div class=\"cell cell--details-view\"> ".concat(rr, " </div>");
    });
    return "<div class=\"row row--details-view\"> ".concat(tds.join(""), "</div>");
  });
  return " \n    <div data-name=\"details-view\" class=\"resp-table-wrapper resp-table-wrapper-details-view\">\n     \n      <div class=\"resp-table\">\n        ".concat(rowsHtml.join(""), "\n      </div>\n     ");
};
var renderTable = function renderTable() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var rows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [[], []];
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "blue";
  var headersHtml = headers.map(function (h) {
    return "<div class=\"cell\">".concat(h, "</div>");
  });
  var headersContainer = headersHtml ? "<div class=\"row header ".concat(color, "\">").concat(headersHtml.join(""), " </div> ") : "";
  var rowsHtml = rows.map(function (r) {
    var i = -1;
    var tds = r.map(function (rr) {
      i = i + 1;
      return "<div class=\"cell\" data-title=\"".concat(headers[i], "\"> ").concat(rr, " </div>");
    });
    return "<div class=\"row\"> ".concat(tds.join(""), "</div>");
  });
  return " \n    <div data-name=\"".concat(title.replace(" ", ""), "\" class=\"resp-table-wrapper\">\n      <h3>").concat(title, "</h3>\n      <div class=\"resp-table\">\n        ").concat(headersContainer, " \n        ").concat(rowsHtml.join(""), "\n      </div>\n     ");
};
var renderTOC = function renderTOC($dom) {
  var tocs = [];
  $dom.find("h3").each(function (i, section) {
    var $section = $(section);
    var display = $section.text();
    var anchor = display.replace(" ", "");
    $section.html("<a id=\"toc-".concat(anchor, "\" class=\"toc-anchor\" name=\"").concat(anchor, "\"></a>").concat(display, " "));
    tocs.push("<a style=\"cursor:pointer\" data-anchor=\"toc-".concat(anchor, "\" class=\"pure-menu-link toc-link\"  >  \n      <li class=\"pure-menu-item\">").concat(display, " </li> \n      </a>"));
  });
  var html = "\n  <div class=\"pure-menu  tricktionary-toc\">\n    <span class=\"pure-menu-heading\">TOC</span> \n    <ul class=\"pure-menu-list\"> \n      ".concat(tocs.join(""), "\n    </ul>\n   \n </div>\n");
  $(html).prependTo($dom);
};

/***/ }),

/***/ "./src/js/modalscreens.js":
/*!********************************!*\
  !*** ./src/js/modalscreens.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalScreen": () => (/* binding */ ModalScreen)
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
    _classCallCheck(this, ModalScreen);

    this.$container = $("#modal-screen-window");
    this.$contents = $(".modal-screen-text");
    this.$title = $("#modal-screen-title");
    this.$titleIcon = $("#modal-screen-title-icon");
    this.currentWindow = "";
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
      this.$container.show(); //$("html, body").animate({ scrollTop: 0 }, "fast");
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.currentWindow) {
        $("#modal-screen--" + this.currentWindow).hide();
      }

      this.$container.hide(); //$("html, body").animate({ scrollTop: 0 }, "fast");
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultParser": () => (/* binding */ ResultParser)
/* harmony export */ });
/* harmony import */ var _testdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testdata.js */ "./src/js/testdata.js");
/* harmony import */ var _trickdata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trickdata.js */ "./src/js/trickdata.js");
/* harmony import */ var _helperfunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperfunctions.js */ "./src/js/helperfunctions.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      spinTo = spinTo && spinTo.winner.name === "None" ? null : spinTo;
      var grind = slots.filter(function (s) {
        return s && s.name === "Grind";
      })[0] || null;
      var grindVariation = slots.filter(function (s) {
        return s && s.name === "GrindVariation";
      })[0] || null;
      grindVariation = grindVariation && grindVariation.winner ? grindVariation : null;
      var spinOff = slots.filter(function (s) {
        return s && s.name === "SpinOff";
      })[0] || null;
      spinOff = spinOff && spinOff.winner.name === "None" ? null : spinOff;

      if (!approach || !approach.winner) {
        approach = {
          winner: {
            name: "Forwards"
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
        isReverse = spinTo && spinTo.winner.name.includes("360") ? true : false;
      }

      var isTopside = grindVariation && grindVariation.winner.name.includes("Topside");
      var isNegative = grindVariation && grindVariation.winner.name.includes("Negative");
      var isRough = grindVariation && grindVariation.winner.name.includes("Rough");
      var approachName = this.parseApproachName(approach, isFakie, hasSpin, isGrooveGrind);
      isReverse = approachName === "Zerospin" ? true : isReverse;
      var spinName = this.parseSpinTo(spinTo, isGrooveGrind, isInspin, isOutspin, isFakie);

      if (approachName && (spinName.includes("Halfcab") || spinName.includes("Fullcab") || spinName.includes("True Halfcab") || spinName.includes("True Fullcab"))) {
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
        var spinOffTxt = this.parseSpinOff(spinOff, hasSpin, isInspin);
        tokens.push("to ".concat(spinOffTxt, " out"));
      }

      var result = tokens.join(" ");
      result = this.replaceGrindSynonyms(result, grind.winner.name, {
        isReverse: isReverse || false,
        isTopside: isTopside || false,
        isNegative: isNegative || false,
        isRough: isRough || false
      }); // Fakie Switch Outspin 360 Tough Soul to 180 rewind out
      // Zerospin BS Pudslide

      result = result.replace("Topside", "Top");
      result = result.replace("Alley-oop", "AO");
      result = result.replace(/to Forwards out/g, "");
      result = result.replace(/Forwards/g, "");
      result = result.replace(/90 /, "");
      result = result.replace(/None/, "");
      result = result.replace(/  /g, " ");
      result = result.replace(/  /g, " ");
      return {
        parsed: result.trim(),
        orig: resultOrig.join(" | ")
      };
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
    key: "parseSpinTo",
    value: function parseSpinTo(spinTo, isGrooveGrind, isInspin, isOutspin, isFakie) {
      var spinName = spinTo && spinTo.winner.name ? spinTo.winner.name : "";

      if (spinName === "") {
        return spinName;
      }

      if (!isGrooveGrind && !isFakie) {
        if (spinTo.winner.name.includes("180")) {
          if (isInspin) {
            spinName = "Alley-oop";
          } else {
            spinName = "True";
          }
        } else if (spinTo.winner.name.includes("360")) {
          if (isInspin) {
            // ?
            spinName = "360";
          } else {
            spinName = "Hurricane";
          }
        } else if (spinTo.winner.name.includes("540")) {
          if (isInspin) {
            // ?
            spinName = "540 Alley-oop";
          } else {
            spinName = "540 Hurricane";
          }
        } else if (spinTo.winner.name.includes("720")) {
          if (isInspin) {
            // ?
            spinName = "720";
          } else {
            spinName = "720 Hurricane";
          }
        } else if (spinTo.winner.name.includes("900")) {
          if (isInspin) {
            // ?
            spinName = "900 Alley-oop";
          } else {
            spinName = "900 Hurricane";
          }
        }
      }

      if (!isGrooveGrind && isFakie) {
        if (isInspin && spinTo.winner.name.includes("180")) {
          spinName = "Halfcab";
        }

        if (isInspin && spinTo.winner.name.includes("360")) {
          spinName = "Fullcab";
        }

        if (isOutspin && spinTo.winner.name.includes("180")) {
          spinName = "True Halfcab";
        }

        if (isOutspin && spinTo.winner.name.includes("360")) {
          spinName = "True Fullcab";
        }

        if (isOutspin && spinTo.winner.name.includes("540")) {
          spinName = "True Fullcab 540";
        }

        if (isOutspin && spinTo.winner.name.includes("720")) {
          spinName = "True Fullcab 720";
        }

        if (isOutspin && spinTo.winner.name.includes("900")) {
          spinName = "True Fullcab 900";
        }
      } //spinName = spinName.replace("90 ", " ");


      spinName = spinName.replace("Inspin", "");
      spinName = spinName.replace("Outspin", "");
      spinName = spinName.replace("None", ""); // spinName = spinName.replace("Forwards", "");

      return spinName;
    }
  }, {
    key: "parseSpinOff",
    value: function parseSpinOff(spinOff, hasSpin, isInspin) {
      var spinName = spinOff.winner.name;
      var isRewind = false;

      if (hasSpin) {
        if (isInspin && spinOff.winner.name.includes("Outspin")) {
          isRewind = true;
        } else if (!isInspin && spinOff.winner.name.includes("Inspin")) {
          isRewind = true;
        }
      }

      spinName = spinName.replace("Inspin", "");
      spinName = spinName.replace("Outspin", "");
      spinName = spinName.replace("None", "");
      spinName = isRewind ? spinName + " rewind" : spinName; // Forwards
      // spinName = spinName.replace("Forwards", "");

      return spinName;
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
      });
      var synonym = null;
      candidates.forEach(function (syn) {
        if (synonym === null && _this.meetsSynonymProps(syn, props)) {
          synonym = syn;
        }
      });

      if (synonym) {
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
  }, {
    key: "renderHelpTableRow",
    value: function renderHelpTableRow(name, thumbUrl, comment) {
      return [" <div class=\"explainTrickName\">".concat(name, "</div> "), " <div class=\"explainTrickImage\"> ".concat((0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_2__.renderThumb)(thumbUrl), "</div> \n        <div class=\"explainTrickComment\">").concat(comment ? comment : "", " </div> \n      ")];
    }
  }, {
    key: "getSortedByStrLen",
    value: function getSortedByStrLen(arrH) {
      return arrH.sort(function (a, b) {
        var comparison = 0;

        if (a.name.length > b.name.length) {
          comparison = -1;
        } else if (a.name.length < b.name.length) {
          comparison = 1;
        }

        return comparison;
      });
    }
  }, {
    key: "getHelpTableForTrick",
    value: function getHelpTableForTrick(result) {
      var html = "";
      var parseString = result.parsed.replace("Top ", "Topside");
      var rows = [];
      var orig = result.orig;

      if (result.orig.includes("Inspin") || result.orig.includes("Outspin")) {
        rows.push(this.renderHelpTableRow("Inspin/Outspin", "", "Inspin is a spin to the right (clockwise) if the obstacle is on the right of you, Outspin is a spin to the left. Vice versa if obstacle is on the left. "));
      }

      var glossaryTerms = [];

      for (var _i = 0, _Object$entries = Object.entries(CONFIG.GLOSSARY); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            term = _Object$entries$_i[0],
            comment = _Object$entries$_i[1];

        if (parseString.toLowerCase().includes(term.toLowerCase())) {
          glossaryTerms.push(term);

          if ((parseString.includes("True Fullcab") || parseString.includes("True Halfcab")) && (term === "True" || term === "Halfcab" || term === "Fullcab")) {
            continue;
          }

          rows.push(this.renderHelpTableRow(term, "", comment));
          parseString = parseString.replace(term, "");
        }
      } // replace true fullcab, true halfcab


      var grind = this.getSortedByStrLen(CONFIG.GRINDS).filter(function (g) {
        return parseString.includes(g.name);
      })[0];
      var grindSynonym = CONFIG.GRIND_SYNONYMS_THUMB.filter(function (s) {
        return parseString.includes(s.newName);
      })[0];
      var variation = CONFIG.VARIATIONS_THUMB.filter(function (s) {
        return parseString.includes(s.name);
      })[0];

      if (grindSynonym) {
        rows.push(this.renderHelpTableRow(grindSynonym.newName, grindSynonym.thumbUrl, grindSynonym.comment));
        parseString = parseString.replace(grindSynonym.name, "");
      } else {
        var cleanedName = grind.name.replace(/BS /, "Backside ");
        cleanedName = cleanedName.replace(/FS /, "Frontside ");
        rows.push(this.renderHelpTableRow(cleanedName, grind.thumbUrl, grind.comment));
        parseString = parseString.replace(grind.name, "");
      }

      if (variation) {
        if (parseString.includes(variation.name)) {
          rows.push(this.renderHelpTableRow(variation.name, variation.thumbUrl, variation.comment));
          parseString = parseString.replace(variation.name, "");
        }
      }

      return (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_2__.renderTableNoHeader)(rows);
    }
  }]);

  return ResultParser;
}();

function testParser() {
  var s = new ResultParser();
  _testdata_js__WEBPACK_IMPORTED_MODULE_0__.testData.forEach(function (entry, i) {
    var p = s.parse(entry.data);

    if (p.parsed !== entry.expected) {
      // eslint-disable-next-line
      console.error(i, entry, p);
    }

    var doc = s.getHelpTableForTrick(p); //console.log(doc)
  });
}

testParser();

/***/ }),

/***/ "./src/js/scoreboard.js":
/*!******************************!*\
  !*** ./src/js/scoreboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scoreboard": () => (/* binding */ Scoreboard)
/* harmony export */ });
/* harmony import */ var _slotmachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slotmachine */ "./src/js/slotmachine.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Scoreboard = /*#__PURE__*/function () {
  function Scoreboard(config) {
    _classCallCheck(this, Scoreboard);

    this.tokensTotal = config; // config.spins;config.locks;config.removes;

    this.points = 0;
    this.spins = 0;
    this.locks = this.tokensTotal.locks;
    this.removes = this.tokensTotal.removes;
    this.$points = $("#sb-total-points");
    this.$spinsRemaining = $("#sb-spins-remaining");
    this.$locksRemaining = $("#sb-locks-remaining");
    this.$removesRemaining = $("#sb-removes-remaining");
    this.$spinsTotal = $("#sb-spins-total");
    this.$locksTotal = $("#sb-locks-total");
    this.$removesTotal = $("#sb-removes-total");
    this.startGame();
  }

  _createClass(Scoreboard, [{
    key: "startGame",
    value: function startGame() {
      this.points = 0;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var spinNo = this.spins === parseInt(this.tokensTotal.spins, 10) + 1 ? parseInt(this.tokensTotal.spins, 10) : this.spins;
      this.$spinsRemaining.html(spinNo);
      this.$locksRemaining.html(this.locks);

      if (this.locks < 0) {
        this.$locksRemaining.addClass("token-in-minus");
      } else {
        this.$locksRemaining.removeClass("token-in-minus");
      }

      this.$removesRemaining.html(this.removes);

      if (this.removes < 0) {
        this.$removesRemaining.addClass("token-in-minus");
      } else {
        this.$removesRemaining.removeClass("token-in-minus");
      }

      this.$spinsTotal.html(this.tokensTotal.spins);
      this.$locksTotal.html(this.tokensTotal.locks);
      this.$removesTotal.html(this.tokensTotal.removes);
    }
  }, {
    key: "set",
    value: function set() {
      var stateCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var disabledCnt = stateCount[_slotmachine__WEBPACK_IMPORTED_MODULE_0__.SLOT_STATES.disabled] ? stateCount[_slotmachine__WEBPACK_IMPORTED_MODULE_0__.SLOT_STATES.disabled] : 0;
      var lockedCnt = stateCount[_slotmachine__WEBPACK_IMPORTED_MODULE_0__.SLOT_STATES.locked] ? stateCount[_slotmachine__WEBPACK_IMPORTED_MODULE_0__.SLOT_STATES.locked] : 0;
      this.removes = this.tokensTotal.removes - disabledCnt;
      this.locks = this.tokensTotal.locks - lockedCnt;
      this.render();
    }
  }, {
    key: "useSpin",
    value: function useSpin() {
      this.spins = this.spins + 1;
      this.render();
    }
  }, {
    key: "setPoints",
    value: function setPoints(p) {
      this.animateScore(this.points, this.points + p);
      this.points = this.points + p;
      this.render();
    }
  }, {
    key: "isInvalidSpin",
    value: function isInvalidSpin() {
      return this.spins === parseInt(this.tokensTotal.spins, 10) + 1 ? true : false;
    }
  }, {
    key: "isLastSpin",
    value: function isLastSpin() {
      return this.spins === parseInt(this.tokensTotal.spins, 10) ? true : false;
    }
  }, {
    key: "hasNoMoreSpins",
    value: function hasNoMoreSpins() {
      return this.spins > parseInt(this.tokensTotal.spins, 10) ? true : false;
    }
  }, {
    key: "isValidTokensCount",
    value: function isValidTokensCount() {
      return this.removes >= 0 && this.locks >= 0;
    }
  }, {
    key: "animateScore",
    value: function animateScore(start, end) {
      var _this = this;

      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 250;

      // animateValue( 100, 25, 5000);
      if (start === end) {
        return;
      }

      var range = end - start;
      var current = start;
      var increment = end > start ? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var timer = setInterval(function () {
        current += increment;

        _this.$points.html(current);

        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
      this.$points.html(this.points);
    }
  }]);

  return Scoreboard;
}();

/***/ }),

/***/ "./src/js/screens.js":
/*!***************************!*\
  !*** ./src/js/screens.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screens": () => (/* binding */ Screens)
/* harmony export */ });
/* harmony import */ var _modalscreens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalscreens */ "./src/js/modalscreens.js");
/* harmony import */ var _tricktionary_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tricktionary-screen */ "./src/js/tricktionary-screen.js");
/* harmony import */ var _about_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-screen */ "./src/js/about-screen.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Screens = /*#__PURE__*/function () {
  function Screens() {
    _classCallCheck(this, Screens);

    this.$scrollWrapper = $(".l-content");
    this.$helpBtn = $("#helpButton"); // dupe

    this.$tricklistBtn = $("#showTricklistButton");
    this.$aboutBtn = $("#aboutBtn");
    this.$trickNamingBtn = $("#trickNamingBtn");
    this.$configButton = $("#configButton");
    this.$modalCloseBtn = $("#modal-screen-close-btn");
    this.modalScreen = new _modalscreens__WEBPACK_IMPORTED_MODULE_0__.ModalScreen();
    this.tricktionaryScreen = new _tricktionary_screen__WEBPACK_IMPORTED_MODULE_1__.TricktionaryScreen();
    this.aboutScreen = new _about_screen__WEBPACK_IMPORTED_MODULE_2__.AboutScreen(); //this.aboutScreen = new AboutScreen();

    this.activeScreen = "Loading";
    this.lastNonModalScreen = "";
    this.screens = [{
      name: "Loading",
      $dom: $("#loading-screen")
    }, {
      name: "Start",
      $dom: $("#start-screen")
    }, {
      name: "Slotmachine",
      $dom: $("#slotmachine")
    }, {
      name: "GameOver",
      $dom: $("#gameover-screen")
    }, // #modal-screen-window
    {
      name: "Configuration",
      modal: {
        title: "Configuration",
        id: "configuration"
      }
    }, {
      name: "About",
      modal: {
        title: "About",
        id: "about"
      }
    }, {
      name: "Tricktionary",
      modal: {
        title: "Tricktionary",
        id: "reference"
      }
    }, {
      name: "Trick List",
      modal: {
        title: "Trick List",
        id: "tricklist"
      }
    }];
    this.registerListener();
  }

  _createClass(Screens, [{
    key: "registerListener",
    value: function registerListener() {
      var _this = this;

      this.$modalCloseBtn.on("click", function (e) {
        e.preventDefault();

        _this.show(_this.lastNonModalScreen);

        _this.handleDirectLinks();
      });
      this.$configButton.on("click", function (e) {
        e.preventDefault();

        _this.show("Configuration", "up");
      });
      this.$aboutBtn.on("click", function (e) {
        e.preventDefault();

        _this.show("About", "up");
      });
      this.$trickNamingBtn.on("click", function (e) {
        e.preventDefault();

        _this.show("Tricktionary", "up");
      });
      this.$tricklistBtn.on("click", function (e) {
        e.preventDefault();

        _this.show("Trick List", "up");
      });
    }
  }, {
    key: "show",
    value: function show() {
      var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var scrollTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      if (this.activeScreen === "Loading") {
        this.getScreen().$dom.fadeOut("slow");
      }

      var activeScreen = this.getScreen();
      var newScreen = this.getScreen(selected);

      if (activeScreen.modal) {
        this.modalScreen.hide();
      } else {
        activeScreen.$dom.hide();
      }

      if (newScreen.modal) {
        this.modalScreen.show(newScreen.modal.id, newScreen.modal.title);
      } else {
        this.lastNonModalScreen = selected;
        newScreen.$dom.show();
      }

      this.activeScreen = selected;

      if (scrollTo === "up") {
        this.scrollUp();
      } else if (scrollTo === "down") {
        this.scrollDown();
      }
    }
  }, {
    key: "disableNav",
    value: function disableNav() {
      this.$helpBtn.addClass("pure-button-disabled");
      this.$configButton.addClass("pure-button-disabled");
      this.$aboutBtn.addClass("pure-button-disabled");
      this.$trickNamingBtn.addClass("pure-button-disabled");
    }
  }, {
    key: "enableNav",
    value: function enableNav() {
      this.$helpBtn.removeClass("pure-button-disabled");
      this.$configButton.removeClass("pure-button-disabled");
      this.$aboutBtn.removeClass("pure-button-disabled");
      this.$trickNamingBtn.removeClass("pure-button-disabled");
    }
  }, {
    key: "getScreen",
    value: function getScreen() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.activeScreen;
      return this.screens.filter(function (s) {
        return s.name === name;
      })[0];
    }
  }, {
    key: "scrollDown",
    value: function scrollDown(targetElement) {
      if (targetElement && this.isElementInViewport(targetElement)) {} else {
        this.$scrollWrapper.animate({
          scrollTop: $(document).height()
        }, "fast");
      }
    }
  }, {
    key: "scrollUp",
    value: function scrollUp(animated) {
      if (animated) {
        this.$scrollWrapper.animate({
          scrollTop: 0
        }, "fast");
      } else {
        this.$scrollWrapper.scrollTop(0);
      }
    } // to do: alternatively: always scroll but have container with min padding, so it does not scroll unnecessary

  }, {
    key: "isElementInViewport",
    value: function isElementInViewport(el) {
      var topOffset = 65;
      var rect = el.getBoundingClientRect(); //console.log(rect.top, rect.bottom);

      return rect.top >= 0 && rect.left >= 0 && rect.bottom + topOffset <= (window.innerHeight || document.documentElement.clientHeight)
      /* or $(window).height() */
      && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      /* or $(window).width() */
      ;
    }
  }, {
    key: "handleDirectLinks",
    value: function handleDirectLinks() {
      if (window.history && (location.href.includes("tricktionary") || location.href.includes("about"))) {
        window.history.replaceState({}, "", "/");
      }
    }
  }]);

  return Screens;
}();

/***/ }),

/***/ "./src/js/slotmachine.js":
/*!*******************************!*\
  !*** ./src/js/slotmachine.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLOT_STATES": () => (/* binding */ SLOT_STATES),
/* harmony export */   "SlotMachine": () => (/* binding */ SlotMachine)
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

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    var hasNoApproachSlot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var hasNoVariationSlot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, SlotMachine);

    this.includedTricks = includedTricks;
    this.hasNoApproachSlot = hasNoApproachSlot;
    this.hasNoVariationSlot = hasNoVariationSlot;
    this.slotSpeed = slotSpeed;
    this.$slots = $(".bog-slot");
    this.$approaches = $("#approaches");
    this.$spinsToGrind = $("#spinsToGrind");
    this.$grinds = $("#grinds");
    this.$grindVariations = $("#grindVariations");
    this.$spinsOffGrind = $("#spinsOffGrind");
    this.grindsInTricklist = [];
    this.trickdata = new _trickdata_js__WEBPACK_IMPORTED_MODULE_3__.Trickdata();
    CONFIG = this.trickdata.get();
    this.slots = [];
    this.initSlots();

    if (this.hasNoApproachSlot) {
      $(".bog-slot-1").hide();
    } else {
      $(".bog-slot-1").show();
    }

    if (this.hasNoVariationSlot) {
      $(".bog-slot-4").closest(".pure-u-1").hide();
    } else {
      $(".bog-slot-4").closest(".pure-u-1").show();
    }
  }

  _createClass(SlotMachine, [{
    key: "initSlots",
    value: function initSlots() {
      var _ref;

      var nextStepNoApproach = this.hasNoApproachSlot ? 3 : 2;
      this.slots = [(_ref = {
        name: "Grind",
        next: 1
      }, _defineProperty(_ref, "next", this.hasNoVariationSlot ? nextStepNoApproach : 1), _defineProperty(_ref, "machine", null), _defineProperty(_ref, "dom", this.$grinds), _defineProperty(_ref, "data", CONFIG.GRINDS_FOR_SLOTS), _defineProperty(_ref, "state", SLOT_STATES.enabled), _defineProperty(_ref, "winner", null), _ref), {
        name: "GrindVariation",
        next: nextStepNoApproach,
        machine: null,
        dom: this.$grindVariations,
        data: null,
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
    key: "countSlotStates",
    value: function countSlotStates() {
      var states = {};
      this.slots.forEach(function (slot) {
        if (states[slot.state]) {
          states[slot.state] = states[slot.state] + 1;
        } else {
          states[slot.state] = 1;
        }
      });
      return states;
    }
  }, {
    key: "onSpinStart",
    value: function onSpinStart() {
      var _this2 = this;

      this.slots.forEach(function (slot) {
        //slot.state =  SLOT_STATES.enabled
        if (slot.state === SLOT_STATES.disabled) {// reset disabled before spin
          // this.setSlotState(slot.name, SLOT_STATES.enabled, slot.dom.closest(".bog-slot"));
        }

        if (slot.state !== SLOT_STATES.locked) {
          slot.dom.closest(".bog-slot-header").removeClass("bog-slot-visible");

          _this2.resetScore(slot.dom);
        }
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this3 = this;

      this.onSpinStart();
      return new Promise(function (resolve, reject) {
        var nextId = _this3.getFirstSlotIndex();

        _this3.startSlot(nextId, resolve);
      });
    }
  }, {
    key: "onClickSlot",
    value: function onClickSlot($slot, callbacks) {
      var name = $slot.data("name");
      var index = this.getSlotIndexByName(name);
      var slot = this.slots[index];
      var isClickable = this.slots[index].state !== SLOT_STATES.unavailable;

      if (isClickable) {
        this.toggleSlotState(name, $slot, callbacks);
        callbacks.on.afterSlotChange.call(callbacks.scope);
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
        // eslint-disable-next-line
        console.error("unavailable slot state", slotName, state);
      } else if (state === SLOT_STATES.enabled) {
        newState = SLOT_STATES.disabled;
      } else if (state === SLOT_STATES.disabled) {
        newState = SLOT_STATES.enabled;
      } else if (state === SLOT_STATES.locked) {
        newState = SLOT_STATES.enabled;
      } else {
        // eslint-disable-next-line
        console.error("invalid slot state", slotName, state);
      } // disable grind reel lock


      if (slotName === "Grind") {
        newState = SLOT_STATES.enabled;
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
        //alert("At least one reel must be active and unlocked");
        return isValid = false;
      }

      return isValid;
    }
  }, {
    key: "toggleSlotState",
    value: function toggleSlotState(slotName, $slot, callbacks) {
      var index = this.getSlotIndexByName(slotName);
      var state = this.slots[index].state;
      var newState = this.getNextState(state, slotName);
      this.setSlotState(slotName, newState, $slot);

      if (state === SLOT_STATES.enabled && newState === SLOT_STATES.disabled || state === SLOT_STATES.disabled && newState === SLOT_STATES.enabled) {
        callbacks.on.onResultChange.call(callbacks.scope, false);
      }

      return newState;
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
    key: "getWinnerSlots",
    value: function getWinnerSlots() {
      var winners = this.slots.map(function (s) {
        if (s.state === SLOT_STATES.enabled || s.state === SLOT_STATES.locked) {
          return s;
        } else {
          return null;
        }
      });
      return winners;
    }
  }, {
    key: "getTrickScore",
    value: function getTrickScore() {
      var total = 0;
      this.getWinnerSlots().forEach(function (w) {
        var score = w && w.winner ? w.winner.scores : 0;

        if (w && w.winner && w.name === "GrindVariation") {
          var variation = CONFIG.VARIATIONS.filter(function (v) {
            return v.name === w.winner.name;
          })[0];
          score = variation && variation.scores ? variation.scores : 0;
        }

        total = total + parseInt(score, 10);
      });
      return total;
    }
  }, {
    key: "showScores",
    value: function showScores($slot) {
      $slot.find(".slotBgIconContainerRight").show();
    }
  }, {
    key: "resetScore",
    value: function resetScore($slot) {
      $slot.parent().parent().find(".slotBgIconContainerRight").html("");
    }
  }, {
    key: "renderScore",
    value: function renderScore($slot) {
      var score = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (score) {
        var html = "<img class=\"bogSlot-score-img\"  src=\"img/score-".concat(score, ".svg\"></img>"); //`<span class="number-circle-slot">${scores}</span>`

        $slot.parent().parent().find(".slotBgIconContainerRight").html(html).show();
      } else {
        this.hideScores($slot.parent().parent());
      }
    }
  }, {
    key: "hideScores",
    value: function hideScores($slot) {
      $slot.find(".slotBgIconContainerRight").hide();
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
  }, {
    key: "onCompleteSlot",
    value: function onCompleteSlot(resolve, slot, activeNodeIndex) {
      var index = this.getSlotIndexByName(slot.name);
      var $active = slot.dom.find(".bogLink:eq(".concat(activeNodeIndex + 1, ")"));
      var theWinner = slot.data[$active.data("index") - 1];

      if (String($active.data("index")) === "-1") {
        theWinner = {
          scores: 0,
          name: "None"
        };
      }

      var score = theWinner.scores;
      this.slots[index].winner = theWinner;
      var data = null;

      if (slot.name === "Grind") {
        this.grindsInTricklist.push(theWinner.name); // grind variations

        var filteredVariations = this.filterTrickConfiguration("GrindVariation", theWinner.variations);

        var _index = this.getSlotIndexByName("GrindVariation");

        if (filteredVariations.length === 0) {
          this.slots[_index].previousState = this.slots[_index].state !== SLOT_STATES.unavailable ? this.slots[_index].state : this.slots[_index].previousState;
          this.setSlotState("GrindVariation", SLOT_STATES.unavailable, this.slots[_index].dom.closest(".bog-slot"));
        } else if (this.slots[_index].state === SLOT_STATES.unavailable) {
          // bug: if was disabled, then unavailabe, disable is not memorized
          this.setSlotState("GrindVariation", this.slots[_index].previousState, this.slots[_index].dom.closest(".bog-slot"));
        }

        this.slots[1].data = filteredVariations;
        this.slots[2].data = CONFIG.APPROACHES;

        if (theWinner.noSwitch === true) {
          this.slots[2].data = this.slots[2].data.filter(function (e) {
            return e.isSwitch === false;
          });
        }

        var grindSlot = this.slots[this.getSlotIndexByName("Grind")];
        this.slots[3].data = this.trickdata.getSpinToData(grindSlot.winner);
        this.slots[4].data = this.trickdata.getSpinOffData(grindSlot.winner);
      } else if (slot.name === "Approach") {
        var _grindSlot = this.slots[this.getSlotIndexByName("Grind")];
        var approachSlot = this.slots[this.getSlotIndexByName("Approach")];
        this.slots[3].data = this.trickdata.getSpinToData(_grindSlot.winner, approachSlot.winner);
        this.slots[4].data = this.trickdata.getSpinOffData(_grindSlot.winner);
      } else if (slot.name === "GrindVariation") {
        var variation = CONFIG.VARIATIONS.filter(function (v) {
          return v.name === theWinner.name;
        })[0];
        score = variation && variation.scores ? variation.scores : 0;
      }

      this.renderScore(slot.dom, score);
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
      var _this4 = this;

      var slotState = this.slots[index].state;

      if (slotState === SLOT_STATES.locked) {//this.slots[index].disabled = true;
      } else {
        this.renderSlot(index, this.slots[index].data);
        var $header = this.slots[index].dom.closest(".bog-slot-header");

        if ([SLOT_STATES.enabled].includes(slotState)) {
          $header.addClass("bog-slot-visible");
        }

        this.slots[index].machine.shuffle(5, function (activeNodeIndex) {
          _this4.onCompleteSlot(resolve, _this4.slots[index], activeNodeIndex);
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
    key: "filterTrickListData",
    value: function filterTrickListData(name, data) {
      var _this5 = this;

      var entries = data;

      if (name === "Grind") {
        entries = entries.filter(function (e) {
          var isAdded = _this5.grindsInTricklist.includes(e.name);

          return !isAdded;
        });
      }

      return entries;
    }
  }, {
    key: "filterTrickConfiguration",
    value: function filterTrickConfiguration(name, data) {
      var _this6 = this;

      var entries = data;

      if (name === "Grind") {
        entries = CONFIG.GRINDS_FOR_SLOTS;
        entries = entries.filter(function (e) {
          var isExcluded = _this6.includedTricks.heelRoll === "off" && (e.name.includes("Wheelbarrow") || e.name.includes("Training Wheel") || e.name.includes("Hot Dog") || e.name.includes("Closed Book") || e.name.includes("Open Book") || e.name.includes("Byn Soul") || e.name.includes("Sidewalk") || e.name.includes("Darkslide") || e.name.includes("Citric Acid"));

          var isAdded = _this6.grindsInTricklist.includes(e.name);

          return !isExcluded && !isAdded;
        });
        entries = this.filterLocked(entries);

        if (entries.length === 0) {
          // all grinds used, reset
          entries = CONFIG.GRINDS_FOR_SLOTS;
        } // check if locked grindvariation exists and filter that shit.
        // or locked spin (with 270/450)

      } else if (name === "SpinTo" || name === "SpinOff") {
        if (this.includedTricks.spins360 === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("360") && !e.name.includes("270");
          });
        }

        if (this.includedTricks.spins540 === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("540") && !e.name.includes("450");
          });
        }

        if (this.includedTricks.spins720 === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("720") && !e.name.includes("630");
          });
        }

        if (this.includedTricks.spins900 === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("900") && !e.name.includes("810");
          });
        }
      } else if (name === "Approach") {
        if (this.includedTricks["switch"] === "off") {
          entries = entries.filter(function (e) {
            return e.isSwitch !== true;
          });
        }

        if (this.includedTricks.fakie === "off") {
          entries = entries.filter(function (e) {
            return e.isFakie !== true;
          });
        }
      } else if (name === "GrindVariation") {
        if (this.includedTricks.negative === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("Negative");
          });
        }

        if (this.includedTricks.topside === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("Topside");
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

        if (this.includedTricks.grabs === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("Grab");
          });
        }

        if (this.includedTricks.rocket === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("Rocket");
          });
        }

        if (this.includedTricks.crossgrab === "off") {
          entries = entries.filter(function (e) {
            return !e.name.includes("Cross-Grab");
          });
        }
      }

      return entries;
    }
  }, {
    key: "renderSlot",
    value: function renderSlot() {
      var _this7 = this;

      var slotIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var filteredData = this.filterTrickConfiguration(this.slots[slotIndex].name, data);
      /* const filteredTrickListData = this.filterTrickListData(
        this.slots[slotIndex].name,
        filteredData
      );*/

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
          this.slots[slotIndex].machine = null;
        } // cssId: generate fresh node for slotmachine (re-init problem)


        $node = $("#".concat(cssId));
        this.slots[slotIndex].dom = $node;
      }

      var index = 0;
      var reelRows = [];
      filteredData.map(function (s) {
        index += 1;
        var iconClass = s.icon ? "bogLink-icon-".concat(s.icon) : "";
        iconClass = "";
        var name = s.url ? "<a target=\"_blank\" href=\"".concat(s.url, "\">").concat(s.name, "</a>") : s.name;
        name = _this7.slots[slotIndex].name === "Grind" ? name : s.name;
        name = s.name;
        var htmlSlot = "\n        <div data-index=\"".concat(index, "\" class=\"bogLink\">\n          <div class=\"").concat(iconClass, "\">").concat(name, "\n          </div>\n        </div>\n        ");

        if (s.repeat) {
          for (var i = 0; i < s.repeat; i++) {
            reelRows.push(htmlSlot);
          }
        } else if (_this7.slots[slotIndex].name === "GrindVariation") {
          var variation = CONFIG.VARIATIONS.filter(function (v) {
            return v.name === s.name;
          })[0];

          if (variation && variation.repeat) {
            for (var _i2 = 0; _i2 < variation.repeat; _i2++) {
              reelRows.push(htmlSlot);
            }
          }
        }

        reelRows.push(htmlSlot);
      });

      var shuffleArray = function shuffleArray(arr) {
        return arr.sort(function () {
          return Math.random() - 0.5;
        });
      };

      $node.html(shuffleArray(reelRows).join("")); // dont animate disabled reels

      var delay = this.slotSpeed;

      if (this.slots[slotIndex].state === SLOT_STATES.disabled) {
        delay = 0;
      }

      this.slots[slotIndex].machine = $node.slotMachine({
        active: 0,
        delay: delay,
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testData": () => (/* binding */ testData)
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
  expected: "540 Hurricane Cloudy Night",
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
  expected: "AO Acid to 360 rewind out",
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
  expected: "360 Sweatstance to 180 rewind out",
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
  expected: "Grab Negative Makio",
  data: [{
    name: "Grind",
    winner: {
      name: "Makio",
      isGrooveGrind: false
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Grab Negative"
    }
  }]
}, {
  expected: "Zerospin Christ Negative Makio",
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
      name: "Christ Negative"
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
  expected: "AO Fishbrain to 180 rewind out",
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
  expected: "360 Negative Soul to 180 rewind out",
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
  expected: "True Fullcab Soyale to 540 rewind out",
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
  expected: "Fakie 630 BS Savannah",
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
      name: "BS Savannah",
      isGrooveGrind: true
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 630"
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
  }, {
    name: "SpinOff",
    winner: {
      name: "Forwards"
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
}, {
  expected: "BS Royale",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "BS Royale"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Forwards"
    }
  }]
}, {
  expected: "Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Soul"
    }
  }]
}, {
  expected: "540 Hurricane Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Soul"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 540"
    }
  }]
}, {
  expected: "720 Hurricane Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Soul"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 720"
    }
  }]
}, {
  expected: "True Fullcab 720 Soul",
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
      name: "Soul"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 720"
    }
  }]
}, {
  expected: "Fakie 720 Soul",
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
      name: "Soul"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Inspin 720"
    }
  }]
}, {
  expected: "900 Hurricane Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Soul"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 900"
    }
  }]
}, {
  expected: "Fakie 540 Top Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Soul"
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
  expected: "540 Hurricane Top Soul",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Soul"
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
  expected: "True Fullcab 720 Sweatstance",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Mizou"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 720"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Topside"
    }
  }]
}, //  David Sizemore (Hurricane Fish)
{
  expected: "Hurricane Fishbrain",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards",
      isFakie: false,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Makio"
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
  }]
}, // Fakie 630 Royale (Leading the Blind)
//  David Sizemore (Hurricane Fish)
//  Cyril Daniel (Disaster 450 Back Royale)
{
  expected: "True Fullcab 900 Makio",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Makio"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "Outspin 900"
    }
  }]
}, {
  expected: "Zerospin Soyale",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Torque Soul"
    }
  }]
}, {
  expected: "Zerospin Kindgrind",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie",
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
  }]
}, {
  expected: "Zerospin Misfit",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "Mistrial"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Topside"
    }
  }]
}, {
  expected: "Zerospin Cloudy Night",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie",
      isFakie: true,
      isSwitch: false
    }
  }, {
    name: "Grind",
    winner: {
      name: "PStar"
    }
  }, {
    name: "GrindVariation",
    winner: {
      name: "Topside"
    }
  }]
}, {
  expected: "True Fullcab Kindgrind",
  data: [{
    name: "Approach",
    winner: {
      name: "Fakie",
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
      name: "Outspin 360"
    }
  }]
}, {
  expected: "540 Hurricane Kindgrind",
  data: [{
    name: "Approach",
    winner: {
      name: "Forwards",
      isFakie: false,
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
      name: "Outspin 540"
    }
  }]
}, {
  expected: "Mistrial to 180 out",
  data: [{
    name: "Grind",
    winner: {
      name: "Mistrial"
    }
  }, {
    name: "SpinTo",
    winner: {
      name: "None"
    }
  }, {
    name: "SpinOff",
    winner: {
      name: "Inspin 180"
    }
  }]
}];

/***/ }),

/***/ "./src/js/tooltips.js":
/*!****************************!*\
  !*** ./src/js/tooltips.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tooltips": () => (/* binding */ Tooltips)
/* harmony export */ });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var tippy_js_animations_scale_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js/animations/scale.css */ "./node_modules/tippy.js/animations/scale.css");
/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tippy.js/animations/scale-subtle.css */ "./node_modules/tippy.js/animations/scale-subtle.css");
/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tippy.js/animations/scale-extreme.css */ "./node_modules/tippy.js/animations/scale-extreme.css");
/* harmony import */ var tippy_js_themes_light_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tippy.js/themes/light.css */ "./node_modules/tippy.js/themes/light.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var ERROR_MSG_COLOR = "#e71b00";
var ERROR_MSG = {
  noMoreSpinningReels: "<span style=\"color:".concat(ERROR_MSG_COLOR, ";\">Error. \n    At least one reel must be active and unlocked. \n    Toggle the reels to unlock or enable reels.</span>"),
  tooManyTokensUsed: "<span style=\"color:".concat(ERROR_MSG_COLOR, ";\">Error. You used too many tokens. \n    Toggle the reels to remove <i class=\"fa fa-lock fa-1x\"></i> and \n    <i class=\"fa fa-ban fa-1x\"></i> tokens from the slot machine.</span>"),
  dupeTrick: "<span style=\"color:".concat(ERROR_MSG_COLOR, ";\">Error. You already got that trick. \n    Toggle the reels to change the trick or press skip to generate a new trick.</span>")
};
var CONFIG = {
  // all screens
  soundButton: {
    screen: "all",
    text: "Toggle sound"
  },
  logoText: {
    screen: "all",
    text: "Home",
    props: {
      placement: "left"
    }
  },
  helpBtn: {
    screen: "all",
    text: "Explain in-screen controls"
  },
  scoreboard_score: {
    screen: "all",
    text: "Current score ",
    props: {
      placement: "bottom"
    }
  },
  scoreboard_spins: {
    screen: "all",
    text: "Current spin / Total spins "
  },
  configButton: {
    screen: "all",
    text: "Settings" //props: { maxWidth: "50px" },

  },
  trickNamingBtn: {
    screen: "all",
    text: "Tricktionary" //props: { maxWidth: "50px" },

  },
  aboutBtn: {
    screen: "all",
    text: "How to play"
  },
  //props: { maxWidth: "50px" },
  //
  startLevelSelect: {
    screen: "Start",
    text: "Change difficulty. <br>Press <i class=\"fa fa-wrench fa-1x\"></i>  for details."
  },
  startGame: {
    screen: "Start",
    text: "Start the game"
  },
  //
  "trickList-continueBtn": {
    screen: "Slotmachine",
    text: "Skip this trick"
  },
  endGameButton: {
    screen: "Slotmachine",
    text: "This is the last spin. If you can't to the trick, press this button to end the game.",
    props: {
      maxWidth: "25vw"
    }
  },
  addTricklistBtn: {
    screen: "Slotmachine",
    text: "You have 3 tries. If you get the trick, click here. Else click 'Skip'."
  },
  explainTrick: {
    screen: "Slotmachine",
    text: "Show trick info"
  },
  tricklistBtn: {
    screen: "Slotmachine",
    text: "Show tricklist"
  },
  giveUpButton: {
    screen: "Slotmachine",
    text: "Abort the game"
  },
  //
  configSubmit: {
    screen: "Configuration",
    text: "Apply the changes and restart the game."
  },
  configReset: {
    screen: "Configuration",
    text: "Factory reset. Resets settings and app cache."
  },
  configLevelSelect: {
    screen: "Configuration",
    text: "Choose a preset with included tricks and tokens per game. Press Apply button below to activate."
  },
  configSpeedSelect: {
    screen: "Configuration",
    text: "Change duration of the slot machine spin animation."
  },
  configManualOptions: {
    screen: "Configuration",
    text: "Configure your own game."
  },
  spinsConfig: {
    screen: "Configuration",
    text: "Choose the amount of spins per game. Highscores are only available for max. 5 spins."
  },
  // manual
  endScreen: {
    screen: "manual",
    text: "",
    props: {
      offset: 8,
      maxWidth: "90vw"
    }
  },
  errorMsgTokens: {
    screen: "manual",
    text: "",
    props: {}
  },
  errorMsgTricklist: {
    screen: "manual",
    text: "",
    props: {}
  }
};

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
  function Tooltips($helpBtn, screens) {
    _classCallCheck(this, Tooltips);

    this.$helpBtn = $helpBtn;
    this.screens = screens;
    this.$tooltips = $("[data-p-tooltip]");
    this.$helpBtnStart = $("#helpButtonStart");
    this.$mask = $("#tooltips-mask"); // keep page scrollable while tooltip is open

    this.$explainTrickMask = $("#tooltips-slots-mask");
    this.config = CONFIG;
    this.ERROR_MSG = ERROR_MSG;
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
          _this.show();
        }
      }, 500);
      this.$mask.on("click", function (e) {
        e.preventDefault(); //e.stopPropagation();

        _this.hide();
      });
      this.$helpBtn.on("click", function (e) {
        e.preventDefault();
        btnClick();
      });
      this.$helpBtnStart.on("click", function (e) {
        e.preventDefault();
        btnClick();
      });
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this.$mask.show();
      this.$helpBtn.addClass("pure-button-disabled");
      this.isVisible = true;
      this.helpTooltips.forEach(function (t) {
        if (t.instance.props.content) {
          if (t.screen === "all" || t.screen === _this2.screens.activeScreen) {
            t.instance.enable();
            t.instance.show();
          }
        }
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.isVisible = false;
      this.$helpBtn.removeClass("pure-button-disabled");
      this.$explainTrickMask.hide();
      this.$mask.hide();
    }
  }, {
    key: "updateTooltip",
    value: function updateTooltip(name, htmlContent) {
      this.helpTooltips.forEach(function (t) {
        if (t.name === name) {
          t.instance.setContent(htmlContent);
        }
      });
    }
  }, {
    key: "showTooltip",
    value: function showTooltip(name) {
      var _this3 = this;

      var keepScrollable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.helpTooltips.forEach(function (t) {
        if (t.name === name) {
          t.instance.enable();
          t.instance.show();

          if (keepScrollable) {
            t.instance.setProps({
              onHide: function onHide() {
                setTimeout(function () {
                  _this3.$explainTrickMask.hide();
                }, 10);
              }
            });

            _this3.$explainTrickMask.show();
          } else {
            _this3.$mask.show();
          }
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;

      this.$tooltips.each(function (i, el) {
        var $el = $(el);
        var name = $el.data("p-tooltip");
        var config = _this4.config[name];

        if (!config) {
          // eslint-disable-next-line
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

        props.content = text;
        var t = (0,tippy_js__WEBPACK_IMPORTED_MODULE_5__["default"])($el[0], props);
        t.disable();

        _this4.helpTooltips.push({
          instance: t,
          name: name,
          screen: config.screen
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trickdata": () => (/* binding */ Trickdata)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EASY_REPEAT = 3;
var MEDIUM_REPEAT = 2;
var APPROACHES = [{
  name: "Forwards",
  repeat: EASY_REPEAT,
  isFakie: false,
  isSwitch: false,
  scores: 0
}, {
  name: "Fakie",
  repeat: MEDIUM_REPEAT,
  url: "http://skateyeg.com/bog/05.0_Fakie.html",
  isFakie: true,
  isSwitch: false,
  scores: 1
}, {
  name: "Switch",
  repeat: MEDIUM_REPEAT,
  url: "http://skateyeg.com/bog/04.0_Switch.html",
  isFakie: false,
  isSwitch: true,
  scores: 1
}, {
  name: "Fakie & Switch",
  url: "http://skateyeg.com/bog/04.0_Switch.html",
  isFakie: true,
  isSwitch: true,
  scores: 3
}]; // SPINS:
// 4 variants:
// Groove grinds vs. Soul grinds. Groove grinds dont have a 180 because 90 degree spins do not count
// forwards vs fakie: zerospin, halfcab naming

var SPINS_TO_GRIND = [{
  name: "None",
  repeat: EASY_REPEAT,
  scores: 0,
  url: ""
}, {
  name: "Outspin 180",
  // repeat: MEDIUM_REPEAT,
  scores: 1
}, {
  name: "Inspin 180",
  repeat: EASY_REPEAT,
  scores: 1,
  url: ""
}, {
  name: "Inspin 360",
  scores: 2,
  url: ""
}, {
  name: "Outspin 360",
  scores: 2,
  url: ""
}, {
  name: "Inspin 540",
  scores: 3,
  url: ""
}, {
  name: "Outspin 540",
  scores: 3,
  url: ""
}, {
  name: "Inspin 720",
  scores: 4,
  url: ""
}, {
  name: "Outspin 720",
  scores: 4,
  url: ""
}, {
  name: "Inspin 900",
  scores: 5,
  url: ""
}, {
  name: "Outspin 900",
  scores: 5,
  url: ""
}];
var SPINS_FAKIE_TO_GRIND = [{
  name: "Inspin 180",
  repeat: EASY_REPEAT,
  scores: 1,
  url: ""
}, {
  name: "Outspin 180",
  // repeat: MEDIUM_REPEAT,
  scores: 1,
  url: ""
}, {
  name: "Inspin 360",
  scores: 2,
  url: ""
}, {
  name: "Outspin 360",
  scores: 2,
  url: ""
}, {
  name: "Inspin 540",
  scores: 3,
  url: ""
}, {
  name: "Outspin 540",
  scores: 3,
  url: ""
}, {
  name: "Inspin 720",
  scores: 4,
  url: ""
}, {
  name: "Outspin 720",
  scores: 4,
  url: ""
}, {
  name: "Inspin 900",
  scores: 5,
  url: ""
}, {
  name: "Outspin 900",
  scores: 5,
  url: ""
}];
var SPINS_TO_GRIND_GROOVE_FS = [{
  name: "None",
  repeat: EASY_REPEAT,
  scores: 0,
  url: ""
}, {
  name: "Outspin 270",
  scores: 2,
  url: ""
}, {
  name: "Inspin 450",
  scores: 3,
  url: ""
}, {
  name: "Outspin 630",
  scores: 4,
  url: ""
}, {
  name: "Inspin 810",
  scores: 5,
  url: ""
}];
var SPINS_TO_GRIND_GROOVE_BS = [{
  name: "None",
  repeat: EASY_REPEAT,
  scores: 0,
  url: ""
}, {
  name: "Inspin 270",
  scores: 2,
  url: ""
}, {
  name: "Outspin 450",
  scores: 3,
  url: ""
}, {
  name: "Inspin 630",
  scores: 4,
  url: ""
}, {
  name: "Outspin 810",
  scores: 5,
  url: ""
}];
var SPINS_FAKIE_TO_GRIND_GROOVE_FS = [{
  name: "None",
  repeat: EASY_REPEAT,
  scores: 0,
  url: ""
}, {
  name: "Outspin 270",
  scores: 3,
  url: ""
}, {
  name: "Inspin 450",
  scores: 3,
  url: ""
}, {
  name: "Outspin 630",
  scores: 4,
  url: ""
}, {
  name: "Inspin 810",
  scores: 5,
  url: ""
}];
var SPINS_FAKIE_TO_GRIND_GROOVE_BS = [{
  name: "None",
  repeat: EASY_REPEAT,
  scores: 0,
  url: ""
}, {
  name: "Inspin 270",
  scores: 2,
  url: ""
}, {
  name: "Outspin 450",
  scores: 3,
  url: ""
}, {
  name: "Inspin 630",
  scores: 4,
  url: ""
}, {
  name: "Outspin 810",
  scores: 5,
  url: ""
}];
var SPINS_OFF_GRIND = [{
  name: "None",
  repeat: EASY_REPEAT,
  scores: 0,
  url: ""
}, {
  name: "Inspin 180",
  repeat: MEDIUM_REPEAT,
  scores: 1,
  url: ""
}, {
  name: "Outspin 180 ",
  scores: 1,
  url: ""
}, {
  name: "Outspin 360",
  scores: 2,
  url: ""
}, {
  name: "Inspin 360",
  scores: 2,
  url: ""
}, {
  name: "Outspin 540",
  scores: 3,
  url: ""
}, {
  name: "Inspin 540",
  scores: 3,
  url: ""
}, {
  name: "Outspin 720",
  scores: 4,
  url: ""
}, {
  name: "Inspin 720",
  scores: 4,
  url: ""
}, {
  name: "Outspin 900",
  scores: 5,
  url: ""
}, {
  name: "Inspin 900",
  scores: 5,
  url: ""
}];
var SPINS_OFF_GROOVE_GRIND = [{
  name: "Forwards",
  repeat: EASY_REPEAT,
  scores: 0,
  url: ""
}, {
  name: "Fakie",
  repeat: EASY_REPEAT,
  scores: 0,
  url: ""
}, {
  name: "270",
  scores: 2,
  url: ""
}, {
  name: "450",
  scores: 3,
  url: ""
}, {
  name: "630",
  scores: 4,
  url: ""
}, {
  name: "810",
  scores: 5,
  url: ""
}];
var HYBRID_COMMENT = "";
var SOUL_GRINDS = [{
  name: "Soul",
  comment: "The back foot rests on the soulplate and the front foot slides on the h-block, pointing toward the obstacle.",
  repeat: EASY_REPEAT,
  scores: 1,
  url: "http://skateyeg.com/bog/02.0_Soul.html",
  variations: {
    Topside: true,
    Negative: true,
    Tough: true,
    // pic
    "Tough Topside": true // pic
    // does not exist?
    //Rough: true,
    //"Rough Topside": true,

  }
}, {
  name: "Acid",
  comment: "Like a Soul but the leading foot is in the opposite position.",
  repeat: EASY_REPEAT,
  scores: 1,
  url: "http://skateyeg.com/bog/05.0_Acid.html",
  variations: {
    Topside: true,
    Negative: true,
    Tough: true,
    "Tough Topside": true // does not exist?
    //Rough: true,
    //"Rough Topside": true,

  }
}, // https://www.youtube.com/watch?v=DbU-2hDUIgM
// https://vimeo.com/13842111
{
  name: "Makio",
  repeat: EASY_REPEAT,
  comment: "Simple one-footed soul grind.",
  scores: 1,
  url: "http://skateyeg.com/bog/01.0_Makio.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    Tough: true,
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true,
    "Rough Topside": true,
    "Tough Topside": true,
    "Grab Topside": true,
    "Rocket Topside": true,
    "Cross-Grab Topside": true,
    "Christ Topside": true,
    "Grab Negative": true,
    "Rocket Negative": true,
    "Cross-Grab Negative": true,
    "Christ Negative": true
  }
}, {
  name: "PStar",
  comment: "(Pornstar) The soul foot is in front and the trailing foot is pointing toward the obstacle.",
  repeat: EASY_REPEAT,
  url: "http://skateyeg.com/bog/04.0_PStar.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    "Rough Topside": true,
    Tough: true,
    // not found but should be possible
    "Tough Topside": true
  }
}, {
  name: "Torque Soul",
  comment: "The trailing foot is placed on the soul while the leading foot is placed on the backslide plate.",
  repeat: MEDIUM_REPEAT,
  url: "http://skateyeg.com/bog/08.0_Torque_Soul.html",
  variations: {
    Topside: true,
    Negative: true,
    Tough: true,
    // pic
    "Tough Topside": true // pic
    // does not exist?
    // Rough: true,
    // "Rough Topside": true,

  }
}, {
  name: "Mistrial",
  comment: "Like a Mizou but the the trailing foot is pointing towards the obstacle. Both feet should be close together.",
  repeat: MEDIUM_REPEAT,
  url: "http://skateyeg.com/bog/07.0_Mistrial.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    // possible
    "Rough Topside": true,
    Tough: true,
    // pic
    "Tough Topside": true // pic

  }
}, {
  name: "Citric Acid",
  comment: "Wrapping the leading foot around the back of the soul foot and placing it in front in an acid position.",
  scores: 3,
  url: "http://skateyeg.com/bog/05.1_Citric_Acid.html",
  variations: {
    Topside: true,
    Negative: true,
    Tough: true,
    // not found but should be possible
    "Tough Topside": true // not found but should be possible
    //  Rough: true,
    // "Rough Topside": true,

  }
}, {
  name: "Hot Dog",
  noSwitch: true,
  url: "http://skateyeg.com/bog/11.0_Hot_Dog.html",
  comment: "(Double Negative) Grinding on both negative soul plates. Easier to do on a narrow box that can be grinded on both sides.",
  variations: {
    Rough: true,
    Tough: true,
    "Tough&Rough": true
  }
}, {
  name: "Mizou",
  comment: "(Miszou) The soul foot is in front and the trailing foot rests on the h-block, pointing away from the obstacle.",
  repeat: EASY_REPEAT,
  scores: 1,
  url: "http://skateyeg.com/bog/03.0_Mizou.html",
  variations: {
    Topside: true,
    Negative: true,
    Rough: true,
    // book of grinds
    "Rough Topside": true,
    Tough: true,
    "Tough Topside": true
  }
}, {
  name: "Sidewalk",
  scores: 1,
  comment: "Oldschool trick. Like a PStar but with the back foot all the way down on its laces. A topside Sidewalk is called Tendon Tear.",
  url: "http://skateyeg.com/bog/04.1_Sidewalk.html",
  variations: {
    Topside: true,
    // ?
    Negative: true // ?
    // Rough: true,  // ?
    // Tough: true,
    //  "Rough Topside": true,
    // "Tough Topside": true,

  }
}, {
  name: "X-Grind",
  repeat: MEDIUM_REPEAT,
  url: "http://skateyeg.com/bog/06.0_X_Grind.html",
  comment: "X-Grinds are done on the souls of both skates. A regular X-Grind has the front foot topside. A topside X-Grind has the back foot topside.",
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
  comment: "The front skate is rolling on the wheel on the heel, the back skate is on Topside soul.\n      Image: Chris Haffey, AO Training Wheel, \n      <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=Dv00GSmm0gk\">B.L.A.D.E. Aragon</a>",
  variations: {
    Tough: true // should be possible

  }
}, {
  name: "BS Tabernacle",
  url: "http://skateyeg.com/bog/12.1_Backside_Tabernacle.html",
  comment: "Like a Mizou but with the leading soul foot in acid position. The trailing foot is like a Backside Pudslide." + HYBRID_COMMENT,
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "FS Tabernacle",
  comment: "Like a Mizou but with the leading soul foot in acid position. The trailing foot is like a Frontside Pudslide." + HYBRID_COMMENT,
  url: "http://skateyeg.com/bog/12.0_Tabernacle.html",
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "BS Darkslide",
  url: "http://skateyeg.com/bog/14.1_Backside_Darkslide.html",
  comment: "(Acid Rain) " + HYBRID_COMMENT + "Like a Mistrial but with the leading soul foot in acid position. The trailing foot is like a Backside Backslide.",
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "FS Darkslide",
  url: "http://skateyeg.com/bog/14.0_Darkslide.html",
  comment: "(Acid Rain) " + HYBRID_COMMENT + "Like a Mistrial but with the leading soul foot in acid position. The trailing foot is like a Frontside Backslide.",
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "BS Wheelbarrow",
  url: "http://skateyeg.com/bog/15.1_Backside_Wheelbarrow.html",
  comment: "A Backside Backslide with the front foot rolling on the back wheel. " + HYBRID_COMMENT,
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "FS Wheelbarrow",
  url: "http://skateyeg.com/bog/15.0_Wheelbarrow.html",
  comment: "A Frontside Backslide with the front foot rolling on the back wheel. " + HYBRID_COMMENT,
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "BS Byn Soul",
  url: "",
  comment: "(Neighborhood) Turning the soul foot on a soul grind into a Backside Torque. \n      <a target=\"_blank\" href=\"https://www.picuki.com/media/2251667102534778405\">Image</a>. ".concat(HYBRID_COMMENT),
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "FS Byn Soul",
  url: "",
  comment: "(Neighborhood) Turning the soul foot on a soul grind into a Frontside Torque. \n    <a target=\"_blank\" href=\"https://www.picuki.com/media/2251667102534778405\">Image</a>. ".concat(HYBRID_COMMENT),
  isSoulGroove: true,
  variations: {
    Channel: true
  }
}, {
  name: "Closed Book",
  noSwitch: true,
  url: "",
  comment: "(Biscuit, Double Inner, Impossible Grind, Snub Soul) Grinding on the soul plates with both feet, with toes facing each other. \n    Image: Aaron Dizom, <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=L3H5E13UkBw\">United Front</a>",
  variations: {
    Rough: true,
    // nf
    Tough: true,
    // nf
    Topside: true,
    // pic
    Negative: true
  }
}, {
  name: "Open Book",
  noSwitch: true,
  url: "",
  comment: "(Crab, Crab Stance, Double Outer) Grinding on the soul plates with both feet, with heels facing each other.\n    Image: <a target=\"_blank\" href=\"https://www.youtube.com/channel/UC_cMnM6u3xJ3yeW1jzIHgaQ\">Ricardo Lino</a>",
  variations: {
    Rough: true,
    Tough: true,
    Topside: true,
    Negative: true
  }
}]; // GROOVE_GRINDS
// Most Grinds based on h-block and have a backside and frontside variant.
// No alley-oop grind variant. For example an alley-oop Royale is a Full Torque

var GROOVE_GRINDS = [{
  name: "FS Royale",
  comment: "(Shifty) Grinding on the inside edge of the front skate, and on the outside edge of the trailing skate.",
  repeat: MEDIUM_REPEAT,
  url: "http://skateyeg.com/bog/03.0_Royale.html",
  variations: {
    Channel: true
  }
}, {
  name: "FS Unity",
  comment: "(Buddha) Crossed legs on both backslide plates with the trailing foot going over the leading foot.",
  repeat: MEDIUM_REPEAT,
  url: "http://skateyeg.com/bog/07.0_Unity.html",
  variations: {
    Channel: true
  }
}, {
  name: "FS Torque",
  comment: "Like an one-footed Full Torque",
  repeat: MEDIUM_REPEAT,
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
  scores: 3,
  comment: "(Cowboy, Lucky Grind, Buddha) Sliding a torque and backslide at the same time without crossing your legs.",
  url: "http://skateyeg.com/bog/09.1_Backside_Cab_driver.html",
  variations: {
    Channel: true
  }
}, {
  name: "BS Backslide",
  comment: "Like an one-footed Royale, grinding on the trailing foot.",
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
  comment: "Like an one-footed Royale, grinding on the trailing foot.",
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
  comment: "Like a Backslide but with the ankle bent outwards instead of inwards.",
  url: "http://skateyeg.com/bog/11.1_Backside_Pudslide.html",
  scores: 3,
  variations: {
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true
  }
}, {
  name: "BS Full Torque",
  repeat: MEDIUM_REPEAT,
  url: "http://skateyeg.com/bog/04.1_Backside_Full_Torque.html",
  comment: "(Fahrvergnuegen, Farhve, Nugen) Like a Royale grinded reverse.",
  variations: {
    Channel: true
  }
}, {
  name: "BS Fastslide",
  scores: 3,
  comment: "Like a Torque but without the foot resting on the backslide plate (straightened out ankle).",
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
  comment: "(Buddha) Crossed legs on both backslide plates with the trailing foot going over the leading foot.",
  repeat: MEDIUM_REPEAT,
  url: "http://skateyeg.com/bog/07.1_Backside_Unity.html",
  variations: {
    Channel: true
  }
}, {
  name: "BS Torque",
  comment: "Like an one-footed Full Torque",
  repeat: MEDIUM_REPEAT,
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
  comment: "(Shifty) Grinding on the inside edge of the front skate, and on the outside edge of the trailing skate.",
  repeat: MEDIUM_REPEAT,
  url: "http://skateyeg.com/bog/03.1_Backside_Royale.html",
  variations: {
    Channel: true
  }
}, {
  name: "FS Fastslide",
  comment: "Like a Torque but without the foot resting on the backslide plate (straightened out ankle).",
  scores: 3,
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
  scores: 3,
  comment: "(Cowboy, Lucky Grind, Buddha) Sliding a torque and backslide at the same time without crossing your legs.",
  url: "http://skateyeg.com/bog/09.0_Cab_driver.html",
  variations: {
    Channel: true
  }
}, {
  name: "FS Pudslide",
  comment: "Like a Backslide but with the ankle bent outwards instead of inwards.",
  url: "http://skateyeg.com/bog/11.0_Pudslide.html",
  scores: 3,
  variations: {
    Grab: true,
    Rocket: true,
    "Cross-Grab": true,
    Christ: true
  }
}, {
  name: "FS Full Torque",
  repeat: MEDIUM_REPEAT,
  url: "http://skateyeg.com/bog/04.0_Full_Torque.html",
  comment: "(Fahrvergnuegen, Farhve, Nugen) Like a Royale grinded reverse.",
  variations: {
    Channel: true
  }
}, {
  name: "Backside",
  comment: "The skater spins 90° and slides perpendicular to the obstacle with his/her back turned to the obstacle.",
  repeat: MEDIUM_REPEAT,
  scores: 1,
  url: "http://skateyeg.com/bog/02.0_Backside.html",
  variations: {
    Channel: true
  }
}, {
  name: "Frontside",
  comment: "The skater spins 90° and lands in the space between the middle wheels, with both feet facing the obstacle.",
  repeat: MEDIUM_REPEAT,
  scores: 1,
  url: "http://skateyeg.com/bog/01.0_Frontside.html",
  variations: {
    Channel: true
  }
}, {
  name: "FS Savannah",
  comment: "Crossed legs on both backslide plates with the trailing foot going behind the leading foot.",
  url: "http://skateyeg.com/bog/09.0_Savannah_(AO_Unity).html",
  variations: {
    Channel: true
  }
}, {
  name: "BS Savannah",
  comment: "Crossed legs on both backslide plates with the trailing foot going behind the leading foot.",
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
}, {
  newName: "Top Teakettle",
  name: "PStar",
  scores: 1,
  comment: "Rough Topside PStar",
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
  comment: "An X-Grind with one foot grinding the negative soul plate.",
  name: "X-Grind",
  isNegative: true,
  url: "http://skateyeg.com/bog/10.0_Stub_Soul.html"
}];
var VARIATIONS = [{
  name: "None",
  repeat: EASY_REPEAT,
  scores: 0,
  noThumb: true,
  url: "",
  comment: ""
}, {
  name: "Topside",
  repeat: EASY_REPEAT,
  scores: 1,
  url: "http://skateyeg.com/bog/03.0_Topside_(Top).html",
  comment: "A Topside is when the frame of the skate is brought over an obstacle and placed on top, while the soul plate remains underneath."
}, {
  name: "Negative",
  scores: 2,
  url: "http://skateyeg.com/bog/11.0_Negative.html",
  comment: "Grinding on the inside soul plate instead of the outside soul plate."
}, {
  name: "Rough",
  scores: 2,
  url: "http://skateyeg.com/bog/08.0_Rough_(Heel).html",
  comment: "Grinding on the heel instead of the whole soul foot (Rough Mizou, Rough Sweatstance, ..)"
}, {
  name: "Tough",
  scores: 2,
  url: "http://skateyeg.com/bog/07.0_Tough_(Toe).html",
  comment: "(Tokyo) Grinding on the toe instead of the whole soul foot (Tough Acid, ..)"
}, {
  name: "Channel",
  scores: 2,
  url: "http://skateyeg.com/bog/18.0_Channel.html",
  comment: "Grinding a groove trick between the wheels (Channel Frontside, ..)"
}, {
  name: "Rocket",
  repeat: MEDIUM_REPEAT,
  scores: 2,
  url: "http://skateyeg.com/bog/06.0_Rocket.html",
  comment: "Extending both legs out straight and crossing one hand over the front of both legs and grabbing the opposite outside soul plate."
}, {
  name: "Grab",
  repeat: EASY_REPEAT,
  scores: 1,
  url: "http://skateyeg.com/bog/17.0_Grabbed.html",
  comment: "Grabbing the free foot while doing an one-footed grind."
}, {
  name: "Cross-Grab",
  repeat: MEDIUM_REPEAT,
  scores: 2,
  noThumb: true,
  url: "",
  comment: "Grabbing the free skate with the opposite hand. Also called Mute Grab."
}, {
  name: "Christ",
  scores: 2,
  url: "http://skateyeg.com/bog/09.0_Christ.html",
  comment: "Setting the other foot on top of the toe in a soul grind position."
}, // combos
{
  name: "Rough Topside",
  scores: 2,
  url: "",
  noThumb: true,
  comment: "Same as Rough but on Topside, for example a Rough Sweatstance."
}, {
  name: "Cross-Grab Topside",
  scores: 2,
  url: "",
  noThumb: true,
  comment: "Same as Cross-Grab but with a Topside."
}, {
  name: "Cross-Grab Negative",
  scores: 3,
  url: "",
  noThumb: true,
  comment: "Same as Cross-Grab but with a Negative."
}, {
  name: "Christ Topside",
  scores: 2,
  url: "",
  noThumb: true,
  comment: "Same as Christ but with a Topside."
}, {
  name: "Christ Negative",
  scores: 3,
  url: "",
  noThumb: true,
  comment: "Same as Christ but with a Negative."
}, {
  name: "Tough Topside",
  scores: 2,
  url: "",
  noThumb: true,
  comment: "Same as Tough but on Topside."
}, {
  name: "Grab Topside",
  repeat: MEDIUM_REPEAT,
  scores: 2,
  url: "",
  noThumb: true,
  comment: "Same as Grab but with a Topside"
}, {
  name: "Grab Negative",
  scores: 3,
  url: "",
  noThumb: true,
  comment: "Same as Grab but with a Negative"
}, {
  name: "Rocket Topside",
  scores: 2,
  url: "",
  noThumb: true,
  comment: "Same as Rocket but with a Topside"
}, {
  name: "Rocket Negative",
  scores: 3,
  url: "",
  noThumb: true,
  comment: "Same as Rocket but with a Negative"
}, {
  name: "Negative&Topside",
  scores: 3,
  url: "",
  noThumb: true,
  comment: "Used for a Negative X-Grind or Stub Soul"
}, {
  name: "Tough&Rough",
  scores: 3,
  url: "",
  noThumb: true,
  comment: "Used for a Rough & Tough X-Grind or Duck Hunt"
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
}];
var GLOSSARY = {
  // parsed tokens
  AO: "(Alley-oop) Forwards to 180 Inspin to a soul grind.",
  True: "(Truespin) Forwards to 180 Outspin to a soul grind.",
  Hurricane: "Forwards to 360 Outspin to a soul grind.",
  Halfcab: "Fakie to 180 Inspin to a soul grind.",
  Fullcab: "Fakie to 360 Inspin to a soul grind.",
  "True Halfcab": "Fakie to 180 Outspin to a soul grind.",
  "True Fullcab": "Fakie to 360 Outspin to a soul grind.",
  Zerospin: "Fakie to a soul grind, no rotation.",
  Rewind: "(Revert) If you spin out of a grind in the other direction set by the initial spin to the grind.",
  // slot tokens
  450: "360 spin to/off a groove grind. The longer way (360 + 90 degrees).",
  270: "360 spin to/off a groove grind. The shorter way (360 - 90 degrees).",
  810: "720 spin to/off a groove grind. The longer way (720 + 90 degrees).",
  630: "720 spin to/off a groove grind. The shorter way (720 - 90 degrees).",
  Switch: "(Unnatural) Grinding in the unnatural mirrored position of a grind. In this game Switch only applies to grinds not spin direction.",
  Fakie: "Approach obstacle skating backwards. Also used for landing a groove grind backwards with no rotation (Royale to Fakie).",
  Forwards: "Forwards is the opposite of Fakie.",
  Natural: "Natural is the opposite of Switch.",
  // unparsed tokens
  Inspin: "Spin towards the obstacle. \n    If the obstacle is on the left of you, Inspin is a spin to the left (counter clockwise). \n    If the obstacle is on the right, Inspin is a spin to the right (clockwise). ",
  Outspin: "Spin away from the obstacle, also called \"Blindside\" in other sports. \n  If the obstacle is on the left of you, Outspin is a spin to the right (clockwise).\n  If the obstacle is on the right, Outspin is a spin to the left (counter clockwise).",
  "Frontside/FS": "Frontside",
  "Backside/BS": "Backside",
  "Soul grinds": "Soul frame based grind wihtout a frontside or a backside variant.",
  "Groove grinds": "(Boot/Frame grinds) H-Block based grind with a frontside and a backside variant."
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
  g.scores = g.scores ? g.scores : 2;
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

      arrayHash.push({
        name: "None"
      });
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
  var name = v.newName === "Top Teakettle" ? "Teakettle" : v.newName;
  v.thumbUrl = v.noThumb !== true ? getThumbUrl(name) : "";
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
}(); //  https://www.npmjs.com/package/google-search-results-nodejs https://serpapi.com/playground?q=aggressive+inline+%22tough+soyale%22+&location=Austin%2C+Texas%2C+United+States&gl=us&hl=en

/***/ }),

/***/ "./src/js/tricklist.js":
/*!*****************************!*\
  !*** ./src/js/tricklist.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tricklist": () => (/* binding */ Tricklist)
/* harmony export */ });
/* harmony import */ var _helperfunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperfunctions.js */ "./src/js/helperfunctions.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Tricklist = /*#__PURE__*/function () {
  function Tricklist($tricklistBtn) {
    _classCallCheck(this, Tricklist);

    this.$tricklistBtn = $("#showTricklistButton");
    this.$tricklistBtn.addClass("pure-button-disabled");
    this.$tricklistBtnStart = $("#start-screen-tricklistBtn-container");
    this.$count = $("#tricklistBtn-count");
    this.$list = $("#tricklist-table");
    this.$listSkipped = $("#tricklist-skipped-table");
    this.storageKey = "tricklist-serialized";
    this.storageKeySkipped = "tricklist-skipped-serialized";
    this.storageKeyHistory = "tricklist-history";
    this.registerListener();
    this.$list.html((0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_0__.renderTable)("Completed tricks", ["Points", "Name", "Description"], [], "red"));
    this.$listSkipped.html((0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_0__.renderTable)("Skipped tricks", ["Points", "Name", "Description"], [], "blue"));
  }

  _createClass(Tricklist, [{
    key: "registerListener",
    value: function registerListener() {}
  }, {
    key: "getStorage",
    value: function getStorage() {
      var res = {
        tricks: [],
        skipped: []
      };

      if (localStorage.getItem(this.storageKey)) {
        var json = localStorage.getItem(this.storageKey);
        res.tricks = JSON.parse(json);
      }

      if (localStorage.getItem(this.storageKey)) {
        var _json = localStorage.getItem(this.storageKey);

        res.skipped = JSON.parse(_json);
      }

      return res;
    }
  }, {
    key: "saveHistory",
    value: function saveHistory(data) {
      var isSkippedTrick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var history = null;
      var storage = localStorage.getItem(this.storageKeyHistory);

      if (!storage) {
        history = {
          tricks: [],
          skipped: []
        };
      } else {
        history = JSON.parse(storage);
      }

      if (isSkippedTrick) {
        history.skipped.push(data);
      } else {
        history.tricks.push(data);
      }

      localStorage.setItem(this.storageKeyHistory, JSON.stringify(history));
    }
  }, {
    key: "clearList",
    value: function clearList() {
      localStorage.removeItem(this.storageKey);
      localStorage.removeItem(this.storageKeySkipped);
    }
  }, {
    key: "add",
    value: function add(fullTrickName, origName, points) {
      var isSkippedTrick = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var trickEntry = {
        parsed: fullTrickName,
        orig: origName,
        points: points
      };
      var storageKey = isSkippedTrick ? this.storageKeySkipped : this.storageKey;
      var $list = isSkippedTrick ? this.$listSkipped : this.$list;
      var arr = JSON.parse(localStorage.getItem(storageKey)) || [];
      arr.push(trickEntry);
      var row = this.renderRow(trickEntry);
      $(row).insertAfter($list.find(".row:nth-child(1)"));
      this.$count.html(parseInt(this.$count.text(), 10) + 1);
      this.$tricklistBtn.removeClass("pure-button-disabled");
      localStorage.setItem(storageKey, JSON.stringify(arr));
      this.saveHistory([fullTrickName, origName, points]);
    }
  }, {
    key: "hasTrick",
    value: function hasTrick(parsedStr) {
      var found = this.getStorage().filter(function (i) {
        return i.parsed === parsedStr;
      });
      return found.length > 0;
    }
  }, {
    key: "renderRow",
    value: function renderRow(entry) {
      return "<div class=\"row\"> \n      <div class=\"cell\" data-title=\"Points\"> ".concat(entry.points, " </div>\n      <div class=\"cell\" data-title=\"Name\"> ").concat(entry.parsed, " </div>\n      <div class=\"cell\" data-title=\"Description\"> ").concat(entry.orig, " </div>\n    </div>");
    }
  }]);

  return Tricklist;
}();

/***/ }),

/***/ "./src/js/tricktionary-screen.js":
/*!***************************************!*\
  !*** ./src/js/tricktionary-screen.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TricktionaryScreen": () => (/* binding */ TricktionaryScreen)
/* harmony export */ });
/* harmony import */ var _trickdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trickdata.js */ "./src/js/trickdata.js");
/* harmony import */ var _helperfunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperfunctions.js */ "./src/js/helperfunctions.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CONFIG = null;
var MORE = [{
  term: "Illusion Spin",
  comment: "Looking over the opposite shoulder of the direction you are going to spin."
}, {
  term: "Grabbing locked feet",
  comment: "Grabs are only considered as grabbing the free foot of a one legged grind like Makio. A locked feet grab means holding a locked skate, for example a grabbed Full Torque."
}, {
  term: "Negative Topside",
  comment: "Negative Sweatstance, .."
}, {
  term: "Medspin",
  comment: "A 360 done on-ground where you go forward to backwards on foot, then back to forwards on both feet."
}, {
  term: "Toe/Heel Rolls",
  comment: "Rolling with one foot on one wheel before or after the grind. There is Wheelbarrow and Training Wheel. Much more variations are possible."
}, {
  term: "Step",
  comment: "Exists but I do not understand it at all. <a target='_blank' href='http://skateyeg.com/bog/10.0_Step.html'>Book of Grinds</a>"
}, {
  term: "Thread the Needle",
  comment: "Cross grabbing one foot and then jumping the other foot through the hole while maintaining the grab. Can be done with Gaps and Grinds."
}, {
  term: "Crosswalk",
  comment: "Like a Sidewalk but with the leading foot in acid position."
}, {
  term: "Sui-slide",
  comment: "Like a Fastslide but with the trailing foot instead of the leading foot."
}, {
  term: "Citric PStar",
  comment: "Special legs required. <a target='_blank' href=' https://www.facebook.com/trirudolf/posts/4401979706486905'>Tri Tri-Rudolf Facebook</a>"
}, {
  term: "Grabbing grinds",
  comment: "Tri Tri-Rudolf <a target='_blank' href='https://www.youtube.com/watch?v=MhZZ14ap6VA'>Grabbing Grinds (Trying Not To Squish Fingers)</a>"
}, {
  term: "Underbar grinds",
  comment: "<a target='_blank' href='https://www.facebook.com/groups/rollerblading/posts/4275445879205635'>Tri</a>"
}, {
  term: "Frame Flips",
  comment: "Tri again.. and other crazy ideas to mount a UFS frame."
}];
var TricktionaryScreen = /*#__PURE__*/function () {
  function TricktionaryScreen() {
    _classCallCheck(this, TricktionaryScreen);

    this.$dom = $("#trickNamingContent");
    this.trickdata = new _trickdata_js__WEBPACK_IMPORTED_MODULE_0__.Trickdata();
    CONFIG = this.trickdata.get();
    this.renderTerms();
    this.renderGrinds();
    this.renderGrindSynonyms();
    this.renderVariations();
    this.renderNotImplemented();
    (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_1__.renderTOC)(this.$dom.parent());
    this.$dom.parent().find(".toc-link").on("click", function (e) {
      var element = $(e.currentTarget).data("anchor");
      document.getElementById(element).scrollIntoView(true);
    });
  }

  _createClass(TricktionaryScreen, [{
    key: "renderNotImplemented",
    value: function renderNotImplemented() {
      var rows = [];
      var variations = CONFIG.OBSTACLE_VARIATIONS;
      variations.forEach(function (v) {
        var row = [];
        var url = v.url ? v.url : "";
        var comment = v.comment ? "".concat(v.comment) : "";
        var thumb = v.thumbUrl ? v.thumbUrl : "";
        rows.push([v.name, url ? "<a target=\"_blank\" href=\"".concat(url, "\">Book of Grinds</a>") : ""]);
      });
      MORE.forEach(function (m) {
        rows.push([m.term, m.comment]);
      });
      var html = (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_1__.renderTable)("Not Implemented", ["Term", "Comment"], rows);
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

        rows.push([key, value]);
      }

      var html = (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_1__.renderTable)("Terms", ["Term", "Definition"], rows);
      this.$dom.append(html);
    }
  }, {
    key: "renderGrinds",
    value: function renderGrinds() {
      var rows = [];
      var vars = CONFIG.GRINDS;
      vars = vars.sort(function (a, b) {
        var aa = a.name.replace("BS", "ZZ");
        aa = aa.replace("FS", "ZZ");
        var bb = b.name.replace("BS", "ZZ");
        bb = bb.replace("FS", "ZZ");

        if (aa < bb) {
          return -1;
        }

        if (aa > bb) {
          return 1;
        }

        return 0;
      });
      vars.forEach(function (v) {
        var row = [];
        var url = v.url ? v.url : "";
        var comment = v.comment ? "".concat(v.comment) : "";
        var thumb = v.thumbUrl ? v.thumbUrl : "";
        var name = v.name.replace("BS ", "Backside/BS ");
        name = name.replace("FS ", "Frontside/FS ");
        rows.push([name, (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_1__.renderThumb)(thumb, url), comment]);
      });
      var html = (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_1__.renderTable)("Grinds", ["Name", "Image", "Comment"], rows);
      this.$dom.append(html);
    }
  }, {
    key: "renderGrindSynonyms",
    value: function renderGrindSynonyms() {
      var rows = [];
      var vars = CONFIG.GRIND_SYNONYMS_THUMB;
      vars.sort(this.compare2).forEach(function (variation) {
        var row = [];
        var url = variation.url ? variation.url : "";
        var comment = variation.comment ? "".concat(variation.comment) : "";
        var thumb = variation.thumbUrl ? variation.thumbUrl : "";
        rows.push([variation.newName, (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_1__.renderThumb)(thumb, url), comment]);
      });
      var html = (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_1__.renderTable)("Grind Synonyms", ["Name", "Image", "Comment"], rows);
      this.$dom.append(html);
    }
  }, {
    key: "renderVariations",
    value: function renderVariations() {
      var rows = [];
      var vars = CONFIG.VARIATIONS_THUMB;
      vars = vars.sort(this.compare);
      vars.forEach(function (variation) {
        var row = [];
        var url = variation.url ? variation.url : "";
        var comment = variation.comment ? "".concat(variation.comment) : "";
        var thumb = variation.thumbUrl ? variation.thumbUrl : "";
        rows.push([variation.name, (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_1__.renderThumb)(thumb, url), comment]);
      });
      var html = (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_1__.renderTable)("Grind Variations", ["Name", "Image", "Comment"], rows);
      this.$dom.append(html);
    }
  }, {
    key: "renderRareGrinds",
    value: function renderRareGrinds() {
      var rows = [];
      var variations = CONFIG.OBSTACLE_VARIATIONS;
      variations.forEach(function (v) {
        var row = [];
        var url = v.url ? v.url : "";
        var comment = v.comment ? "".concat(v.comment) : "";
        var thumb = v.thumbUrl ? v.thumbUrl : "";
        rows.push([v.name, url ? "<a target=\"_blank\" href=\"".concat(url, "\">Book of Grinds</a>") : ""]);
      });
      MORE.forEach(function (m) {
        rows.push([m.term, m.comment]);
      });
      var html = (0,_helperfunctions_js__WEBPACK_IMPORTED_MODULE_1__.renderTable)("Not Implemented", ["Term", "Comment"], rows);
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
  }, {
    key: "compare2",
    value: function compare2(a, b) {
      if (a.newName < b.newName) {
        return -1;
      }

      if (a.newName > b.newName) {
        return 1;
      }

      return 0;
    }
  }]);

  return TricktionaryScreen;
}();

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "style.min.css");

/***/ }),

/***/ "./node_modules/jquery-slotmachine/dist sync recursive":
/*!****************************************************!*\
  !*** ./node_modules/jquery-slotmachine/dist/ sync ***!
  \****************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/jquery-slotmachine/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkGTG"] = self["webpackChunkGTG"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/css/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map