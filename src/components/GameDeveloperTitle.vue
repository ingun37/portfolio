<script setup lang="ts">
import _pacman_open from "@/assets/pacman-open.webp";
import _pacman_closed from "@/assets/pacman-closed.webp";
</script>

<template>
  <h1 class="game-title">
    <span class="scene">
      <span class="game">
        <span class="letter">G</span><span class="letter">a</span
        ><span class="letter">m</span><span class="letter">e</span>
      </span>
      <span class="pacman">
        <img class="mouth mouth-open" :src="_pacman_open" alt="Pacman open" />
        <img
          class="mouth mouth-closed"
          :src="_pacman_closed"
          alt="Pacman closed"
        />
      </span>
    </span>
    <span>&nbsp;Developer</span>
  </h1>
</template>

<style scoped>
.game-title {
  white-space: nowrap;
}

/* Layout to host pacman and letters */
.scene {
  position: relative;
  display: inline-block;
  padding-left: 1.1ch; /* space for pacman to start just before 'G' */
}

/* Pacman position and movement (scaled x2) */
.pacman {
  position: absolute;
  left: 0;
  top: 50%;
  width: 2ch;
  height: 2ch;
  transform: translate(-4ch, -50%);
  animation: pacmanMove 4s linear infinite;
  filter: drop-shadow(-6px 6px 0 rgba(0, 0, 0, 0.5));
}

/* Stack two frames and flicker between them for the chomp */
.pacman .mouth {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;

  /* nearest-neighbor upscaling (no smoothing) */
  image-rendering: pixelated;
  image-rendering: crisp-edges; /* fallback */
  image-rendering: -moz-crisp-edges; /* Firefox legacy */
  -ms-interpolation-mode: nearest-neighbor; /* old IE */
}

.mouth-open {
  animation: chewOpen 0.25s steps(1, end) infinite;
}

.mouth-closed {
  animation: chewClosed 0.25s steps(1, end) infinite;
}

/* Letters: instant opacity toggle, looped */
.game .letter {
  display: inline-block;
  opacity: 1;
  filter: drop-shadow(-2px 2px 0 rgba(0, 0, 0, 0.5));
}

/* Sync vanish moments roughly to pacman's position over "Game" */
.game .letter:nth-child(1) {
  animation: vanishAt20 4s steps(1, end) infinite;
}
.game .letter:nth-child(2) {
  animation: vanishAt40 4s steps(1, end) infinite;
}
.game .letter:nth-child(3) {
  animation: vanishAt60 4s steps(1, end) infinite;
}
.game .letter:nth-child(4) {
  animation: vanishAt80 4s steps(1, end) infinite;
}

/* Keyframes: letters disappear instantly, remain hidden until loop restart */
@keyframes vanishAt20 {
  0%,
  19% {
    opacity: 1;
  }
  20%,
  100% {
    opacity: 0;
  }
}
@keyframes vanishAt40 {
  0%,
  39% {
    opacity: 1;
  }
  40%,
  100% {
    opacity: 0;
  }
}
@keyframes vanishAt60 {
  0%,
  59% {
    opacity: 1;
  }
  60%,
  100% {
    opacity: 0;
  }
}
@keyframes vanishAt80 {
  0%,
  79% {
    opacity: 1;
  }
  80%,
  100% {
    opacity: 0;
  }
}

/* Pacman movement: sweeps across the four letters over the cycle */
@keyframes pacmanMove {
  0% {
    transform: translate(-1.2ch, -50%);
  }
  20% {
    transform: translate(0ch, -50%);
  }
  40% {
    transform: translate(1ch, -50%);
  }
  60% {
    transform: translate(2ch, -50%);
  }
  80% {
    transform: translate(3ch, -50%);
  }
  100% {
    transform: translate(4.2ch, -50%);
  }
}

/* Chewing frame toggle */
@keyframes chewOpen {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  50.01%,
  100% {
    opacity: 0;
  }
}
@keyframes chewClosed {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.01%,
  100% {
    opacity: 1;
  }
}

/* Optional: accessibility */
@media (prefers-reduced-motion: reduce) {
  .pacman,
  .mouth-open,
  .mouth-closed,
  .game .letter {
    animation-duration: 0s !important;
    animation-iteration-count: 1 !important;
  }
}
</style>
