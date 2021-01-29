import { testData } from "./testdata.js";
import { Trickdata } from "./trickdata.js";
import { renderThumb, renderTableNoHeader } from "./helperfunctions.js";
let CONFIG = null;

export class ResultParser {
  constructor() {
    this.trickdata = new Trickdata();
    CONFIG = this.trickdata.get();
  }

  parse(slots = null) {
    const parsed = "";
    const resultOrig = [];
    const tokens = [];
    let approach = slots.filter((s) => s && s.name === "Approach")[0] || null;
    let spinTo = slots.filter((s) => s && s.name === "SpinTo")[0] || null;
    const grind = slots.filter((s) => s && s.name === "Grind")[0] || null;
    let grindVariation =
      slots.filter((s) => s && s.name === "GrindVariation")[0] || null;
    let spinOff = slots.filter((s) => s && s.name === "SpinOff")[0] || null;

    if (!approach || !approach.winner) {
      approach = { winner: { name: "Forwards" } };
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

    const isGrooveGrind = grind.winner.isGrooveGrind === true;
    const isFakie = !!(approach && approach.winner.isFakie === true);
    const isSwitch = !!(approach && approach.winner.isSwitch === true);
    const hasSpin = !!spinTo;
    const isInspin = !!(
      spinTo && spinTo.winner.name.includes("Inspin") === true
    );
    const isOutspin = !!(
      spinTo && spinTo.winner.name.includes("Outspin") === true
    );

    let isReverse = false;
    if (!isGrooveGrind && !isFakie) {
      isReverse =
        spinTo &&
        (spinTo.winner.name.includes("180") ||
          spinTo.winner.name.includes("540"));
    } else if (!isGrooveGrind && isFakie) {
      isReverse = spinTo && spinTo.winner.name.includes("360");
    }
    const isTopside =
      grindVariation && grindVariation.winner.name.includes("Topside");
    const isNegative =
      grindVariation && grindVariation.winner.name.includes("Negative");
    const isRough =
      grindVariation && grindVariation.winner.name.includes("Rough");

    let approachName = this.parseApproachName(
      approach,
      isFakie,
      hasSpin,
      isGrooveGrind
    );
    const spinName = this.parseSpinName(
      spinTo,
      isGrooveGrind,
      isInspin,
      isOutspin,
      isFakie
    );

    if (
      approachName &&
      (spinName === "Halfcab" ||
        spinName === "Fullcab" ||
        spinName === "True Halfcab" ||
        spinName === "True Fullcab")
    ) {
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
      tokens.push(`to ${this.parseSpinOff(spinOff, hasSpin, isInspin)} out`);
    }

    let result = tokens.join(" ");

    result = this.replaceGrindSynonyms(result, grind.winner.name, {
      isReverse: isReverse || false,
      isTopside: isTopside || false,
      isNegative: isNegative || false,
      isRough: isRough || false,
    });

    result = this.parseSpinsAfter(result);

    // Fakie Switch Outspin 360 Tough Soul to 180 revert out
    // Zerospin BS Pudslide
    result = result.replace("Topside", "Top");
    result = result.replace("Alley-oop", "AO");

    // Forwards
    result = result.replace(/^Forwards /, "");
    result = result.replace(/to Forwards out/g, "");

    result = result.replace(/  /g, " ");
    result = result.replace(/  /g, " ");
    return {
      parsed: result.trim(),
      orig: resultOrig.join(" | "),
    };
  }
  parseSpinsAfter(result) {
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
    result = result.replace("to Inspin 450", "to 450");
    // spinTo
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

  parseApproachName(approach, isFakie, hasSpin, isGrooveGrind) {
    let approachName =
      approach && approach.winner.name ? approach.winner.name : "";
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

  parseSpinName(spinTo, isGrooveGrind, isInspin, isOutspin, isFakie) {
    let spinName = spinTo && spinTo.winner.name ? spinTo.winner.name : "";
    if (!isGrooveGrind && !isFakie) {
      if (isInspin && spinTo && spinTo.winner.name.includes("180")) {
        spinName = "Alley-oop";
      } else if (!isInspin && spinTo && spinTo.winner.name.includes("180")) {
        spinName = "True";
      }

      if (isInspin && spinTo && spinTo.winner.name.includes("540")) {
        spinName = "540 Alley-oop";
      } else if (
        !isInspin &&
        spinTo &&
        spinTo &&
        spinTo.winner.name.includes("540")
      ) {
        spinName = "540 True";
      }

      if (!isInspin && spinTo && spinTo.winner.name.includes("360")) {
        spinName = "Hurricane";
      }
      if (
        isInspin &&
        spinTo &&
        spinTo.winner.name.includes("360") &&
        !isFakie &&
        !isGrooveGrind
      ) {
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

  parseSpinOff(spinOff, hasSpin, isInspin) {
    let spinOffStr = spinOff.winner.name;
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

  meetsSynonymProps(syn, props) {
    // grind meets requirements
    let isValid = true;
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

  replaceGrindSynonyms(resultStr, grindName, props) {
    let result = resultStr;
    let candidates = CONFIG.GRIND_SYNONYMS.filter((syn) => {
      return syn.name === grindName;
    });

    let synonym = null;
    candidates.forEach((syn) => {
      if (synonym === null && this.meetsSynonymProps(syn, props)) {
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

  renderHelpTableRow(name, thumbUrl, comment) {
    return [
      ` <div class="explainTrickName">${name}</div> `,
      ` <div class="explainTrickImage"> ${renderThumb(thumbUrl)}</div> 
        <div class="explainTrickComment">${comment ? comment : ""} </div> 
      `,
    ];
  }

  getSortedByStrLen(arrH) {
    return arrH.sort((a, b) => {
      let comparison = 0;
      if (a.name.length > b.name.length) {
        comparison = -1;
      } else if (a.name.length < b.name.length) {
        comparison = 1;
      }
      return comparison;
    });
  }

  getHelpTableForTrick(result) {
    let html = "";
    let parseString = result.parsed.replace("Top ", "Topside");
    let rows = [];

    for (const [term, comment] of Object.entries(CONFIG.GLOSSARY)) {
      if (
        parseString.toLowerCase().includes(term.toLowerCase()) &&
        !term.includes(" ")
      ) {
        rows.push(this.renderHelpTableRow(term, "", comment));
        parseString = parseString.replace(term, "");
      }
    }

    const grind = this.getSortedByStrLen(CONFIG.GRINDS).filter((g) => {
      return parseString.includes(g.name);
    })[0];

    const grindSynonym = CONFIG.GRIND_SYNONYMS_THUMB.filter((s) => {
      return parseString.includes(s.newName);
    })[0];

    const variation = CONFIG.VARIATIONS_THUMB.filter((s) => {
      return parseString.includes(s.name);
    })[0];
    if (grindSynonym) {
      rows.push(
        this.renderHelpTableRow(
          grindSynonym.newName,
          grindSynonym.thumbUrl,
          grindSynonym.comment
        )
      );
      parseString = parseString.replace(grindSynonym.name, "");
    } else {
      let cleanedName = grind.name.replace(/BS /, "Backside ");
      cleanedName = cleanedName.replace(/FS /, "Frontside ");

      rows.push(
        this.renderHelpTableRow(cleanedName, grind.thumbUrl, grind.comment)
      );
      parseString = parseString.replace(grind.name, "");
    }

    if (variation) {
      if (parseString.includes(variation.name)) {
        rows.push(
          this.renderHelpTableRow(
            variation.name,
            variation.thumbUrl,
            variation.comment
          )
        );

        parseString = parseString.replace(variation.name, "");
      }
    }

    return renderTableNoHeader(rows);
  }
}

function testParser() {
  const s = new ResultParser();

  testData.forEach((entry, i) => {
    let p = s.parse(entry.data);
    if (p.parsed !== entry.expected) {
      console.error(i, entry, p);
    }
    let doc = s.getHelpTableForTrick(p);
    //console.log(doc)
  });
}

testParser();
