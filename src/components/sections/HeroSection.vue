<template>
  <div class="d-flex flex-column justify-center align-center text-center w-100">
    <ScrollFade direction="up">
      <p>Hi, I'm</p>
    </ScrollFade>

    <ScrollFade direction="up" :delay="'80ms'">
      <h1>INGUN JON</h1>
    </ScrollFade>

    <ScrollFade direction="up" :delay="'120ms'">
      <p class="mb-2">get to know me as a</p>
    </ScrollFade>
    <ScrollFade
      direction="up"
      :delay="'160ms'"
      class="w-100 bg-surface-variant"
    >
      <v-sheet class="w-100 d-flex justify-center align-center bg-transparent">
        <v-sheet
          class="d-flex flex-column justify-center align-center bg-transparent"
        >
          <OneLiner
            class="ma-1"
            v-for="(text, index) in texts"
            :text="text"
            :key="index.toString()"
          ></OneLiner>
        </v-sheet>
      </v-sheet>
    </ScrollFade>
  </div>
</template>

<script lang="ts" setup>
const texts = ref([
  "(Programming __Language__ Expert)",
  "{Computer __Graphics__ Engineer}",
  "<Game __Developer__>",
  "[App __Developer__]",
  "`Devops __Engineer__`",
]);
</script>

<style scoped></style>
