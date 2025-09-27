<!-- src/components/ToonCard.vue -->
<template>
  <v-card
    class="toon-card"
    elevation="0"
    :ripple="false"
    rounded="lg"
    border="md"
    :style="gradientStyle"
  >
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text class="font-weight-black">
      <v-list lines="one" v-for="(item, idx) in textList" :key="idx">
        <ToonCardRow
          :text1="item.text1"
          :text2="item.text2"
          :text3="item.text3"
          :text4="item.text4"
          :text5="item.text5"
        />
      </v-list>
    </v-card-text>
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
}>();

// Fallback gradient palette to keep previous feel without CSS classes

const gradientStyle = computed(() => {
  const [start, end] = [props.startColor, props.endColor];
  return {
    background: `linear-gradient(135deg, ${start} 0%, ${end} 100%)`,
  } as const;
});
</script>
// ... existing code ...
<style scoped>
.toon-card {
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;

  /* Force the thick black outline, ignore Vuetify border utilities */
  border: 4px solid #000 !important;
  border-radius: 14px 10px 16px 8px;
  background-clip: padding-box;

  box-shadow:
    4px 4px 0 #111,
    0 0 0 2px rgba(255, 255, 255, 0.3) inset;
  color: #0f0f0f;
  filter: saturate(115%);
  transform: skew(-1deg);
  transition:
    transform 120ms ease,
    box-shadow 120ms ease,
    filter 120ms ease;
  user-select: none;
}

/* make list reset and stack items neatly */
.toon-card__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.toon-card__list-item {
  display: flex;
  align-items: center;
  margin-block: 2px;
}

.toon-card__part {
  display: inline-block;
  /* inherits font-weight and size from container to match style */
}

.toon-card__gap {
  display: inline-block;
  width: 8px;
}

.toon-card__part--highlight {
  display: inline-inline;
  padding: 2px 8px;
  margin: 0 4px;
  background: rgba(255, 255, 255, 0.65);
  border: 3px solid #000;
  border-radius: 10px 8px 10px 8px;
  box-shadow: 3px 3px 0 #111;
  transform: rotate(-0.6deg);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}

/* Slight irregular inner shading */
.toon-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px 10px 16px 8px;
  box-shadow: inset -6px -8px 0 rgba(0, 0, 0, 0.06);
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
  .toon-card__gap {
    width: 6px;
  }
}
</style>
