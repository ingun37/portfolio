<script setup lang="ts">
import _cPlusPlus from "@/assets/logos/c++.svg";
import _cSharp from "@/assets/logos/c_sharp.svg";
import _fSharp from "@/assets/logos/f_sharp.svg";
import _go from "@/assets/logos/go.svg";
import _haskell from "@/assets/logos/haskell.svg";
import _ruby from "@/assets/logos/ruby.svg";
import _rust from "@/assets/logos/rust.svg";
import _swift from "@/assets/logos/swift.svg";
import _typescript from "@/assets/logos/ts.svg";
import _python from "@/assets/logos/python.svg";
import _kotlin from "@/assets/logos/kotlin.svg";
import _java from "@/assets/logos/java.svg";
import _c from "@/assets/logos/c.svg";
import _lua from "@/assets/logos/lua.svg";
import { useTheme } from "vuetify/framework";
import SlidingLogoBanner from "@/components/SlidingLogoBanner.vue";
const svgUrls = [
  _c,
  _cPlusPlus,
  _cSharp,
  _fSharp,
  _typescript,
  _haskell,
  _python,
  _swift,
  _rust,
  _go,
  _ruby,
  _kotlin,
  _java,
  _lua,
];
const handsOn = ref([
  {
    texts: [
      "I've",
      "learned, forgotten, and re-learned",
      "20+ languages throughout my career.",
    ],
  },
  {
    texts: [
      "I am",
      "not restricted",
      "to any language. I can drop in any projects and language will not be a problem.",
    ],
  },
]);

const theoretical = ref([
  {
    texts: [
      "I'm knowledgeable in",
      "abstract algebra",
      "and",
      "category theory",
      "that is the mathematical foundation of the language theory.",
    ],
  },
  {
    texts: ["Checkout"],
  },
]);

const functional = ref([
  {
    texts: [
      "I can professionally leverage the",
      "typeclasses",
      "to boost the productivity in any language.",
    ],
  },
]);

const theoreticaLinks = ref<Array<{ href: string; label: string }>>([
  {
    href: "https://ingun37.github.io/answers/?sha1=b614f31d04b3bc2b3d23ee4337475251429e5a9f",
    label: "Notes on Category Theory for Programmers (2019)",
  },
]);

const diagram = ref([
  {
    texts: [
      "I can accurately represents any architecture, relation, and logic in diagrams",
    ],
  },
  {
    texts: [
      "I believe maintaining the diagram of the every source code is",
      "necessary",
      "part of the software development.",
    ],
  },
]);
const theme = useTheme();
</script>

<template>
  <h1 class="mb-2">Language Expert</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <v-container class="mb-2">
      <v-row>
        <v-col cols="12" md="6">
          <ToonCardEx
            title="No Language Barrier"
            :text-list="handsOn"
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
            :links="theoreticaLinks"
            :start-color="theme.current.value.colors['blue-start']"
            :end-color="theme.current.value.colors['blue-end']"
          ></ToonCardEx>
        </v-col>
        <v-col cols="12" md="6">
          <ToonCardEx
            title="Professional Functional Programmer"
            :text-list="functional"
            :start-color="theme.current.value.colors['yellow-start']"
            :end-color="theme.current.value.colors['yellow-end']"
          ></ToonCardEx>
        </v-col>
        <v-col cols="12" md="6">
          <ToonCardEx
            title="Diagram Nerd"
            :text-list="diagram"
            :start-color="theme.current.value.colors['green-start']"
            :end-color="theme.current.value.colors['green-end']"
          ></ToonCardEx>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped></style>
