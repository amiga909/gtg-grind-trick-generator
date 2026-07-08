import { renderTable } from "./helperfunctions.js";

export class Tricklist {
  constructor($tricklistBtn) {
    this.$tricklistBtn = $("#showTricklistButton");
    this.$tricklistBtn.addClass("pure-button-disabled");
    this.$tricklistBtnStart = $("#start-screen-tricklistBtn-container");
    this.$count = $("#tricklistBtn-count");
    this.$list = $("#tricklist-table");
    this.$listSkipped = $("#tricklist-skipped-table");

    this.storageKey = "tricklist-serialized";
    this.storageKeySkipped = "tricklist-skipped-serialized";
    this.storageKeyHistory = "tricklist-history";

    this.registerListener();

    this.$list.html(
      renderTable(
        "Completed tricks",
        ["Points", "Name", "Description"],
        [],
        "red"
      )
    );
    this.$listSkipped.html(
      renderTable(
        "Skipped tricks",
        ["Points", "Name", "Description"],
        [],
        "blue"
      )
    );
  }

  registerListener() {}

  getStorage() {
    let res = { tricks: [], skipped: [] };
    if (localStorage.getItem(this.storageKey)) {
      let json = localStorage.getItem(this.storageKey);
      res.tricks = JSON.parse(json);
    }
    if (localStorage.getItem(this.storageKey)) {
      let json = localStorage.getItem(this.storageKey);
      res.skipped = JSON.parse(json);
    }
    return res;
  }

  saveHistory(data, isSkippedTrick = false) {
    let history = null;
    const storage = localStorage.getItem(this.storageKeyHistory);
    if (!storage) {
      history = { tricks: [], skipped: [] };
    } else {
      history = JSON.parse(storage);
    }

    if (isSkippedTrick) {
      history.skipped.push(data);
    } else {
      history.tricks.push(data);
    }

    localStorage.setItem(this.storageKeyHistory, JSON.stringify(history));
  }

  clearList() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.storageKeySkipped);
  }

  add(fullTrickName, origName, points, isSkippedTrick = false) {
    const trickEntry = {
      parsed: fullTrickName,
      orig: origName,
      points: points,
    };
    const storageKey = isSkippedTrick
      ? this.storageKeySkipped
      : this.storageKey;
    const $list = isSkippedTrick ? this.$listSkipped : this.$list;
    const arr = JSON.parse(localStorage.getItem(storageKey)) || [];
    arr.push(trickEntry);
    const row = this.renderRow(trickEntry);
    $(row).insertAfter($list.find(".row:nth-child(1)"));
    this.$count.html(parseInt(this.$count.text(), 10) + 1);
    this.$tricklistBtn.removeClass("pure-button-disabled");

    localStorage.setItem(storageKey, JSON.stringify(arr));
    this.saveHistory([fullTrickName, origName, points]);
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
