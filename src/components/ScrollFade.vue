<template>
  <div
    v-intersect="onIntersect"
    :class="['sf', `sf-${direction}`, { 'sf-in': shown }]"
    :style="{ transitionDelay: delay }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    direction?: "up" | "down" | "left" | "right" | "zoom";
    once?: boolean;
    delay?: string;
  }>(),
  {
    direction: "up",
    once: true,
    delay: "0ms",
  },
);

const shown = ref(false);

function onIntersect(isIntersecting: boolean) {
  if (isIntersecting) {
    shown.value = true;
  } else if (!props.once) {
    shown.value = false;
  }
}
</script>

<style scoped>
.sf {
  opacity: 0;
  transform: translate3d(0, 16px, 0) scale(0.98);
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}
.sf.sf-left {
  transform: translate3d(-24px, 0, 0);
}
.sf.sf-right {
  transform: translate3d(24px, 0, 0);
}
.sf.sf-down {
  transform: translate3d(0, -16px, 0);
}
.sf.sf-zoom {
  transform: scale(0.96);
}
.sf.sf-in {
  opacity: 1;
  transform: none;
}
</style>
