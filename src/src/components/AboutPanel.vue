<script setup>
import AppModal from "./AppModal.vue";
import AppIcon from "./AppIcon.vue";

defineEmits(["close"]);

const REVIEWS = [
  {
    name: "Thirty+Rollin — review",
    url: "https://www.youtube.com/watch?v=4F8yYgoO_fw",
  },
  {
    name: "Brandon Drummond — review",
    url: "https://www.youtube.com/watch?v=ky3jVP5iPpY",
  },
  {
    name: "Tri Tri-Rudolf — stream 1",
    url: "https://www.youtube.com/embed/234aMMz5jKc",
  },
  {
    name: "Tri Tri-Rudolf — stream 2",
    url: "https://www.youtube.com/embed/LPle1C4Klzs",
  },
  {
    name: "Martin Bommeli — livestream testing",
    url: "https://www.youtube.com/user/MartinBommeli",
  },
];

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
      result back into a real blading trick name. More than 30 grinds, more
      than 50'000 unique tricks.
    </p>

    <h3 class="section-title">How to play</h3>
    <ol class="steps">
      <li>Choose a difficulty and press <strong>Start game</strong>.</li>
      <li>The slot machine spins a trick. You have 3 tries to land it.</li>
      <li>
        Landed it? Press <strong>Aight!</strong> to collect the points. Can't
        do it? Press <strong>Skip</strong>.
      </li>
      <li>The game ends after the last spin. Highest score wins.</li>
    </ol>
    <p>
      Press <strong>Explain</strong> for a description of the current trick.
      Design your own game in the settings: included tricks, spins per game and
      reel speed.
    </p>

    <h3 class="section-title">Controls</h3>
    <table class="data-table">
      <tbody>
        <tr>
          <td><AppIcon name="question" /></td>
          <td>Show a description of the current trick.</td>
        </tr>
        <tr>
          <td><AppIcon name="forward" /></td>
          <td>Skip this trick and spin the next one. If this is the last spin, the game ends.</td>
        </tr>
        <tr>
          <td><AppIcon name="check" /></td>
          <td>Trick done — collect the points and add it to your trick list.</td>
        </tr>
        <tr>
          <td><AppIcon name="flag" /></td>
          <td>Give up and end the game.</td>
        </tr>
        <tr>
          <td><AppIcon name="list" /></td>
          <td>Show the tricks you have done so far.</td>
        </tr>
        <tr>
          <td><AppIcon name="settings" /></td>
          <td>Include and exclude tricks and set game options. Saved on this device.</td>
        </tr>
        <tr>
          <td><AppIcon name="book" /></td>
          <td>Look up trick names in the tricktionary.</td>
        </tr>
      </tbody>
    </table>

    <h3 class="section-title">Reviews</h3>
    <p>Many thanks to all of you who supported this app with your feedback.</p>
    <ul class="links">
      <li v-for="review in REVIEWS" :key="review.url">
        <a :href="review.url" target="_blank" rel="noopener">{{ review.name }}</a>
      </li>
    </ul>

    <h3 class="section-title">Credits &amp; references</h3>
    <p>
      Special thanks to the awesome blading reference
      <a href="http://skateyeg.com/bog/" target="_blank" rel="noopener">Book of Grinds</a>
      for letting me use the thumbnails for the trick explanations. The app
      only covers single grind tricks — no jumps or switch-ups. It is amazing
      to learn how variable grind tricks are.
      <a href="https://www.youtube.com/watch?v=Chpys46GZAY" target="_blank" rel="noopener">
        I love rollerblading</a>.
    </p>
    <ul class="links">
      <li v-for="reference in REFERENCES" :key="reference.url">
        <a :href="reference.url" target="_blank" rel="noopener">{{ reference.name }}</a>
      </li>
    </ul>

    <p class="footer-note">
      Copyright &copy; 2021 Roman Hatz &middot;
      <a href="https://github.com/amiga909/gtg-grind-trick-generator" target="_blank" rel="noopener">
        Source code</a>
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
