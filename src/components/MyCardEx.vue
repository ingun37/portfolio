<!-- src/components/MyCard.vue -->
<template>
  <v-card
    class="toon-card pb-1"
    elevation="0"
    :ripple="false"
    rounded="lg"
    border="md"
    :style="gradientStyle"
  >
    <v-img v-if="cover" color="surface-variant" height="200" :src="cover" cover>
    </v-img>
    <v-card-title class="font-weight-black">{{ title }}</v-card-title>
    <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
    <v-card-text class="font-weight-black pb-0">
      <v-list
        lines="one"
        v-for="(item, idx) in textList"
        :key="idx"
        style="background-color: transparent"
      >
        <MyCardParagraph :text="item" />
      </v-list>
    </v-card-text>
    <slot></slot>
    <v-card-actions v-if="limitedLinks.length" class="d-flex flex-column p-0">
      <v-btn
        v-for="(link, i) in limitedLinks"
        :key="i"
        :href="link.href"
        block
        target="_blank"
        variant="elevated"
        size="small"
        color="primary"
        prepend-icon="mdi-open-in-new"
      >
        {{ link.label }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

// ... existing code ...
<script lang="ts" setup>
import { computed } from "vue";
import MyCardParagraph from "@/components/MyCardParagraph.vue";
export type MyCardExProps = {
  title: string;
  subtitle?: string;
  textList: string[];
  cover?: string;
  startColor?: string; // gradient start color
  endColor?: string; // gradient end color
  links?: Array<{ href: string; label: string }>; // up to 3 external links
};
const props = defineProps<MyCardExProps>();
const limitedLinks = computed(() => (props.links ?? []).slice(0, 3));

// Fallback gradient palette to keep previous feel without CSS classes

const gradientStyle = computed(() => {
  const [start, end] = [props.startColor, props.endColor];
  return {
    background: `linear-gradient(135deg, ${start} 0%, ${end} 100%)`,
  } as const;
});
</script>
<style scoped>
.toon-card {
  /* Force the thick black outline, ignore Vuetify border utilities */
  border: 4px solid #000 !important;
  border-radius: 14px 10px 16px 8px;
  background-clip: padding-box;

  box-shadow:
    4px 4px 0 #111,
    0 0 0 2px rgba(255, 255, 255, 0.3) inset;
  filter: saturate(115%);
  transform: skew(-1deg);
  transition:
    transform 120ms ease,
    box-shadow 120ms ease,
    filter 120ms ease;
  user-select: none;
}
.toon-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px 10px 16px 8px;
  box-shadow: inset -9px -12px 0 rgba(0, 0, 0, 0.12);
  pointer-events: none;
}
/* Hover wobble and chunkier shadow */
.toon-card:hover {
  transform: translate(-2px, -2px) rotate(-0.8deg) skew(-2deg);
  box-shadow:
    8px 8px 0 #111,
    0 0 0 2px rgba(255, 255, 255, 0.4) inset;
  filter: saturate(125%) contrast(105%);
}

@media (max-width: 420px) {
  .toon-card {
    padding: 10px 12px;
  }
}
</style>
