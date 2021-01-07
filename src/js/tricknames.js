import { Trickdata } from "./trickdata.js";
let CONFIG = null;

export class Tricknames {
  constructor() {
    this.$dom = $("#trickNamingContent");
    
    this.trickdata = new Trickdata();
    CONFIG = this.trickdata.get();
    this.renderTerms();
    this.renderGrinds();
    this.renderGrindSynonyms();
    this.renderVariations();
    this.renderNotImplemented();
  }

  renderThumb(imageUrl = "", bogLink = "") {
    let html = "";
    html = imageUrl
      ? `<img class="tricktionary_thumb_img" src="${imageUrl}"> </img>`
      : "";
    if (bogLink) {
      let linkContent = html === "" ? "skateyeg.com" : html;
      html = `<a href="${bogLink}" target="blank">${linkContent}</a>`;
    }
    return html;
  }

  renderTable(title = "", headers = [], rows = [[], []]) {
    let headersHtml = headers.map((h) => {
      return `<div class="cell">${h}</div>`;
    });
    let rowsHtml = rows.map((r) => {
      let i = -1;
      let tds = r.map((rr) => {
        i = i + 1;
        return `<div class="cell" data-title="${headers[i]}"> ${rr} </div>`;
      });
      return `<div class="row"> ${tds.join("")}</div>`;
    });

    return ` 
    <div class="resp-table-wrapper">
      <h3>${title}</h3>
      <div class="resp-table">
        <div class="row header">${headersHtml.join("")} </div>
        ${rowsHtml.join("")}
      </div>
     `;
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
      rows.push([key, value]);
    }

    let html = this.renderTable(
      "Terms",
      ["Term", "Definition"],
      rows
    );
    this.$dom.append(html);
  }

  renderGrinds() {
    let rows = [];
    let vars = CONFIG.GRINDS;

    vars = vars.sort( (a,b)=>{
      let aa = a.name.replace("BS","ZZ");
      console.log(b)
      aa = aa.replace("FS","ZZ");
      let bb = b.name.replace("BS","ZZ");
      bb = bb.replace("FS","ZZ");
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
      const url = v.url ? new URL(v.url).hostname : "";
      const comment = v.comment ? `${v.comment}` : "";
      const thumb = v.thumbUrl ? v.thumbUrl : "";
      rows.push([v.name, comment, this.renderThumb(thumb, url)]);
    });

    let html = this.renderTable(
      "Grinds",
      ["Name", "Comment", "Image"],
      rows
    );
    this.$dom.append(html);
  }
  renderGrindSynonyms() {
    let rows = [];
    let vars = CONFIG.GRIND_SYNONYMS_THUMB;

    vars = vars.sort(this.compare);
    vars.forEach((variation) => {
      let row = [];
      const url = variation.url ? new URL(variation.url).hostname : "";
      const comment = variation.comment ? `${variation.comment}` : "";
      const thumb = variation.thumbUrl ? variation.thumbUrl : "";
      rows.push([variation.newName, comment, this.renderThumb(thumb, url)]);
    });

    let html = this.renderTable(
      "Grind Synonyms",
      ["Name", "Comment", "Image"],
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
      const url = variation.url ? new URL(variation.url).hostname : "";
      const comment = variation.comment ? `${variation.comment}` : "";
      const thumb = variation.thumbUrl ? variation.thumbUrl : "";
      rows.push([variation.name, comment, this.renderThumb(thumb, url)]);
    });

    let html = this.renderTable(
      "Grind Variations",
      ["Name", "Comment", "Image"],
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
}
