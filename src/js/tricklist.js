import { renderTable } from "./helperfunctions.js";

export class Tricklist {
  constructor($tricklistBtn) {
    this.$tricklistBtn = $tricklistBtn;
    this.$tricklistBtnStart = $("#start-screen-tricklistBtn-container");

    this.$clear = $("#trickList-clearlistBtn");
    this.$sendMail = $("#trickList-sendMailBtn");
    this.$continue = $("#trickList-continueBtn");

    this.$list = $("#modal-screen--tricklist");
    this.results = [];// {points: 0, parsed: "", orig: ""}
    this.storageKey = "tricklist-serialized"; // points; t; orig.t; getPointsForTrick(this.winners)

    this.registerListener();
    this.getStorage();
    this.render();
    this.toggleControlDisabled();
  }

  registerListener() {
    this.$clear.on("click", (e) => {
      e.preventDefault();
      this.clearList();
    });
    this.$continue.on("click", (e) => {
      e.preventDefault();
      $("#randomizeButton").trigger("click");
    });

    $("body").on("click", ".clearTrick", (e) => {
      e.preventDefault();
      const index = $(e.currentTarget).data("index");
      this.clearTrick(index);
    });

    this.$sendMail.on("click", (e) => {
      e.preventDefault();
      let mailBody = this.$list.text();
      mailBody = mailBody.replace(/\s/g, " ");
      mailBody = mailBody.replace(/ {3}/g, " ");
      mailBody = mailBody.replace(/ {7}/g, " ----- ");
      mailBody = mailBody.replace(/ {2}/g, " ");

      const title = `Tricklist made with ${document.location.href}`;
      window.open(`mailto:?subject=${title}&body=${mailBody}`);
    });
  }

  getStorage() {
    if (localStorage.getItem(this.storageKey)) {
      let json = localStorage.getItem(this.storageKey);
      this.results = JSON.parse(json);
    }
  }

  toggleControlDisabled() {
    if (this.results.length > 0) {
      this.$tricklistBtn.removeClass("pure-button-disabled");
      $("#start-screen-tricklistBtn-count").html(this.results.length);
      this.$tricklistBtnStart.show();
    } else {
      this.$tricklistBtn.addClass("pure-button-disabled");
    }
  }

  clearTrick(index = 0) {
    return false; 
    const tmp = this.results;
    tmp.splice(index, 1);
    this.results = tmp;

    localStorage.removeItem(this.storageKey);
    localStorage.setItem(this.storageKey, this.results);

    this.render();
  }

  clearList() {
    this.results = [];
    this.$list.html("");
    //  this.hide();
    localStorage.removeItem(this.storageKey);
    this.$tricklistBtn.addClass("pure-button-disabled");
  }

  addTrick(fullTrickName, origName, points) {
    let trickEntry = { parsed: fullTrickName, orig: origName,points: points,}; 
    this.results.push(trickEntry);
    localStorage.setItem(this.storageKey, JSON.stringify( this.results));
     //let row = this.renderRow(trickEntry, this.results.length - 1);
    //$(row).hide().prependTo(this.$list).fadeIn();
    this.toggleControlDisabled();
  }

  render() {
    let rows = [];
   
    let i = 0;
    this.results.reverse().forEach((entry, index) => {
      i = i + 1;
      let row = 
      rows.push([entry.points, entry.parsed, entry.orig, ]);
    });
    let html = renderTable(
      "Trick List",
      ["Points", "Name", "Description"],
      rows
    );
    this.$list.html("");
    this.$list.html(html);
  }
/*
  renderRow(name, index) {
    return `<tr>
    <td>${index + 1}</td> 
    <td>${name}</td> 
    <td> <button data-index="${index}" class="clearTrick pure-button pure-button-secondary">
    <i class="fa fa-trash fa-2x"></i> 
     </button></td>
</tr>`;
  }*/
}
