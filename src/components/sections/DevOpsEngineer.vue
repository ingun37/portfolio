<script setup lang="ts">
import _docker from "@/assets/logos/docker-long.svg";
import _nix from "@/assets/logos/nix.svg";
import _gradle from "@/assets/logos/gradle.svg";
import _azure_devops from "@/assets/logos/azure-devops.svg";
import _aws from "@/assets/logos/aws.svg";
import _jenkins from "@/assets/logos/jenkins.svg";
import _github from "@/assets/logos/github.svg";
// import _cmake from "@/assets/logos/cmake.svg";
// import _rush from "@/assets/logos/rush.svg";
// import _cabal from "@/assets/logos/cabal.webp";

import _elastic from "@/assets/logos/elastic.svg";
import _pandas from "@/assets/logos/pandas.svg";
import _powerbi from "@/assets/logos/powerbi.svg";

import type { MyCardTableCell } from "@/components/MyCardTable.vue";
const svgUrls = [
  _docker,
  _nix,
  _gradle,
  _azure_devops,
  _aws,
  _jenkins,
  _github,
];

const dataAnalysisSvgUrls = [_elastic, _pandas, _powerbi];

const items = computed<MyCardTableCell[]>(() => [
  {
    props: {
      title: "Declarative & Reproducible CI/CD",
      textList: [
        "Established __Declarative__ CI/CD and __Reproducible__ runtime/build environments across multiple companies using __Docker__, __NixOS__, __Azure Pipeline__, __Github Workflow__, __AWS CodePipeline__, __Jenkins__, etc.",
      ],
    },
    svgUrls,
  },
  {
    props: {
      title: "Toolchains and Build Systems",
      textList: [
        "Possess a deep understanding of the build systems and toolchains of various languages and platforms",
        "* C/C++: __gcc/clang/MSVC__, __CMake__",
        "* TS/JS: __CommonJS/ESM__, __NPM,PNPM/Yarn__, __Rush.js__",
        "* Haskell: __Cabal/NixOS__, __Stack__",
        "* Swift/ObjC: __Xcode__",
        "* Others: __cargo__, __dotnet__, __venv__ etc.",
      ],
    },
  },
  {
    props: {
      title: "E2E Rendering Testing",
      textList: [
        "Developed an __automated__, __scalable__ E2E testing for 3D rendering systems for the web services at CLO Virtual Fashion. Deployed on a __GPU-accelerated__ cloud computing platform, resulting in the dramatic decrease in production failure rates.",
        "Engineered a robust image comparison algorithm using __OpenCV__'s morphological transformation and thresholding to accurately compare rendering results despite inherent system randomness.",
      ],
    },
  },
  {
    props: {
      title: "Rendering Performance Data Analysis",
      textList: [
        "Drove significant performance improvements at CLO Virtual Fashion through a data-driven analysis pipeline.",
        "* Data Collection: Gathered metrics (FPS, memory usage, network activity, loading time) using __Elastic Search__.",
        "* Analysis: Performed detailed data processing and analysis using the __Pandas__ Python library.",
        "* Visualization: Created actionable dashboards and reports using __PowerBI__ to guide engineering efforts.",
      ],
    },
    svgUrls: dataAnalysisSvgUrls,
  },
]);
</script>

<template>
  <h1 class="mb-2" style="text-align: center">DevOps Engineer</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <MyCardTable :items="items" />
  </v-sheet>
</template>

<style scoped></style>
