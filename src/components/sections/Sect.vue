<script setup lang="ts">
const props = defineProps<{
  color?: string;
}>();
</script>

<template>
  <section class="sect" :data-color="props.color">
    <slot />
  </section>
</template>

<style scoped>
.sect {
  position: relative;
  width: 100%;
  height: 100svh;
  max-height: 100svh;
  overflow: hidden;
  display: grid; /* center child vertically and horizontally */
  place-items: center; /* grid centering */
}
</style>
