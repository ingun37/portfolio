<script setup lang="ts">
import { ref } from "vue";
import type { MyCardTableCell } from "@/components/MyCardTable.vue";

const items = ref<MyCardTableCell[]>([
  {
    props: {
      title: "Crusaders Quest",
      subtitle: "LoadComplete 2015 ~ 2018",
      textList: [
        {
          texts: [
            "I've developed",
            "Crusaders Quest",
            "from scratch",
            "using",
            "C++",
            "and",
            "Unity",
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
