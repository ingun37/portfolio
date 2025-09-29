<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";
const props = defineProps<{
  items: ToonCardProps[];
}>();
const { name } = useDisplay();

const columnNumber = computed(() => {
  const upTo = () => {
    switch (name.value) {
      case "xs":
        return 1;
      case "sm":
        return 2;
      case "md":
        return 2;
      case "lg":
        return 3;
      case "xl":
        return 3;
      case "xxl":
        return 4;
    }
  };

  return Math.min(upTo(), props.items.length);
});

function itemsForColumn(ci: number) {
  return props.items.filter((_, index) => index % columnNumber.value === ci);
}
</script>

<template>
  <h1 class="mb-2">Computer Graphics Engineer</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <v-container class="mb-2">
      <v-row>
        <v-col
          v-for="cidx in columnNumber"
          :cols="(12 / columnNumber).toString()"
        >
          <v-row>
            <v-col
              v-for="(item, index) in itemsForColumn(cidx - 1)"
              :key="index"
              cols="12"
            >
              <ToonCardEx
                title="title"
                subtitle="subtitle"
                :text-list="[{ texts: ['text', 'text', 'text'] }]"
              >
                {{ cidx }}
              </ToonCardEx>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped></style>
