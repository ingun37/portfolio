<script setup lang="ts">
const props = defineProps<{ text: string }>();
const content = computed(() => props.text.slice(1, -1));
const opener = computed(() => props.text.slice(0, 1));
const closure = computed(() =>
  props.text.slice(props.text.length - 1, props.text.length),
);
</script>

<template>
  <v-sheet
    class="d-flex justify-space-between align-center w-100 bg-transparent"
  >
    <span class="text-h4 mr-3 mb-1">{{ opener }}</span>
    <span>
      <MyCardParagraph :text="content"></MyCardParagraph>
    </span>
    <span class="text-h4 ml-3 mb-1">{{ closure }}</span>
  </v-sheet>
</template>

<style scoped></style>
