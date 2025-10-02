<script setup lang="ts"></script>

<template>
  <h1 class="game-title">
    <span class="game">
      <span class="letter">G</span><span class="letter">a</span
      ><span class="letter">m</span><span class="letter">e</span>
    </span>
    <span>&nbsp;Developer</span>
  </h1>
</template>

<style scoped>
.game-title {
  white-space: nowrap;
}

/* Base: instant opacity toggle via steps(1, end), infinite loop */
.game .letter {
  display: inline-block;
  opacity: 1;
}

/* Each letter gets its own keyframe so the "vanish moment" happens at different times.
   They remain invisible until the animation restarts, at which point all reappear at once. */
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

/* Keyframes: keep visible until the instant vanish point, then stay invisible */
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
</style>
