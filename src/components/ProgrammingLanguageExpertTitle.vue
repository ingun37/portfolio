<script setup lang="ts"></script>

<template>
  <h1 class="overwrite-heading" style="text-align: center">
    <span>Programming </span
    ><span class="overwrite-target">Language Expert</span>
  </h1>
</template>

<style scoped>
.overwrite-heading {
  display: inline-block;
}

/* "Overwrite" mode block cursor over the first letter of the second span ("L") */
.overwrite-target {
  position: relative;
  display: inline-block;
}

.overwrite-target::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.1em;
  bottom: 0.1em;
  width: 0.62em; /* approximate character block width */
  background: currentColor;
  mix-blend-mode: difference; /* invert look like classic block caret */
  animation: overwrite-blink 1s steps(1, end) infinite;
}

@keyframes overwrite-blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .overwrite-target::before {
    animation: none;
    opacity: 1;
  }
}
</style>
