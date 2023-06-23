<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      matchs: [
        { name: 'Aatrox' },
        { name: 'Akshan' },
        { name: 'Camille' },
        { name: 'Cho Gath' },
        { name: 'Darius' },
        { name: 'Dr. Mundo' },
        { name: 'Fiora' },
        { name: 'Gang Plank' },
        { name: 'Garen' },
        { name: 'Gnar' },
        { name: 'Irélia' },
        { name: 'Jax' },
        { name: 'Jayce' },
        { name: 'Kayle' },
        { name: 'Kennen' },
        { name: 'Kled' },
        { name: 'KSante' },
        { name: 'Malphite' },
        { name: 'Maokai' },
        { name: 'Nasus' },
        { name: 'Ornn' },
        { name: 'Poppy' },
        { name: 'Quinn' },
        { name: 'Renekton' },
        { name: 'Rengar' },
        { name: 'Riven' },
        { name: 'Sett' },
        { name: 'Shen' },
        { name: 'Singed' },
        { name: 'Sion' },
        { name: 'Teemo' },
        { name: 'Trundle' },
        { name: 'Tryndamare' },
        { name: 'Urgot' },
        { name: 'Vladimir' },
        { name: 'Volibear' },
        { name: 'Wukong' },
        { name: 'Yasuo' },
        { name: 'Yone' },
        { name: 'Yorick' }
      ]
    }
  }
}
</script>

<template>
  <header id="header">
    <div class="navbar">
      <div class="navbar-item">
        <p class="navbar-itemText">all about riven</p>
        <p class="navbar-itemText">by @bielzin</p>
      </div>
    </div>
  </header>
  <main id="main">
    <div class="matchCard" v-for="match in matchs">
      <h1>{{ match.name }}</h1>
      <!-- <img
        src="https://staging.cohostcdn.org/avatar/89098-1cabe975-5591-44c4-aa5b-23b854708602-profile.png"
        alt="Champion"
      /> -->
      <p>Resumo</p>
      <button>Detalhes</button>
    </div>
  </main>
</template>

<style scoped>
#header {
  min-height: 40vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid rgb(139, 79, 207);
  color: white;
}
#header {
  content: '';
  background-size: cover;
  background-image: url(https://gametimes.com.br/wp-content/uploads/2020/07/riven-scaled.jpg);
  height: 40vh;
  width: 100vw;
  filter: brightness(40%);
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar-itemText {
  font-size: 2rem;
}

#main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.matchCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: rgb(139, 79, 207);
  border: 1px solid rgb(139, 79, 207);
}
.matchCard {
  content: '';
  background-image: url(https://staging.cohostcdn.org/avatar/89098-1cabe975-5591-44c4-aa5b-23b854708602-profile.png);
  background-size: auto;
  background-position: center;
}
</style>
