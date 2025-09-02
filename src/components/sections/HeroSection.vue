<template>
  <section class="hero">
    <v-img
      class="hero-bg"
      src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop"
      cover
    >
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
    </v-img>
  </section>
</template>

<script lang="ts" setup>
import ScrollFade from "@/components/ScrollFade.vue";
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  width: 100%;
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
</style>
