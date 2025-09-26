<script setup lang="ts">
import { computed } from "vue";

type LogoItem = { src: string; alt?: string };

const props = withDefaults(
  defineProps<{
    title: string;
    logos: LogoItem[];
    rows?: number; // how many horizontal lanes of logos
    speed?: number; // seconds to complete one loop
    opacity?: number; // background visibility
  }>(),
  {
    rows: 3,
    speed: 40,
    opacity: 0.2,
  },
);

// Build N lanes. Each lane has two identical tracks for a seamless loop.
const lanes = computed(() => Array.from({ length: props.rows }, (_, i) => i));

// Stagger speeds slightly per lane to avoid perfect sync.
const laneDuration = (i: number) =>
  Math.max(8, props.speed + (i % 2 === 0 ? i * 4 : -i * 3));
</script>

<template>
  <section class="flow-hero">
    <!-- flowing background -->
    <div class="bg" :style="{ opacity: String(opacity) }" aria-hidden="true">
      <div
        v-for="laneIndex in lanes"
        :key="`lane-${laneIndex}`"
        class="lane"
        :style="{ '--duration': `${laneDuration(laneIndex)}s` }"
      >
        <!-- Two tracks with same content for seamless loop -->
        <div class="track">
          <div
            class="logo"
            v-for="(logo, i) in logos"
            :key="`a-${laneIndex}-${i}`"
          >
            <img :src="logo.src" :alt="logo.alt ?? ''" loading="lazy" />
          </div>
        </div>
        <div class="track">
          <div
            class="logo"
            v-for="(logo, i) in logos"
            :key="`b-${laneIndex}-${i}`"
          >
            <img :src="logo.src" :alt="logo.alt ?? ''" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

    <!-- centered content -->
    <div class="content">
      <h1 class="title">{{ title }}</h1>
    </div>
  </section>
</template>

<style scoped>
.flow-hero {
  position: relative;
  width: 100%;
  min-height: 60svh;
  display: grid;
  place-items: center;
  overflow: hidden;
  isolation: isolate; /* keep background effects contained */
}

/* background container */
.bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: grid;
  gap: 18px;
  padding: 24px 0;
  z-index: -1;
  /* subtle darkening gradient for text readability */
  background: radial-gradient(
    1000px 400px at 50% 20%,
    rgba(0, 0, 0, 0.25),
    transparent 70%
  );
}

/* One horizontal lane of logos */
.lane {
  --duration: 40s;
  position: relative;
  display: flex;
  width: 100%;
  height: 96px;
  align-items: center;
  overflow: hidden;
}

/* Each track flows right -> left and loops seamlessly */
.track {
  display: inline-flex;
  gap: 16px;
  padding-inline: 16px;
  animation: scroll var(--duration) linear infinite;
  will-change: transform;
}

/* Position the second track immediately after the first for seamless loop */
.track + .track {
  margin-inline-start: 16px; /* match the gap */
}

/* Slight vertical offsets per lane for visual variety */
.lane:nth-child(odd) {
  transform: translateY(0);
}
.lane:nth-child(2n) {
  transform: translateY(0);
}

/* Logo item box */
.logo {
  flex: 0 0 auto;
  width: 140px;
  height: 80px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: color-mix(
    in srgb,
    var(--v-theme-surface, #0b0b0b) 12%,
    transparent
  );
  box-shadow: 0 0 0 1px
    color-mix(in srgb, var(--v-theme-outline-variant, #ffffff) 20%, transparent)
    inset;
  backdrop-filter: saturate(110%) contrast(105%);
}

.logo img {
  max-width: 100%;
  max-height: 70%;
  object-fit: contain;
  filter: saturate(110%) contrast(105%);
  display: block;
}

/* Animation: move content fully across and repeat */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    /* -100% moves this track completely out, revealing the following twin track */
    transform: translateX(-100%);
  }
}

/* Reduce animation for users preferring less motion */
@media (prefers-reduced-motion: reduce) {
  .track {
    animation-duration: calc(var(--duration) * 4);
  }
}

/* centered content */
.content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 24px;
}

.title {
  margin: 0;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 800;
  color: white;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.5);
}
</style>
