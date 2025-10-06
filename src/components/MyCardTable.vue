<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";
import type { MyCardExProps } from "@/components/MyCardEx.vue";
import SlidingLogoBanner from "@/components/SlidingLogoBanner.vue";
import { useTheme } from "vuetify/framework";

export type MyCardTableCell = { props: MyCardExProps; svgUrls?: string[] };

const props = defineProps<{
  items: MyCardTableCell[];
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
const colors = ["pink", "blue", "yellow", "green", "purple", "silver"];
const theme = useTheme();

const startColors = colors.map((c) => theme.current.value.colors[`${c}-start`]);
const endColors = colors.map((c) => theme.current.value.colors[`${c}-end`]);
function itemsForColumn(ci: number) {
  return props.items.flatMap((item, index) => {
    if (index % columnNumber.value === ci) {
      return [
        {
          props: item.props,
          svgUrls: item.svgUrls,
          color: {
            start: startColors[index % colors.length],
            end: endColors[index % colors.length],
          },
        },
      ];
    } else {
      return [];
    }
  });
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
            <MyCardEx
              :title="item.props.title"
              :subtitle="item.props.subtitle"
              :start-color="item.color.start"
              :end-color="item.color.end"
              :text-list="item.props.textList"
              :links="item.props.links"
              :cover="item.props.cover"
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
            </MyCardEx>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
