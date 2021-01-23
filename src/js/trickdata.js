const EASY_REPEAT = 2;
const MEDIUM_REPEAT = 1;

const APPROACHES = [
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
    scores: 1,
    url: "",
  },
  {
    name: "Inspin 450",
    scores: 2,
    url: "",
  },
  {
    name: "Outspin 630",
    scores: 3,
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
    scores: 1,
    url: "",
  },
  {
    name: "Outspin 450",
    scores: 2,
    url: "",
  },
  {
    name: "Inspin 630",
    scores: 3,
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
    scores: 1,
    url: "",
  },
  {
    name: "Inspin 450",
    scores: 2,
    url: "",
  },
  {
    name: "Outspin 630",
    scores: 3,
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
    scores: 1,
    url: "",
  },
  {
    name: "Outspin 450",
    scores: 2,
    url: "",
  },
  {
    name: "Inspin 630",
    scores: 3,
    url: "",
  },
];

const HYBRID_COMMENT =
  "Treated like a soul grind (AO, Truespin, Zerospin) not like a groove grind (270, 450) because the trick has not a different name when grinded in reverse direction.";
const SOUL_GRINDS = [
  {
    name: "Soul",
    repeat: EASY_REPEAT,
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
    repeat: EASY_REPEAT,
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
    url: "http://skateyeg.com/bog/05.1_Citric_Acid.html",
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
    name: "Hot Dog",
    noSwitch: true,
    url: "http://skateyeg.com/bog/11.0_Hot_Dog.html",
    comment: "Easier to do on a narrow box that can be grinded on both sides.",
    variations: {
      Rough: true,
      Tough: true,
    },
  },
  {
    name: "Mizou",
    repeat: EASY_REPEAT,
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
    url: "http://skateyeg.com/bog/04.1_Sidewalk.html",
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
    name: "X-Grind",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/06.0_X_Grind.html",
    comment:
      "A regular X-Grind has the front foot Topside. A Topside X-Grind has the back foot Topside. A Negative X-Grind is called Stub Soul.",
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

    comment:
      "The front skate is rolling on the wheel on the heel, the back skate is on Topside soul.",
    variations: { Rough: true, Tough: true },
  },
  {
    name: "BS Tabernacle",
    url: "http://skateyeg.com/bog/12.1_Backside_Tabernacle.html",
    comment: HYBRID_COMMENT,
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "FS Tabernacle",
    url: "http://skateyeg.com/bog/12.0_Tabernacle.html",
    comment: HYBRID_COMMENT,
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "BS Darkslide",
    url: "http://skateyeg.com/bog/14.1_Backside_Darkslide.html",
    comment: HYBRID_COMMENT,
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "FS Darkslide",
    url: "http://skateyeg.com/bog/14.0_Darkslide.html",
    comment: HYBRID_COMMENT,
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "BS Wheelbarrow",
    url: "http://skateyeg.com/bog/15.1_Backside_Wheelbarrow.html",
    comment: HYBRID_COMMENT,
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "FS Wheelbarrow",
    url: "http://skateyeg.com/bog/15.0_Wheelbarrow.html",
    comment: HYBRID_COMMENT,
    isSoulGroove: true,
    variations: { Channel: true },
  },

  {
    name: "BS Byn Soul",
    url: "",
    comment: "Turning the soul foot on a soul grind into a torque",
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "FS Byn Soul",
    url: "",
    comment: "Turning the soul foot on a soul grind into a torque",
    isSoulGroove: true,
    variations: { Channel: true },
  },
  {
    name: "Biscuit",
    noThumb: true,
    noSwitch: true,
    url: "",
    comment:
      "(Snub Soul) Grinding on the soul plates with both feet, with toes facing each other.",
    variations: { Rough: true, Tough: true },
  },
];
// GROOVE_GRINDS
// Most Grinds based on h-block and have a backside and frontside variant.
// No alley-oop grind variant. For example an alley-oop Royale is a Full Torque
const GROOVE_GRINDS = [
  {
    name: "FS Royale",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/03.0_Royale.html",
    variations: { Channel: true },
  },
  {
    name: "FS Unity",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/07.0_Unity.html",
    variations: { Channel: true },
  },
  {
    name: "FS Torque",
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
    comment: "Also called Cowboy Grind",
    url: "http://skateyeg.com/bog/09.1_Backside_Cab_driver.html",
    variations: { Channel: true },
  },
  {
    name: "BS Backslide",
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
    url: "http://skateyeg.com/bog/11.1_Backside_Pudslide.html",
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
    comment: "Same as Fahrvergnuegen, Farhve, Nugen",
    variations: { Channel: true },
  },
  {
    name: "BS Fastslide",
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
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/07.1_Backside_Unity.html",
    variations: { Channel: true },
  },
  {
    name: "BS Torque",
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
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/03.1_Backside_Royale.html",
    variations: { Channel: true },
  },
  {
    name: "FS Fastslide",
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
    comment: "Also called Cowboy Grind",
    url: "http://skateyeg.com/bog/09.0_Cab_driver.html",
    variations: { Channel: true },
  },
  {
    name: "FS Pudslide",
    url: "http://skateyeg.com/bog/11.0_Pudslide.html",
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
    comment: "Same as Fahrvergnuegen, Farhve, Nugen",
    variations: { Channel: true },
  },
  {
    name: "Backside",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/02.0_Backside.html",
    variations: {
      Channel: true,
    },
  },
  {
    name: "Frontside",
    repeat: MEDIUM_REPEAT,
    url: "http://skateyeg.com/bog/01.0_Frontside.html",
    variations: {
      Channel: true,
    },
  },
  {
    name: "FS Savannah",
    url: "http://skateyeg.com/bog/09.0_Savannah_(AO_Unity).html",
    variations: { Channel: true },
  },
  {
    name: "BS Savannah",
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
    comment: "Negative X-Grind",
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
    comment: "Grabbing the free foot while doing a one-footed grind.",
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
// @TODO: Revert only if Inspin
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
];

const SPINS_OFF_GROOVE_GRIND = [
  {
    name: "Fakie",
    scores: 1,
    url: "",
  },
  {
    name: "Forwards",
    scores: 0,
    url: "",
  },
  {
    name: "270",
    scores: 1,
    url: "",
  },
  {
    name: "450",
    scores: 2,
    url: "",
  },
  {
    name: "630",
    scores: 3,
    url: "",
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
    "Spin towards obstacle. If the obstacle is on the left and approach is forwards, Inspin is counter-clockwise. If the obstacle is on the right, Inspin is clockwise.",
  Outspin: `Spin away from obstacle, "blindside". If the obstacle is on the left and approach is forwards, Outspin is clockwise. If the obstacle is on the right, Outspin is counter-clockwise.`,
  Switch: "Grinding in the unnatural mirrored position of a grind.",
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
  g.scores = 1;
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
  } /*
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
