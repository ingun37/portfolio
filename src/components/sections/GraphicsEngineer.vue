<script setup lang="ts">
import { useTheme } from "vuetify/framework";

const depthPeeling = ref([
  {
    text1: "I've implemented",
    text2: "accurate and robust",
    text3:
      "depth peeling for the CLO-SET and CONNECT. It's contributed to the success of the product.",
  },
]);

const outline = ref([
  {
    text1:
      "I've detected a problem in the probability density function that is being used by the",
    text2: "widely used",
    text3: "THREEJS's outline pass, and",
    text4: "contributed",
    text5: "the open source project by fixing it.",
  },
]);
const outlinePR = ref<Array<{ href: string; label: string }>>([
  {
    href: "https://github.com/mrdoob/three.js/pull/24262",
    label: "probability density function correction (2022)",
  },
]);
const theme = useTheme();
</script>

<template>
  <h1 class="mb-2">Computer Graphics Engineer</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <v-container class="mb-2">
      <v-row>
        <v-col cols="12" md="6">
          <ToonCardEx
            title="WebGL Depth Peeling"
            subtitle="CLO Virtual fashion, 2022 ~ "
            :text-list="depthPeeling"
            :start-color="theme.current.value.colors['yellow-start']"
            :end-color="theme.current.value.colors['yellow-end']"
          >
          </ToonCardEx>
        </v-col>
        <v-col cols="12" md="6">
          <ToonCardEx
            title="ThreeJS Contribution"
            :text-list="outline"
            :links="outlinePR"
            :start-color="theme.current.value.colors['pink-start']"
            :end-color="theme.current.value.colors['pink-end']"
          ></ToonCardEx>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped></style>
