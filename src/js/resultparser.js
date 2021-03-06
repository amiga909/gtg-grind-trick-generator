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
    const spinName = this.parseSpinTo(
      spinTo,
      isGrooveGrind,
      isInspin,
      isOutspin,
      isFakie
    );

    if (
      approachName &&
      (spinName.includes("Halfcab") ||
        spinName.includes("Fullcab") ||
        spinName.includes("True Halfcab") ||
        spinName.includes("True Fullcab"))
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

    // Fakie Switch Outspin 360 Tough Soul to 180 revert out
    // Zerospin BS Pudslide
    result = result.replace("Topside", "Top");
    result = result.replace("Alley-oop", "AO");

    result = result.replace(/to Forwards out/g, "");
    result = result.replace(/Forwards/g, "");
    result = result.replace(/90 /, "");
    result = result.replace(/  /g, " ");
    result = result.replace(/  /g, " ");
    return {
      parsed: result.trim(),
      orig: resultOrig.join(" | "),
    };
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

  parseSpinTo(spinTo, isGrooveGrind, isInspin, isOutspin, isFakie) {
    let spinName = spinTo && spinTo.winner.name ? spinTo.winner.name : "";
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
    }
    //spinName = spinName.replace("90 ", " ");
    spinName = spinName.replace("Inspin", "");
    spinName = spinName.replace("Outspin", "");

    // spinName = spinName.replace("Forwards", "");
    return spinName;
  }

  parseSpinOff(spinOff, hasSpin, isInspin) {
    let spinName = spinOff.winner.name;
    let isRevert = false;
    if (hasSpin) {
      if (isInspin && spinOff.winner.name.includes("Outspin")) {
        isRevert = true;
      } else if (!isInspin && spinOff.winner.name.includes("Inspin")) {
        isRevert = true;
      }
    }
    spinName = spinName.replace("Inspin", "");
    spinName = spinName.replace("Outspin", "");
    spinName = isRevert ? spinName + " revert" : spinName;
    // Forwards
    // spinName = spinName.replace("Forwards", "");
    return spinName;
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

    let orig = result.orig;
    if (result.orig.includes("Inspin") || result.orig.includes("Outspin")) {
      rows.push(
        this.renderHelpTableRow(
          "Inspin/Outspin",
          "",
          "Inspin is a spin to the right (clockwise) if the obstacle is on the right of you, Outspin is a spin to the left. Vice versa if obstacle is on the left. "
        )
      );
    }

    let glossaryTerms = [];
    for (const [term, comment] of Object.entries(CONFIG.GLOSSARY)) {
      if (parseString.toLowerCase().includes(term.toLowerCase())) {
        glossaryTerms.push(term);
        if (
          (parseString.includes("True Fullcab") ||
            parseString.includes("True Halfcab")) &&
          (term === "True" || term === "Halfcab" || term === "Fullcab")
        ) {
          continue;
        }

        rows.push(this.renderHelpTableRow(term, "", comment));
        parseString = parseString.replace(term, "");
      }
    }

    // replace true fullcab, true halfcab

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
