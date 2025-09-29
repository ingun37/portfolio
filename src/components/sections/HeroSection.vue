<template>
  <div class="d-flex flex-column justify-center align-center text-center w-100">
    <ScrollFade direction="up">
      <p>Hi, I'm</p>
    </ScrollFade>

    <ScrollFade direction="up" :delay="'80ms'">
      <h1>INGUN JON</h1>
    </ScrollFade>

    <ScrollFade direction="up" :delay="'120ms'">
      <p>get to know me as a</p>
    </ScrollFade>
    <ScrollFade direction="up" :delay="'160ms'" class="w-100">
      <div class="w-100 bg-surface-variant">
        <v-container class="w-100">
          <v-row no-gutters>
            <v-col cols="12">
              <MyCard
                class="w-100"
                text1="Programming"
                text2="Language"
                text3="Expert"
                :start-color="theme.current.value.colors['pink-start']"
                :end-color="theme.current.value.colors['pink-end']"
              />
            </v-col>
            <v-col cols="12">
              <MyCard
                class="w-100"
                text1="Computer"
                text2="Grapahics"
                text3="Engineer"
                :start-color="theme.current.value.colors['blue-start']"
                :end-color="theme.current.value.colors['blue-end']"
              />
            </v-col>
            <v-col cols="12">
              <MyCard
                class="w-100"
                text1=""
                text2="Game"
                text3="Developer"
                :start-color="theme.current.value.colors['yellow-start']"
                :end-color="theme.current.value.colors['yellow-end']"
              />
            </v-col>
            <v-col cols="12">
              <MyCard
                class="w-100"
                text1=""
                text2="Application"
                text3="Developer"
                :start-color="theme.current.value.colors['green-start']"
                :end-color="theme.current.value.colors['green-end']"
              />
            </v-col>
            <v-col cols="12">
              <MyCard
                class="w-100"
                text1=""
                text2="Devops"
                text3="Engineer"
                :start-color="theme.current.value.colors['purple-start']"
                :end-color="theme.current.value.colors['purple-end']"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </ScrollFade>
  </div>
</template>

<script lang="ts" setup>
// ... existing code ...
import MyCard from "@/components/MyCard.vue";
import { useTheme } from "vuetify/framework";
const theme = useTheme();
// ... existing code ...
</script>

<style scoped></style>
