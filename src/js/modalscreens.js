const MODAL_WINDOW_ICONS = {
  configuration: "fa-wrench",
  about: "fa-info-circle",
  reference: "fa-book",
  tricklist: "fa-list",
};

export class ModalScreen {
  constructor() {
    this.$container = $("#modal-screen-window");
    this.$contents = $(".modal-screen-text");
    this.$closeBtn = $("#modal-screen-close-btn");
    this.$title = $("#modal-screen-title");
    this.$titleIcon = $("#modal-screen-title-icon");
    this.currentWindow = "";

    this.$closeBtn.on("click", (e) => {
      e.preventDefault();
      this.hide();
    });
  }
  show(id = "", title = "") {
    this.currentWindow = id;
    this.$title.html(title);

    this.$titleIcon
      .removeClass()
      .addClass("fa fa-1x " + MODAL_WINDOW_ICONS[id]);

    $("#modal-screen--" + id).show();

    this.$container.show();
    $("html, body").animate({ scrollTop: 0 }, "fast");
  }
  hide() {
    if (this.currentWindow) {
      $("#modal-screen--" + this.currentWindow).hide();
    }

    this.$container.hide();
    $("html, body").animate({ scrollTop: 0 }, "fast");
  }
}
