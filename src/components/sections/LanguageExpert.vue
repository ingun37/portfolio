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
// ... existing code ...
</script>

<template>
  <h1>Language Expert</h1>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Empirical Quality</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Theoretical Knowledge</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div class="logo-banner" aria-label="Technology logos carousel">
    <div class="track">
      <div class="list">
        <img
          v-for="(src, i) in svgUrls"
          :key="`a-${i}`"
          class="logo"
          :src="src"
          :alt="`logo-${i + 1}`"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-banner {
  width: 100%;
  overflow: hidden;
  padding-block: 8px;
}

/* The track contains two identical lists for seamless loop */
.track {
  display: flex;
  width: max-content;
  align-items: center;
  gap: 24px;
  animation: scroll-x 30s linear infinite;
  will-change: transform;
}

/* Each list is a row of logos */
.list {
  display: inline-flex;
  align-items: center;
  gap: 24px;
}

/* Logo sizing: adjust height as needed */
.logo {
  height: 100px;
  width: auto;
  object-fit: contain;
  display: block;
  filter: saturate(110%) contrast(105%);
  opacity: 0.95;
}

/* Continuous scroll by shifting half the track width */
@keyframes scroll-x {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-30%);
  }
}

/* Larger screens: slightly bigger logos */
@media (min-width: 768px) {
  .logo {
    height: 130px;
  }
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .track {
    animation-duration: 120s;
  }
}
</style>
