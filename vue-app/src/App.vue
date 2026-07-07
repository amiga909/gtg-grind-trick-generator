<script setup>
import { ref } from "vue";
import AppIcon from "./components/AppIcon.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import StartScreen from "./components/StartScreen.vue";
import GameScreen from "./components/GameScreen.vue";
import GameOverScreen from "./components/GameOverScreen.vue";
import SettingsPanel from "./components/SettingsPanel.vue";
import TricktionaryPanel from "./components/TricktionaryPanel.vue";
import AboutPanel from "./components/AboutPanel.vue";
import { useGame } from "./composables/useGame.js";

const { state, goToStart } = useGame();

const openPanel = ref(null); // 'settings' | 'tricktionary' | 'about' | null
</script>

<template>
  <header v-if="state.screen !== 'start'" class="app-header">
    <button class="app-header__logo" aria-label="Home" @click="goToStart()">
      <img src="/img/gtg-logo-banner-text.svg" alt="AIGHT" />
    </button>
    <ScoreBoard />
  </header>

  <main class="app-main">
    <StartScreen
      v-if="state.screen === 'start'"
      @open-settings="openPanel = 'settings'"
    />
    <GameScreen v-else-if="state.screen === 'game'" />
    <GameOverScreen v-else />
  </main>

  <nav class="app-nav">
    <button
      class="app-nav__btn"
      :disabled="state.phase === 'spinning'"
      @click="openPanel = 'settings'"
    >
      <AppIcon name="settings" /><span>Settings</span>
    </button>
    <button
      class="app-nav__btn"
      :disabled="state.phase === 'spinning'"
      @click="openPanel = 'tricktionary'"
    >
      <AppIcon name="book" /><span>Tricktionary</span>
    </button>
    <button
      class="app-nav__btn"
      :disabled="state.phase === 'spinning'"
      @click="openPanel = 'about'"
    >
      <AppIcon name="info" /><span>How to play</span>
    </button>
  </nav>

  <SettingsPanel v-if="openPanel === 'settings'" @close="openPanel = null" />
  <TricktionaryPanel v-if="openPanel === 'tricktionary'" @close="openPanel = null" />
  <AboutPanel v-if="openPanel === 'about'" @close="openPanel = null" />
</template>

<style scoped>
.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px 16px 6px;
}

.app-header__logo img {
  height: 34px;
  filter: drop-shadow(0 0 14px rgba(231, 26, 0, 0.45));
}

.app-main {
  flex: 1;
}

.app-nav {
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.92) 35%);
}

.app-nav__btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  min-width: 108px;
  padding: 9px 14px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--panel);
  backdrop-filter: blur(8px);
  color: var(--text-dim);
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.app-nav__btn:hover {
  color: var(--red-hi);
  border-color: var(--red-hi);
  box-shadow: var(--glow-red-hi);
}

.app-nav__btn:disabled {
  opacity: 0.4;
  pointer-events: none;
}
</style>
