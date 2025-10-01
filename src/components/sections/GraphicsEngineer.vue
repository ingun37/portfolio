<script setup lang="ts">
import _three from "@/assets/logos/threejs.svg";
import _unity from "@/assets/logos/unity.svg";
import _webgpu from "@/assets/logos/webgpu.svg";
import _opengl from "@/assets/logos/opengl.svg";
import _babylon from "@/assets/logos/babylon.svg";
import _directx from "@/assets/logos/directx.svg";
import _metal from "@/assets/logos/metal.svg";
import _closet from "@/assets/clo.webp";

const svgUrls = [_three, _unity, _webgpu, _opengl, _babylon, _directx, _metal];

const items = computed(() => [
  {
    props: {
      title: "APIs, Frameworks, and Engines",
      textList: [
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
      ],
    },
    svgUrls,
  },
  {
    props: {
      title: "Theoretical Knowledge",
      textList: [
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
            ", etc. developing strong fundamental knowledges and skills.",
          ],
        },
      ],
    },
  },
  {
    props: {
      title: 'Current "Web Graphics Engineer"',
      subtitle: "CLO Virtual Fashion, 2022 ~ ",
      cover: _closet,
      textList: [
        {
          texts: [
            "I've developed",
            "Depth Peeling",
            ",",
            "Resource Management",
            ",",
            "Environment Lighting",
            ",",
            "Rendering & Performance Test",
            ", and many other things for the web services of CLO Virtual Fashion, contributing to their commercial success.",
          ],
        },
        {
          texts: [
            "I'm currently actively developing a",
            "WebGPU backend",
            "for",
            "NVRHI",
            ", NVIDIA's open source rendering hardware interface, to enable the web support through WebAssembly",
          ],
        },
      ],
    },
  },
  {
    props: {
      title: "OpenSource Contribution",
      subtitle: "ThreeJS, 2022",
      textList: [
        {
          texts: [
            "I've detected a problem in the widely used",
            "ThreeJS's outline pass",
            ", and",
            "contributed",
            "the open source project by fixing it.",
          ],
        },
      ],
      links: [
        {
          href: "https://github.com/mrdoob/three.js/pull/24262",
          label: "probability density function correction",
        },
      ],
    },
  },
]);
</script>

<template>
  <h1 class="mb-2">Computer Graphics Engineer</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
