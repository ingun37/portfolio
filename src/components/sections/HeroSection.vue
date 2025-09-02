<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="collage">
        <img class="logo" src="@/assets/logos/haskell.svg" alt="JavaScript" />
        <img class="logo" src="@/assets/logos/c++.svg" alt="TypeScript" />
        <img class="logo" src="@/assets/logos/haskell.svg" alt="Python" />
        <img class="logo" src="@/assets/logos/c++.svg" alt="Java" />
        <img class="logo" src="@/assets/logos/haskell.svg" alt="Go" />
        <img class="logo" src="@/assets/logos/c++.svg" alt="Rust" />
        <img class="logo" src="@/assets/logos/haskell.svg" alt="C#" />
        <img class="logo" src="@/assets/logos/c++.svg" alt="PHP" />
        <img class="logo" src="@/assets/logos/haskell.svg" alt="Swift" />
        <img class="logo" src="@/assets/logos/c++.svg" alt="Kotlin" />
        <img class="logo" src="@/assets/logos/haskell.svg" alt="Dart" />
        <img class="logo" src="@/assets/logos/c++.svg" alt="C++" />
      </div>

      <div class="overlay" />
      <v-container class="fill-height">
        <div
          class="d-flex flex-column justify-center align-center text-center w-100"
        >
          <ScrollFade direction="up">
            <div class="text-overline text-white mb-4">Introducing</div>
          </ScrollFade>

          <ScrollFade direction="up" :delay="'80ms'">
            <h1 class="display-2 font-weight-black text-white hero-title">
              Nova X
            </h1>
          </ScrollFade>

          <ScrollFade direction="up" :delay="'160ms'">
            <p class="text-h6 text-white text-high-emphasis mb-8">
              Bold design. Pro‑grade performance. Effortless experience.
            </p>
          </ScrollFade>

          <ScrollFade direction="up" :delay="'220ms'">
            <div class="d-flex ga-4">
              <v-btn size="large" color="primary" class="px-6" rounded="lg"
                >Buy</v-btn
              >
              <v-btn size="large" variant="outlined" class="px-6" rounded="lg"
                >Learn more</v-btn
              >
            </div>
          </ScrollFade>
        </div>
      </v-container>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ScrollFade from "@/components/ScrollFade.vue";
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100svh;
  max-height: 100svh;
  overflow: hidden;
}
.hero-bg :deep(img) {
  filter: saturate(110%) contrast(105%);
}
.overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    1200px 600px at 50% 20%,
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.65)
  );
}
.hero-title {
  letter-spacing: -0.02em;
}
/* Responsive grid of logos */
.collage {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-auto-rows: minmax(110px, 1fr);
  gap: 28px;
  padding: 48px;
  opacity: 0.25; /* Subtle */
  filter: saturate(110%) contrast(105%);
}
/* Each logo tile */
.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: color-mix(in srgb, var(--v-theme-surface) 10%, transparent);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 0 0 1px
    color-mix(in srgb, var(--v-theme-outline-variant) 25%, transparent) inset;
  mix-blend-mode: screen; /* Helps white-on-dark pop; adjust if needed */
}
</style>
