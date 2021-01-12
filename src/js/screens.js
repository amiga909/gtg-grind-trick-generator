import { ModalScreen } from "./modalscreens";
import { TricktionaryScreen } from "./tricktionary-screen";
import { AboutScreen } from "./about-screen";

export class Screens {
  constructor() {
    this.$helpBtn = $("#helpButton"); // dupe
    this.$tricklistBtn = $("#tricklistBtn"); // dupe

    this.$aboutBtn = $("#aboutBtn");
    this.$trickNamingBtn = $("#trickNamingBtn");
    this.$configButton = $("#configButton");

    this.$modalCloseBtn = $("#modal-screen-close-btn");

    this.modalScreen = new ModalScreen();
    this.tricktionarySceen = new TricktionaryScreen();
    //this.aboutScreen = new AboutScreen();
    this.activeScreen = "Loading";
    this.lastNonModalScreen = "";
    this.screens = [
      { name: "Loading", $dom: $("#loading-screen") },
      { name: "Start", $dom: $("#start-screen") },
      { name: "Slotmachine", $dom: $("#slotmachine") },

      { name: "GameOver", $dom: $("#l-content-modal") }, // #modal-screen-window
      {
        name: "Configuration",
        modal: {
          title: "Configuration",
          id: "configuration",
        },
      },
      {
        name: "About",
        modal: {
          title: "About",
          id: "about",
        },
      },
      {
        name: "Tricktionary",
        modal: {
          title: "Tricktionary",
          id: "reference",
        },
      },
      {
        name: "Trick List",
        modal: {
          title: "Trick List",
          id: "tricklist",
        },
      },
    ];
    this.registerListener();
  }

  registerListener() {
    this.$modalCloseBtn.on("click", (e) => {
      e.preventDefault();
      this.show(this.lastNonModalScreen);
    });
    this.$configButton.on("click", (e) => {
      e.preventDefault();
      this.show("Configuration");
    });

    this.$aboutBtn.on("click", (e) => {
      e.preventDefault();
      this.show("About");
    });

    this.$trickNamingBtn.on("click", (e) => {
      e.preventDefault();
      this.show("Tricktionary");
    });

    this.$tricklistBtn.on("click", (e) => {
      e.preventDefault();
      this.show("Tricklist");
    });

    /*this.$tricklistBtnStart.on("click", (e) => {
        e.preventDefault();
        this.modalScreen.show("tricklist", "Trick List");
      });*/
  }
  show(selected = "") {
    if (this.activeScreen === "Loading") {
      this.getScreen().$dom.fadeOut("slow");
    }

    const activeScreen = this.getScreen();
    const newScreen = this.getScreen(selected);

    if (activeScreen.modal) {
      this.modalScreen.hide();
    } else {
      activeScreen.$dom.hide();
    }

    if (newScreen.modal) {
      this.modalScreen.show(newScreen.modal.id, newScreen.modal.name);
    } else {
      this.lastNonModalScreen = selected;
      newScreen.$dom.show();
    }

    this.activeScreen = selected;
  }

  disableNav() {
    this.$helpBtn.addClass("pure-button-disabled");
    this.$configButton.addClass("pure-button-disabled");
    // this.$randomizeButton.addClass("pure-button-disabled");
    this.$trickNamingBtn.addClass("pure-button-disabled");
  }
  enableNav() {
    this.$helpBtn.removeClass("pure-button-disabled");
    this.$configButton.removeClass("pure-button-disabled");
    // this.$randomizeButton.addClass("pure-button-disabled");
    this.$trickNamingBtn.removeClass("pure-button-disabled");
  }

  getScreen(name = this.activeScreen) {
    return this.screens.filter((s) => {
      return s.name === name;
    })[0];
  }

  scrollDown() {
    $(".l-content").animate({ scrollTop: 0 }, "fast");
  }
}
