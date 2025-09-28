<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    images: string[];
    height?: number | string; // logo height (px or CSS string)
    gap?: number; // px between logos
    duration?: number; // seconds for a full loop
    altPrefix?: string; // prefix for generated alt text
    ariaLabel?: string; // accessibility label for the banner
  }>(),
  {
    height: 40,
    gap: 40,
    duration: 30,
    altPrefix: "logo",
    ariaLabel: "Technology logos carousel",
  },
);

// Normalize height to CSS string
const cssVars = computed(() => {
  const h =
    typeof props.height === "number" ? `${props.height}px` : props.height;
  return {
    "--logo-height": h,
    "--gap": `${props.gap}px`,
    "--duration": `${props.duration}s`,
  } as Record<string, string>;
});

// Duplicate list for seamless infinite scroll
const doubledImages = computed(() => [...props.images, ...props.images]);
</script>

<template>
  <div
    class="logo-banner"
    :style="cssVars"
    :aria-label="ariaLabel"
    role="group"
  >
    <div class="track">
      <div class="list">
        <img
          v-for="(src, i) in doubledImages"
          :key="i"
          class="logo"
          :src="src"
          :alt="`${altPrefix}-${(i % images.length) + 1}`"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-banner {
  width: 100%;
  overflow: hidden;
  padding-block: 8px;
}

/* The track moves left continuously */
.track {
  display: flex;
  width: max-content;
  align-items: center;
  animation: scroll-x var(--duration) linear infinite;
  will-change: transform;
}

/* One long list that is duplicated in DOM order */
.list {
  display: inline-flex;
  align-items: center;
  gap: var(--gap);
}

/* Logo sizing */
.logo {
  height: var(--logo-height);
  width: auto;
  object-fit: contain;
  display: block;
  filter: saturate(110%) contrast(105%)
    drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8));
  opacity: 0.95;
}

/* Move by 50% to align with duplicated list width */
@keyframes scroll-x {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .track {
    animation-duration: calc(var(--duration) * 4);
  }
}
</style>
