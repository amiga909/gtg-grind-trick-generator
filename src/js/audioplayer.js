import { Howl } from "howler";

const SOUND_PATH = "https://www.aightgame.com/assets/sounds/";
const SOUNDS = [
  {
    start:
      "joker-full-stretched.mp3" /* loop: "joker-loop.mp3", end: "joker-end.mp3" */,
  },
  { start: "spark-start.mp3", loop: "spark-loop.mp3", end: "spark-end.mp3" },
  { start: "juhui-start.mp3", loop: "juhui-loop.mp3", end: "juhui-end.mp3" },
];

export class Audioplayer {
  constructor($soundButton) {
    this.$soundButton = $soundButton;
    this.howler = {};
  }

  init(soundIndex = 0) {
    this.howler = {};
    const index = soundIndex;

    this.howler.start = new Howl({
      preload: true,
      src: [SOUND_PATH + SOUNDS[index].start],
      onend: () => {
        if (SOUNDS[index].loop) {
          this.playAudio("loop");
        }
      },
    });
    if (SOUNDS[index].loop) {
      this.howler.loop = new Howl({
        preload: true,
        loop: true,
        src: [SOUND_PATH + SOUNDS[index].loop],
        onend: () => {
          if (this.isEndScreen) {
            this.howler.loop.stop();
            this.playAudio("end");
          }
        },
      });
    }
    if (SOUNDS[index].end) {
      this.howler.end = new Howl({
        preload: true,
        src: [SOUND_PATH + SOUNDS[index].end],
      });
    }
  }

  mute(muted = true) {
    if (this.howler.end) {
      this.howler.end.mute(muted);
    }
    if (this.howler.loop) {
      this.howler.loop.mute(muted);
    }
    if (this.howler.start) {
      this.howler.start.mute(muted);
    }
  }

  unmute() {
    this.mute(false);
  }

  stop() {
    if (this.howler.end) {
      this.howler.end.stop();
    }
    if (this.howler.loop) {
      this.howler.loop.stop();
    }
    if (this.howler.start) {
      this.howler.start.stop();
    }
  }

  play(part) {
    if (this.howler[part]) {
      this.howlerAudioSoundId = this.howler[part].play();
    }
  }
}
