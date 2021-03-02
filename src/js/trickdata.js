const EASY_REPEAT = 2;
const MEDIUM_REPEAT = 1;

const APPROACHES = [
  {
    name: "Forwards",
    repeat: EASY_REPEAT,
    isFakie: false,
    isSwitch: false,
    scores: 0,
  },
  {
    name: "Fakie",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/05.0_Fakie.html",
    isFakie: true,
    isSwitch: false,
    scores: 1,
  },
  {
    name: "Switch",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/04.0_Switch.html",
    isFakie: false,
    isSwitch: true,
    scores: 1,
  },
  {
    name: "Fakie & Switch",
    url: "http://skateyeg.com/bog/04.0_Switch.html",
    isFakie: true,
    isSwitch: true,
    scores: 3,
  },
];

// SPINS:
// 4 variants:
// Groove grinds vs. Soul grinds. Groove grinds dont have a 180 because 90 degree spins do not count
// forwards vs fakie: zerospin, halfcab naming

const SPINS_TO_GRIND = [
  {
    name: "Outspin 180",
    repeat: MEDIUM_REPEAT,
    scores: 1,
  },
  {
    name: "Inspin 180",
    repeat: EASY_REPEAT,
    scores: 1,
    url: "",
  },

  {
    name: "Inspin 360",
    scores: 2,
    url: "",
  },
  {
    name: "Outspin 360",
    scores: 2,
    url: "",
  },
  {
    name: "Inspin 540",
    scores: 3,
    url: "",
  },
  {
    name: "Outspin 540",
    scores: 3,
    url: "",
  },
  {
    name: "Inspin 720",
    scores: 4,
    url: "",
  },
  {
    name: "Outspin 720",
    scores: 4,
    url: "",
  },
  {
    name: "Inspin 900",
    scores: 5,
    url: "",
  },
  {
    name: "Outspin 900",
    scores: 5,
    url: "",
  },
];
const SPINS_FAKIE_TO_GRIND = [
  {
    name: "Inspin 180",
    repeat: EASY_REPEAT,
    scores: 1,

    url: "",
  },
  {
    name: "Outspin 180",
    repeat: MEDIUM_REPEAT,
    scores: 1,
    url: "",
  },
  {
    name: "Inspin 360",
    scores: 2,
    url: "",
  },
  {
    name: "Outspin 360",
    scores: 2,
    url: "",
  },
  {
    name: "Inspin 540",
    scores: 3,
    url: "",
  },
  {
    name: "Outspin 540",
    scores: 3,
    url: "",
  },
  {
    name: "Inspin 720",
    scores: 4,
    url: "",
  },
  {
    name: "Outspin 720",
    scores: 4,
    url: "",
  },
  {
    name: "Inspin 900",
    scores: 5,
    url: "",
  },
  {
    name: "Outspin 900",
    scores: 5,
    url: "",
  },
];

const SPINS_TO_GRIND_GROOVE_FS = [
  {
    name: "Inspin 90",
    repeat: EASY_REPEAT,
    scores: 0,
    url: "",
  },
  {
    name: "Outspin 270",
    scores: 2,
    url: "",
  },
  {
    name: "Inspin 450",
    scores: 3,
    url: "",
  },
  {
    name: "Outspin 630",
    scores: 4,
    url: "",
  },
  {
    name: "Inspin 810",
    scores: 5,
    url: "",
  },
];
const SPINS_TO_GRIND_GROOVE_BS = [
  {
    name: "Outspin 90",
    repeat: EASY_REPEAT,
    scores: 0,
    url: "",
  },
  {
    name: "Inspin 270",
    scores: 2,
    url: "",
  },
  {
    name: "Outspin 450",
    scores: 3,
    url: "",
  },
  {
    name: "Inspin 630",
    scores: 4,
    url: "",
  },
  {
    name: "Outspin 810",
    scores: 5,
    url: "",
  },
];
const SPINS_FAKIE_TO_GRIND_GROOVE_FS = [
  {
    name: "Inspin 90",
    repeat: EASY_REPEAT,
    scores: 0,
    url: "",
  },
  {
    name: "Outspin 270",
    scores: 3,
    url: "",
  },
  {
    name: "Inspin 450",
    scores: 3,
    url: "",
  },
  {
    name: "Outspin 630",
    scores: 4,
    url: "",
  },
  {
    name: "Inspin 810",
    scores: 5,
    url: "",
  },
];
const SPINS_FAKIE_TO_GRIND_GROOVE_BS = [
  {
    name: "Outspin 90",
    repeat: EASY_REPEAT,
    scores: 0,
    url: "",
  },
  {
    name: "Inspin 270",
    scores: 2,
    url: "",
  },
  {
    name: "Outspin 450",
    scores: 3,
    url: "",
  },
  {
    name: "Inspin 630",
    scores: 4,
    url: "",
  },
  {
    name: "Outspin 810",
    scores: 5,
    url: "",
  },
];

const SPINS_OFF_GRIND = [
  {
    name: "Inspin 180",
    scores: 1,
    url: "",
  },
  {
    name: "Outspin 180 ",
    scores: 1,
    url: "",
  },
  {
    name: "Outspin 360",
    scores: 2,
    url: "",
  },
  {
    name: "Inspin 360",
    scores: 2,
    url: "",
  },
  {
    name: "Outspin 540",
    scores: 3,
    url: "",
  },
  {
    name: "Inspin 540",
    scores: 3,
    url: "",
  },
  {
    name: "Outspin 720",
    scores: 4,
    url: "",
  },
  {
    name: "Inspin 720",
    scores: 4,
    url: "",
  },
  {
    name: "Outspin 900",
    scores: 5,
    url: "",
  },
  {
    name: "Inspin 900",
    scores: 5,
    url: "",
  },
];

const SPINS_OFF_GROOVE_GRIND = [
  {
    name: "Forwards",
    scores: 0,
    url: "",
  },
  {
    name: "Fakie",
    scores: 0,
    url: "",
  },
  {
    name: "270",
    scores: 2,
    url: "",
  },
  {
    name: "450",
    scores: 3,
    url: "",
  },
  {
    name: "630",
    scores: 4,
    url: "",
  },
  {
    name: "810",
    scores: 5,
    url: "",
  },
];

const HYBRID_COMMENT = "";
const SOUL_GRINDS = [
  {
    name: "Soul",
    comment:
      "The back foot rests on the soulplate and the front foot slides on the h-block, pointing toward the obstacle.",
    repeat: EASY_REPEAT,
    scores: 1,
    url: "http://skateyeg.com/bog/02.0_Soul.html",
    variations: {
      Topside: true,
      Negative: true,
      Rough: true,
      Tough: true,
      "Rough Topside": true,
      "Tough Topside": true,
    },
  },
  {
    name: "Acid",
    comment: "Like a Soul but the leading foot is in the opposite position.",
    repeat: EASY_REPEAT,
    scores: 1,

    url: "http://skateyeg.com/bog/05.0_Acid.html",
    variations: {
      Topside: true,
      Negative: true,
      Rough: true,
      Tough: true,
      "Rough Topside": true,
      "Tough Topside": true,
    },
  },
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
    },
  },
  {
    name: "PStar",
    comment:
      "The soul foot is in front and the trailing foot is pointing toward the obstacle.",
    repeat: EASY_REPEAT,
    url: "http://skateyeg.com/bog/04.0_PStar.html",
    variations: {
      Topside: true,
      Negative: true,
      Rough: true,
      Tough: true,
      "Rough Topside": true,
      "Tough Topside": true,
    },
  },
  {
    name: "Torque Soul",
    comment:
      "The trailing foot is placed on the soul while the leading foot is placed on the backslide plate.",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/08.0_Torque_Soul.html",
    variations: {
      Topside: true,
      Negative: true,
      Rough: true,
      Tough: true,
      "Rough Topside": true,
      "Tough Topside": true,
    },
  },
  {
    name: "Mistrial",
    comment:
      "Like a Mizou but the the trailing foot is pointing towards the obstacle. Both feet should be close together.",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/07.0_Mistrial.html",
    variations: {
      Topside: true,
      Negative: true,
      Rough: true,
      Tough: true,
      "Rough Topside": true,
      "Tough Topside": true,
    },
  },
  {
    name: "Citric Acid",
    comment:
      "Wrapping the leading foot around the back of the soul foot and placing it in front in an acid position.",
    scores: 3,
    url: "http://skateyeg.com/bog/05.1_Citric_Acid.html",
    variations: {
      // Topside: true,
      Negative: true,
      //  Rough: true,
      // Tough: true,
      // "Rough Topside": true,
      // "Tough Topside": true,
    },
  },
  {
    name: "Hot Dog",
    noSwitch: true,
    url: "http://skateyeg.com/bog/11.0_Hot_Dog.html",
    comment:
      "Grinding on both negative soul plates. Easier to do on a narrow box that can be grinded on both sides.",
    variations: {
      Rough: true,
      Tough: true,
    },
  },
  {
    name: "Mizou",
    comment:
      "(Miszou) The soul foot is in front and the trailing foot rests on the h-block, pointing away from the obstacle.",
    repeat: EASY_REPEAT,
    scores: 1,
    url: "http://skateyeg.com/bog/03.0_Mizou.html",
    variations: {
      Topside: true,
      Negative: true,
      Rough: true,
      Tough: true,
      "Rough Topside": true,
      "Tough Topside": true,
    },
  },
  {
    name: "Sidewalk",
    scores: 1,
    comment:
      "Oldschool trick. Like a PStar but with the back foot all the way down on its laces. A topside Sidewalk is called Tendon Tear.",
    url: "http://skateyeg.com/bog/04.1_Sidewalk.html",
    variations: {
      Topside: true,
      Negative: true,
      Rough: true,
      // Tough: true,
      //  "Rough Topside": true,
      // "Tough Topside": true,
    },
  },
  {
    name: "X-Grind",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/06.0_X_Grind.html",
    comment:
      "X-Grinds are done on the souls of both skates. A regular X-Grind has the front foot topside. A topside X-Grind has the back foot topside.",
    variations: {
      Topside: true,
      Negative: true,
      "Negative&Topside": true,
      Rough: true,
      Tough: true,
      "Rough Topside": true,
      "Tough Topside": true,
      "Tough&Rough": true,
    },
  },
  {
    name: "Training Wheel",
    url: "",
    comment: `The front skate is rolling on the wheel on the heel, the back skate is on Topside soul.
      Image: Chris Haffey, AO Training Wheel, 
      <a target="_blank" href="https://www.youtube.com/watch?v=Dv00GSmm0gk">B.L.A.D.E. Aragon</a>`,
    variations: { Rough: true, Tough: true },
  },
  {
    name: "BS Tabernacle",
    url: "http://skateyeg.com/bog/12.1_Backside_Tabernacle.html",
    comment:
      "Like a Mizou but with the leading soul foot in acid position. " +
      HYBRID_COMMENT,
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "FS Tabernacle",
    comment:
      "Like a Mizou but with the leading soul foot in acid position. " +
      HYBRID_COMMENT,
    url: "http://skateyeg.com/bog/12.0_Tabernacle.html",
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "BS Darkslide",
    url: "http://skateyeg.com/bog/14.1_Backside_Darkslide.html",
    comment: "(Acid Rain) " + HYBRID_COMMENT,
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "FS Darkslide",
    url: "http://skateyeg.com/bog/14.0_Darkslide.html",
    comment: "(Acid Rain) " + HYBRID_COMMENT,
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "BS Wheelbarrow",
    url: "http://skateyeg.com/bog/15.1_Backside_Wheelbarrow.html",
    comment:
      "A backslide with the front foot rolling on the back wheel. " +
      HYBRID_COMMENT,
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "FS Wheelbarrow",
    url: "http://skateyeg.com/bog/15.0_Wheelbarrow.html",
    comment:
      "A backslide with the front foot rolling on the back wheel. " +
      HYBRID_COMMENT,
    isSoulGroove: true,
    variations: { Channel: true },
  },

  {
    name: "BS Byn Soul",
    url: "",
    comment: `(Neighborhood) Turning the soul foot on a soul grind into a torque. 
      <a target="_blank" href="https://www.picuki.com/media/2251667102534778405">Image</a>. ${HYBRID_COMMENT}`,
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "FS Byn Soul",
    url: "",
    comment: `(Neighborhood) Turning the soul foot on a soul grind into a torque. 
    <a target="_blank" href="https://www.picuki.com/media/2251667102534778405">Image</a>. ${HYBRID_COMMENT}`,
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "Closed Book",
    noSwitch: true,
    url: "",
    comment: `(Biscuit, Double Inner, Impossible Grind, Snub Soul) Grinding on the soul plates with both feet, with toes facing each other. 
    Image: Aaron Dizom, <a target="_blank" href="https://www.youtube.com/watch?v=L3H5E13UkBw">United Front</a>`,
    variations: { Rough: true, Tough: true, Topside: true, Negative: true },
  },
  {
    name: "Open Book",
    noSwitch: true,
    url: "",
    comment: `(Crab, Crab Stance, Double Outer) Grinding on the soul plates with both feet, with heels facing each other.
    Image: <a target="_blank" href="https://www.youtube.com/channel/UC_cMnM6u3xJ3yeW1jzIHgaQ">Ricardo Lino</a>`,
    variations: { Rough: true, Tough: true, Topside: true, Negative: true },
  },
];
// GROOVE_GRINDS
// Most Grinds based on h-block and have a backside and frontside variant.
// No alley-oop grind variant. For example an alley-oop Royale is a Full Torque
const GROOVE_GRINDS = [
  {
    name: "FS Royale",
    comment:
      "(Shifty) Grinding on the inside edge of the front skate, and on the outside edge of the trailing skate.",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/03.0_Royale.html",
    variations: { Channel: true },
  },
  {
    name: "FS Unity",
    comment:
      "(Buddha) Crossed legs on both backslide plates with the trailing foot going over the leading foot.",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/07.0_Unity.html",
    variations: { Channel: true },
  },
  {
    name: "FS Torque",
    comment: "Like a one-ooted Full Torque",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/05.0_Torque.html",
    variations: {
      Grab: true,
      Rocket: true,
      "Cross-Grab": true,
      Christ: true,
      Channel: true,
    },
  },
  {
    name: "BS Cab driver",
    scores: 3,
    comment:
      "(Cowboy) Sliding a torque and backslide at the same time without crossing your legs.",
    url: "http://skateyeg.com/bog/09.1_Backside_Cab_driver.html",
    variations: { Channel: true },
  },
  {
    name: "BS Backslide",
    comment: "Like an one-footed Royale, grinding on the trailing foot.",
    url: "http://skateyeg.com/bog/06.1_Backside_Backslide.html",
    variations: {
      Grab: true,
      Rocket: true,
      "Cross-Grab": true,
      Christ: true,
      Channel: true,
    },
  },
  {
    name: "FS Backslide",
    comment: "Like an one-footed Royale, grinding on the trailing foot.",
    url: "http://skateyeg.com/bog/06.0_Backslide.html",
    variations: {
      Grab: true,
      Rocket: true,
      "Cross-Grab": true,
      Christ: true,
      Channel: true,
    },
  },
  {
    name: "BS Pudslide",
    comment:
      "Like a Backslide but with the ankle bent outwards instead of inwards.",
    url: "http://skateyeg.com/bog/11.1_Backside_Pudslide.html",
    scores: 3,
    variations: {
      Grab: true,
      Rocket: true,
      "Cross-Grab": true,
      Christ: true,
    },
  },
  {
    name: "BS Full Torque",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/04.1_Backside_Full_Torque.html",
    comment: "(Fahrvergnuegen, Farhve, Nugen) Like a Royale grinded reverse.",
    variations: { Channel: true },
  },
  {
    name: "BS Fastslide",
    scores: 3,
    comment:
      "Like a Torque but without the foot resting on the backslide plate (straightened out ankle).",
    url: "http://skateyeg.com/bog/10.1_Backside_Fastslide.html",
    variations: {
      Grab: true,
      Rocket: true,
      "Cross-Grab": true,
      Christ: true,
      Channel: true,
    },
  },
  {
    name: "BS Unity",
    comment:
      "(Buddha) Crossed legs on both backslide plates with the trailing foot going over the leading foot.",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/07.1_Backside_Unity.html",
    variations: { Channel: true },
  },
  {
    name: "BS Torque",
    comment: "Like a one-footed Full Torque",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/05.1_Backside_Torque.html",
    variations: {
      Grab: true,
      Rocket: true,
      "Cross-Grab": true,
      Christ: true,
      Channel: true,
    },
  },
  {
    name: "BS Royale",
    comment:
      "(Shifty) Grinding on the inside edge of the front skate, and on the outside edge of the trailing skate.",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/03.1_Backside_Royale.html",
    variations: { Channel: true },
  },
  {
    name: "FS Fastslide",
    comment:
      "Like a Torque but without the foot resting on the backslide plate (straightened out ankle).",
    scores: 3,
    url: "http://skateyeg.com/bog/10.0_Fastslide.html",
    variations: {
      Grab: true,
      Rocket: true,
      "Cross-Grab": true,
      Christ: true,
      Channel: true,
    },
  },
  {
    name: "FS Cab driver",
    scores: 3,
    comment:
      "(Cowboy) Sliding a torque and backslide at the same time without crossing your legs.",
    url: "http://skateyeg.com/bog/09.0_Cab_driver.html",
    variations: { Channel: true },
  },
  {
    name: "FS Pudslide",
    comment:
      "Like a Backslide but with the ankle bent outwards instead of inwards.",
    url: "http://skateyeg.com/bog/11.0_Pudslide.html",
    scores: 3,
    variations: {
      Grab: true,
      Rocket: true,
      "Cross-Grab": true,
      Christ: true,
    },
  },
  {
    name: "FS Full Torque",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/04.0_Full_Torque.html",
    comment: "(Fahrvergnuegen, Farhve, Nugen) Like a Royale grinded reverse.",
    variations: { Channel: true },
  },
  {
    name: "Backside",
    comment:
      "The skater spins 90° and slides perpendicular to the obstacle with his/her back turned to the obstacle.",
    repeat: MEDIUM_REPEAT,
    scores: 1,
    url: "http://skateyeg.com/bog/02.0_Backside.html",
    variations: {
      Channel: true,
    },
  },
  {
    name: "Frontside",
    comment:
      "The skater spins 90° and lands in the space between the middle wheels, with both feet facing the obstacle.",
    repeat: MEDIUM_REPEAT,
    scores: 1,
    url: "http://skateyeg.com/bog/01.0_Frontside.html",
    variations: {
      Channel: true,
    },
  },
  {
    name: "FS Savannah",
    comment:
      "Crossed legs on both backslide plates with the trailing foot going behind the leading foot.",
    url: "http://skateyeg.com/bog/09.0_Savannah_(AO_Unity).html",
    variations: { Channel: true },
  },
  {
    name: "BS Savannah",
    comment:
      "Crossed legs on both backslide plates with the trailing foot going behind the leading foot.",
    url: "http://skateyeg.com/bog/09.1_Backside_Savannah_(AO_BS_Unity).html",
    variations: { Channel: true },
  },
];

const GRIND_SYNONYMS = [
  // Mistrial
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
    url: " http://skateyeg.com/bog/10.0_Overpuss_(Topside_Mistrial).html",
  },
  // Torque Soul
  {
    newName: "Soyale",
    name: "Torque Soul",
    isReverse: true,
    comment: "Alley-oop Torque Soul",

    url: "http://skateyeg.com/bog/04.0_Soyale_(AO_Torque_Soul).html",
  },

  // Makio
  {
    newName: "Fishbrain",
    comment: "Topside Makio",
    name: "Makio",
    isTopside: true,
    url: "http://skateyeg.com/bog/01.0_Fishbrain_(Topside_Makio).html",
  },
  // Mizou
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
    scores: 1,
    comment: "Rough Topside PStar",
    isTopside: true,
    isRough: true,
    url: "",
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
  // X-Grind
  {
    newName: "Stub Soul",
    comment: "An X-Grind with one foot grinding the negative soul plate.",
    name: "X-Grind",
    isNegative: true,
    url: "http://skateyeg.com/bog/10.0_Stub_Soul.html",
  },
];

const VARIATIONS = [
  {
    name: "Topside",
    repeat: EASY_REPEAT * 2,
    scores: 1,
    url: "http://skateyeg.com/bog/03.0_Topside_(Top).html",
    comment:
      "A Topside is when the frame of the skate is brought over an obstacle and placed on top, while the soul plate remains underneath.",
  },
  {
    name: "Negative",
    repeat: EASY_REPEAT,
    scores: 1,
    url: "http://skateyeg.com/bog/11.0_Negative.html",
    comment:
      "Grinding on the inside soul plate instead of the outside soul plate.",
  },
  {
    name: "Rough",
    scores: 1,
    url: "http://skateyeg.com/bog/08.0_Rough_(Heel).html",
    comment:
      "Grinding on the heel instead of the whole soul foot (Rough Mizou, Rough Sweatstance, ..)",
  },
  {
    name: "Tough",
    scores: 1,
    url: "http://skateyeg.com/bog/07.0_Tough_(Toe).html",
    comment:
      "Grinding on the toe instead of the whole soul foot (Tough Acid, ..)",
  },

  {
    name: "Channel",
    scores: 1,
    url: "http://skateyeg.com/bog/18.0_Channel.html",
    comment:
      "Grinding a groove trick between the wheels (Channel Frontside, ..)",
  },
  {
    name: "Rocket",
    repeat: MEDIUM_REPEAT,
    scores: 1,
    url: "http://skateyeg.com/bog/06.0_Rocket.html",
    comment:
      "Extending both legs out straight and crossing one hand over the front of both legs and grabbing the opposite outside soul plate.",
  },
  {
    name: "Grab",
    repeat: EASY_REPEAT,
    scores: 1,
    url: "http://skateyeg.com/bog/17.0_Grabbed.html",
    comment: "Grabbing the free foot while doing an one-footed grind.",
  },
  {
    name: "Cross-Grab",
    repeat: MEDIUM_REPEAT,
    scores: 1,
    noThumb: true,
    url: "",
    comment:
      "Grabbing the free skate with the opposite hand. Also called Mute Grab.",
  },
  {
    name: "Christ",
    scores: 1,
    url: "http://skateyeg.com/bog/09.0_Christ.html",
    comment:
      "Setting the other foot on top of the toe in a soul grind position.",
  },

  // combos
  {
    name: "Rough Topside",
    scores: 2,
    url: "",
    noThumb: true,
    comment: "Same as Rough but on Topside, for example a Rough Sweatstance.",
  },
  {
    name: "Cross-Grab Topside",
    scores: 2,
    url: "",
    noThumb: true,
    comment: "Same as Cross-Grab but with a Topside.",
  },
  {
    name: "Christ Topside",
    scores: 2,
    url: "",
    noThumb: true,
    comment: "Same as Christ but with a Topside.",
  },
  {
    name: "Tough Topside",
    scores: 2,
    url: "",
    noThumb: true,
    comment: "Same as Tough but on Topside.",
  },
  {
    name: "Grab Topside",
    repeat: MEDIUM_REPEAT,
    scores: 2,
    url: "",
    noThumb: true,
    comment: "Same as Grab but with a Topside trick",
  },
  {
    name: "Rocket Topside",
    scores: 2,
    url: "",
    noThumb: true,
    comment: "Same as Rocket but with a Topside trick",
  },
  {
    name: "Negative&Topside",
    scores: 2,
    url: "",
    noThumb: true,
    comment: "Used for a Negative X-Grind or Stub Soul",
  },
  {
    name: "Tough&Rough",
    scores: 2,
    url: "",
    noThumb: true,
    comment: "Used for a Rough & Tough X-Grind or Duck Hunt",
  },
];

const OBSTACLE_VARIATIONS = [
  {
    name: "Darkside",
    url: "http://skateyeg.com/bog/13.0_Darkside.html",
  },
  {
    name: "Farside",
    url: "http://skateyeg.com/bog/12.0_Farside.html",
  },
  {
    name: "Disaster",
    url: "http://skateyeg.com/bog/14.0_Disaster.html",
  },
];

const GLOSSARY = {
  // parsed tokens
  AO: "(Alley-oop) Forwards to 180 Inspin to a soul grind.",
  True: "(Truespin) Forwards to 180 Outspin to a soul grind.",
  Hurricane: "Forwards to 360 Outspin to a soul grind.",
  Halfcab: "Fakie to 180 Inspin to a soul grind.",
  Fullcab: "Fakie to 360 Inspin to a soul grind.",
  "True Halfcab": "Fakie to 180 Outspin to a soul grind.",
  "True Fullcab": "Fakie to 360 Outspin to a soul grind.",
  Zerospin: "Fakie to a soul grind, no rotation.",
  Revert:
    "(Rewind) Spinning off a grind the opposite direction of the natural momentum set by the initial grind spin.",

  // slot tokens
  450: "360 spin to/off a groove grind. The longer way (360 + 90 degrees).",
  270: "360 spin to/off a groove grind. The shorter way (360 - 90 degrees).",
  810: "720 spin to/off a groove grind. The longer way (720 + 90 degrees).",
  630: "720 spin to/off a groove grind. The shorter way (720 - 90 degrees).",
  Inspin:
    "Spin to the obstacle. If the obstacle is approached on the left, Inspin is to the left.",
  Outspin: `("Blindside") Spin away from the obstacle. If the obstacle is approached on the left, Outspin is to the right.`,
  Switch: "(Unnatural) Grinding in the unnatural mirrored position of a grind.",
  Fakie:
    "Approach obstacle skating backwards. Also used for landing a groove grind backwards with no rotation (Royale to Fakie).",
  Forwards: "Forwards is the opposite of Fakie.",
  Natural: "Natural is the opposite of Switch.",

  // unparsed tokens
  "Frontside/FS": "Frontside",
  "Backside/BS": "Backside",
  "Soul grinds":
    "Soul frame based grind wihtout a frontside or a backside variant.",
  "Groove grinds":
    "(Boot/Frame grinds) H-Block based grind with a frontside and a backside variant.",
};

const GRINDS = [];
SOUL_GRINDS.forEach((g) => {
  g.isGrooveGrind = false;
  GRINDS.push(g);
});
GROOVE_GRINDS.forEach((g) => {
  g.isGrooveGrind = true;
  GRINDS.push(g);
});

const GRINDS_FOR_SLOTS = [];
GRINDS.forEach((g) => {
  g.thumbUrl = g.noThumb !== true ? getThumbUrl(g.name) : "";
  g.scores = g.scores ? g.scores : 2;
  GRINDS_FOR_SLOTS.push(g);
  // duplicate soul grinds to even out cause groove grinds have fs/bs
  if (g.isGrooveGrind !== true && g.isSoulGroove !== true) {
    GRINDS_FOR_SLOTS.push(JSON.parse(JSON.stringify(g)));
  }
});

GRINDS_FOR_SLOTS.forEach((g, index) => {
  if (g.variations) {
    const arrayHash = [];

    for (const [variation, count] of Object.entries(g.variations)) {
      if (count === true || count === 1) {
        arrayHash.push({ name: variation });
      } else {
        count.forEach(() => {
          arrayHash.push({ name: variation });
        });
      }
    }

    GRINDS_FOR_SLOTS[index].variations = arrayHash;
  }
});

const VARIATIONS_THUMB = [];
VARIATIONS.forEach((v) => {
  v.thumbUrl = v.noThumb !== true ? getThumbUrl(v.name) : "";
  VARIATIONS_THUMB.push(v);
});

const GRIND_SYNONYMS_THUMB = [];
GRIND_SYNONYMS.forEach((v) => {
  let name = v.newName === "Top Teakettle" ? "Teakettle" : v.newName;
  v.thumbUrl = v.noThumb !== true ? getThumbUrl(name) : "";
  GRIND_SYNONYMS_THUMB.push(v);
});

function getThumbUrl(name) {
  let thumbName = name.replace(" ", "");
  thumbName = thumbName.replace(" ", "");
  return "img/captures/200x200/" + thumbName + ".jpg";
}

export class Trickdata {
  get() {
    return {
      GRINDS_FOR_SLOTS,
      APPROACHES,
      SPINS_TO_GRIND,
      SPINS_FAKIE_TO_GRIND,
      SPINS_TO_GRIND_GROOVE_FS,
      SPINS_TO_GRIND_GROOVE_BS,
      SPINS_FAKIE_TO_GRIND_GROOVE_FS,
      SPINS_FAKIE_TO_GRIND_GROOVE_BS,
      SOUL_GRINDS,
      GROOVE_GRINDS,
      VARIATIONS,
      VARIATIONS_THUMB,
      OBSTACLE_VARIATIONS,
      SPINS_OFF_GROOVE_GRIND,
      SPINS_OFF_GRIND,
      GRINDS,
      GRIND_SYNONYMS,
      GRIND_SYNONYMS_THUMB,
      GLOSSARY,
    };
  }

  getSpinToData(grind, approach = null) {
    let data = null;
    const isFakie = approach && approach.isFakie === true ? true : false;
    const isGrooveGrind = grind.isGrooveGrind === true;
    const isFrontsideGroove = isGrooveGrind && grind.name.includes("FS ");

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

  getSpinOffData(grind) {
    const isGrooveGrind = grind.isGrooveGrind === true;
    return isGrooveGrind ? SPINS_OFF_GROOVE_GRIND : SPINS_OFF_GRIND;
  }
}

//  https://www.npmjs.com/package/google-search-results-nodejs https://serpapi.com/playground?q=aggressive+inline+%22tough+soyale%22+&location=Austin%2C+Texas%2C+United+States&gl=us&hl=en
