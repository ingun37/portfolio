<!-- src/components/ToonCard.vue -->
<template>
  <v-card
    class="toon-card pb-1"
    elevation="0"
    :ripple="false"
    rounded="lg"
    border="md"
    :style="gradientStyle"
  >
    <v-card-title class="font-weight-black">{{ title }}</v-card-title>
    <v-card-text class="font-weight-black pb-0">
      <v-list
        lines="one"
        v-for="(item, idx) in textList"
        :key="idx"
        style="background-color: transparent"
      >
        <ToonCardRow
          :text1="item.text1"
          :text2="item.text2"
          :text3="item.text3"
          :text4="item.text4"
          :text5="item.text5"
        />
      </v-list>
    </v-card-text>
    <slot></slot>
    <v-card-actions v-if="limitedLinks.length" class="p-0">
      <v-btn
        v-for="(link, i) in limitedLinks"
        :key="i"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
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
import ToonCardRow from "@/components/ToonCardRow.vue";

const props = defineProps<{
  title: string;
  textList: {
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
    text5?: string;
  }[];
  startColor?: string; // gradient start color
  endColor?: string; // gradient end color
  links?: Array<{ href: string; label: string }>; // up to 3 external links
}>();
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
