<script setup lang="ts">
import { ref } from "vue";
import type { MyCardTableCell } from "@/components/MyCardTable.vue";
const items = ref<MyCardTableCell[]>([
  {
    props: {
      title: "한국어",
      textList: ["저는 모국어가 한국어인 대한민국 국민입니다."],
    },
  },
  {
    props: {
      title: "English",
      textList: ["Native-level fluency in spoken and written English"],
    },
  },
]);
</script>

<template>
  <h1 class="mb-2">Fluent Bilingual/유창한 2개국어</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
