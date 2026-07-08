import { ResultParser } from "./resultparser.js";
import { Trickdata } from "./trickdata.js";

const trickdata = new Trickdata();
const CONFIG = trickdata.get();

const resultParser = new ResultParser();
const RESULTS = [];
const boolCombo = (size) => {
  const buf = Array(1 << size);
  for (let i = buf.length; i--; ) {
    buf[i] = Array(size);
    for (let j = size; j--; ) {
      buf[i][j] = +!!(i & (1 << j));
    }
  }
  return buf;
};

const BOOL_COMBOS = boolCombo(4);
// results: i=1:16; i=1000:4538; i=1000000:10404; i=10000000:10404

function permutations() {
  CONFIG.APPROACHES.forEach((approach) => {
    //  console.log("process each approach", approach.name)
    CONFIG.GRINDS_FOR_SLOTS.forEach((grind) => {
      if (grind.noSwitch === true && approach.isSwitch === true) {
        return true;
      }
      const grindVariations = grind.variations;
      if (Object.keys(grindVariations).length === 0) {
        permSpins(approach, grind, null);
      }
      grindVariations.forEach((grindVariation) => {
        permSpins(approach, grind, grindVariation);
      });
    });
  });

  const uniques = RESULTS.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  // eslint-disable-next-line
  console.log(`PERMUTATIONS uniq (${uniques.length})`);
  uniques.forEach((e) => {
    // eslint-disable-next-line
    console.log(e);
  });
  return uniques;
}

function permSpins(approach, grind, grindVariation) {
  let winners = [];

  const spinTos = trickdata.getSpinToData(grind, approach);
  trickdata.getSpinToData(grind, approach).forEach((spinTo) => {
    const spinOffs = trickdata.getSpinOffData(grind);
    spinOffs.forEach((spinOff) => {
      winners = [
        { name: "Grind", winner: grind },
        {
          name: "GrindVariation",
          winner: grindVariation,
        },
        { name: "Approach", winner: approach },
        { name: "SpinTo", winner: spinTo },
        { name: "SpinOff", winner: spinOff },
      ];

      doResults(winners);
    });
  });
}
function doResults(winners) {
  const allWinners = [...winners];

  BOOL_COMBOS.forEach((combo) => {
    winners[1] = combo[0] === 1 ? allWinners[1] : null;
    winners[2] = combo[1] === 1 ? allWinners[2] : null;
    winners[3] = combo[2] === 1 ? allWinners[3] : null;
    winners[4] = combo[3] === 1 ? allWinners[4] : null;

    let r = resultParser.parse(winners);
    RESULTS.push(r.parsed); //+ ' (' + r.orig + ')');
  });
}

function run() {
  return permutations();
}
export { run };
