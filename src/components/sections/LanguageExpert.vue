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
import type { MyCardTableCell } from "@/components/MyCardTable.vue";
import ProgrammingLanguageExpertTitle from "@/components/ProgrammingLanguageExpertTitle.vue";
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

const items = ref<MyCardTableCell[]>([
  {
    props: {
      title: "No Language Barrier",
      textList: [
        "__Used__ 20+ languages throughout my career.",
        "__Unrestricted__ to any language. I can drop into any project regardless of the language or platform",
      ],
    },
    svgUrls,
  },
  {
    props: {
      title: "Theoretical Knowledge",
      textList: [
        "Possess deep theoretical knowledge in __abstract algebra__ and __category theory__ that is the mathematical foundation of the language theory.",
      ],
      links: [
        {
          href: "https://ingun37.github.io/answers/?sha1=b614f31d04b3bc2b3d23ee4337475251429e5a9f",
          label: "Notes on Category Theory for Programmers (2019)",
        },
        {
          href: "https://github.com/ingun37/ComplexMatrixAlgebra",
          label: "Complex Matrix Algebra Swift Library",
        },
      ],
    },
  },
  {
    props: {
      title: "Professional Functional Programmer",
      textList: [
        "Professionally leverage the __typeclasses__ to boost the productivity, maintainability, and robustness in any language.",
      ],
    },
  },
  {
    props: {
      title: "Diagram Nerd",
      textList: [
        "Skilled in translating complex architecture, relations, and business logic into accurate and clear visual diagrams.",
        "I believe maintaining diagrams is __necessary__ part of the software development.",
      ],
    },
  },
]);
</script>

<template>
  <ProgrammingLanguageExpertTitle class="mb-2"></ProgrammingLanguageExpertTitle>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
