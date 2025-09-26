<template>
  <div class="page" :style="{ backgroundColor: activeColor }">
    <Sect color="transparent">
      <HeroSection />
    </Sect>
    <Sect color="#f5cee8">
      <LanguageExpert />
    </Sect>
    <Sect color="#3A506B">
      <LanguageExpert />
    </Sect>
  </div>
</template>

<script lang="ts" setup>
// ... existing code ...
import { onMounted, onBeforeUnmount, ref } from "vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import LanguageExpert from "@/components/sections/LanguageExpert.vue";

const activeColor = ref<string>("#0B132B");

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("section.sect"),
  );

  // Initialize active color from the first section in view
  const firstColor = sections[0]?.dataset.color;
  if (firstColor) activeColor.value = firstColor;

  observer = new IntersectionObserver(
    (entries) => {
      // Find the entry with the largest intersection ratio that's intersecting
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target) {
        const color = (visible.target as HTMLElement).dataset.color;
        if (color && color !== activeColor.value) {
          activeColor.value = color;
        }
      }
    },
    {
      root: null,
      threshold: [0.25, 0.5, 0.6, 0.75, 1],
    },
  );

  sections.forEach((s) => observer!.observe(s));
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<style scoped>
.page {
  /* Smooth transition between section colors */
  transition: background-color 500ms ease;
  min-height: 100svh;
}
</style>
