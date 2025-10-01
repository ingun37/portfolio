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
        {
          texts: [
            "The",
            "official",
            "iOS application of one of the",
            "the biggest radio channel",
            "in South Korea",
          ],
        },
        {
          texts: [
            "I developed the whole application including",
            "UI",
            ",",
            "Network Session Threading",
            ", and",
            "Audio Streaming.",
          ],
        },
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
        {
          texts: [
            "I've developed an algebraic calculator with hand writing support",
          ],
        },
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
        {
          texts: [
            "I've contributed to the famous open source Markdown Editor Swift UI module by refactoring and fixing a performance issue.",
          ],
        },
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
