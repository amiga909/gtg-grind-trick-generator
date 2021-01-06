import { Trickdata } from "./trickdata.js";
let CONFIG = null;

export class Tricknames {
  constructor() {
    this.$dom = $("#trickNamingContent");
    this.$termsTable = $("#reference-terms-table-body");
    this.trickdata = new Trickdata();
    CONFIG = this.trickdata.get();
    this.renderTerms();
    this.renderGrinds();
    this.renderGrindSynonyms();
    this.renderVariations();
    this.renderNotImplemented();
  }

  renderNotImplemented() {
    // dupes content?
    return false;
    const rows = [];
    const variations = CONFIG.OBSTACLE_VARIATIONS;
    variations.forEach((v) => {
      rows.push(`<tr class=" ">
    <td>${v.name}</td>
    <td><a target="blank" href="${v.url}">${new URL(v.url).hostname}</a></td>
  </tr>`);
    });
    $("#trickNamingContentNotImplementedTable").append(rows.join(""));

    const html = $("#trickNamingContentNotImplemented").html();
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
      rows.push(`<tr class=" ">
    <td>${key}</td>
    <td> ${value}</td>
  </tr>`);
    }

    this.$termsTable.append(rows.join(""));
  }

  renderGrinds() {
    const rows = [];
    let grinds = CONFIG.GRINDS;
    grinds = grinds.sort(this.compare);

    grinds.forEach((grind) => {
      const url = grind.url
        ? `<a target="blank" href="${grind.url}">${
            new URL(grind.url).hostname
          }</a>`
        : "";
      const comment = grind.comment ? `<br/>${grind.comment}` : "";
      console.log(grind.thumbUrl);
      const thumb = grind.thumbUrl
        ? `<img class="tricktionary_thumb_img" src="${grind.thumbUrl}"> </img>`
        : "";
      rows.push(`<tr class="">
    <td>${grind.name}</td>
    <td>${url}${comment}${thumb}</td>
    
  </tr>`);
    });
    const html = `<h4>Grinds</h4>
    Trick graphics are made with Book of Grinds, skateyeg.com
    <table class="pure-table pure-table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
      ${rows.join("")} </tbody></table>`;

    this.$dom.append(html);
  }
  renderGrindSynonyms() {
    let rows = [];
    let vars = CONFIG.GRIND_SYNONYMS_THUMB;

    vars = vars.sort(this.compare);
    vars.forEach((variaton) => {
      if (variaton.url === "" && !variaton.comment) {
        return true;
      }
      const url = variaton.url ? new URL(variaton.url).hostname : "";
      const comment = variaton.comment ? `<br/>${variaton.comment}` : "";
      const thumb = variaton.thumbUrl
        ? `<img class="tricktionary_thumb_img" src="${variaton.thumbUrl}"> </img>`
        : "";
      rows.push(`<tr class=" ">
    <td>${variaton.newName}</td>
    <td><a target="blank" href="${variaton.url}">${url}</a>${comment}${thumb}</td>
  </tr>`);
      rows = rows.sort();
    });
    const html = `<h4>Grind Synonyms</h4>
    <table class="pure-table pure-table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
      ${rows.join("")} </tbody></table>`;

    this.$dom.append(html);
  }

  renderVariations() {
    let rows = [];
    let vars = CONFIG.VARIATIONS_THUMB;
    vars = vars.sort(this.compare);
    vars.forEach((variaton) => {
      const url = variaton.url ? new URL(variaton.url).hostname : "";
      const comment = variaton.comment ? `<br/>${variaton.comment}` : "";
      const thumb = variaton.thumbUrl
        ? `<img class="tricktionary_thumb_img" src="${variaton.thumbUrl}"> </img>`
        : "";
      rows.push(`<tr class=" ">
    <td>${variaton.name}</td>
    <td><a target="blank" href="${variaton.url}">${url}</a>${comment}${thumb}</td>
  </tr>`);
      rows = rows.sort();
    });
    const html = `<h4>Grind Variations</h4>
    <table class="pure-table pure-table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
      ${rows.join("")} </tbody></table>`;

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
}
