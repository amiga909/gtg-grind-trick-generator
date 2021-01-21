import { renderTable } from "./helperfunctions.js";

export class GameOverScreen {
  constructor() {
    this.$gameOverNewGameButton = $("#gameOverNewGameButton");
    this.$points = $("#gameOverPointsTotal");
    this.$tricks = $("#gameOverTricks");

    this.registerListener();
  }
  registerListener() {
    this.$gameOverNewGameButton.on("click", (e) => {
      e.preventDefault();
      location.reload();
    });
  }
  render(score, tricks) {
    this.animateScore(score);
    let rows = [];
    tricks.forEach((entry) => {
      let row = rows.push([entry.points, entry.parsed]);
    });
    let html = renderTable("Tricks", ["Points", "Name"], rows);
    this.$tricks.html(html);
  }
  animateScore(end, duration = 500) {
    if (start === end) {
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
