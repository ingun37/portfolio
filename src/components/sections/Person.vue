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
      title: "Math/Science Enthusiast",
      textList: [
        "I love mathematics and science. I'm dedicated to the life-long learning of Abstract Algebra, Analysis, Calculus, Linear Algebra, Statistics, Physics, Topology, Category Theory, and many other topics.",
      ],
      links: [
        {
          href: "https://ingun37.github.io/answers/",
          label: "My notes on the various math/science textbooks",
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
        "I love to read, no matter if it's " +
          "literature or blog post, " +
          "fiction or non-fiction, " +
          "good or bad writing, " +
          "classic or modern, " +
          "agreeable or controversial, ",
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
  <h1 class="mb-2" style="text-align: center">As a Person</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
