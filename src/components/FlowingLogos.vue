<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from "vue";

type LogoItem = { src: string; alt?: string };

const props = withDefaults(
  defineProps<{
    title: string;
    logos: LogoItem[];
    speed?: number; // seconds to complete one loop
    opacity?: number; // background visibility
    bandExtraPx?: number; // extra width added to the title width for the flowing band
  }>(),
  {
    speed: 40,
    opacity: 0.2,
    bandExtraPx: 240,
  },
);

// measure title width -> drive band width to be "a bit bigger than title"
const titleEl = ref<HTMLElement | null>(null);
const titleWidth = ref(0);
let ro: ResizeObserver | null = null;

onMounted(() => {
  if (!titleEl.value) return;
  const measure = () => {
    if (!titleEl.value) return;
    const rect = titleEl.value.getBoundingClientRect();
    titleWidth.value = Math.round(rect.width);
  };
  measure();
  ro = new ResizeObserver(measure);
  ro.observe(titleEl.value);
});

onBeforeUnmount(() => {
  ro?.disconnect();
  ro = null;
});
</script>

<template>
  <section class="flow-hero">
    <!-- flowing background -->
    <div
      class="bg"
      :style="{
        opacity: String(props.opacity),
        '--content-w': `${titleWidth}px`,
        '--extra': `${props.bandExtraPx}px`,
        '--duration': `${Math.max(8, props.speed)}s`,
      }"
      aria-hidden="true"
    >
      <!-- Single full-height lane -->
      <div class="lane">
        <!-- Two tracks with same content for seamless loop -->
        <div class="track">
          <div class="logo" v-for="(logo, i) in logos" :key="`a-${i}`">
            <img :src="logo.src" :alt="logo.alt ?? ''" loading="lazy" />
          </div>
        </div>
        <div class="track">
          <div class="logo" v-for="(logo, i) in logos" :key="`b-${i}`">
            <img :src="logo.src" :alt="logo.alt ?? ''" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

    <!-- centered content -->
    <div class="content">
      <h1 class="title" ref="titleEl">{{ title }}</h1>
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
  isolation: isolate;
}

/* background container
   - full component width available (100%)
   - visually clamped to a bit wider than the title:
     width = min(100%, titleWidth + extra) */
.bg {
  position: absolute;
  inset: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(100%, calc(var(--content-w, 640px) + var(--extra, 240px)));
  pointer-events: none;
  display: grid;
  padding: 0; /* let the lane occupy full height */
  z-index: -1;
  background: radial-gradient(
    900px 360px at 50% 20%,
    rgba(0, 0, 0, 0.25),
    transparent 70%
  );
}

/* Single lane fills all available height */
.lane {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  overflow: hidden;
}

/* Each track flows right -> left and loops seamlessly */
.track {
  display: inline-flex;
  gap: 16px;
  padding-inline: 16px;
  height: 100%;
  animation: scroll var(--duration, 40s) linear infinite;
  will-change: transform;
}

/* Position the second track immediately after the first for seamless loop */
.track + .track {
  margin-inline-start: 16px; /* match the gap */
}

/* Logo item: auto width, full lane height */
.logo {
  flex: 0 0 auto;
  height: 100%;
  display: grid;
  place-items: center;
}

/* Image preserves ratio and takes full height */
.logo img {
  height: 100%;
  width: auto;
  object-fit: contain;
  display: block;
  filter: saturate(110%) contrast(105%);
}

/* Animation */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .track {
    animation-duration: calc(var(--duration, 40s) * 4);
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
