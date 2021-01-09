import "purecss/build/pure-min.css";
import "purecss/build/grids-responsive-min.css";

import "font-awesome/css/font-awesome.min.css";
import "../css/style.css";

import { Configuration } from "./configuration";
import { SlotMachine } from "./slotmachine";
import { ResultParser } from "./resultparser";
import { TricktionarySceen } from "./tricktionary-screen";
import { AboutScreen } from "./about-screen";
import { Trickdata } from "./trickdata";
import { Tricklist } from "./tricklist";
import { Tooltips } from "./tooltips";
import { ModalScreen } from "./modalscreens";
import { Audioplayer } from "./audioplayer";

let CONFIG = "";

class GrindTrickRandomizer {
  constructor() {
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
    this.$endScreenText = $("#endscreen-text");

    this.configurator = new Configuration();
    this.slotSpeed = this.configurator.getSpeed();
    this.includedTricks = this.configurator.getIncludedTricks();

    this.audioplayer = new Audioplayer(this.$soundOnOff);
    this.slotMachine = new SlotMachine(this.slotSpeed, this.includedTricks);
    this.resultParser = new ResultParser();
    this.tricktionarySceen = new TricktionarySceen();
    this.aboutScreen = new AboutScreen();
    this.tricklist = new Tricklist(this.$tricklistBtn);
    this.tooltips = new Tooltips(this.$helpBtn, this);
    this.modalScreen = new ModalScreen();
    this.trickdata = new Trickdata();
    CONFIG = this.trickdata.get();

    this.slotMachineResult = { parsed: "", orig: "" };
  }

  init() {
    this.audioplayer.init(this.configurator.getSound());
    this.$loadingScreen.fadeOut("slow");

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
      this.onClickStart();
    });
    this.$randomizeButtonSlots.on("click", (e) => {
      e.preventDefault();
      this.onClickStart();
    });

    this.$aboutBtn.on("click", (e) => {
      e.preventDefault();
      this.modalScreen.show("about", "About");
    });

    this.$trickNamingBtn.on("click", (e) => {
      e.preventDefault();
      this.modalScreen.show("reference", "Tricktionary");
    });

    this.$configButton.on("click", (e) => {
      e.preventDefault();
      this.modalScreen.show("configuration", "Configuration");
    });

    this.$tricklistBtn.on("click", (e) => {
      e.preventDefault();
      this.modalScreen.show("tricklist", "Trick List");
    });

    this.$tricklistBtnStart.on("click", (e) => {
      e.preventDefault();
      this.modalScreen.show("tricklist", "Trick List");
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
        this.tooltips.showTooltip("endScreen");
      }
    });
  }

  addToTricklist() {
    this.modalScreen.show("tricklist", "Trick List");
    this.tricklist.addTrick(
      this.slotMachineResult.parsed,
      this.slotMachineResult.orig
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

    this.slotMachine
      .run()
      .then((results) => {
        this.$helpBtn.removeClass("pure-button-disabled");
        this.$configButton.removeClass("pure-button-disabled");
        this.$randomizeButton.removeClass("pure-button-disabled");
        this.showEndScreen();
      })
      .catch((error) => {
        console.error("catch", error);
      });
  }

  getTricktionaryEntries(slots, result) {
    let html = "";
    let htmlRows = [];
    let approach = slots.filter((s) => s && s.name === "Approach")[0] || null;
    let spinTo = slots.filter((s) => s && s.name === "SpinTo")[0] || null;
    const grind = slots.filter((s) => s && s.name === "Grind")[0] || null;
    const grindSynonymData = CONFIG.GRIND_SYNONYMS_THUMB.filter((s) => {
      return result.parsed.includes(s.newName);
    })[0];
    let grindVariation =
      slots.filter((s) => s && s.name === "GrindVariation")[0] || null;
    let spinOff = slots.filter((s) => s && s.name === "SpinOff")[0] || null;

    if (approach) {
      let approachName = approach.winner.name;
      let switchTxt = approachName.includes("Switch")
        ? `<b>Switch</b> ${CONFIG.GLOSSARY["Switch"]}  `
        : "";
      switchTxt =
        switchTxt === "" && approachName.includes("Natural")
          ? `<b>Natural</b> ${CONFIG.GLOSSARY["Natural"]}  `
          : switchTxt;
      let fakieTxt = approachName.includes("Fakie")
        ? `<b>Fakie</b> ${CONFIG.GLOSSARY["Fakie"]} `
        : "";
      fakieTxt =
        fakieTxt === "" && approachName.includes("Forwards")
          ? `<b>Forwards</b> ${CONFIG.GLOSSARY["Forwards"]}  `
          : fakieTxt;

      if (fakieTxt) {
        htmlRows.push(fakieTxt);
      }
      if (switchTxt) {
        htmlRows.push(switchTxt);
      }
    }

    if (spinTo) {
      let spinToName = spinTo.winner.name;

      let inSpinTxt = spinToName.includes("Inspin")
        ? `<b>Inspin</b> ${CONFIG.GLOSSARY["Inspin"]}  `
        : "";
      let outSpinTxt = spinToName.includes("Outspin")
        ? `<b>Outspin</b> ${CONFIG.GLOSSARY["Outspin"]}  `
        : "";
      htmlRows.push(`${inSpinTxt}${outSpinTxt}`);
    }

    if (grind) {
      let grindName = grind.winner.name;

      const grindData = CONFIG.GRINDS.filter((g) => {
        return g.name === grindName;
      })[0];
      let name = "";
      let data = null;
      if (grindSynonymData) {
        data = grindSynonymData;
        data.name = grindSynonymData.newName;
      } else {
        data = grindData;
      }
      let cleanedName = data.name.replace(/BS /, "Backside ");
      cleanedName = cleanedName.replace(/FS /, "Frontside ");

      htmlRows.push(`
      <div class="tricktionary_thumb_grind_container">
       <div class="tricktionary_thumb_grind_img_container"> 
        ${
          data.thumbUrl
            ? `<img  class="tricktionary_thumb_img" src="${data.thumbUrl}"></img>`
            : ""
        }
       </div>
      
      <br/><b>${cleanedName}</b> ${data.comment ? data.comment : ""}
      </div>   `);
    }

    if (grindVariation) {
      let name = grindVariation.winner.name;
      if (grindSynonymData && grindSynonymData.isTopside) {
        // skip
      }
      // to do: parse combos: rough+topside..
      let varData = CONFIG.VARIATIONS.filter((g) => {
        return g.name === name;
      })[0];
      const variationHtml = `
      <div class="tricktionary_thumb_grind_container-variation">
       <div class="tricktionary_thumb_grind_img_container"> 
        ${
          varData.thumbUrl
            ? `<img  class="tricktionary_thumb_img tricktionary_thumb_img--variation" src="${varData.thumbUrl}"></img>`
            : ""
        }
       </div>
      
       <br/><b>${name}</b> ${varData.comment ? varData.comment : ""}
      </div>   `;
      htmlRows.push(variationHtml);
    }

    return htmlRows.join("<br/>");
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
    const text = this.getTricktionaryEntries(winners, this.slotMachineResult);
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
