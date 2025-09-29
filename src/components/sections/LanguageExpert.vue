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
      "I believe maintaining diagrams is",
      "necessary",
      "part of the software development.",
    ],
  },
]);
const theme = useTheme();

const items = computed(() => [
  {
    props: {
      title: "No Language Barrier",
      startColor: theme.current.value.colors["pink-start"],
      endColor: theme.current.value.colors["pink-end"],
      textList: handsOn.value,
    },
    svgUrls,
  },
  {
    props: {
      title: "Theoretical Knowledge",
      startColor: theme.current.value.colors["blue-start"],
      endColor: theme.current.value.colors["blue-end"],
      textList: theoretical.value,
      links: theoreticaLinks.value,
    },
  },
  {
    props: {
      title: "Professional Functional Programmer",
      startColor: theme.current.value.colors["yellow-start"],
      endColor: theme.current.value.colors["yellow-end"],
      textList: functional.value,
    },
  },
  {
    props: {
      title: "Diagram Nerd",
      startColor: theme.current.value.colors["green-start"],
      endColor: theme.current.value.colors["green-end"],
      textList: diagram.value,
    },
  },
]);
</script>

<template>
  <h1 class="mb-2">Language Expert</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <ToonCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
