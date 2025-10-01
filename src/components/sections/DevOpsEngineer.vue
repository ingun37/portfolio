<script setup lang="ts">
import _cPlusPlus from "@/assets/logos/docker-long.svg";
import _cSharp from "@/assets/logos/nix.svg";
import type { MyCardTableCell } from "@/components/MyCardTable.vue";
const svgUrls = [_cPlusPlus, _cSharp];

const items = computed<MyCardTableCell[]>(() => [
  {
    props: {
      title: "Virtualization",
      textList: [
        {
          texts: [
            "I can",
            "virtualize",
            ",",
            "containerize",
            ",",
            "sandbox",
            "any build for runtime environment using",
            "Docker",
            "and",
            "NixOS",
          ],
        },
      ],
    },
    svgUrls,
  },
]);
</script>

<template>
  <h1 class="mb-2">DevOps Engineer</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
