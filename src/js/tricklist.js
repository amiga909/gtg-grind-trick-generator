import { renderTable } from "./helperfunctions.js";

export class Tricklist {
  constructor($tricklistBtn) {
    this.$tricklistBtn = $tricklistBtn;
    this.$tricklistBtnStart = $("#start-screen-tricklistBtn-container");

    //this.$clear = $("#trickList-clearlistBtn");
    //this.$sendMail = $("#trickList-sendMailBtn");
    this.$spinNext = $("#trickList-continueBtn");
    this.$abortButton = $("#abortButton");

    this.$list = $("#tricklist-table");

    this.storageKey = "tricklist-serialized";

    this.registerListener();

    let html = renderTable("", ["Points", "Name", "Description"], []);
    this.$list.html(html);
  }

  registerListener() {
    this.$abortButton.on("click", (e) => {
      e.preventDefault();
      location.reload();
    });

    this.$spinNext.on("click", (e) => {
      e.preventDefault();
      $("#randomizeButton2").trigger("click");
    });

    /*
    
    this.$sendMail.on("click", (e) => {
      e.preventDefault();
      let mailBody = this.$list.text();
      mailBody = mailBody.replace(/\s/g, " ");
      mailBody = mailBody.replace(/ {3}/g, " ");
      mailBody = mailBody.replace(/ {7}/g, " ----- ");
      mailBody = mailBody.replace(/ {2}/g, " ");

      const title = `Tricklist made with ${document.location.href}`;
      window.open(`mailto:?subject=${title}&body=${mailBody}`);
    });*/
  }

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

    // wait for scroll up
    setTimeout(() => {
      $(row)
        .hide()
        .insertAfter(this.$list.find(".row:nth-child(1)"))
        .fadeIn("slow");
    }, 250);
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
