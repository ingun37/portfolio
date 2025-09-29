<script setup lang="ts">
import _three from "@/assets/logos/threejs.svg";
import _unity from "@/assets/logos/unity.svg";
import _webgpu from "@/assets/logos/webgpu.svg";
import _opengl from "@/assets/logos/opengl.svg";
import _babylon from "@/assets/logos/babylon.svg";
import _directx from "@/assets/logos/directx.svg";
import _metal from "@/assets/logos/metal.svg";
import { useTheme } from "vuetify/framework";
import SlidingLogoBanner from "@/components/SlidingLogoBanner.vue";

const svgUrls = [_three, _unity, _webgpu, _opengl, _babylon, _directx, _metal];
const depthPeeling = ref([
  {
    texts: [
      "I've implemented",
      "accurate and robust",
      "depth peeling for the CLO-SET and CONNECT, contributing to their commercial success.",
    ],
  },
]);
// ... existing code ...
const outline = ref([
  {
    texts: [
      "I've detected a problem in the widely used",
      "ThreeJS's outline pass",
      ", and",
      "contributed",
      "the open source project by fixing it.",
    ],
  },
]);
// ... existing code ...
const theoretical = ref([
  {
    texts: [
      "Throughout my career, I've worked on",
      "PBR",
      ",",
      "skinning",
      ",",
      "animation",
      ",",
      "VFX",
      ",",
      "antialiasing",
      ",",
      "polygon reduction",
      ",",
      "OIT",
      ", etc. and developed strong fundamental knowledges and skills.",
    ],
  },
]);
// ... existing code ...
const tools = ref([
  {
    texts: [
      "My experties spans from",
      "low-level graphics API",
      "to",
      "high-level frameworks and engines",
      ", and from",
      "traditional",
      "to",
      "modern",
      "graphics pipeline",
    ],
  },
]);

const nvrhi = ref([
  {
    texts: [
      "Currently I'm actively developing a",
      "WebGPU backend",
      "for",
      "NVRHI",
      ", NVIDIA's open source rendering hardware interface, to use it on my company's upcoming web application.",
    ],
  },
]);

const outlinePR = ref<Array<{ href: string; label: string }>>([
  {
    href: "https://github.com/mrdoob/three.js/pull/24262",
    label: "probability density function correction",
  },
]);
const theme = useTheme();

const items = computed(() => [
  {
    props: {
      title: "APIs, Frameworks, and Engines",
      startColor: theme.current.value.colors["pink-start"],
      endColor: theme.current.value.colors["pink-end"],
      textList: tools.value,
    },
    svgUrls,
  },
  {
    props: {
      title: "Theoretical Knowledge",
      startColor: theme.current.value.colors["blue-start"],
      endColor: theme.current.value.colors["blue-end"],
      textList: theoretical.value,
    },
  },
  {
    props: {
      title: "Depth Peeling",
      subtitle: "CLO Virtual Fashion, 2022 ~ ",
      startColor: theme.current.value.colors["yellow-start"],
      endColor: theme.current.value.colors["yellow-end"],
      textList: depthPeeling.value,
    },
  },
  {
    props: {
      title: "OpenSource Contribution",
      subtitle: "ThreeJS, 2022",
      startColor: theme.current.value.colors["green-start"],
      endColor: theme.current.value.colors["green-end"],
      textList: outline.value,
      links: outlinePR.value,
    },
  },
  {
    props: {
      title: "WebGPU Backend for NVRHI",
      startColor: theme.current.value.colors["purple-start"],
      endColor: theme.current.value.colors["purple-end"],
      textList: nvrhi.value,
    },
  },
]);
</script>

<template>
  <h1 class="mb-2">Computer Graphics Engineer</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <ToonCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
