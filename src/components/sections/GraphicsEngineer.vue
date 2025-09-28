<script setup lang="ts">
import _three from "@/assets/logos/threejs.svg";
import _unity from "@/assets/logos/unity.svg";
import _webgpu from "@/assets/logos/webgpu.svg";
import _opengl from "@/assets/logos/opengl.svg";
import _babylon from "@/assets/logos/babylon.svg";
import _directx from "@/assets/logos/directx.svg";
import _metal from "@/assets/logos/metal.svg";
import { useTheme } from "vuetify/framework";
import SlidingLogoBanner from "@/components/SlidingLogoBanner.vue";

const svgUrls = [_three, _unity, _webgpu, _opengl, _babylon, _directx, _metal];
const depthPeeling = ref([
  {
    text1: "I've implemented",
    text2: "accurate and robust",
    text3:
      "depth peeling for the CLO-SET and CONNECT, contributing to their commercial success.",
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

const theoretical = ref([
  {
    text1: "I understand",
  },
]);

const tools = ref([
  {
    text1: "My experties spans from",
    text2: "low-level graphics API",
    text3: "to",
    text4: "high-level frameworks and engines",
    text5: ", and from",
    text6: "traditional",
    text7: "to",
    text8: "modern",
    text9: "graphics pipeline",
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
            title="APIs, Frameworks, and Engines"
            :text-list="tools"
            :start-color="theme.current.value.colors['pink-start']"
            :end-color="theme.current.value.colors['pink-end']"
          >
            <SlidingLogoBanner
              class="mb-2"
              :images="svgUrls"
              :height="40"
              :gap="40"
              :duration="30"
              alt-prefix="logo"
              aria-label="Technology logos carousel"
            />
          </ToonCardEx>
        </v-col>
        <v-col cols="12" md="6">
          <ToonCardEx
            title="Theoretical Knowledge"
            :text-list="theoretical"
            :start-color="theme.current.value.colors['blue-start']"
            :end-color="theme.current.value.colors['blue-end']"
          >
          </ToonCardEx>
        </v-col>
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
            :start-color="theme.current.value.colors['green-start']"
            :end-color="theme.current.value.colors['green-end']"
          ></ToonCardEx>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped></style>
