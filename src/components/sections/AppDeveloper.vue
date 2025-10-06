<script setup lang="ts">
import { ref } from "vue";
import type { MyCardTableCell } from "@/components/MyCardTable.vue";
import _ebs from "@/assets/ebs.png";
import _matrix from "@/assets/matrix.jpeg";
const items = ref<MyCardTableCell[]>([
  {
    props: {
      cover: _ebs,
      title: "EBS어학FM",
      subtitle: "Swink/EBSFM 2013 ~ 2014",
      textList: [
        "Developed the __official__ iOS application for EBSFM, one of South Korea's largest radio channels",
      ],
    },
  },
  {
    props: {
      cover: _matrix,
      title: "Expressive Matrix Calculator",
      subtitle: "Personal Project 2019",
      links: [
        {
          href: "https://github.com/ingun37/mat4ipad",
          label: "GitHub repo",
        },
      ],
      textList: [
        "Engineered an algebraic matrix calculator that features handwriting recognition support.",
      ],
    },
  },
  {
    props: {
      title: "OpenSource Contribution",
      subtitle: "SwiftDown, 2023",
      links: [
        {
          href: "https://github.com/qeude/SwiftDown/pull/27",
          label: "Use Combine to improve the performance",
        },
        {
          href: "https://github.com/qeude/SwiftDown/pull/26",
          label: "Add callback to text selection change",
        },
      ],
      textList: [
        "Contributed to SwiftDown, a popular open-source Markdown Editor SwiftUI module, by refactoring the codebase and fixing a performance issue.",
      ],
    },
  },
  {
    props: {
      title: "Modern & Progressive Design patterns",
      textList: [
        "Deep expertise in Modern and Progressive design patterns for architecting reactive, robust, and sustainable client-side applications.",
        "Consistently apply __Reactive Programming__ and __Flux Architecture__ principles, specifically for efficient resource loading and dynamic UI updates.",
      ],
    },
  },
  {
    props: {
      title: "Web Frontend",
      textList: [
        "Designed and developed multiple personal websites (including this one) leveraging __Vue.js__ and __React__ frameworks.",
      ],
    },
  },
]);
</script>

<template>
  <h1 class="mb-2">Application Developer</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
