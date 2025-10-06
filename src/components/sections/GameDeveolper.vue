<script setup lang="ts">
import { ref } from "vue";
import type { MyCardTableCell } from "@/components/MyCardTable.vue";
import _eos from "@/assets/eos.jpg";
import _crusaders from "@/assets/crusaders.webp";
import GameDeveloperTitle from "@/components/GameDeveloperTitle.vue";
const items = ref<MyCardTableCell[]>([
  {
    props: {
      cover: _crusaders,
      title: "Crusaders Quest",
      subtitle: "LoadComplete/NHN Entertainment 2015 ~ 2017",
      textList: [
        "Led __Performance Optimization__ utilizing various profiling tools and advanced graphics techniques.",
        "Managed __CI/CD__ pipeline for Unity3D, Android, and Xcode projects, supporting 300 unique build targets to facilitate global market distribution.",
        "Implemented client __Authentication__ across 15+ providers, including Facebook, Apple, and Google",
        "Developed __Native Libraries__ for iOS and Android to integrate platform-specific features, such as Force Touch and Screen Recording.",
      ],
    },
  },
  {
    props: {
      cover: _eos,
      title: "Echo of Soul",
      subtitle: "Nvius/Hangame 2014 ~ 2015",
      textList: [
        "Maintained and supported a commercially successful 3D MMORPG built on Unreal Engine and Scaleform.",
        "Developed and implemented a specialized map editing tool using the Ear Clipping Algorithm with WPF and C++.",
      ],
    },
  },
]);
</script>

<template>
  <GameDeveloperTitle class="mb-2"></GameDeveloperTitle>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
