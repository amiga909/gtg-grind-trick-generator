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
  constructor() {
    this.$gameOverNewGameButton = $("#gameOverNewGameButton");
    this.$points = $("#gameOverPointsTotal");
    this.$tricks = $("#gameOverTricks");
    this.$gameOverText = $("#gameOverText");
    this.$facebookShareBtn = $("#facebookShareBtn");
    this.$whatsappShareBtn = $("#whatsappShareBtn");
    this.$mailShareBtn = $("#mailShareBtn");

    this.registerListener();
  }
  registerListener() {
    this.$gameOverNewGameButton.on("click", (e) => {
      e.preventDefault();
      location.reload();
    });
  }
  render(score, tricks) {
    this.animateScore(parseInt(score, 10));
    this.$gameOverText.html(TEXTS[Math.floor(Math.random() * TEXTS.length)]);
    let rows = [];
    tricks.forEach((entry) => {
      let row = rows.push([entry.points, entry.parsed]);
    });
    let html = renderTable("Tricks", ["Points", "Name"], rows);
    this.$tricks.html(html);
    this.setSharingBar(score, tricks);
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

    const whatsappLink = `whatsapp://send?text=${encodeURIComponent(content)} https://aightgame.com/`;
    this.$whatsappShareBtn.attr("href", whatsappLink);

    const mailLink = `mailto:?subject=aightgame.com&body=${content}`;
    this.$mailShareBtn.attr("href", mailLink);
  }
}
