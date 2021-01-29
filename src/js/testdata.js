export const testData = [
  {
    expected: "540 Cloudy Night",
    data: [
      { name: "Grind", winner: { name: "PStar", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Inspin 540" } },
      { name: "GrindVariation", winner: { name: "Topside" } },
    ],
  },
  {
    expected: "540 True Cloudy Night",
    data: [
      { name: "Grind", winner: { name: "PStar", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Outspin 540" } },
      { name: "GrindVariation", winner: { name: "Topside" } },
    ],
  },

  {
    expected: "Top Teakettle",
    data: [
      { name: "Grind", winner: { name: "PStar", isGrooveGrind: false } },
      { name: "GrindVariation", winner: { name: "Rough Topside" } },
    ],
  },

  {
    expected: "AO Acid to 360 revert out",
    data: [
      { name: "Grind", winner: { name: "Acid", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Inspin 180" } },
      { name: "SpinOff", winner: { name: "Outspin 360" } },
    ],
  },

  {
    expected: "AO Soul to 360 out",
    data: [
      { name: "Grind", winner: { name: "Soul" } },
      { name: "SpinTo", winner: { name: "Inspin 180" } },
      { name: "SpinOff", winner: { name: "Inspin 360" } },
    ],
  },
  {
    expected: "Soyale",
    data: [
      { name: "Grind", winner: { name: "Torque Soul" } },
      { name: "SpinTo", winner: { name: "Inspin 180" } },
    ],
  },
  {
    expected: "Kindgrind to 180 out",
    data: [
      { name: "Grind", winner: { name: "Mizou" } },
      { name: "GrindVariation", winner: { name: "Topside" } },
      { name: "SpinTo", winner: { name: "Inspin 180" } },
      { name: "SpinOff", winner: { name: "Inspin 180" } },
    ],
  },
  {
    expected: "Fullcab Kindgrind",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "Mizou" } },
      { name: "GrindVariation", winner: { name: "Topside" } },
      { name: "SpinTo", winner: { name: "Inspin 360" } },
    ],
  },
  {
    expected: "360 Sweatstance to 180 revert out",
    data: [
      { name: "Grind", winner: { name: "Mizou" } },
      { name: "GrindVariation", winner: { name: "Topside" } },
      { name: "SpinTo", winner: { name: "Inspin 360" } },
      { name: "SpinOff", winner: { name: "Outspin 180" } },
    ],
  },

  {
    expected: "Halfcab Sidewalk",
    data: [
      { name: "Grind", winner: { name: "Sidewalk", isGrooveGrind: false } },
      {
        name: "Approach",
        winner: { name: "Fakie & Natural", isFakie: true },
      },
      { name: "SpinTo", winner: { name: "Inspin 180" } },
    ],
  },

  {
    expected: "Rough Sweatstance",
    data: [
      { name: "Grind", winner: { name: "Mizou", isGrooveGrind: false } },
      { name: "GrindVariation", winner: { name: "Rough Topside" } },
    ],
  },

  {
    expected: "True Tough Top Acid",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Forwards & Natural",
          isFakie: false,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "Acid", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Outspin 180" } },
      { name: "GrindVariation", winner: { name: "Tough Topside" } },
    ],
  },

  {
    expected: "Fakie BS Pudslide",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "BS Pudslide", isGrooveGrind: true } },
    ],
  },

  {
    expected: "True Soul",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Forwards & Natural",
          isFakie: false,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "Soul", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Outspin 180" } },
    ],
  },

  {
    expected: "Halfcab Soul",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "Soul", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Inspin 180" } },
    ],
  },

  {
    expected: "True Halfcab Soul",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "Soul", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Outspin 180" } },
    ],
  },

  {
    expected: "True Fullcab Soul",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "Soul", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Outspin 360" } },
    ],
  },

  {
    expected: "Grab Fishbrain",
    data: [
      { name: "Grind", winner: { name: "Makio", isGrooveGrind: false } },
      { name: "GrindVariation", winner: { name: "Grab Topside" } },
    ],
  },
  {
    expected: "Zerospin Christ Fishbrain to 180 out",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "Makio", isGrooveGrind: false } },
      { name: "GrindVariation", winner: { name: "Christ Topside" } },
      { name: "SpinOff", winner: { name: "Outspin 180" } },
    ],
  },

  {
    expected: "AO Fishbrain to 180 revert out",
    data: [
      { name: "Grind", winner: { name: "Makio" } },
      { name: "GrindVariation", winner: { name: "Topside" } },
      { name: "SpinTo", winner: { name: "Inspin 180" } },
      { name: "SpinOff", winner: { name: "Outspin 180" } },
    ],
  },

  {
    expected: "Fullcab Soul",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "Soul", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Inspin 360" } },
    ],
  },

  {
    expected: "360 Soul",
    data: [
      { name: "Grind", winner: { name: "Soul", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Inspin 360" } },
    ],
  },

  {
    expected: "360 Negative Soul to 180 revert out",
    data: [
      { name: "Grind", winner: { name: "Soul", isGrooveGrind: false } },
      { name: "GrindVariation", winner: { name: "Negative" } },
      { name: "SpinTo", winner: { name: "Inspin 360" } },
      { name: "SpinOff", winner: { name: "Outspin 180" } },
    ],
  },

  {
    expected: "Hurricane Soul",
    data: [
      { name: "Grind", winner: { name: "Soul", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Outspin 360" } },
    ],
  },
  {
    expected: "Stub Soul",
    data: [
      { name: "Grind", winner: { name: "X-Grind", isGrooveGrind: false } },
      { name: "GrindVariation", winner: { name: "Negative" } },
    ],
  },
  {
    expected: "Top Stub Soul",
    data: [
      { name: "Grind", winner: { name: "X-Grind", isGrooveGrind: false } },
      { name: "GrindVariation", winner: { name: "Negative&Topside" } },
    ],
  },
  {
    expected: "True Fullcab Top Stub Soul",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "X-Grind", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Outspin 360" } },
      { name: "GrindVariation", winner: { name: "Negative&Topside" } },
    ],
  },
  {
    expected: "True Soyale to 180 out",
    data: [
      {
        name: "Grind",
        winner: { name: "Torque Soul", isGrooveGrind: false },
      },
      { name: "SpinTo", winner: { name: "Outspin 180" } },
      { name: "SpinOff", winner: { name: "Outspin 180" } },
    ],
  },
  {
    expected: "True Fullcab Soyale to 540 revert out",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      {
        name: "Grind",
        winner: { name: "Torque Soul", isGrooveGrind: false },
      },
      { name: "SpinTo", winner: { name: "Outspin 360" } },
      { name: "SpinOff", winner: { name: "Inspin 540" } },
    ],
  },
  {
    expected: "True Fullcab Top Soyale to 180 out",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      {
        name: "Grind",
        winner: { name: "Torque Soul", isGrooveGrind: false },
      },
      { name: "SpinTo", winner: { name: "Outspin 360" } },
      { name: "GrindVariation", winner: { name: "Topside" } },
      { name: "SpinOff", winner: { name: "Outspin 180" } },
    ],
  },
  {
    expected: "True Kindgrind",
    data: [
      { name: "Grind", winner: { name: "Mizou", isGrooveGrind: false } },
      { name: "SpinTo", winner: { name: "Outspin 180" } },
      { name: "GrindVariation", winner: { name: "Topside" } },
    ],
  },

  {
    expected: "True Top Teakettle",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Forwards & Natural",
          isFakie: false,
          isSwitch: false,
        },
      },
      {
        name: "Grind",
        winner: { name: "PStar", isGrooveGrind: false },
      },
      { name: "SpinTo", winner: { name: "Outspin 180" } },
      { name: "GrindVariation", winner: { name: "Rough Topside" } },
    ],
  },

  {
    expected: "Switch Hurricane Teakettle",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Forwards & Switch",
          isFakie: false,
          isSwitch: true,
        },
      },
      {
        name: "Grind",
        winner: { name: "PStar", isGrooveGrind: false },
      },
      { name: "SpinTo", winner: { name: "Outspin 360" } },
      { name: "GrindVariation", winner: { name: "Rough" } },
    ],
  },
  {
    expected: "Switch AO Top Teakettle",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Forwards & Switch",
          isFakie: false,
          isSwitch: true,
        },
      },
      {
        name: "Grind",
        winner: { name: "PStar", isGrooveGrind: false },
      },
      { name: "SpinTo", winner: { name: "Inspin 180" } },
      { name: "GrindVariation", winner: { name: "Rough Topside" } },
    ],
  },
  {
    expected: "360 Torque Soul",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Forwards & Natural",
          isFakie: false,
          isSwitch: false,
        },
      },
      {
        name: "Grind",
        winner: { name: "Torque Soul", isGrooveGrind: false },
      },
      { name: "SpinTo", winner: { name: "Inspin 360" } },
    ],
  },
  {
    expected: "Switch 360 Torque Soul",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Forwards & Switch",
          isFakie: false,
          isSwitch: true,
        },
      },
      {
        name: "Grind",
        winner: { name: "Torque Soul", isGrooveGrind: false },
      },
      { name: "SpinTo", winner: { name: "360 Inspin" } },
    ],
  },

  {
    expected: "Zerospin Acid to 360 out",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "Acid", isGrooveGrind: false } },
      { name: "SpinOff", winner: { name: "Outspin 360" } },
    ],
  },
  {
    expected: "Zerospin Acid to 360 out",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "Acid", isGrooveGrind: false } },
      { name: "SpinOff", winner: { name: "Inspin 360" } },
    ],
  },
  {
    expected: "Fakie BS Royale",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "BS Royale", isGrooveGrind: true } },
      { name: "SpinTo", winner: { name: "Outspin 90" } },
    ],
  },
  {
    expected: "Fakie Switch 450 BS Royale",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Switch",
          isFakie: true,
          isSwitch: true,
        },
      },
      { name: "Grind", winner: { name: "BS Royale", isGrooveGrind: true } },
      { name: "SpinTo", winner: { name: "Outspin 450" } },
    ],
  },
  {
    expected: "Fakie 270 BS Royale",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "BS Royale", isGrooveGrind: true } },
      { name: "SpinTo", winner: { name: "Inspin 270" } },
    ],
  },
  {
    expected: "Fakie 270 BS Royale to Forwards out",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "BS Royale", isGrooveGrind: true } },
      { name: "SpinTo", winner: { name: "Inspin 270" } },
      { name: "SpinOff", winner: { name: "Forwards" } },
    ],
  },
  {
    expected: "True BS Tabernacle",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Forwards & Natural",
          isFakie: false,
          isSwitch: false,
        },
      },
      {
        name: "Grind",
        winner: {
          name: "BS Tabernacle",
          isGrooveGrind: false,
          isSoulGroove: true,
        },
      },
      { name: "SpinTo", winner: { name: "Outspin 180" } },
    ],
  },
  {
    expected: "True Fullcab BS Tabernacle",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Natural",
          isFakie: true,
          isSwitch: false,
        },
      },
      {
        name: "Grind",
        winner: {
          name: "BS Tabernacle",
          isGrooveGrind: false,
          isSoulGroove: true,
        },
      },
      { name: "SpinTo", winner: { name: "Outspin 360" } },
    ],
  },
  {
    expected: "Switch Zerospin BS Tabernacle",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Fakie & Switch",
          isFakie: true,
          isSwitch: true,
        },
      },
      {
        name: "Grind",
        winner: {
          name: "BS Tabernacle",
          isGrooveGrind: false,
          isSoulGroove: true,
        },
      },
    ],
  },

  {
    expected: "BS Royale to Forwards out",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Forwards",
          isFakie: false,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "BS Royale" } }, 
      { name: "SpinOff", winner: { name: "Forwards" } },
    ],
  },
  {
    expected: "Soul",
    data: [
      {
        name: "Approach",
        winner: {
          name: "Forwards",
          isFakie: false,
          isSwitch: false,
        },
      },
      { name: "Grind", winner: { name: "Soul" } },  
    ],
  },
];
