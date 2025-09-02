<template>
  <v-app-bar flat height="72" class="appbar" density="comfortable">
    <v-container class="d-flex align-center justify-space-between">
      <div class="d-flex align-center ga-4">
        <v-icon icon="mdi-apple" size="28" />
        <span class="text-h6 font-weight-bold">Nova X</span>
      </div>
      <div class="d-none d-md-flex ga-6 text-medium-emphasis">
        <a class="nav-link" href="#design">Design</a>
        <a class="nav-link" href="#features">Features</a>
        <a class="nav-link" href="#pro-video">Pro Video</a>
        <a class="nav-link" href="#buy">Buy</a>
      </div>
      <div class="d-flex align-center ga-2">
        <v-btn icon variant="text"><v-icon icon="mdi-magnify" /></v-btn>
        <v-btn icon variant="text"><v-icon icon="mdi-cart-outline" /></v-btn>
      </div>
    </v-container>
  </v-app-bar>
  <v-main>
    <router-view />
  </v-main>

  <AppFooter />
</template>

<script lang="ts" setup>
//
</script>

<style scoped>
.appbar {
  backdrop-filter: saturate(160%) blur(10px);
  background: color-mix(in srgb, var(--v-theme-surface) 60%, transparent);
  border-bottom: 1px solid
    color-mix(in srgb, var(--v-theme-outline-variant) 20%, transparent);
}
.nav-link {
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s;
}
</style>
