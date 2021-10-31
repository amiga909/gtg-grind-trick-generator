import { renderTable } from "./helperfunctions.js";

const TEXTS = [
  `Congrats, you got `,
  `Sick, you got `,
  `You laced it, you got `,
  `Bonkers, that's  `,
  `Call your mum, you got  `,
  `Aight! You got  `,
  `Lush! You have  `,
  `Gnarly, you have  `,
  `JULIEN BAM, das ballert! `,
  //`Aragon was reborn and made  `,
  `Once again, Eugen.. that's another `,
  `Banger! `,
  `Full send! `,
  `Sick Sesh! `,
  `You got the flow,  `,
  `Stoked! `,
  `Hyped! `,
  `Dope! `,
  `Aiiiiiit! `,
  `Ayyyyy! `,
  `Lit! `,
  "Epic sesh!",
  "You killed it and got ",
  "What a nutter! ",
  "You got the flow.",
  "Juiced stuff! ",
];

export class GameOverScreen {
  constructor(callbacks = { onStartNew: null }) {
    this.callbacks = callbacks;
    this.$gameOverNewGameButton = $("#gameOverNewGameButton");
    this.$gameOverHighscoreButton = $("#gameOverHighscoreButton");
    this.$highscoresInputName = $("#highscoresInput");
    this.$highscoresSubmit = $("#highscore-submit");
    this.$highscoresMaxSpins = $("#gameOverHighScoresTooMuchSpins");
    this.$highscoresLoading = $("#highscoresLoading");

    this.$points = $("#gameOverPointsTotal");
    this.$tricks = $("#gameOverTricks");
    this.$highscores = $("#gameOverHighScores");
    this.$gameOverText = $("#gameOverText");
    this.$facebookShareBtn = $("#facebookShareBtn");
    this.$whatsappShareBtn = $("#whatsappShareBtn");
    this.$mailShareBtn = $("#mailShareBtn");

    this.csrfToken = "";
    this.isScoreSent = false;
    this.userData = {};

    if (localStorage.getItem("userName")) {
      this.$highscoresInputName.val(localStorage.getItem("userName"));
      this.$highscoresSubmit.removeClass("pure-button-disabled");
    }

    this.registerListener();
  }
  registerListener() {
    this.$gameOverNewGameButton.on("click", (e) => {
      e.preventDefault();
      //this.callbacks.onStartNew();
      location.reload();
    });
    this.$gameOverHighscoreButton.on("click", (e) => {
      e.preventDefault();
      this.openHighscore();
    });
    this.$highscoresInputName.on("change keyup", (e) => {
      e.preventDefault();
      let val = this.$highscoresInputName.val();
      val = val.replace(/[\W_]+/g, "");
      this.$highscoresInputName.val(val);
      if (this.isScoreSent === false) {
        this.$highscoresSubmit.removeClass("pure-button-disabled");
      }
      if (val === "") {
        this.$highscoresSubmit.addClass("pure-button-disabled");
      }
    });

    this.$highscoresSubmit.on("click", (e) => {
      e.preventDefault();
      this.saveHighScore().then(() => {
        this.renderHighScores();
      });
      localStorage.setItem("userName", this.$highscoresInputName.val());
    });
  }
  render(score, tricks, config) {
    this.userData = { score: score, tricks: tricks, config: config };
    this.animateScore(parseInt(score, 10));
    let txt = TEXTS[Math.floor(Math.random() * TEXTS.length)];
    txt = score === 0 ? "At least it can not get worse..." : txt;
    this.$gameOverText.html(txt);
    let rows = [];
    tricks.forEach((entry) => {
      let row = rows.push([entry.points, entry.parsed]);
    });
    let html = renderTable("", ["Points", "Name"], rows, "red");
    this.$tricks.html(html);
    this.renderHighScores().then(() => {
      this.saveResult();
    });
    this.setTooMuchSpinsText(config);
    if (Number(score) <= 0) {
      this.disableHighscoreEntry();
    }
    //this.setSharingBar(score, tricks);
  }
  setTooMuchSpinsText(config) {
    if (config && config.spins) {
      if (Number(config.spins) > 5) {
        this.disableHighscoreEntry();
        this.$highscoresMaxSpins.show();
      } else {
        this.$highscoresMaxSpins.hide();
      }
    }
  }
  disableHighscoreEntry() {
    this.$highscoresInputName.hide();
    this.$highscoresSubmit.hide();
  }

  renderHighScores() {
    let html = "";
    let rows = [];
    let rank = 0;
    this.$highscores.hide();
    this.$highscoresLoading.show();

    return $.get("/getHighScores", (data) => {
      const scores = data.scores;

      this.csrfToken = data.csrfToken;
      scores.forEach((d) => {
        let payload = {};
        let data = JSON.parse(d.data) || null;
        if (data && d.name && d.score) {
          rank = rank + 1;
          let tricks = "";
          if (data.tricks && Object.keys(data.tricks).length > 0) {
            tricks = data.tricks
              .map((dd) => {
                return dd.parsed;
              })
              .join(", ");
          }
          rows.push([rank, d.name, d.score, tricks]);
        }
      });
      html = renderTable("", ["Rank", "Name", "Score", "Tricks"], rows, "red");
      setTimeout(() => {
        this.$highscoresLoading.hide();
        this.$highscores.html(html);
        this.$highscores.show();
      }, 1000);
    });
  }

  animateScore(end, duration = 500) {
    if (end === 0) {
      this.$points.html("0");
      return;
    }
    let start = 0;
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {
      current += increment;
      this.$points.html(current);
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
    this.$points.html(end);
  }

  saveHighScore() {
    if (this.isScoreSent === false) {
      return $.ajax({
        type: "PUT",
        headers: {
          "CSRF-Token": this.csrfToken,
        },
        url: "./saveHighScore",
        data: {
          name: this.$highscoresInputName.val(),
          score: this.userData.score,
          tricks: this.userData.tricks,
          config: this.userData.config,
        },
        success: (data) => {
          this.isScoreSent = true;

          this.disableHighscoreEntry();

          console.log("success", data, data.rank);
          let rankTxt = "th";
          rankTxt = Number(data.rank) === 1 ? "st" : rankTxt;
          rankTxt = Number(data.rank) === 2 ? "nd" : rankTxt;
          rankTxt = Number(data.rank) === 3 ? "rd" : rankTxt;
          const txt = `Congrats, ${localStorage.getItem(
            "userName"
          )}, you are in ${data.rank}${rankTxt} place.`;
          $("#highscoreContTxt").html(txt);
        },
      });
    }
  }

  saveResult() {
    $.ajax({
      type: "PUT",
      headers: {
        "CSRF-Token": this.csrfToken,
      },
      url: "./saveScore",
      data: {
        score: this.userData.score,
        tricks: this.userData.tricks,
        config: this.userData.config,
      },

      success: () => {
        //console.log("saved result");
      },
    });
  }
  setSharingBar(score, tricks) {
    let rows = [];
    tricks.forEach((entry) => {
      let row = rows.push(entry.parsed);
    });
    let content = `My score: ${score}\r\nMy tricks:\r\n${rows.join("\r\n")}`;
    const fbLink = `https://www.facebook.com/sharer/sharer.php?u=aightgame.com/&quote=${encodeURIComponent(
      content
    )}`;
    this.$facebookShareBtn.attr("href", fbLink);

    const whatsappLink = `whatsapp://send?text=${encodeURIComponent(
      content
    )} https://aightgame.com/`;
    this.$whatsappShareBtn.attr("href", whatsappLink);

    let contentTelegram = `My score: ${score}. My tricks: ${rows.join(", ")}`;
    const telegramLink = `https://t.me/share/url?url=https://aightgame.com&text=${encodeURIComponent(
      contentTelegram
    )}`;

    this.$mailShareBtn.attr("href", telegramLink);
  }
}
