import { renderThumb, renderTable } from "./helperfunctions.js";

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
    name: "SVG Editor",
    url: `<a target="_blank" href="https://svg-edit.github.io/">svg-edit</a>`,
  },
  {
    name: "Joker's trick book &#129313;",
    url: `<a target="_blank" href="https://grind-trick-generator.herokuapp.com/assets/permutations.txt">List</a>`,
  },
];
export class AboutScreen {
  constructor() {
    this.$references = $("#aboutScreenReferences");
    this.render();
  }

  render() {
    let rows = [];
    REFERENCES.forEach((m) => {
      rows.push([m.name, `<span style="color:black"> ${m.url}</span>`]);
    });
    let html = renderTable("References", ["Name", "URL"], rows);
      html += renderTable(
        "Author",
        ["Name", "Github", "Contact"],
        [  [
          "2020 by Roman Hatz",
          `<a target="_blank" href="https://github.com/amiga909/gtg-grind-trick-generator"> Source Code </a>`,
          `<a href="mailto:aight.bladegame@gmail.com">aight.bladegame@gmail.com</a>`,
        ]]
      );

    this.$references.html(html);
  }
}
