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
        "My experties spans from __low-level graphics API__ to __high-level frameworks and engines__, and from __traditional__ to __modern__ graphics pipeline",
      ],
    },
    svgUrls,
  },
  {
    props: {
      title: "Theoretical Knowledge",
      textList: [
        "Throughout my career, I've worked on __PBR__ skinning __animation__ VFX __antialiasing__ polygon reduction __OIT__, etc. developing strong fundamental knowledges and skills.",
      ],
    },
  },
  {
    props: {
      title: 'Current "Web Graphics Engineer"',
      subtitle: "CLO Virtual Fashion, 2022 ~ present(2025)",
      cover: _closet,
      textList: [
        "I've developed __Depth Peeling__, __Resource Management__, __Environment Lighting__, __Rendering Test__, __Performance Data Analysis__ and many other things for the web services of CLO Virtual Fashion, contributing to their commercial success.",
        "I'm currently actively developing a __WebGPU backend__ for __NVRHI__, NVIDIA's open source rendering hardware interface, to enable the web support through WebAssembly",
      ],
    },
  },
  {
    props: {
      title: "OpenSource Contribution",
      subtitle: "ThreeJS, 2022",
      textList: [
        "I've detected a problem in the widely used __ThreeJS's outline pass__, and __contributed__ the open source project by fixing it.",
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
