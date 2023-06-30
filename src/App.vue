<script setup>
import { RouterView } from 'vue-router'
import PageNavigation from './components/PageNavigation.vue'
</script>

<template>
  <PageNavigation />
  <RouterView />
</template>

<style>
:root {
  /* Default */
  --colorHeader: rgb(190, 50, 70);
  --colorTheme: rgb(190, 50, 70);
  --invisible: rgba(0, 0, 0, 0);

  /* Cores conforme dificuldade */
  --dangerEasy: rgb(57, 255, 20);
  --dangerMedium: rgb(255, 255, 0);
  --dangerHard: rgb(160, 32, 240);
}

* {
  list-style-type: none;
  color: inherit;
  margin: 0;
  padding: 0;
  text-decoration: inherit;
}

body {
  font-weight: normal;
  background-color: black;
  font-size: 16px;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
}
</style>
