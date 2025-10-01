<script setup lang="ts">
import _docker from "@/assets/logos/docker-long.svg";
import _nix from "@/assets/logos/nix.svg";
import type { MyCardTableCell } from "@/components/MyCardTable.vue";
const svgUrls = [_docker, _nix];

const items = computed<MyCardTableCell[]>(() => [
  {
    props: {
      title: "Virtualization",
      textList: [
        "I can__virtualize__/__containerize__,__sandbox__any build for runtime environment using__Docker__and__NixOS",
      ],
    },
    svgUrls,
  },
  {
    props: {
      title: "E2E Rendering Testing",
      textList: [
        "I've developed the __automated__, __scalable__ E2E testing for the 3D rendering systems, and run it on the __gpu-accelerated__ cloud computing platform for the web services of CLO Virtual Fashion, decreasing the failure rate dramatically",
      ],
    },
  },
  {
    props: {
      title: "Rendering Performance Data Analysis",
      textList: [
        "I've successfully improved the performance through data analysis in CLO Virtual Fashion",
        "* Collect the FPS, Heap memory usage, GPU memory usage, network activity, loading time data using __Elastic Search__",
        "* __Analyze__ using __Pandas__ python library",
        "* __Visualize__ using __PowerBi__",
      ],
    },
  },
]);
</script>

<template>
  <h1 class="mb-2">DevOps Engineer</h1>
  <p class="mb-2">These are my values as a dev-ops engineer</p>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
