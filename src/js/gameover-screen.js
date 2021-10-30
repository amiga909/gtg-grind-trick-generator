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
    this.$highscoresInputName.on("change", (e) => {
      e.preventDefault();
      let val = this.$highscoresInputName.val();
      val.replace(/[\W_]+/g, " ");
      this.$highscoresInputName.val(val);
      if (this.isScoreSent === false) {
        this.$highscoresSubmit.removeClass("pure-button-disabled");
      }
    });

    this.$highscoresSubmit.on("click", (e) => {
      e.preventDefault();
      this.saveHighScore();
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
    //this.setSharingBar(score, tricks);
  }

  renderHighScores() {
    let html = "";
    let rows = [];
    let rank = 0;

    return $.get("/getHighScores", (data) => {
      const scores = data.scores;

      this.csrfToken = data.csrfToken;
      scores.forEach((d) => {
        let data = JSON.parse(d.data) || null;
        if (data && d.name && d.score && Object.keys(data).length > 0) {
          /*
          let tricks = data.tricks
            .map((dd) => {
              return dd.parsed;
            })
            .join(",");
            */
          rank = rank + 1;
          rows.push([rank, d.name, d.score]);
        }
      });
      html = renderTable("", ["Rank", "Name", "Score"], rows, "red");
      this.$highscores.html(html);
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
      $.ajax({
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
        success: () => {
          this.isScoreSent = true;
          this.$highscoresSubmit.addClass("pure-button-disabled");
          //console.log("saved result");
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
