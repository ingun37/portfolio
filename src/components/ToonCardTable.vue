<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";
import type { ToonCardProps } from "@/components/ToonCardEx.vue";
import SlidingLogoBanner from "@/components/SlidingLogoBanner.vue";
const props = defineProps<{
  items: { props: ToonCardProps; svgUrls?: string[] }[];
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
        return 2;
      case "xl":
        return 3;
      case "xxl":
        return 3;
    }
  };

  return Math.min(upTo(), props.items.length);
});

function itemsForColumn(ci: number) {
  return props.items.filter((_, index) => index % columnNumber.value === ci);
}
</script>

<template>
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
              :title="item.props.title"
              :subtitle="item.props.subtitle"
              :start-color="item.props.startColor"
              :end-color="item.props.endColor"
              :text-list="item.props.textList"
              :links="item.props.links"
            >
              <SlidingLogoBanner
                class="mb-2"
                v-if="item.svgUrls"
                :images="item.svgUrls"
                :height="40"
                :gap="40"
                :duration="30"
                alt-prefix="logo"
                aria-label="Technology logos carousel"
              />
            </ToonCardEx>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
