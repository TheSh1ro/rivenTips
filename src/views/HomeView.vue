<script>
import PageHeader from '../components/PageHeader.vue'
import PageNavigation from '../components/PageNavigation.vue'
import MatchupComponent from '../components/MatchupComponent.vue'
import TipsComponent from '../components/TipsComponent.vue'
export default {
  components: {
    PageHeader,
    PageNavigation,
    MatchupComponent,
    TipsComponent
  },
  data() {
    return {
      tips: [
        {
          name: 'Longo Alcance',
          playstyle: 'Tente levar a menor quantidade de dano possível até o level 6',
          expanded: false
        },
        {
          name: 'Corpo a corpo',
          playstyle: 'Tente fazer short trades até um ponto onde possa dar all in',
          expanded: false
        },
        {
          name: 'Estilo de Jogo',
          playstyle: 'Utilize de forma inteligente os seus stuns',
          expanded: false
        },
        {
          name: 'Plano de Jogo',
          playstyle: 'Não morra',
          expanded: false
        }
      ]
    }
  }
}
</script>

<template>
  <PageNavigation />
  <PageHeader />
  <main id="main">
    <h1 class="containerTitle">↓ Show Matchups ↓</h1>
    <MatchupComponent />
    <h1 class="containerTitle">Como jogar</h1>
    <TipsComponent />
  </main>
</template>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
}
.containerTitle {
  display: flex;
  justify-content: center;
  color: var(--colorTheme);
  background-color: var(--invisible);
  border: 2px solid var(--colorTheme);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  text-shadow: 0px 0px 1px var(--colorTheme), 0px 0px 1px var(--colorTheme), 0px 0px 1px var(--colorTheme), 0px 0px 1px var(--colorTheme),
    0px 0px 1px var(--colorTheme), 0px 0px 1px var(--colorTheme);
}
.containerTitle:hover {
  cursor: default;
}
</style>
