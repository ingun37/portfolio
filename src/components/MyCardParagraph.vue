<!-- src/components/MyCardParagraph.vue -->
<template>
  <template v-for="(text, idx) in texts" :key="idx">
    <template v-if="text">
      <span v-if="isEven(idx)" class="toon-card__gap" aria-hidden="true"></span>
      <span
        v-if="isEven(idx)"
        class="toon-card__part toon-card__part--highlight"
      >
        {{ text }}
      </span>
      <span v-if="isEven(idx)" class="toon-card__gap" aria-hidden="true"></span>

      <span v-else>{{ text }}</span>
    </template>
  </template>
</template>

<script lang="ts" setup>
const props = defineProps<{
  texts?: string[];
}>();

const isEven = (idx: number) => (idx + 1) % 2 === 0;
</script>

<style scoped>
.toon-card__part {
  display: inline-block;
}

.toon-card__gap {
  display: inline-block;
  width: 8px;
}

.toon-card__part--highlight {
  display: inline-inline;
  padding: 2px 8px;
  margin: 0 0;
  background: rgba(255, 255, 255, 0.65);
  border: 3px solid #000;
  border-radius: 10px 8px 10px 8px;
  box-shadow: 1px 1px 0 #111;
  transform: rotate(-0.6deg);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}

@media (max-width: 420px) {
  .toon-card__gap {
    width: 6px;
  }
}
</style>
