<template>
  <section class="cta">
    <v-container class="py-16">
      <div class="d-flex flex-column align-center text-center">
        <ScrollFade direction="up">
          <h2 class="text-h3 font-weight-bold mb-2">Make it yours</h2>
        </ScrollFade>
        <ScrollFade direction="up" :delay="'80ms'">
          <p class="text-subtitle-1 text-medium-emphasis mb-6">
            Choose your finish and storage. Trade‑in available.
          </p>
        </ScrollFade>

        <div class="d-flex flex-wrap justify-center ga-4 mb-6">
          <v-chip variant="flat" color="primary">Midnight</v-chip>
          <v-chip variant="tonal">Starlight</v-chip>
          <v-chip variant="tonal">Titanium</v-chip>
          <v-chip variant="tonal">Product Red</v-chip>
        </div>

        <div class="d-flex ga-4">
          <v-btn size="large" color="primary" class="px-8" rounded="lg"
            >Buy now</v-btn
          >
          <v-btn size="large" variant="outlined" class="px-8" rounded="lg"
            >Compare</v-btn
          >
        </div>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import ScrollFade from "@/components/ScrollFade.vue";
</script>

<style scoped>
.cta {
  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--v-theme-surface-variant) 80%, transparent),
      transparent
    ),
    radial-gradient(
      1000px 600px at 50% 20%,
      color-mix(in srgb, var(--v-theme-primary) 10%, transparent),
      transparent
    );
}
</style>
