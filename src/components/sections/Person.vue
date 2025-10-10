<script setup lang="ts">
import { ref } from "vue";
import type { MyCardTableCell } from "@/components/MyCardTable.vue";
const items = ref<MyCardTableCell[]>([
  {
    props: {
      title: "Bilingual",
      textList: [
        "저는 모국어가 한국어인 대한민국 국민입니다.",
        "Native-level fluency in spoken and written English",
      ],
    },
  },
  {
    props: {
      title: "Math Enthusiast",
      textList: [
        "I'm fascinated by mathematics and believe that the true power of programming comes from abstract mathematical thinking.",
        "I consistently expand my knowledge by studying various advanced textbooks.",
      ],
      links: [
        {
          href: "https://ingun37.github.io/answers/",
          label: "See my notes on various math/science textbooks",
        },
      ],
    },
  },
  {
    props: {
      title: "Hobbyist Painter",
      textList: ["I love to paint. Check out my art blog"],
      links: [
        {
          href: "https://ingun37.tumblr.com/",
          label: "My Paintings",
        },
      ],
    },
  },
  {
    props: {
      title: "Favorite Youtube Channel/Podcast",
      textList: [
        "Philosophize this!, Stand-up Maths, Weightlifting House, Lateral with Tom Scott, The Joy of Y, Unexplainable",
      ],
    },
  },
  {
    props: {
      title: "Avid Reader",
      textList: [
        "I love reading. My favorites are sci-fi and fantasy novels, philosophy and science books, and journalism.",
      ],
    },
  },
  {
    props: {
      title: "Other hobbies",
      textList: [
        "Playing Chess, Playing Piano, Weightlifting, Skateboarding, Running, Swimming, Surfing, Diving, etc.",
      ],
    },
  },
]);
</script>

<template>
  <h1 class="mb-2" style="text-align: center">Personal Life</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
