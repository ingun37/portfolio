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
            :startColor="startColors[index]"
            :endColor="endColors[index]"
            :key="index.toString()"
          ></OneLiner>
        </v-sheet>
      </v-sheet>
    </ScrollFade>
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify/framework";

const texts = ref([
  "(Programming __Language__ Expert)",
  "{Computer __Graphics__ Engineer}",
  "[__Game__ Developer]",
  "<__Application__ Developer>",
  "`__Devops__ Engineer`",
  '"Fluent __Bilingual__"',
]);
const colors = ["pink", "blue", "yellow", "green", "purple", "orange"];
const theme = useTheme();

const startColors = colors.map((c) => theme.current.value.colors[`${c}-start`]);
const endColors = colors.map((c) => theme.current.value.colors[`${c}-end`]);
</script>

<style scoped></style>
