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

  renderThumb(imageUrl = "", bogLink="") {
    let html  = ""; 
      html = imageUrl
    ? `<img class="tricktionary_thumb_img" src="${imageUrl}"> </img>`
    : "";
    if(bogLink) {
      let linkContent = html === "" ? "skateyeg.com" : html;
      html =`<a href="${bogLink}" target="blank">${linkContent}</a>` 
    }
    return html;
  }

  renderTable(title = "", headers = [], rows = [  [],[],  ]){
    let headersHtml = headers.map( (h)=>{
      return `<div class="cell">${h}</div>`
    }); 
    let rowsHtml = rows.map( (r)=>{
      let i = -1;
      let tds = r.map( (rr)=>{  
        i = i +1;
        return `<div class="cell" data-title="${headers[i]}"> ${rr} </div>`
       });
      return `<div class="row"> ${tds.join("")}</div>`
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

  renderTable2(title = "", headers = [], rows = [  [],[],  ]){
    let headersHtml = headers.map( (h)=>{
      return `<th class="resp-th">${h}</th>`
    }); 
    let rowsHtml = rows.map( (r)=>{
      let tds = r.map( (rr)=>{  
        return `<td class="resp-td"><span>${rr}</span></td>`
       });
      return `<tr class="resp-tr"> ${tds.join("")}</tr>`
    }); 
      
    return ` 
    <h4>${title}</h4>
    <table class="resp-table">
    <thead class="resp-thead">
      <tr class="resp-tr">
        ${headersHtml.join("")}
      </tr>
    </thead>
    <tbody class="resp-tbody">
      <tr class="resp-tr">${rowsHtml.join("")}</tr>
    </tbody>     
  </table>`;
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
    vars.forEach((variation) => {
    
      let row = [];
      const url = variation.url ? new URL(variation.url).hostname : "";
      const comment = variation.comment ? `${variation.comment}` : "";
      const thumb = variation.thumbUrl ? variation.thumbUrl : '';
      rows.push([variation.newName, comment, this.renderThumb(thumb,url )])
      });
    
   
   
let html = this.renderTable("Grind Synonyms", ["Name", "Comment", "Image"], rows);
    this.$dom.append(html);
  }

  renderVariations() {
    let rows = [];
    let vars = CONFIG.VARIATIONS_THUMB;
    vars = vars.sort(this.compare);
    vars.forEach((variaton) => {
      const url = variaton.url ? new URL(variaton.url).hostname : "";
      const comment = variaton.comment ? ` ${variaton.comment}` : "";
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
