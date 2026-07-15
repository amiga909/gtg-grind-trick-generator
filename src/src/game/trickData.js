/**
 * The trick database.
 *
 * A grind trick is split into 5 phases, one per slot machine reel:
 *   Approach → Spin to grind → Grind → Grind variation → Spin off grind.
 *
 * `weight` controls how often an entry appears on a reel (higher = more
 * likely). `score` is the number of points the entry is worth; grinds
 * default to 2 ("average") when not specified.
 */

const RARE = 1;
const MEDIUM = 3;
const EASY = 4;

export const APPROACHES = [
  { name: "Forwards", weight: EASY, isFakie: false, isSwitch: false, score: 0 },
  {
    name: "Fakie",
    weight: MEDIUM,
    isFakie: true,
    isSwitch: false,
    score: 1,
    url: "http://skateyeg.com/bog/05.0_Fakie.html",
  },
  {
    name: "Switch",
    weight: MEDIUM,
    isFakie: false,
    isSwitch: true,
    score: 1,
    url: "http://skateyeg.com/bog/04.0_Switch.html",
  },
  {
    name: "Fakie & Switch",
    weight: RARE,
    isFakie: true,
    isSwitch: true,
    score: 3,
    url: "http://skateyeg.com/bog/04.0_Switch.html",
  },
];

// Spin tables. Soul grinds spin in 180-degree steps. Groove grinds land
// perpendicular to the obstacle, so their spins are +/- 90 degrees
// (270, 450, ...). Frontside groove spins differ between forwards and
// fakie approaches; backside groove spins are the same either way.
export const SPINS_TO_SOUL = [
  { name: "None", weight: EASY, score: 0 },
  { name: "Outspin 180", weight: 1, score: 1 },
  { name: "Inspin 180", weight: EASY, score: 1 },
  { name: "Inspin 360", weight: 1, score: 2 },
  { name: "Outspin 360", weight: 1, score: 2 },
  { name: "Inspin 540", weight: 1, score: 3 },
  { name: "Outspin 540", weight: 1, score: 3 },
  { name: "Inspin 720", weight: 1, score: 4 },
  { name: "Outspin 720", weight: 1, score: 4 },
  { name: "Inspin 900", weight: 1, score: 5 },
  { name: "Outspin 900", weight: 1, score: 5 },
];

// Fakie to soul: same as forwards but "None" is not an option
// (fakie with no spin is a Zerospin, handled by the namer).
export const SPINS_TO_SOUL_FAKIE = [
  { name: "Inspin 180", weight: EASY, score: 1 },
  { name: "Outspin 180", weight: 1, score: 1 },
  { name: "Inspin 360", weight: 1, score: 2 },
  { name: "Outspin 360", weight: 1, score: 2 },
  { name: "Inspin 540", weight: 1, score: 3 },
  { name: "Outspin 540", weight: 1, score: 3 },
  { name: "Inspin 720", weight: 1, score: 4 },
  { name: "Outspin 720", weight: 1, score: 4 },
  { name: "Inspin 900", weight: 1, score: 5 },
  { name: "Outspin 900", weight: 1, score: 5 },
];

export const SPINS_TO_GROOVE_FS = [
  { name: "None", weight: EASY, score: 0 },
  { name: "Outspin 270", weight: 1, score: 2 },
  { name: "Inspin 450", weight: 1, score: 3 },
  { name: "Outspin 630", weight: 1, score: 4 },
  { name: "Inspin 810", weight: 1, score: 5 },
];

export const SPINS_TO_GROOVE_FS_FAKIE = [
  { name: "None", weight: EASY, score: 0 },
  { name: "Outspin 270", weight: 1, score: 3 },
  { name: "Inspin 450", weight: 1, score: 3 },
  { name: "Outspin 630", weight: 1, score: 4 },
  { name: "Inspin 810", weight: 1, score: 5 },
];

export const SPINS_TO_GROOVE_BS = [
  { name: "None", weight: EASY, score: 0 },
  { name: "Inspin 270", weight: 1, score: 2 },
  { name: "Outspin 450", weight: 1, score: 3 },
  { name: "Inspin 630", weight: 1, score: 4 },
  { name: "Outspin 810", weight: 1, score: 5 },
];

export const SPINS_OFF_SOUL = [
  { name: "None", weight: EASY, score: 0 },
  { name: "Inspin 180", weight: MEDIUM, score: 1 },
  { name: "Outspin 180", weight: 1, score: 1 },
  { name: "Outspin 360", weight: 1, score: 2 },
  { name: "Inspin 360", weight: 1, score: 2 },
  { name: "Outspin 540", weight: 1, score: 3 },
  { name: "Inspin 540", weight: 1, score: 3 },
  { name: "Outspin 720", weight: 1, score: 4 },
  { name: "Inspin 720", weight: 1, score: 4 },
  { name: "Outspin 900", weight: 1, score: 5 },
  { name: "Inspin 900", weight: 1, score: 5 },
];

export const SPINS_OFF_GROOVE = [
  { name: "Forwards", weight: EASY, score: 0 },
  { name: "Fakie", weight: EASY, score: 0 },
  { name: "270", weight: 1, score: 2 },
  { name: "450", weight: 1, score: 3 },
  { name: "630", weight: 1, score: 4 },
  { name: "810", weight: 1, score: 5 },
];

/**
 * Soul grinds: grinds on the soul plate, no frontside/backside variant.
 * `isSoulGroove` marks hybrids (Tabernacle, Darkslide, ...) — h-block
 * tricks that are named like soul tricks, so they exist as FS and BS.
 * `noSwitch` marks grinds that have no switch stance.
 */
const SOUL_GRINDS = [
  {
    name: "Soul",
    weight: EASY,
    score: 1,
    url: "http://skateyeg.com/bog/02.0_Soul.html",
    comment:
      "The back foot rests on the soul plate and the front foot slides on the h-block, pointing toward the obstacle.",
    variations: ["Topside", "Negative", "Tough", "Tough Topside"],
  },
  {
    name: "Acid",
    weight: EASY,
    score: 1,
    url: "http://skateyeg.com/bog/05.0_Acid.html",
    comment: "Like a Soul but the leading foot is in the opposite position.",
    variations: ["Topside", "Negative", "Tough", "Tough Topside"],
  },
  {
    name: "Makio",
    weight: EASY,
    score: 1,
    url: "http://skateyeg.com/bog/01.0_Makio.html",
    comment: "Simple one-footed soul grind.",
    variations: [
      "Topside",
      "Negative",
      "Rough",
      "Tough",
      "Grab",
      "Rocket",
      "Cross-Grab",
      "Christ",
      "Rough Topside",
      "Tough Topside",
      "Grab Topside",
      "Rocket Topside",
      "Cross-Grab Topside",
      "Christ Topside",
      "Grab Negative",
      "Rocket Negative",
      "Cross-Grab Negative",
      "Christ Negative",
    ],
  },
  {
    name: "PStar",
    weight: EASY,
    url: "http://skateyeg.com/bog/04.0_PStar.html",
    comment:
      "(Pornstar) The soul foot is in front and the trailing foot is pointing toward the obstacle.",
    variations: [
      "Topside",
      "Negative",
      "Rough",
      "Rough Topside",
      "Tough",
      "Tough Topside",
    ],
  },
  {
    name: "Torque Soul",
    weight: MEDIUM,
    url: "http://skateyeg.com/bog/08.0_Torque_Soul.html",
    comment:
      "The trailing foot is on the soul plate, the leading foot on the backslide plate.",
    variations: ["Topside", "Negative", "Tough", "Tough Topside"],
  },
  {
    name: "Mistrial",
    weight: MEDIUM,
    url: "http://skateyeg.com/bog/07.0_Mistrial.html",
    comment:
      "Like a Mizou but the trailing foot is pointing towards the obstacle. Both feet should be close together.",
    variations: [
      "Topside",
      "Negative",
      "Rough",
      "Rough Topside",
      "Tough",
      "Tough Topside",
    ],
  },
  {
    name: "Citric Acid",
    weight: RARE,
    score: 3,
    url: "http://skateyeg.com/bog/05.1_Citric_Acid.html",
    comment:
      "Wrapping the leading foot around the back of the soul foot and placing it in front in an acid position.",
    variations: ["Topside", "Negative", "Tough", "Tough Topside"],
  },
  {
    name: "Hot Dog",
    weight: RARE,
    noSwitch: true,
    url: "http://skateyeg.com/bog/11.0_Hot_Dog.html",
    comment:
      "(Double Negative) Grinding on both negative soul plates. Easier to do on a narrow box that can be grinded on both sides.",
    variations: ["Rough", "Tough", "Tough&Rough"],
  },
  {
    name: "Mizou",
    weight: EASY,
    score: 1,
    url: "http://skateyeg.com/bog/03.0_Mizou.html",
    comment:
      "(Miszou) The soul foot is in front and the trailing foot rests on the h-block, pointing away from the obstacle.",
    variations: [
      "Topside",
      "Negative",
      "Rough",
      "Rough Topside",
      "Tough",
      "Tough Topside",
    ],
  },
  {
    name: "Sidewalk",
    weight: RARE,
    score: 1,
    url: "http://skateyeg.com/bog/04.1_Sidewalk.html",
    comment:
      "Oldschool trick. Like a PStar but with the back foot all the way down on its laces. A topside Sidewalk is called Tendon Tear.",
    variations: ["Topside", "Negative"],
  },
  {
    name: "X-Grind",
    weight: MEDIUM,
    url: "http://skateyeg.com/bog/06.0_X_Grind.html",
    comment:
      "X-Grinds are done on the souls of both skates. A regular X-Grind has the front foot topside. A topside X-Grind has the back foot topside.",
    variations: [
      "Topside",
      "Negative",
      "Negative&Topside",
      "Rough",
      "Tough",
      "Rough Topside",
      "Tough Topside",
      "Tough&Rough",
    ],
  },
  {
    name: "Training Wheel",
    weight: RARE,
    comment: `The front skate rolls on its heel wheel, the back skate locks in a topside soul.
      Image: Chris Haffey, AO Training Wheel,
      <a target="_blank" href="https://www.youtube.com/watch?v=Dv00GSmm0gk">B.L.A.D.E. Aragon</a>`,
    variations: ["Tough"],
  },
  {
    name: "BS Tabernacle",
    weight: RARE,
    isSoulGroove: true,
    url: "http://skateyeg.com/bog/12.1_Backside_Tabernacle.html",
    comment:
      "Like a Mizou but with the leading soul foot in acid position. The trailing foot is like a Backside Pudslide.",
    variations: ["Channel"],
  },
  {
    name: "FS Tabernacle",
    weight: RARE,
    isSoulGroove: true,
    url: "http://skateyeg.com/bog/12.0_Tabernacle.html",
    comment:
      "Like a Mizou but with the leading soul foot in acid position. The trailing foot is like a Frontside Pudslide.",
    variations: ["Channel"],
  },
  {
    name: "BS Darkslide",
    weight: RARE,
    isSoulGroove: true,
    url: "http://skateyeg.com/bog/14.1_Backside_Darkslide.html",
    comment:
      "(Acid Rain) Like a Mistrial but with the leading soul foot in acid position. The trailing foot is like a Backside Backslide.",
    variations: ["Channel"],
  },
  {
    name: "FS Darkslide",
    weight: RARE,
    isSoulGroove: true,
    url: "http://skateyeg.com/bog/14.0_Darkslide.html",
    comment:
      "(Acid Rain) Like a Mistrial but with the leading soul foot in acid position. The trailing foot is like a Frontside Backslide.",
    variations: ["Channel"],
  },
  {
    name: "BS Wheelbarrow",
    weight: RARE,
    isSoulGroove: true,
    url: "http://skateyeg.com/bog/15.1_Backside_Wheelbarrow.html",
    comment:
      "A Backside Backslide with the front foot rolling on the back wheel.",
    variations: ["Channel"],
  },
  {
    name: "FS Wheelbarrow",
    weight: RARE,
    isSoulGroove: true,
    url: "http://skateyeg.com/bog/15.0_Wheelbarrow.html",
    comment:
      "A Frontside Backslide with the front foot rolling on the back wheel.",
    variations: ["Channel"],
  },
  {
    name: "BS Byn Soul",
    weight: RARE,
    isSoulGroove: true,
    comment: `(Neighborhood) A soul grind with the soul foot twisted into a Backside Torque position.
      <a target="_blank" href="https://www.picuki.com/media/2251667102534778405">Image</a>.`,
    variations: ["Channel"],
  },
  {
    name: "FS Byn Soul",
    weight: RARE,
    isSoulGroove: true,
    comment: `(Neighborhood) A soul grind with the soul foot twisted into a Frontside Torque position.
      <a target="_blank" href="https://www.picuki.com/media/2251667102534778405">Image</a>.`,
    variations: ["Channel"],
  },
  {
    name: "Closed Book",
    weight: RARE,
    noSwitch: true,
    comment: `(Biscuit, Double Inner, Impossible Grind, Snub Soul) Grinding on the soul plates with both feet, with toes facing each other.
    Image: Aaron Dizom, <a target="_blank" href="https://www.youtube.com/watch?v=L3H5E13UkBw">United Front</a>`,
    variations: ["Rough", "Tough", "Topside", "Negative"],
  },
  {
    name: "Open Book",
    weight: RARE,
    noSwitch: true,
    comment: `(Crab, Crab Stance, Double Outer) Grinding on the soul plates with both feet, with heels facing each other.
    Image: <a target="_blank" href="https://www.youtube.com/channel/UC_cMnM6u3xJ3yeW1jzIHgaQ">Ricardo Lino</a>`,
    variations: ["Rough", "Tough", "Topside", "Negative"],
  },
];

/**
 * Groove grinds: h-block based grinds with a frontside and a backside
 * variant. There is no alley-oop naming for grooves — an alley-oop
 * Royale simply is a Full Torque.
 */
const GROOVE_GRINDS = [
  {
    name: "FS Royale",
    weight: MEDIUM,
    url: "http://skateyeg.com/bog/03.0_Royale.html",
    comment:
      "(Shifty) Grinding on the inside edge of the front skate, and on the outside edge of the trailing skate.",
    variations: ["Channel"],
  },
  {
    name: "BS Royale",
    weight: MEDIUM,
    url: "http://skateyeg.com/bog/03.1_Backside_Royale.html",
    comment:
      "(Shifty) Grinding on the inside edge of the front skate, and on the outside edge of the trailing skate.",
    variations: ["Channel"],
  },
  {
    name: "FS Unity",
    weight: MEDIUM,
    url: "http://skateyeg.com/bog/07.0_Unity.html",
    comment:
      "(Buddha) Crossed legs on both backslide plates with the trailing foot going over the leading foot.",
    variations: ["Channel"],
  },
  {
    name: "BS Unity",
    weight: MEDIUM,
    url: "http://skateyeg.com/bog/07.1_Backside_Unity.html",
    comment:
      "(Buddha) Crossed legs on both backslide plates with the trailing foot going over the leading foot.",
    variations: ["Channel"],
  },
  {
    name: "FS Torque",
    weight: MEDIUM,
    url: "http://skateyeg.com/bog/05.0_Torque.html",
    comment: "Like a one-footed Full Torque.",
    variations: ["Grab", "Rocket", "Cross-Grab", "Christ", "Channel"],
  },
  {
    name: "BS Torque",
    weight: MEDIUM,
    url: "http://skateyeg.com/bog/05.1_Backside_Torque.html",
    comment: "Like a one-footed Full Torque.",
    variations: ["Grab", "Rocket", "Cross-Grab", "Christ", "Channel"],
  },
  {
    name: "FS Cab driver",
    weight: RARE,
    score: 3,
    url: "http://skateyeg.com/bog/09.0_Cab_driver.html",
    comment:
      "(Cowboy, Lucky Grind) Sliding a torque and backslide at the same time without crossing your legs.",
    variations: ["Channel"],
  },
  {
    name: "BS Cab driver",
    weight: RARE,
    score: 3,
    url: "http://skateyeg.com/bog/09.1_Backside_Cab_driver.html",
    comment:
      "(Cowboy, Lucky Grind) Sliding a torque and backslide at the same time without crossing your legs.",
    variations: ["Channel"],
  },
  {
    name: "FS Backslide",
    weight: RARE,
    url: "http://skateyeg.com/bog/06.0_Backslide.html",
    comment: "Like a one-footed Royale, grinding on the trailing foot.",
    variations: ["Grab", "Rocket", "Cross-Grab", "Christ", "Channel"],
  },
  {
    name: "BS Backslide",
    weight: RARE,
    url: "http://skateyeg.com/bog/06.1_Backside_Backslide.html",
    comment: "Like a one-footed Royale, grinding on the trailing foot.",
    variations: ["Grab", "Rocket", "Cross-Grab", "Christ", "Channel"],
  },
  {
    name: "FS Pudslide",
    weight: RARE,
    score: 3,
    url: "http://skateyeg.com/bog/11.0_Pudslide.html",
    comment:
      "Like a Backslide but with the ankle bent outwards instead of inwards.",
    variations: ["Grab", "Rocket", "Cross-Grab", "Christ"],
  },
  {
    name: "BS Pudslide",
    weight: RARE,
    score: 3,
    url: "http://skateyeg.com/bog/11.1_Backside_Pudslide.html",
    comment:
      "Like a Backslide but with the ankle bent outwards instead of inwards.",
    variations: ["Grab", "Rocket", "Cross-Grab", "Christ"],
  },
  {
    name: "FS Full Torque",
    weight: MEDIUM,
    url: "http://skateyeg.com/bog/04.0_Full_Torque.html",
    comment: "(Fahrvergnuegen, Fahrve, Nugen) Like a Royale but grinding in reverse.",
    variations: ["Channel"],
  },
  {
    name: "BS Full Torque",
    weight: MEDIUM,
    url: "http://skateyeg.com/bog/04.1_Backside_Full_Torque.html",
    comment: "(Fahrvergnuegen, Fahrve, Nugen) Like a Royale but grinding in reverse.",
    variations: ["Channel"],
  },
  {
    name: "FS Fastslide",
    weight: RARE,
    score: 3,
    url: "http://skateyeg.com/bog/10.0_Fastslide.html",
    comment:
      "Like a Torque but without the foot resting on the backslide plate (straightened out ankle).",
    variations: ["Grab", "Rocket", "Cross-Grab", "Christ", "Channel"],
  },
  {
    name: "BS Fastslide",
    weight: RARE,
    score: 3,
    url: "http://skateyeg.com/bog/10.1_Backside_Fastslide.html",
    comment:
      "Like a Torque but without the foot resting on the backslide plate (straightened out ankle).",
    variations: ["Grab", "Rocket", "Cross-Grab", "Christ", "Channel"],
  },
  {
    name: "Frontside",
    weight: MEDIUM,
    score: 1,
    url: "http://skateyeg.com/bog/01.0_Frontside.html",
    comment:
      "The skater spins 90° and lands both h-blocks (the groove between the middle wheels) on the obstacle, chest facing it.",
    variations: ["Channel"],
  },
  {
    name: "Backside",
    weight: MEDIUM,
    score: 1,
    url: "http://skateyeg.com/bog/02.0_Backside.html",
    comment:
      "The skater spins 90° and slides perpendicular to the obstacle with his/her back turned to the obstacle.",
    variations: ["Channel"],
  },
  {
    name: "FS Savannah",
    weight: RARE,
    url: "http://skateyeg.com/bog/09.0_Savannah_(AO_Unity).html",
    comment:
      "Crossed legs on both backslide plates with the trailing foot going behind the leading foot.",
    variations: ["Channel"],
  },
  {
    name: "BS Savannah",
    weight: RARE,
    url: "http://skateyeg.com/bog/09.1_Backside_Savannah_(AO_BS_Unity).html",
    comment:
      "Crossed legs on both backslide plates with the trailing foot going behind the leading foot.",
    variations: ["Channel"],
  },
];

/**
 * Grind variations. The master list: per-grind variation lists above
 * reference these by name. `score`/`weight` always come from here.
 */
export const VARIATIONS = [
  { name: "None", weight: EASY, score: 0, noThumb: true },
  {
    name: "Topside",
    weight: EASY,
    score: 1,
    url: "http://skateyeg.com/bog/03.0_Topside_(Top).html",
    comment:
      "A Topside is when the frame of the skate is brought over an obstacle and placed on top, while the soul plate remains underneath.",
  },
  {
    name: "Negative",
    weight: RARE,
    score: 2,
    url: "http://skateyeg.com/bog/11.0_Negative.html",
    comment:
      "Grinding on the inside soul plate instead of the outside soul plate.",
  },
  {
    name: "Rough",
    weight: RARE,
    score: 2,
    url: "http://skateyeg.com/bog/08.0_Rough_(Heel).html",
    comment:
      "Grinding on the heel instead of the whole soul foot (Rough Mizou, Rough Sweatstance, ..)",
  },
  {
    name: "Tough",
    weight: RARE,
    score: 2,
    url: "http://skateyeg.com/bog/07.0_Tough_(Toe).html",
    comment:
      "(Tokyo) Grinding on the toe instead of the whole soul foot (Tough Acid, ..)",
  },
  {
    name: "Channel",
    weight: RARE,
    score: 2,
    url: "http://skateyeg.com/bog/18.0_Channel.html",
    comment:
      "Grinding a groove trick between the wheels (Channel Frontside, ..)",
  },
  {
    name: "Rocket",
    weight: MEDIUM,
    score: 2,
    url: "http://skateyeg.com/bog/06.0_Rocket.html",
    comment:
      "Both legs extended straight, one hand crossed over the front of them, grabbing the opposite outside soul plate.",
  },
  {
    name: "Grab",
    weight: EASY,
    score: 1,
    url: "http://skateyeg.com/bog/17.0_Grabbed.html",
    comment: "Grabbing the free foot while doing a one-footed grind.",
  },
  {
    name: "Cross-Grab",
    weight: MEDIUM,
    score: 2,
    noThumb: true,
    comment:
      "Grabbing the free skate with the opposite hand. Also called Mute Grab.",
  },
  {
    name: "Christ",
    weight: RARE,
    score: 2,
    url: "http://skateyeg.com/bog/09.0_Christ.html",
    comment:
      "The free foot is set on top of the grinding skate's toe, in a soul grind position.",
  },
  // combos
  {
    name: "Rough Topside",
    weight: RARE,
    score: 2,
    noThumb: true,
    comment: "Same as Rough but on Topside, for example a Rough Sweatstance.",
  },
  {
    name: "Cross-Grab Topside",
    weight: RARE,
    score: 2,
    noThumb: true,
    comment: "Same as Cross-Grab but with a Topside.",
  },
  {
    name: "Cross-Grab Negative",
    weight: RARE,
    score: 3,
    noThumb: true,
    comment: "Same as Cross-Grab but with a Negative.",
  },
  {
    name: "Christ Topside",
    weight: RARE,
    score: 2,
    noThumb: true,
    comment: "Same as Christ but with a Topside.",
  },
  {
    name: "Christ Negative",
    weight: RARE,
    score: 3,
    noThumb: true,
    comment: "Same as Christ but with a Negative.",
  },
  {
    name: "Tough Topside",
    weight: RARE,
    score: 2,
    noThumb: true,
    comment: "Same as Tough but on Topside.",
  },
  {
    name: "Grab Topside",
    weight: MEDIUM,
    score: 2,
    noThumb: true,
    comment: "Same as Grab but with a Topside.",
  },
  {
    name: "Grab Negative",
    weight: RARE,
    score: 3,
    noThumb: true,
    comment: "Same as Grab but with a Negative.",
  },
  {
    name: "Rocket Topside",
    weight: RARE,
    score: 2,
    noThumb: true,
    comment: "Same as Rocket but with a Topside.",
  },
  {
    name: "Rocket Negative",
    weight: RARE,
    score: 3,
    noThumb: true,
    comment: "Same as Rocket but with a Negative.",
  },
  {
    name: "Negative&Topside",
    weight: RARE,
    score: 3,
    noThumb: true,
    comment: "Used for a Negative X-Grind or Stub Soul",
  },
  {
    name: "Tough&Rough",
    weight: RARE,
    score: 3,
    noThumb: true,
    comment: "Used for a Rough & Tough X-Grind or Duck Hunt",
  },
];

/**
 * Some grind + variation/spin combos have their own name. The namer
 * swaps them in when the trick has the listed properties (isReverse
 * means the grind is entered alley-oop / truespin).
 */
export const GRIND_SYNONYMS = [
  {
    newName: "Misfit",
    name: "Mistrial",
    comment: "Alley-oop Topside Mistrial",
    isReverse: true,
    isTopside: true,
    url: "http://skateyeg.com/bog/07.0_Misfit_(AO_Topside_Mistrial).html",
  },
  {
    newName: "Overpuss",
    name: "Mistrial",
    comment: "Topside Mistrial",
    isTopside: true,
    url: "http://skateyeg.com/bog/10.0_Overpuss_(Topside_Mistrial).html",
  },
  {
    newName: "Soyale",
    name: "Torque Soul",
    comment: "Alley-oop Torque Soul",
    isReverse: true,
    url: "http://skateyeg.com/bog/04.0_Soyale_(AO_Torque_Soul).html",
  },
  {
    newName: "Fishbrain",
    name: "Makio",
    comment: "Topside Makio",
    isTopside: true,
    url: "http://skateyeg.com/bog/01.0_Fishbrain_(Topside_Makio).html",
  },
  {
    newName: "Kindgrind",
    name: "Mizou",
    comment: "Alley-oop Topside Mizou",
    isReverse: true,
    isTopside: true,
    url: "http://skateyeg.com/bog/03.0_Kindgrind_(AO_Topside_Mizou).html",
  },
  {
    newName: "Sweatstance",
    name: "Mizou",
    comment: "Topside Mizou",
    isTopside: true,
    url: "http://skateyeg.com/bog/02.0_Sweatstance_(Topside_Mizou).html",
  },
  {
    newName: "Top Teakettle",
    name: "PStar",
    comment: "Rough Topside PStar",
    isTopside: true,
    isRough: true,
  },
  {
    newName: "Teakettle",
    name: "PStar",
    comment: "Rough PStar",
    isRough: true,
    url: "http://skateyeg.com/bog/13.0_Tea_Kettle.html",
  },
  {
    newName: "Cloudy Night",
    name: "PStar",
    comment: "Alley-oop Topside PStar",
    isTopside: true,
    isReverse: true,
    url: "http://skateyeg.com/bog/06.0_Cloudy_Night_(AO_Topside_PStar).html",
  },
  {
    newName: "Sunny Day",
    name: "PStar",
    comment: "Topside PStar",
    isTopside: true,
    url: "http://skateyeg.com/bog/05.0_Sunny_Day_(Topside_PStar).html",
  },
  {
    newName: "Stub Soul",
    name: "X-Grind",
    comment: "An X-Grind with one foot grinding the negative soul plate.",
    isNegative: true,
    url: "http://skateyeg.com/bog/10.0_Stub_Soul.html",
  },
];

export const GLOSSARY = {
  AO: "(Alley-oop) Forwards to 180 Inspin to a soul grind.",
  True: "(Truespin) Forwards to 180 Outspin to a soul grind.",
  Hurricane: "Forwards to 360 Outspin to a soul grind.",
  Halfcab: "Fakie to 180 Inspin to a soul grind.",
  Fullcab: "Fakie to 360 Inspin to a soul grind.",
  "True Halfcab": "Fakie to 180 Outspin to a soul grind.",
  "True Fullcab": "Fakie to 360 Outspin to a soul grind.",
  Zerospin: "Fakie to a soul grind, no rotation.",
  Rewind:
    "(Revert) Spinning out of a grind against the direction of the spin you entered it with.",
  450: "360 spin to/off a groove grind. The longer way (360 + 90 degrees).",
  270: "360 spin to/off a groove grind. The shorter way (360 - 90 degrees).",
  810: "720 spin to/off a groove grind. The longer way (720 + 90 degrees).",
  630: "720 spin to/off a groove grind. The shorter way (720 - 90 degrees).",
  Switch:
    "(Unnatural) Grinding in the unnatural mirrored position of a grind. In this game Switch only applies to grinds, not spin direction.",
  Fakie:
    "Approach obstacle skating backwards. Also used for landing a groove grind backwards with no rotation (Royale to Fakie).",
  Forwards: "Forwards is the opposite of Fakie.",
  Natural: "Natural is the opposite of Switch.",
  Inspin: `Spin towards the obstacle.
    If the obstacle is on the left of you, Inspin is a spin to the left (counter clockwise).
    If the obstacle is on the right, Inspin is a spin to the right (clockwise).`,
  Outspin: `Spin away from the obstacle, also called "Blindside" in other sports.
    If the obstacle is on the left of you, Outspin is a spin to the right (clockwise).
    If the obstacle is on the right, Outspin is a spin to the left (counter clockwise).`,
  "Frontside/FS": "Frontside",
  "Backside/BS": "Backside",
  "Soul grinds":
    "Soul frame based grind without a frontside or a backside variant.",
  "Groove grinds":
    "(Boot/Frame grinds) H-Block based grind with a frontside and a backside variant.",
};

export const OBSTACLE_VARIATIONS = [
  { name: "Darkside", url: "http://skateyeg.com/bog/13.0_Darkside.html" },
  { name: "Farside", url: "http://skateyeg.com/bog/12.0_Farside.html" },
  { name: "Disaster", url: "http://skateyeg.com/bog/14.0_Disaster.html" },
];

// Grinds excluded unless the "rare grinds" setting is on.
// Matched by substring so BS/FS variants are covered.
export const RARE_GRIND_NAME_PARTS = [
  "Wheelbarrow",
  "Training Wheel",
  "Hot Dog",
  "Closed Book",
  "Open Book",
  "Byn Soul",
  "Sidewalk",
  "Darkslide",
  "Citric Acid",
];

export function thumbUrl(name) {
  return `img/captures/200x200/${name.replaceAll(" ", "")}.jpg`;
}

function finalizeGrind(grind, isGroove) {
  return {
    score: 2,
    ...grind,
    isGroove,
    thumbUrl: thumbUrl(grind.name),
  };
}

export const GRINDS = [
  ...SOUL_GRINDS.map((g) => finalizeGrind(g, false)),
  ...GROOVE_GRINDS.map((g) => finalizeGrind(g, true)),
];

export function variationByName(name) {
  return VARIATIONS.find((v) => v.name === name);
}
