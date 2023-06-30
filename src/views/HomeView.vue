<script>
import PageHeader from '../components/PageHeader.vue'
import MatchupComponent from '../components/MatchupComponent.vue'
export default {
  components: {
    PageHeader,
    MatchupComponent
  },
  data() {
    return {}
  }
}
</script>

<template>
  <main id="home">
    <PageHeader />
    <h1 class="containerTitle">↓ Riven Matchups ↓</h1>
    <MatchupComponent />
    <h1 class="containerTitle">Como jogar</h1>
    <h1 class="containerTitle">Protótipo da página</h1>
  </main>
</template>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  margin-inline: 15px;
  margin-bottom: 15px;
  row-gap: 3vh;
}
.containerTitle {
  display: flex;
  justify-content: center;
  color: var(--colorTheme);
  background-color: var(--invisible);
  border: 2px solid var(--colorTheme);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  text-shadow: 0px 0px 1px var(--colorTheme), 0px 0px 1px var(--colorTheme),
    0px 0px 1px var(--colorTheme), 0px 0px 1px var(--colorTheme), 0px 0px 1px var(--colorTheme),
    0px 0px 1px var(--colorTheme);
}
</style>
