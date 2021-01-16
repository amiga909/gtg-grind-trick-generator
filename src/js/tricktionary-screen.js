import { Trickdata } from "./trickdata.js";
import { renderThumb, renderTable } from "./helperfunctions.js";
let CONFIG = null;
const MORE = [
  {
    term: "Illusion Spin",
    comment:
      "Looking over the opposite shoulder of the direction you are going to spin.",
  },
  {
    term: "Grabbing locked feet",
    comment:
      "Grabs are only considered as grabbing the free foot of a one legged grind like Makio. A locked feet grab means holding a locked skate, for example a grabbed Full Torque.",
  },
  {
    term: "Negative Topside",
    comment: "Exists but I do not understand it at all.",
  },
  {
    term: "Medspin",
    comment:
      "A 360 done on-ground where you go forward to backwards on foot, then back to forwards on both feet.",
  },
  {
    term: "Toe/Heel Rolls",
    comment: "Rolling with one foot on one wheel before or after the grind.",
  },
  {
    term: "Step",
    comment:
      "Exists but I do not understand it at all. <a target='_blank' href='http://skateyeg.com/bog/10.0_Step.html'>Book of Grinds</a>",
  },
];

export class TricktionaryScreen {
  constructor() {
    this.$dom = $("#trickNamingContent");

    this.trickdata = new Trickdata();
    CONFIG = this.trickdata.get();

    this.renderTerms();
    this.renderGrinds();
    this.renderGrindSynonyms();
    this.renderVariations();
    this.renderNotImplemented();

    this.renderTOC();
  }

  renderTOC() {
    let tocs = [];

    this.$dom.find("h3").each((i, section) => {
      let $section = $(section);
      let display = $section.text();
      let anchor = display.replace(" ", "");
      $section.html(`<a class="toc-anchor" name="${anchor}"></a> ${display} `);
      tocs.push(
        `<a class="pure-menu-link" href="#${anchor}"> </
        <li class="pure-menu-item">${display} </li> 
        </a>`
      );
    });
    let html = `
    <div class="pure-menu  tricktionary-toc">
      <span class="pure-menu-heading">TOC</span> 
      <ul class="pure-menu-list"> 
        ${tocs.join("")}
      </ul>
      <p>
      All 3D rendered graphics are screenshots taken from the awesome <a target="_blank" href='http://skateyeg.com/bog/'>Book of Grinds</a>.
      Click on an image to open the Book of Grind page for the trick.   
      </p> 
   </div>
  `;

    $(html).prependTo(this.$dom);
  }

  renderNotImplemented() {
    const rows = [];
    const variations = CONFIG.OBSTACLE_VARIATIONS;

    variations.forEach((v) => {
      let row = [];
      const url = v.url ? v.url : "";
      const comment = v.comment ? `${v.comment}` : "";
      const thumb = v.thumbUrl ? v.thumbUrl : "";
      rows.push([
        v.name,
        url ? `<a  target="_blank" href="${url}">Book of Grinds</a>` : "",
      ]);
    });

    MORE.forEach((m) => {
      rows.push([m.term, m.comment]);
    });
    let html = renderTable("Not Implemented", ["Term", "Comment"], rows);
    this.$dom.append(html);
  }

  renderTerms() {
    let rows = [];
    let terms = CONFIG.GLOSSARY;

    const orderedTerms = Object.keys(terms)
      .sort()
      .reduce((obj, key) => {
        obj[key] = terms[key];
        return obj;
      }, {});

    for (const [key, value] of Object.entries(orderedTerms)) {
      rows.push([key, value]);
    }

    let html = renderTable("Terms", ["Term", "Definition"], rows);
    this.$dom.append(html);
  }

  renderGrinds() {
    let rows = [];
    let vars = CONFIG.GRINDS;

    vars = vars.sort((a, b) => {
      let aa = a.name.replace("BS", "ZZ");

      aa = aa.replace("FS", "ZZ");
      let bb = b.name.replace("BS", "ZZ");
      bb = bb.replace("FS", "ZZ");
      if (aa < bb) {
        return -1;
      }
      if (aa > bb) {
        return 1;
      }
      return 0;
    });
    vars.forEach((v) => {
      let row = [];
      const url = v.url ? v.url : "";
      const comment = v.comment ? `${v.comment}` : "";
      const thumb = v.thumbUrl ? v.thumbUrl : "";
      let name = v.name.replace("BS ", "Backside/BS ");
      name = name.replace("FS ", "Frontside/FS ");
      rows.push([name, renderThumb(thumb, url), comment]);
    });

    let html = renderTable("Grinds", ["Name", "Image", "Comment"], rows);
    this.$dom.append(html);
  }
  renderGrindSynonyms() {
    let rows = [];
    let vars = CONFIG.GRIND_SYNONYMS_THUMB;

    vars.sort(this.compare2).forEach((variation) => {
      let row = [];
      const url = variation.url ? variation.url : "";
      const comment = variation.comment ? `${variation.comment}` : "";
      const thumb = variation.thumbUrl ? variation.thumbUrl : "";
      rows.push([variation.newName, renderThumb(thumb, url), comment]);
    });

    let html = renderTable(
      "Grind Synonyms",
      ["Name", "Image", "Comment"],
      rows
    );
    this.$dom.append(html);
  }

  renderVariations() {
    let rows = [];
    let vars = CONFIG.VARIATIONS_THUMB;

    vars = vars.sort(this.compare);
    vars.forEach((variation) => {
      let row = [];
      const url = variation.url ? variation.url : "";
      const comment = variation.comment ? `${variation.comment}` : "";
      const thumb = variation.thumbUrl ? variation.thumbUrl : "";
      rows.push([variation.name, renderThumb(thumb, url), comment]);
    });

    let html = renderTable(
      "Grind Variations",
      ["Name", "Image", "Comment"],
      rows
    );
    this.$dom.append(html);
  }

  compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  compare2(a, b) {
    if (a.newName < b.newName) {
      return -1;
    }
    if (a.newName > b.newName) {
      return 1;
    }
    return 0;
  }
}
