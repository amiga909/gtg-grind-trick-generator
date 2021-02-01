import { ModalScreen } from "./modalscreens";
import { TricktionaryScreen } from "./tricktionary-screen";
import { AboutScreen } from "./about-screen";

export class Screens {
  constructor() {
    this.$scrollWrapper = $(".l-content");
    this.$helpBtn = $("#helpButton"); // dupe
    this.$tricklistBtn = $("#showTricklistButton");

    this.$aboutBtn = $("#aboutBtn");
    this.$trickNamingBtn = $("#trickNamingBtn");
    this.$configButton = $("#configButton");

    this.$modalCloseBtn = $("#modal-screen-close-btn");

    this.modalScreen = new ModalScreen();
    this.tricktionaryScreen = new TricktionaryScreen();
    this.aboutScreen = new AboutScreen();

    //this.aboutScreen = new AboutScreen();
    this.activeScreen = "Loading";
    this.lastNonModalScreen = "";
    this.screens = [
      { name: "Loading", $dom: $("#loading-screen") },
      { name: "Start", $dom: $("#start-screen") },
      { name: "Slotmachine", $dom: $("#slotmachine") },

      { name: "GameOver", $dom: $("#gameover-screen") }, // #modal-screen-window
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
      this.show("Configuration", "up");
    });

    this.$aboutBtn.on("click", (e) => {
      e.preventDefault();
      this.show("About", "up");
    });

    this.$trickNamingBtn.on("click", (e) => {
      e.preventDefault();
      this.show("Tricktionary", "up");
    });

    this.$tricklistBtn.on("click", (e) => {
      e.preventDefault();
      this.show("Trick List", "up");
    });
  }
  show(selected = "", scrollTo = "") {
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
      this.modalScreen.show(newScreen.modal.id, newScreen.modal.title);
    } else {
      this.lastNonModalScreen = selected;
      newScreen.$dom.show();
    }

    this.activeScreen = selected;

    if (scrollTo === "up") {
      this.scrollUp();
    } else if (scrollTo === "down") {
      this.scrollDown();
    }
  }

  disableNav() {
    this.$helpBtn.addClass("pure-button-disabled");
    this.$configButton.addClass("pure-button-disabled");
    this.$aboutBtn.addClass("pure-button-disabled");
    this.$trickNamingBtn.addClass("pure-button-disabled");
  }
  enableNav() {
    this.$helpBtn.removeClass("pure-button-disabled");
    this.$configButton.removeClass("pure-button-disabled");
    this.$aboutBtn.removeClass("pure-button-disabled");
    this.$trickNamingBtn.removeClass("pure-button-disabled");
  }

  getScreen(name = this.activeScreen) {
    return this.screens.filter((s) => {
      return s.name === name;
    })[0];
  }

  scrollDown(targetElement) {
    if (targetElement && this.isElementInViewport(targetElement)) {
    } else {
      this.$scrollWrapper.animate({ scrollTop: $(document).height() }, "fast");
    }
  }
  scrollUp() {
    this.$scrollWrapper.scrollTop(0);
  }

  // to do: alternatively: always scroll but have container with min padding, so it does not scroll unnecessary
  isElementInViewport(el) {
    const topOffset = 100;
    let rect = el.getBoundingClientRect();
    console.log(rect.top, rect.bottom);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom + topOffset <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */
    );
  }
}
