<template>
  <section class="video-wrap">
    <v-container class="py-16">
      <ScrollFade direction="up">
        <h2 class="text-h3 font-weight-bold mb-2">Pro Video</h2>
      </ScrollFade>
      <ScrollFade direction="up" :delay="'80ms'">
        <p class="text-subtitle-1 text-medium-emphasis mb-8">
          Capture cinema‑grade moments with real‑time stabilization and depth.
        </p>
      </ScrollFade>

      <div class="video-frame rounded-xl overflow-hidden">
        <video
          class="w-100 h-100"
          autoplay
          muted
          playsinline
          loop
          poster="https://images.unsplash.com/photo-1510552776732-01acc9a4c43f?q=80&w=1600&auto=format&fit=crop"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-lovely-animation-6216/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div class="video-gradient" />
      </div>

      <div class="d-flex flex-wrap ga-4 mt-6">
        <v-chip color="primary" variant="flat">4K60</v-chip>
        <v-chip variant="tonal">Dolby Vision</v-chip>
        <v-chip variant="tonal">Action Stabilizer</v-chip>
        <v-chip variant="tonal">ProRAW Video</v-chip>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import ScrollFade from "@/components/ScrollFade.vue";
</script>

<style scoped>
.video-wrap {
  background:
    radial-gradient(
      900px 500px at 10% -10%,
      color-mix(in srgb, var(--v-theme-primary) 12%, transparent),
      transparent
    ),
    radial-gradient(
      900px 500px at 110% 110%,
      color-mix(in srgb, var(--v-theme-secondary) 12%, transparent),
      transparent
    );
}
.video-frame {
  position: relative;
  aspect-ratio: 16/9;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.3);
}
.video-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 70%, rgba(0, 0, 0, 0.25));
  pointer-events: none;
}
</style>
