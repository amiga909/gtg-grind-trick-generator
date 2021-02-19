import { renderThumb, renderTable, renderTOC } from "./helperfunctions.js";
const REFERENCES = [
  {
    name: "Book of Grinds",
    url: `<a target="_blank" href="http://skateyeg.com/">skateyeg.com</a>`,
  },
  {
    name: "1997 Aggressive inline skating dictionary",
    url: `<a target="_blank" href="http://toxboe.net/all/1997-aggressive-inline-skating-dictionary">toxboe.net</a>`,
  },
  {
    name: "Inline roller skating tricks",
    url: `<a target="_blank" href="https://enacademic.com/dic.nsf/enwiki/11512439">enacademic.com</a>`,
  },
  {
    name: "Rollerblading Explained (In Progress)",
    url: `<a target="_blank" href="https://broskowfanboy.wordpress.com/rollerblading-explained-in-progress/">broskowfanboy</a>`,
  },
  {
    name: "Aggressive Inline Skating Terms",
    url: `<a target="_blank" href="https://www.angelfire.com/home/amandalane/sports/aggressiveinline/terms.html/">angelfire.com</a>`,
  },

  {
    name: "The Grab and Grind Chart Aggressive Skating",
    url: `<a target="_blank" href="https://lurch17.tripod.com/skchart.htm">lurch17.tripod.com</a>`,
  },

  {
    name: "Art of Rolling Skate Dice",
    url: `<a target="_blank" href="https://www.be-mag.com/news/products/art-of-rolling-skate-dice-free-android-app/">be-mag.com</a>`,
  },
  {
    name: "Grindlocker",
    url: `<a target="_blank" href="http://grindlocker.com/">grindlocker.com</a>`,
  },
  {
    name: "SVG Editor",
    url: `<a target="_blank" href="https://svg-edit.github.io/">svg-edit</a>`,
  },
  {
    name: "AIGHT trick book",
    url: `<a target="_blank" href="http://www.aightgame.com/assets/permutations.txt">List</a>`,
  },
  {
    name: "Rollerblading Rollerblading FB Group - Poll for hard grinds",
    url: `<a target="_blank" href="https://www.facebook.com/groups/790993714317553/permalink/3764459683637593/">facebook.com</a>`,
  },
];

export class AboutScreen {
  constructor() {
    this.$references = $("#aboutScreenReferences");
    this.render();
    renderTOC($("#modal-screen--about"));
  }

  render() {
    let rows = [];
    REFERENCES.forEach((m) => {
      rows.push([m.name, `<span style="color:black"> ${m.url}</span>`]);
    });
    let html = renderTable("References", ["Name", "URL"], rows);
    html += renderTable(
      "About AIGHT",
      ["Author", "Github", "Contact", "Media" ],
      [
        [
          "Copyright (c) 2021 Roman Hatz",
          `<a target="_blank" href="https://github.com/amiga909/gtg-grind-trick-generator"> Source Code </a>`,
          `<a href="mailto:aight.bladegame@gmail.com">aight.bladegame@gmail.com</a>`,
          `<a target="_blank" href="https://www.youtube.com/watch?v=Pz2Ker7KUSw ">App Video</a>, 
          <a target="_blank" href="https://www.youtube.com/watch?v=tVDT8YBsSo8">Video Teaser</a>, <a target="_blank" href="https://soundcloud.com/thaumatorg/aight-game-trailer-music/s-sTRsXBkie3F">Drum'n'Bass Track</a>`,
        ],
      ]
    );

    this.$references.html(html);
  }
}
