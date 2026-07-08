<script setup>
import AppModal from "./AppModal.vue";
import AppIcon from "./AppIcon.vue";

defineEmits(["close"]);

const REFERENCES = [
  { name: "Book of Grinds", url: "http://skateyeg.com/" },
  {
    name: "1997 Aggressive inline skating dictionary",
    url: "http://toxboe.net/all/1997-aggressive-inline-skating-dictionary",
  },
  {
    name: "Rollerblading Explained (In Progress)",
    url: "https://broskowfanboy.wordpress.com/rollerblading-explained-in-progress/",
  },
  { name: "BE-MAG message board", url: "https://archive.be-mag.com" },
  {
    name: "The Grab and Grind Chart Aggressive Skating",
    url: "https://lurch17.tripod.com/skchart.htm",
  },
  { name: "Grindlocker", url: "http://grindlocker.com/" },
  {
    name: "Tricks Trainer — Aggressive Inline (Android)",
    url: "https://play.google.com/store/apps/details?id=com.dufflagaramot.trickstrainer",
  },
  {
    name: "Art of Rolling Skate Dice",
    url: "https://www.be-mag.com/news/products/art-of-rolling-skate-dice-free-android-app/",
  },
];
</script>

<template>
  <AppModal title="How to play" @close="$emit('close')">
    <h3 class="section-title">The app</h3>
    <p>
      AIGHT is a grind trick randomizer for blading. Every grind trick is split
      into five phases — approach, spin to grind, grind, grind variation and
      spin off grind. The slot machine randomizes the phases and translates the
      result back into a real blading trick name. More than 30 grinds, more than
      50'000 unique tricks. Play alone or against your crew.
    </p>

    <h3 class="section-title">Solo mode</h3>
    <ol class="steps">
      <li>Pick a difficulty and press <strong>Start session</strong>.</li>
      <li>The slot machine spins a trick — go land it.</li>
      <li>
        Landed it? Press <strong>Aight!</strong> to add it to your lifetime
        trick collection. Can't do it? Press <strong>Skip</strong>.
      </li>
      <li>
        There is no game over and no spin limit — end the session whenever
        you're done.
      </li>
    </ol>
    <p>
      Solo mode trains you: tricks you have never landed and tricks you keep
      skipping come up more often. Your collection, milestone badges (first
      topside, first 540, every soul-plate grind, ...) and per-grind progress
      are saved on this device — check them under
      <strong>Collection</strong>.
    </p>

    <h3 class="section-title">Group mode — A.I.G.H.T</h3>
    <ol class="steps">
      <li>
        Enter the players (2&ndash;6), choose the number of rounds and the
        difficulty, then press <strong>Start game</strong>.
      </li>
      <li>
        Each round one trick is spun and
        <strong>every player attempts it</strong>, one after another. The
        starting player rotates every round.
      </li>
      <li>
        The starting player may swap the trick for a new spin up to
        <strong>3 times</strong> — but once they attempt it, the trick is locked
        for everyone.
      </li>
      <li>
        Bail the trick and you collect the next letter of
        <strong>A&middot;I&middot;G&middot;H&middot;T</strong>. Five letters and
        you're out — like S.K.A.T.E.
      </li>
      <li>
        The game ends after the last round or when only one player is left.
        Fewest letters wins.
      </li>
    </ol>

    <h3 class="section-title">Controls</h3>
    <table class="data-table">
      <tbody>
        <tr>
          <td><AppIcon name="question" /></td>
          <td>Show a description of the current trick.</td>
        </tr>
        <tr>
          <td><AppIcon name="sound" /></td>
          <td>
            Read the trick name aloud. The button in the top right corner mutes
            all audio.
          </td>
        </tr>
        <tr>
          <td><AppIcon name="forward" /></td>
          <td>
            Solo: skip this trick and spin the next one. Group: the starting
            player swaps the trick (3 per turn).
          </td>
        </tr>
        <tr>
          <td><AppIcon name="check" /></td>
          <td>Trick landed — collect it (solo) or pass it on (group).</td>
        </tr>
        <tr>
          <td><AppIcon name="flag" /></td>
          <td>
            Solo: end the session. Group: bailed — take a letter, or end the
            whole game.
          </td>
        </tr>
        <tr>
          <td><AppIcon name="list" /></td>
          <td>Show the tricks you have done this session.</td>
        </tr>
        <tr>
          <td><AppIcon name="trophy" /></td>
          <td>Your lifetime trick collection, badges and grind progress.</td>
        </tr>
        <tr>
          <td><AppIcon name="settings" /></td>
          <td>
            Include and exclude tricks and set game options. Saved on this
            device.
          </td>
        </tr>
        <tr>
          <td><AppIcon name="book" /></td>
          <td>Look up trick names in the tricktionary.</td>
        </tr>
      </tbody>
    </table>

    <h3 class="section-title">Credits &amp; references</h3>
    <p>
      Special thanks to the awesome blading reference
      <a href="http://skateyeg.com/bog/" target="_blank" rel="noopener"
        >Book of Grinds</a
      >
      for letting me use the thumbnails for the trick explanations. The app only
      covers single grind tricks — no jumps or switch-ups. It is amazing to
      learn how variable grind tricks are.
      <a
        href="https://www.youtube.com/watch?v=Chpys46GZAY"
        target="_blank"
        rel="noopener"
      >
        I love rollerblading</a
      >.
    </p>

    <p class="footer-note">
      Copyright &copy; 2026 Roman Hatz &middot;
      <a
        href="https://github.com/amiga909/gtg-grind-trick-generator"
        target="_blank"
        rel="noopener"
      >
        Source code</a
      >
      &middot;
      <a href="mailto:aight.bladegame@gmail.com">aight.bladegame@gmail.com</a>
    </p>
  </AppModal>
</template>

<style scoped>
.section-title {
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--red-hi);
  margin: 20px 0 8px;
}

.section-title:first-child {
  margin-top: 0;
}

.steps {
  padding-left: 22px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 8px 0;
}

.links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 8px;
}

.footer-note {
  margin-top: 24px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  color: var(--text-dim);
  font-size: 14px;
}
</style>
