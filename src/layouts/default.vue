<template>
  <v-main>
    <router-view />
  </v-main>
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
