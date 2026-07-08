<script setup>
import AppModal from "./AppModal.vue";
import AppIcon from "./AppIcon.vue";
import {
  GLOSSARY,
  GRINDS,
  GRIND_SYNONYMS,
  OBSTACLE_VARIATIONS,
  VARIATIONS,
  thumbUrl,
} from "../game/trickData.js";
import { useCollection } from "../composables/useCollection.js";

defineEmits(["close"]);

const { grindLandedCount, landedGrindCount, totalGrinds } = useCollection();

const terms = Object.entries(GLOSSARY).sort(([a], [b]) => a.localeCompare(b));

// Sort FS/BS pairs next to their base name.
const grinds = [...GRINDS].sort((a, b) =>
  a.name.replace(/^(BS|FS)/, "ZZ").localeCompare(b.name.replace(/^(BS|FS)/, "ZZ"))
);

const synonyms = [...GRIND_SYNONYMS].sort((a, b) =>
  a.newName.localeCompare(b.newName)
);

const variations = VARIATIONS.filter((v) => v.name !== "None").sort((a, b) =>
  a.name.localeCompare(b.name)
);

const NOT_IMPLEMENTED = [
  ...OBSTACLE_VARIATIONS.map((v) => ({
    term: v.name,
    comment: `<a target="_blank" href="${v.url}">Book of Grinds</a>`,
  })),
  {
    term: "Illusion Spin",
    comment:
      "Looking over the opposite shoulder of the direction you are going to spin.",
  },
  {
    term: "Grabbing locked feet",
    comment:
      "Grabs are only considered as grabbing the free foot of a one legged grind like Makio. A locked feet grab means holding a locked skate, for example a grabbed Full Torque.",
  },
  { term: "Negative Topside", comment: "Negative Sweatstance, .." },
  {
    term: "Medspin",
    comment:
      "A 360 done on-ground where you go forward to backwards on foot, then back to forwards on both feet.",
  },
  {
    term: "Toe/Heel Rolls",
    comment:
      "Rolling with one foot on one wheel before or after the grind. There is Wheelbarrow and Training Wheel. Much more variations are possible.",
  },
  {
    term: "Step",
    comment:
      "Exists but I do not understand it at all. <a target='_blank' href='http://skateyeg.com/bog/10.0_Step.html'>Book of Grinds</a>",
  },
  {
    term: "Thread the Needle",
    comment:
      "Cross grabbing one foot and then jumping the other foot through the hole while maintaining the grab. Can be done with Gaps and Grinds.",
  },
  {
    term: "Crosswalk",
    comment: "Like a Sidewalk but with the leading foot in acid position.",
  },
  {
    term: "Sui-slide",
    comment:
      "Like a Fastslide but with the trailing foot instead of the leading foot.",
  },
  {
    term: "Citric PStar",
    comment:
      "Special legs required. <a target='_blank' href='https://www.facebook.com/trirudolf/posts/4401979706486905'>Tri Tri-Rudolf Facebook</a>",
  },
  {
    term: "Grabbing grinds",
    comment:
      "Tri Tri-Rudolf <a target='_blank' href='https://www.youtube.com/watch?v=MhZZ14ap6VA'>Grabbing Grinds (Trying Not To Squish Fingers)</a>",
  },
  {
    term: "Underbar grinds",
    comment:
      "<a target='_blank' href='https://www.facebook.com/groups/rollerblading/posts/4275445879205635'>Tri</a>",
  },
  {
    term: "Frame Flips",
    comment: "Tri again.. and other crazy ideas to mount a UFS frame.",
  },
];

const SECTIONS = ["Terms", "Grinds", "Synonyms", "Variations", "More"];

function scrollTo(id) {
  document.getElementById(`tricktionary-${id}`)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
</script>

<template>
  <AppModal title="Tricktionary" @close="$emit('close')">
    <p class="intro">
      All 3D rendered graphics are screenshots taken from the awesome
      <a href="http://skateyeg.com/bog/" target="_blank" rel="noopener">Book of Grinds</a>.
      Click an image to open the Book of Grinds page for the trick.
    </p>

    <nav class="toc">
      <button
        v-for="section in SECTIONS"
        :key="section"
        class="btn btn--ghost toc__link"
        @click="scrollTo(section)"
      >
        {{ section }}
      </button>
    </nav>

    <h3 id="tricktionary-Terms" class="section-title">Terms</h3>
    <table class="data-table">
      <tbody>
        <tr v-for="[term, definition] in terms" :key="term">
          <td class="term">{{ term }}</td>
          <td>{{ definition }}</td>
        </tr>
      </tbody>
    </table>

    <h3 id="tricktionary-Grinds" class="section-title">Grinds</h3>
    <p v-if="landedGrindCount > 0" class="landed-summary">
      <AppIcon name="check" :size="14" /> You landed
      {{ landedGrindCount }}/{{ totalGrinds }} grinds in solo sessions.
    </p>
    <table class="data-table">
      <tbody>
        <tr v-for="grind in grinds" :key="grind.name">
          <td class="term">
            {{ grind.name.replace(/^BS /, "Backside/BS ").replace(/^FS /, "Frontside/FS ") }}
            <span
              v-if="grindLandedCount(grind.name) > 0"
              class="landed-mark"
              :title="`Landed ${grindLandedCount(grind.name)}×`"
            >
              <AppIcon name="check" :size="13" />
              {{ grindLandedCount(grind.name) }}&times;
            </span>
          </td>
          <td>
            <a :href="grind.url || 'http://skateyeg.com/bog/'" target="_blank" rel="noopener">
              <img class="thumb" :src="grind.thumbUrl" :alt="grind.name" loading="lazy" />
            </a>
          </td>
          <!-- comments come from the local trick database -->
          <td v-html="grind.comment" />
        </tr>
      </tbody>
    </table>

    <h3 id="tricktionary-Synonyms" class="section-title">Grind synonyms</h3>
    <table class="data-table">
      <tbody>
        <tr v-for="syn in synonyms" :key="syn.newName">
          <td class="term">{{ syn.newName }}</td>
          <td>
            <a :href="syn.url || 'http://skateyeg.com/bog/'" target="_blank" rel="noopener">
              <img
                class="thumb"
                :src="thumbUrl(syn.newName === 'Top Teakettle' ? 'Teakettle' : syn.newName)"
                :alt="syn.newName"
                loading="lazy"
              />
            </a>
          </td>
          <td>{{ syn.comment }}</td>
        </tr>
      </tbody>
    </table>

    <h3 id="tricktionary-Variations" class="section-title">Grind variations</h3>
    <table class="data-table">
      <tbody>
        <tr v-for="variation in variations" :key="variation.name">
          <td class="term">{{ variation.name }}</td>
          <td>
            <a
              v-if="!variation.noThumb"
              :href="variation.url || 'http://skateyeg.com/bog/'"
              target="_blank"
              rel="noopener"
            >
              <img class="thumb" :src="thumbUrl(variation.name)" :alt="variation.name" loading="lazy" />
            </a>
          </td>
          <td>{{ variation.comment }}</td>
        </tr>
      </tbody>
    </table>

    <h3 id="tricktionary-More" class="section-title">Not implemented</h3>
    <table class="data-table">
      <tbody>
        <tr v-for="entry in NOT_IMPLEMENTED" :key="entry.term">
          <td class="term">{{ entry.term }}</td>
          <td v-html="entry.comment" />
        </tr>
      </tbody>
    </table>
  </AppModal>
</template>

<style scoped>
.intro {
  color: var(--text-dim);
  margin-bottom: 14px;
}

.toc {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.toc__link {
  font-size: 12px;
  padding: 7px 12px;
}

.section-title {
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--red-hi);
  margin: 22px 0 8px;
  scroll-margin-top: 10px;
}

.term {
  font-weight: 700;
  white-space: nowrap;
}

.landed-summary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--red-hi);
  font-size: 14px;
  margin-bottom: 8px;
}

.landed-mark {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  margin-left: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--red-hi);
}

@media (max-width: 560px) {
  .term {
    white-space: normal;
  }
}
</style>
