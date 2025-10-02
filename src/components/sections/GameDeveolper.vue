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
        "* __Performance Optimization__ using various performance analyzers and graphics techniques.",
        "* __CI/CD__ for the Unity3d/Android/Xcode projects with 300 different build targets for different markets over the world.",
        "* Client __Authentication__ for Facebook, Apple, and 13 other ID providers",
        "* __Native Library__ development for iOS and Android for the platform-specific features like Force Touch or Screen Recording",
      ],
    },
  },
  {
    props: {
      cover: _eos,
      title: "Echo of Soul",
      subtitle: "Nvius/Hangame 2014 ~ 2015",
      textList: [
        "* Maintenance of a commercially successful __3D MMORPG__ using __Unreal Engine__ and __Scaleform",
        "* Map Editing using __Ear Clipping Algorithm__ with WPF and C++",
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
