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
        "Expertise spans from __low-level__ graphics API to __high-level__ frameworks and engines, and from __traditional__ to __modern__ graphics pipelines.",
      ],
    },
    svgUrls,
  },
  {
    props: {
      title: "Theoretical Knowledge",
      textList: [
        "Worked on __PBR__ __skinning__ __animation__ __VFX__ __antialiasing__ __polygon reduction__ __OIT__, etc. developing strong fundamental knowledge and skills.",
      ],
    },
  },
  {
    props: {
      title: 'Current "Web Graphics Engineer"',
      subtitle: "CLO Virtual Fashion, 2022 ~ present(2025)",
      cover: _closet,
      textList: [
        "Developed __Depth Peeling__ __Environment Lighting__ __VFX__ __Reactive 3D Resource Loading__, and many other things for CLO Virtual Fashion's web services, contributing to their commercial success.",
        "Currently pioneering __WebGPU backend__ for __NVRHI__, NVIDIA's open source rendering hardware interface, to enable high-performance web support via __WebAssembly__",
      ],
    },
  },
  {
    props: {
      title: "OpenSource Contribution",
      subtitle: "ThreeJS, 2022",
      textList: [
        "Identified and resolved a critical issue within the widely used __ThreeJS Outline Pass__, contributing to the open-source project.",
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
  <h1 class="mb-2" style="text-align: center">Computer Graphics Engineer</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
