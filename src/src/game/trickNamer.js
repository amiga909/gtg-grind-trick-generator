import { GRIND_SYNONYMS } from "./trickData.js";

/**
 * Translates a slot machine result into a real blading trick name,
 * e.g. [Fakie, Inspin 180, Mizou, Topside, None] → "Halfcab Kindgrind".
 *
 * This is a port of the original app's ResultParser and is verified
 * against its test cases (see __tests__/trickNamer.spec.js).
 *
 * @param slots Array of `{ name, winner }` where `name` is one of
 *   Approach | SpinTo | Grind | GrindVariation | SpinOff and `winner`
 *   is the reel result (`{ name, isFakie?, isSwitch?, isGrooveGrind? }`).
 * @returns `{ parsed, orig }` — the trick name and the raw reel results.
 */
export function nameTrick(slots) {
  const bySlot = (slotName) =>
    slots.find((s) => s && s.name === slotName) || null;

  let approach = bySlot("Approach");
  const grind = bySlot("Grind");
  let spinTo = bySlot("SpinTo");
  spinTo = spinTo && spinTo.winner.name === "None" ? null : spinTo;
  let variation = bySlot("GrindVariation");
  variation = variation && variation.winner ? variation : null;
  let spinOff = bySlot("SpinOff");
  spinOff = spinOff && spinOff.winner.name === "None" ? null : spinOff;

  if (!approach || !approach.winner) {
    approach = { winner: { name: "Forwards" } };
  }

  const orig = [
    approach.winner.name,
    spinTo && spinTo.winner.name,
    variation
      ? `${variation.winner.name} ${grind.winner.name}`
      : grind.winner.name,
    spinOff && spinOff.winner.name,
  ].filter(Boolean);

  // isGrooveGrind is the legacy field name, kept so the original
  // app's test data works unchanged.
  const isGroove =
    grind.winner.isGrooveGrind === true || grind.winner.isGroove === true;
  const isFakie = approach.winner.isFakie === true;
  const hasSpin = !!spinTo;
  const isInspin = hasSpin && spinTo.winner.name.includes("Inspin");
  const isOutspin = hasSpin && spinTo.winner.name.includes("Outspin");

  // "Reverse" = the skater ends up entering the grind backwards,
  // which renames some grinds (AO Torque Soul → Soyale, ...).
  let isReverse = false;
  if (!isGroove && !isFakie) {
    isReverse =
      hasSpin &&
      (spinTo.winner.name.includes("180") ||
        spinTo.winner.name.includes("540"));
  } else if (!isGroove && isFakie) {
    isReverse = hasSpin && spinTo.winner.name.includes("360");
  }

  let approachName = parseApproach(approach, isFakie, hasSpin, isGroove);
  isReverse = approachName === "Zerospin" ? true : isReverse;
  const spinName = parseSpinTo(spinTo, isGroove, isInspin, isOutspin, isFakie);

  // Cab names already imply fakie ("Halfcab Kindgrind", not "Fakie Halfcab Kindgrind").
  const impliesFakie = ["Halfcab", "Fullcab", "True Halfcab", "True Fullcab"];
  if (approachName && impliesFakie.some((cab) => spinName.includes(cab))) {
    approachName = approachName.replace("Fakie", "").replace(" ", "");
  }

  const tokens = [
    approachName,
    spinName,
    variation && variation.winner.name,
    grind.winner.name,
    spinOff && `to ${parseSpinOff(spinOff, hasSpin, isInspin)} out`,
  ].filter(Boolean);

  let result = applyGrindSynonym(tokens.join(" "), grind.winner.name, {
    isReverse,
    isTopside: !!(variation && variation.winner.name.includes("Topside")),
    isNegative: !!(variation && variation.winner.name.includes("Negative")),
    isRough: !!(variation && variation.winner.name.includes("Rough")),
  });

  result = result
    .replace("Topside", "Top")
    .replace("Alley-oop", "AO")
    .replace(/to Forwards out/g, "")
    .replace(/Forwards/g, "")
    .replace(/90 /, "")
    .replace(/None/, "")
    .replace(/ {2}/g, " ")
    .replace(/ {2}/g, " ");

  return { parsed: result.trim(), orig: orig.join(" | ") };
}

function parseApproach(approach, isFakie, hasSpin, isGroove) {
  let name = approach.winner.name || "";
  if (name === "Forwards & Natural") {
    name = "";
  } else if (name === "Fakie & Natural") {
    name = "Fakie";
  } else if (name === "Forwards & Switch") {
    name = "Switch";
  } else if (name === "Fakie & Switch") {
    name = "Fakie Switch";
  }

  // Fakie into a soul grind without a spin is a Zerospin.
  if (isFakie && !hasSpin && !isGroove) {
    name = approach.winner.name.includes("Switch")
      ? "Switch Zerospin"
      : "Zerospin";
  }
  return name;
}

function parseSpinTo(spinTo, isGroove, isInspin, isOutspin, isFakie) {
  if (!spinTo || !spinTo.winner.name) {
    return "";
  }
  let name = spinTo.winner.name;

  if (!isGroove && !isFakie) {
    // Forwards into a soul grind: spins have proper names.
    if (name.includes("180")) {
      name = isInspin ? "Alley-oop" : "True";
    } else if (name.includes("360")) {
      name = isInspin ? "360" : "Hurricane";
    } else if (name.includes("540")) {
      name = isInspin ? "540 Alley-oop" : "540 Hurricane";
    } else if (name.includes("720")) {
      name = isInspin ? "720" : "720 Hurricane";
    } else if (name.includes("900")) {
      name = isInspin ? "900 Alley-oop" : "900 Hurricane";
    }
  }

  if (!isGroove && isFakie) {
    // Fakie into a soul grind: cab names.
    if (isInspin && name.includes("180")) {
      name = "Halfcab";
    }
    if (isInspin && name.includes("360")) {
      name = "Fullcab";
    }
    if (isOutspin && name.includes("180")) {
      name = "True Halfcab";
    }
    if (isOutspin && name.includes("360")) {
      name = "True Fullcab";
    }
    if (isOutspin && name.includes("540")) {
      name = "True Fullcab 540";
    }
    if (isOutspin && name.includes("720")) {
      name = "True Fullcab 720";
    }
    if (isOutspin && name.includes("900")) {
      name = "True Fullcab 900";
    }
  }

  return name.replace("Inspin", "").replace("Outspin", "").replace("None", "");
}

function parseSpinOff(spinOff, hasSpin, isInspin) {
  const name = spinOff.winner.name;
  // Spinning off against the direction of the spin in is a "rewind".
  const isRewind =
    hasSpin &&
    ((isInspin && name.includes("Outspin")) ||
      (!isInspin && name.includes("Inspin")));

  const cleaned = name
    .replace("Inspin", "")
    .replace("Outspin", "")
    .replace("None", "");
  return isRewind ? `${cleaned} rewind` : cleaned;
}

/**
 * Swaps in special trick names (Topside Mizou → Sweatstance, ...) and
 * removes the modifiers the new name already implies.
 */
function applyGrindSynonym(result, grindName, props) {
  const synonym = GRIND_SYNONYMS.filter((syn) => syn.name === grindName).find(
    (syn) =>
      !(syn.isReverse && !props.isReverse) &&
      !(syn.isTopside && !props.isTopside) &&
      !(syn.isNegative && !props.isNegative) &&
      !(syn.isRough && !props.isRough)
  );
  if (!synonym) {
    return result;
  }

  result = result.replace(grindName, synonym.newName);
  if (synonym.isReverse) {
    result = result.replace("Alley-oop", "");
  }
  if (synonym.isTopside) {
    result = result.replace("Topside", "");
  }
  if (synonym.isNegative) {
    result = result.replace("Negative&", "").replace("Negative", "");
  }
  if (synonym.isRough) {
    result = result.replace("Rough", "");
  }
  return result;
}
