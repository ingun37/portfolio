<template>
  <section class="hero">
    <div
      class="d-flex flex-column justify-center align-center text-center w-100"
    >
      <ScrollFade direction="up">
        <p>Get to know</p>
      </ScrollFade>

      <ScrollFade direction="up" :delay="'80ms'">
        <h1>INGUN JON</h1>
      </ScrollFade>

      <ScrollFade direction="up" :delay="'120ms'">
        <p>as a</p>
      </ScrollFade>
      <ScrollFade direction="up" :delay="'160ms'" class="w-100">
        <div class="w-100 bg-surface-variant">
          <v-container class="w-100">
            <v-row no-gutters>
              <v-col cols="12">
                <ToonCard
                  class="w-100"
                  text1="Programming"
                  text2="Language"
                  text3="Expert"
                  :start-color="'#e86fbf'"
                  :end-color="'#f0a8dc'"
                />
              </v-col>
              <v-col cols="12">
                <ToonCard
                  class="w-100"
                  text1="Computer"
                  text2="Grapahics"
                  text3="Engineer"
                  :start-color="'#67cfe0'"
                  :end-color="'#37bddd'"
                />
              </v-col>
              <v-col cols="12">
                <ToonCard
                  class="w-100"
                  text1=""
                  text2="Game"
                  text3="Developer"
                  :start-color="'#f2e37a'"
                  :end-color="'#e8c45c'"
                />
              </v-col>
              <v-col cols="12">
                <ToonCard
                  class="w-100"
                  text1=""
                  text2="Application"
                  text3="Developer"
                  :start-color="'#86de78'"
                  :end-color="'#4fc56d'"
                />
              </v-col>
              <v-col cols="12">
                <ToonCard
                  class="w-100"
                  text1=""
                  text2="Devops"
                  text3="Engineer"
                  :start-color="'#a08fe6'"
                  :end-color="'#836fde'"
                />
              </v-col>
            </v-row>
          </v-container>
        </div>
      </ScrollFade>
    </div>
  </section>
</template>

<script lang="ts" setup>
// ... existing code ...
import ToonCard from "@/components/ToonCard.vue";

// ... existing code ...
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100svh;
  max-height: 100svh;
  overflow: hidden;
  display: grid; /* center child vertically and horizontally */
  place-items: center; /* grid centering */
}

.hero-bg :deep(img) {
  filter: saturate(110%) contrast(105%);
}
</style>
