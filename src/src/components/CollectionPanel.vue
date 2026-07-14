<script setup>
import { ref } from "vue";
import AppModal from "./AppModal.vue";
import AppIcon from "./AppIcon.vue";
import { GRINDS } from "../game/trickData.js";
import { BADGES, useCollection } from "../composables/useCollection.js";

defineEmits(["close"]);

const {
  collection,
  uniqueTrickCount,
  landedGrindCount,
  totalGrinds,
  grindProgressPercent,
  earnedBadges,
  hasBadge,
  grindLandedCount,
  resetCollection,
} = useCollection();

// Two-tap confirm so a stray tap can't wipe lifetime progress.
const confirmingReset = ref(false);

const onReset = () => {
  if (!confirmingReset.value) {
    confirmingReset.value = true;
    return;
  }
  resetCollection();
  confirmingReset.value = false;
};

// Sort FS/BS pairs next to their base name, like the tricktionary.
const grinds = [...GRINDS].sort((a, b) =>
  a.name.replace(/^(BS|FS)/, "ZZ").localeCompare(b.name.replace(/^(BS|FS)/, "ZZ"))
);
</script>

<template>
  <AppModal title="Collection" @close="$emit('close')">
    <div class="stats">
      <div class="stat">
        <span class="stat__value">{{ uniqueTrickCount }}</span>
        <span class="stat__label">unique tricks</span>
      </div>
      <div class="stat">
        <span class="stat__value">{{ collection.landedTotal }}</span>
        <span class="stat__label">total lands</span>
      </div>
      <div class="stat">
        <span class="stat__value">{{ earnedBadges.length }}/{{ BADGES.length }}</span>
        <span class="stat__label">badges</span>
      </div>
    </div>

    <div class="grind-progress">
      <span class="grind-progress__count"
        >{{ landedGrindCount }}/{{ totalGrinds }}</span
      >
      grinds landed
      <span class="grind-progress__bar">
        <span
          class="grind-progress__fill"
          :style="{ width: `${grindProgressPercent}%` }"
        />
      </span>
    </div>

    <h3 class="section-title">Badges</h3>
    <div class="badges">
      <div
        v-for="badge in BADGES"
        :key="badge.id"
        class="badge-card"
        :class="{ 'badge-card--earned': hasBadge(badge.id) }"
      >
        <AppIcon name="trophy" :size="20" />
        <span class="badge-card__text">
          <strong>{{ badge.name }}</strong>
          <small>{{ badge.desc }}</small>
        </span>
      </div>
    </div>

    <h3 class="section-title">Grinds</h3>
    <ul class="grind-list">
      <li
        v-for="grind in grinds"
        :key="grind.name"
        :class="{ landed: grindLandedCount(grind.name) > 0 }"
      >
        <span class="grind-list__check">
          <AppIcon
            v-if="grindLandedCount(grind.name) > 0"
            name="check"
            :size="14"
          />
        </span>
        {{ grind.name }}
        <span v-if="grindLandedCount(grind.name) > 0" class="grind-list__count"
          >{{ grindLandedCount(grind.name) }}&times;</span
        >
      </li>
    </ul>

    <div class="actions">
      <button
        class="btn btn--ghost reset-btn"
        :class="{ 'reset-btn--confirm': confirmingReset }"
        @click="onReset"
        @blur="confirmingReset = false"
      >
        {{ confirmingReset ? "Tap again to erase everything" : "Reset progress" }}
      </button>
    </div>
  </AppModal>
</template>

<style scoped>
.stats {
  display: flex;
  gap: 10px;
}

.stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 14px 8px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--panel);
}

.stat__value {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 900;
  color: var(--red-hi);
  text-shadow: var(--glow-red-hi);
}

.stat__label {
  font-family: var(--font-display);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.grind-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 15px;
  color: var(--text-dim);
}

.grind-progress__count {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--text);
}

.grind-progress__bar {
  flex: 1;
  height: 7px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.grind-progress__fill {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--red-deep), var(--red));
  box-shadow: var(--glow-red);
  transition: width 0.4s ease;
}

.section-title {
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--red-hi);
  margin: 20px 0 10px;
}

.badges {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.badge-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--text-dim);
  opacity: 0.45;
}

.badge-card--earned {
  opacity: 1;
  color: var(--red-hi);
  border-color: rgba(231, 26, 0, 0.6);
  box-shadow: 0 0 10px rgba(231, 26, 0, 0.2);
}

.badge-card__text {
  display: flex;
  flex-direction: column;
}

.badge-card__text strong {
  font-family: var(--font-display);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.badge-card__text small {
  font-size: 13px;
  color: var(--text-dim);
}

.grind-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px 14px;
}

.grind-list li {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 4px 0;
  font-size: 15px;
  color: var(--text-dim);
}

.grind-list li.landed {
  color: var(--text);
}

.grind-list__check {
  width: 16px;
  display: inline-flex;
  justify-content: center;
  color: var(--red-hi);
  flex: none;
}

.grind-list__count {
  margin-left: auto;
  font-size: 13px;
  color: var(--red-hi);
}

.actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.reset-btn--confirm {
  color: var(--red-hi);
  border-color: rgba(231, 26, 0, 0.6);
  box-shadow: 0 0 10px rgba(231, 26, 0, 0.2);
}

@media (max-width: 560px) {
  .badges,
  .grind-list {
    grid-template-columns: 1fr;
  }
}
</style>
