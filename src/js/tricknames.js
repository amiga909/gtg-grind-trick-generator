import { Trickdata } from './trickdata.js';
let CONFIG = null;

export class Tricknames {
  constructor() {
    this.$dom = $('#trickNamingContent');
    this.trickdata = new Trickdata();
    CONFIG = this.trickdata.get();
    this.renderGrinds();
    this.renderGrindSynonyms();
    this.renderVariations();
    this.renderNotImplemented();
  }

  renderNotImplemented() {
    const rows = [];
    const variations = CONFIG.OBSTACLE_VARIATIONS;
    variations.forEach((v) => {
      rows.push(`<tr class=" ">
    <td>${v.name}</td>
    <td><a target="blank" href="${v.url}">${new URL(v.url).hostname}</a></td>
  </tr>`);
    });
    $('#trickNamingContentNotImplementedTable').append(rows.join(''));

    const html = $('#trickNamingContentNotImplemented').html();
    this.$dom.append(html);
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
        : '';
      const comment = grind.comment ? `<br/>${grind.comment}` : '';
      rows.push(`<tr class=" ">
    <td>${grind.name}</td>
    <td>${url}${comment}</td>
  </tr>`);
    });
    const html = `<h4>Grinds</h4>
    <table class="pure-table pure-table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
      ${rows.join('')} </tbody></table>`;

    this.$dom.append(html);
  }
  renderGrindSynonyms() {
    let rows = [];
    let vars = CONFIG.GRIND_SYNONYMS;
    vars = vars.sort(this.compare);
    vars.forEach((variaton) => {
      if (variaton.url === '' && !variaton.comment) {
        return true;
      }
      const url = variaton.url ? new URL(variaton.url).hostname : '';
      const comment = variaton.comment ? `<br/>${variaton.comment}` : '';
      rows.push(`<tr class=" ">
    <td>${variaton.newName}</td>
    <td><a target="blank" href="${variaton.url}">${url}</a>${comment}</td>
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
      ${rows.join('')} </tbody></table>`;

    this.$dom.append(html);
  }

  renderVariations() {
    let rows = [];
    let vars = CONFIG.VARIATIONS;
    vars = vars.sort(this.compare);
    vars.forEach((variaton) => {
      const url = variaton.url ? new URL(variaton.url).hostname : '';
      const comment = variaton.comment ? `<br/>${variaton.comment}` : '';
      rows.push(`<tr class=" ">
    <td>${variaton.name}</td>
    <td><a target="blank" href="${variaton.url}">${url}</a>${comment}</td>
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
      ${rows.join('')} </tbody></table>`;

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
