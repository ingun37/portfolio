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
            "I was responsible for",
            "Performance Optimization",
            "using various performance analyzers and graphics techniques.",
          ],
        },
        {
          texts: [
            "I've set up",
            "CI/CD",
            "that builds Unity3d/Android/Xcode projects with 300 different build targets for different markets over the world.",
          ],
        },
        {
          texts: [
            "I developed",
            "authentication",
            "clients for Facebook, Apple and 13 different ID providers",
          ],
        },
        {
          texts: [
            "I've developed",
            "native libraries",
            "for various platforms including iOS ForceTouch, Android Screen Recorder, etc.",
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
            "I've maintained the commercially successful 3D MMORPG using",
            "Unreal Engine",
            ", and",
            "Scaleform",
            "using WPF and C++",
          ],
        },
        {
          texts: [
            "I've developed map area indicator feature using",
            "Ear Clipping Algorithm",
            "using WPF and C++",
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
