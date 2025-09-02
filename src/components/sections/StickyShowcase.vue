<template>
  <section class="sticky-wrap">
    <v-container class="py-16">
      <div class="d-flex flex-column flex-lg-row ga-8">
        <!-- Sticky visual -->
        <div class="sticky-visual">
          <v-sheet elevation="8" class="rounded-xl overflow-hidden bg-surface">
            <v-img
              src="https://images.unsplash.com/photo-1515777315835-281b94c9589e?q=80&w=1600&auto=format&fit=crop"
              cover
              height="560"
            />
          </v-sheet>
        </div>

        <!-- Scrolling feature cards -->
        <div class="flex-grow-1 d-flex flex-column ga-10">
          <ScrollFade>
            <h2 class="text-h3 font-weight-bold mb-2">Crafted for focus</h2>
            <p class="text-subtitle-1 text-medium-emphasis">
              A seamless blend of form and function. Every curve, every pixel —
              refined.
            </p>
          </ScrollFade>

          <ScrollFade direction="left">
            <v-card variant="tonal" class="pa-6 rounded-xl">
              <div class="d-flex align-start ga-4">
                <v-icon icon="mdi-speedometer" size="32" />
                <div>
                  <div class="text-h5 mb-2">Blazing fast</div>
                  <div class="text-body-1 text-medium-emphasis">
                    Next‑gen silicon with AI acceleration delivers unrivaled
                    responsiveness.
                  </div>
                </div>
              </div>
            </v-card>
          </ScrollFade>

          <ScrollFade direction="left" :delay="'60ms'">
            <v-card variant="tonal" class="pa-6 rounded-xl">
              <div class="d-flex align-start ga-4">
                <v-icon icon="mdi-battery-charging-90" size="32" />
                <div>
                  <div class="text-h5 mb-2">All‑day power</div>
                  <div class="text-body-1 text-medium-emphasis">
                    Intelligent power management keeps you going, longer.
                  </div>
                </div>
              </div>
            </v-card>
          </ScrollFade>

          <ScrollFade direction="left" :delay="'120ms'">
            <v-card variant="tonal" class="pa-6 rounded-xl">
              <div class="d-flex align-start ga-4">
                <v-icon icon="mdi-shield-check" size="32" />
                <div>
                  <div class="text-h5 mb-2">Built‑in privacy</div>
                  <div class="text-body-1 text-medium-emphasis">
                    Advanced security gives you peace of mind by design.
                  </div>
                </div>
              </div>
            </v-card>
          </ScrollFade>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import ScrollFade from "@/components/ScrollFade.vue";
</script>

<style scoped>
.sticky-wrap {
  background: linear-gradient(
    180deg,
    var(--v-theme-background),
    color-mix(in srgb, var(--v-theme-surface) 70%, transparent)
  );
  padding-block: clamp(48px, 8svh, 96px);
}
.sticky-visual {
  position: sticky;
  top: 96px;
  align-self: flex-start;
  width: 100%;
  max-width: 520px;
}
</style>
