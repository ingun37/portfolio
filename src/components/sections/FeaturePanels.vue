<template>
  <section>
    <v-parallax
      height="680"
      src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2000&auto=format&fit=crop"
    >
      <div class="fill-height d-flex align-center">
        <v-container>
          <ScrollFade direction="up">
            <h2 class="text-h3 text-white font-weight-bold">
              Immersive by nature
            </h2>
          </ScrollFade>
          <ScrollFade direction="up" :delay="'80ms'">
            <p class="text-subtitle-1 text-white text-high-emphasis mb-8">
              A display so fluid it feels alive — colors, depth, and clarity in
              every frame.
            </p>
          </ScrollFade>

          <div class="d-grid panels">
            <ScrollFade direction="up">
              <v-card class="pa-6 rounded-xl glass">
                <div class="text-h5 mb-2">120Hz Flow</div>
                <div class="text-body-1 text-medium-emphasis">
                  Ultra‑smooth scrolling and touch.
                </div>
              </v-card>
            </ScrollFade>
            <ScrollFade direction="up" :delay="'60ms'">
              <v-card class="pa-6 rounded-xl glass">
                <div class="text-h5 mb-2">TrueTone+</div>
                <div class="text-body-1 text-medium-emphasis">
                  Adaptive color tuned to your space.
                </div>
              </v-card>
            </ScrollFade>
            <ScrollFade direction="up" :delay="'120ms'">
              <v-card class="pa-6 rounded-xl glass">
                <div class="text-h5 mb-2">HDR Extreme</div>
                <div class="text-body-1 text-medium-emphasis">
                  Dazzling highlights. Deep blacks.
                </div>
              </v-card>
            </ScrollFade>
          </div>
        </v-container>
      </div>
    </v-parallax>
  </section>
</template>

<script lang="ts" setup>
import ScrollFade from "@/components/ScrollFade.vue";
</script>

<style scoped>
.panels {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
@media (max-width: 960px) {
  .panels {
    grid-template-columns: 1fr;
  }
}
.glass {
  background: color-mix(in srgb, var(--v-theme-surface) 80%, transparent);
  backdrop-filter: blur(8px) saturate(140%);
  border: 1px solid
    color-mix(in srgb, var(--v-theme-outline-variant) 35%, transparent);
}
</style>
