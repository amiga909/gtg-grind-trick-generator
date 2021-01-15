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
    this.$points.html(score);
    let rows = [];
    tricks.forEach((entry) => {
      let row = rows.push([entry.points, entry.parsed ]);
    });
    let html = renderTable("Tricks", ["Points", "Name" ], rows);
    this.$tricks.html(html);
  }
}
