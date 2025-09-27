<!-- src/components/ToonCardRow.vue -->
<template>
  <span v-if="text1">{{ text1 }}</span>
  <span v-if="text2" class="toon-card__gap" aria-hidden="true"></span>
  <span v-if="text2" class="toon-card__part toon-card__part--highlight">{{
    text2
  }}</span>
  <span v-if="text2" class="toon-card__gap" aria-hidden="true"></span>
  <span v-if="text3">{{ text3 }}</span>
  <span v-if="text4" class="toon-card__gap" aria-hidden="true"></span>
  <span v-if="text4" class="toon-card__part toon-card__part--highlight">{{
    text4
  }}</span>
  <span v-if="text4" class="toon-card__gap" aria-hidden="true"></span>
  <span v-if="text5">{{ text5 }}</span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
}>();
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
