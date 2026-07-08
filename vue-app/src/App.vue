<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import AppIcon from "./components/AppIcon.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import StartScreen from "./components/StartScreen.vue";
import GameScreen from "./components/GameScreen.vue";
import GameOverScreen from "./components/GameOverScreen.vue";
import SettingsPanel from "./components/SettingsPanel.vue";
import TricktionaryPanel from "./components/TricktionaryPanel.vue";
import AboutPanel from "./components/AboutPanel.vue";
import CollectionPanel from "./components/CollectionPanel.vue";
import { useGame } from "./composables/useGame.js";
import { useSpeech } from "./composables/useSpeech.js";

const { state, goToStart } = useGame();

// All speech samples are decoded before the app shows.
const { speechState, preloadSpeech, toggleMute, stopSpeech } = useSpeech();
preloadSpeech();

// Any button press cuts running speech short. Capture phase, so the
// stop happens before the button's own handler (which may speak again,
// like the replay button).
function stopSpeechOnButton(event) {
  if (event.target.closest("button")) {
    stopSpeech();
  }
}
onMounted(() => document.addEventListener("click", stopSpeechOnButton, true));
onUnmounted(() =>
  document.removeEventListener("click", stopSpeechOnButton, true)
);

const openPanel = ref(null); // 'settings' | 'tricktionary' | 'collection' | 'about' | null
</script>

<template>
  <div v-if="!speechState.ready" class="app-loading">
    <span class="app-loading__spinner" aria-hidden="true" />
    <p class="app-loading__text">
      Loading sounds&hellip; {{ speechState.loaded }}/{{ speechState.total }}
    </p>
  </div>

  <template v-else>
  <button
    class="mute-btn"
    :class="{ 'mute-btn--muted': speechState.muted }"
    :aria-label="speechState.muted ? 'Unmute audio' : 'Mute audio'"
    :title="speechState.muted ? 'Unmute audio' : 'Mute audio'"
    @click="toggleMute()"
  >
    <AppIcon :name="speechState.muted ? 'sound-off' : 'sound'" :size="19" />
  </button>

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
      @click="openPanel = 'collection'"
    >
      <AppIcon name="trophy" /><span>Collection</span>
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
  <CollectionPanel v-if="openPanel === 'collection'" @close="openPanel = null" />
  <AboutPanel v-if="openPanel === 'about'" @close="openPanel = null" />
  </template>
</template>

<style scoped>
.mute-btn {
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--panel);
  backdrop-filter: blur(8px);
  color: var(--text-dim);
  transition: color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.mute-btn:hover {
  color: var(--red-hi);
  border-color: var(--red-hi);
  box-shadow: var(--glow-red-hi);
}

.mute-btn--muted {
  color: var(--red);
  border-color: rgba(231, 26, 0, 0.6);
}

.app-loading {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-height: 100dvh;
}

.app-loading__spinner {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 4px solid rgba(231, 26, 0, 0.2);
  border-top-color: var(--red);
  box-shadow: 0 0 18px rgba(231, 26, 0, 0.25);
  animation: app-loading-spin 0.9s linear infinite;
}

.app-loading__text {
  font-family: var(--font-display);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
}

@keyframes app-loading-spin {
  to {
    transform: rotate(360deg);
  }
}

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
  min-width: 84px;
  padding: 9px 12px;
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
