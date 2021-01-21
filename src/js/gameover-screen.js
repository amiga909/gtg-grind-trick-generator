import { renderTable } from "./helperfunctions.js";

const TEXTS = [
  `Congrats, you got `,
  `Noice, you got `,
  `You laced it, you got `,
  `Bonkers, that's  `,
  `Call your mum, you got  `,
  `Aight! You got  `,
  `Lush! You have  `,
  `Gnarly, you have  `,
  `JULIEN BAM, das ballert!   `,
  `Aragon was reborn and made   `,
  `Once again, Eugen.. that's another   `, 
];

export class GameOverScreen {
  constructor() {
    this.$gameOverNewGameButton = $("#gameOverNewGameButton");
    this.$points = $("#gameOverPointsTotal");
    this.$tricks = $("#gameOverTricks");
    this.$gameOverText = $("#gameOverText");

    this.registerListener();
  }
  registerListener() {
    this.$gameOverNewGameButton.on("click", (e) => {
      e.preventDefault();
      location.reload();
    });
  }
  render(score, tricks) {
    this.animateScore(parseInt(score,10));
    this.$gameOverText.html(TEXTS[Math.floor(Math.random() * TEXTS.length)]);
    let rows = [];
    tricks.forEach((entry) => {
      let row = rows.push([entry.points, entry.parsed]);
    });
    let html = renderTable("Tricks", ["Points", "Name"], rows);
    this.$tricks.html(html);
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
}
