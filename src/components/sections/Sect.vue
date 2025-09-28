<script setup lang="ts">
const props = defineProps<{
  color?: string;
}>();
</script>

<template>
  <section
    class="d-flex justify-center align-center w-100 sect flex-column"
    style="min-height: 100svh"
    :data-color="props.color"
  >
    <slot />
  </section>
</template>

<style scoped>
.sect {
}
</style>
