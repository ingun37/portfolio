<script setup lang="ts">
const githubUrl = "https://github.com/ingun37";
const instagramUrl = "https://instagram.com/ingun37";
const email = "ingun37@gmail.com";
const emailUrl = `mailto:${email}`;
</script>

<template>
  <h1 class="mb-2">Find Me on</h1>
  <v-sheet
    class="d-flex flex-column bg-surface-variant justify-center align-center w-100"
  >
    <v-container class="py-8" fluid>
      <v-row justify="center" class="buttons-row">
        <v-btn
          color="black"
          class="ma-2"
          variant="flat"
          size="large"
          :href="githubUrl"
          target="_blank"
          rel="noopener"
          aria-label="Open GitHub profile"
        >
          <v-icon start icon="mdi-github" />
          GitHub
        </v-btn>

        <v-btn
          color="pink-darken-2"
          class="ma-2"
          variant="flat"
          size="large"
          :href="instagramUrl"
          target="_blank"
          rel="noopener"
          aria-label="Open Instagram profile"
        >
          <v-icon start icon="mdi-instagram" />
          Instagram
        </v-btn>

        <v-btn
          color="primary"
          class="ma-2"
          size="large"
          :href="emailUrl"
          aria-label="Send me an email"
        >
          <v-icon start icon="mdi-email" />
          Email
        </v-btn>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.buttons-row {
  gap: 12px;
  flex-wrap: wrap;
}
</style>
