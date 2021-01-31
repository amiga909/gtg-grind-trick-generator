import { renderTable } from "./helperfunctions.js";

export class Tricklist {
  constructor($tricklistBtn) {
    this.$tricklistBtn = $("#showTricklistButton");
    this.$tricklistBtn.addClass("pure-button-disabled");
    this.$tricklistBtnStart = $("#start-screen-tricklistBtn-container");
    this.$count = $("#tricklistBtn-count");
    this.$list = $("#tricklist-table");

    this.storageKey = "tricklist-serialized";

    this.registerListener();

    let html = renderTable("", ["Points", "Name", "Description"], []);
    this.$list.html(html);
  }

  registerListener() {}

  getStorage() {
    if (localStorage.getItem(this.storageKey)) {
      let json = localStorage.getItem(this.storageKey);
      return JSON.parse(json);
    } else {
      return [];
    }
  }

  clearList() {
    localStorage.removeItem(this.storageKey);
  }

  addTrick(fullTrickName, origName, points) {
    let trickEntry = { parsed: fullTrickName, orig: origName, points: points };

    let arr = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    arr.push(trickEntry);
    localStorage.setItem(this.storageKey, JSON.stringify(arr));
    let row = this.renderRow(trickEntry);

    $(row).insertAfter(this.$list.find(".row:nth-child(1)"));
    this.$count.html(parseInt(this.$count.text(), 10) + 1);
    this.$tricklistBtn.removeClass("pure-button-disabled");
  }

  hasTrick(parsedStr) {
    let found = this.getStorage().filter((i) => {
      return i.parsed === parsedStr;
    });
    return found.length > 0;
  }

  renderRow(entry) {
    return `<div class="row"> 
      <div class="cell" data-title="Points"> ${entry.points} </div>
      <div class="cell" data-title="Name"> ${entry.parsed} </div>
      <div class="cell" data-title="Description"> ${entry.orig} </div>
    </div>`;
  }
}
