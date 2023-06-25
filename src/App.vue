<script>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
:root {
  --colorTheme: rgb(190, 50, 70);
  --previousColor-Shadow: rgb(0, 0, 0);
  --dangerEasy: rgb(80, 220, 127);
  --dangerMedium: rgb(220, 199, 80);
  --dangerHard: rgb(220, 80, 80);
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
  font-size: 16px;
  margin-block: 5vh;
  background-color: rgb(15, 15, 15);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  padding-inline: 4vw;
  row-gap: 5vh;
}
</style>
