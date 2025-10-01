<script setup lang="ts">
import { ref } from "vue";
import type { MyCardTableCell } from "@/components/MyCardTable.vue";
import _eos from "@/assets/eos.jpg";
import _crusaders from "@/assets/crusaders.webp";
const items = ref<MyCardTableCell[]>([
  {
    props: {
      cover: _crusaders,
      title: "Crusaders Quest",
      subtitle: "LoadComplete/NHN Entertainment 2015 ~ 2017",
      textList: [
        {
          texts: [
            "*",
            "Performance Optimization",
            "using various performance analyzers and graphics techniques.",
          ],
        },
        {
          texts: [
            "*",
            "CI/CD",
            "for the Unity3d/Android/Xcode projects with 300 different build targets for different markets over the world.",
          ],
        },
        {
          texts: [
            "* Client",
            "Authentication",
            "for Facebook, Apple, and 13 other ID providers",
          ],
        },
        {
          texts: [
            "*",
            "Native Library",
            "development for iOS and Android for the platform-specific features like Force Touch or Screen Recording",
          ],
        },
      ],
    },
  },
  {
    props: {
      cover: _eos,
      title: "Echo of Soul",
      subtitle: "Nvius/Hangame 2014 ~ 2015",
      textList: [
        {
          texts: [
            "* Maintenance of a commercially successful",
            "3D MMORPG",
            "using",
            "Unreal Engine",
            "and",
            "Scaleform",
          ],
        },
        {
          texts: [
            "* Map Editing using",
            "Ear Clipping Algorithm",
            "with WPF and C++",
          ],
        },
      ],
    },
  },
]);
</script>

<template>
  <h1 class="mb-2">Game Developer</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
