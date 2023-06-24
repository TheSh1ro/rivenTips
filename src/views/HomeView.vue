<script>
import PageHeader from '../components/PageHeader.vue'
import PageNavigation from '../components/PageNavigation.vue'
export default {
  components: {
    PageHeader,
    PageNavigation
  },
  data() {
    return {
      matchs: [
        {
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/centered/Aatrox_0.jpg',
          name: 'Aatrox',
          previousText:
            'É uma matchup relativamente simples, onde o seu objetivo principal é baitar o E+Q dele, utilizando um Q para se aproximar ao mesmo tempo em que evita levar dano crítico do Q.',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Akshan_0.jpg',
          name: 'Akshan',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Camille_0.jpg',
          name: 'Camille',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Chogath_0.jpg',
          name: 'Cho Gath',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Darius_0.jpg',
          name: 'Darius',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/DrMundo_0.jpg',
          name: 'Dr. Mundo',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Fiora_0.jpg',
          name: 'Fiora',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Gangplank_0.jpg',
          name: 'Gang Plank',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Garen_0.jpg',
          name: 'Garen',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Gnar_0.jpg',
          name: 'Gnar',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Irelia_0.jpg',
          name: 'Irélia',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Jax_0.jpg',
          name: 'Jax',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Jayce_0.jpg',
          name: 'Jayce',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kayle_0.jpg',
          name: 'Kayle',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kennen_0.jpg',
          name: 'Kennen',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kled_0.jpg',
          name: 'Kled',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/KSante_0.jpg',
          name: 'KSante',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Malphite_0.jpg',
          name: 'Malphite',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Maokai_0.jpg',
          name: 'Maokai',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Nasus_0.jpg',
          name: 'Nasus',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ornn_0.jpg',
          name: 'Ornn',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yorick_0.jpg',
          name: 'Yorick',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Poppy_0.jpg',
          name: 'Poppy',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Quinn_0.jpg',
          name: 'Quinn',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Renekton_0.jpg',
          name: 'Renekton',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Rengar_0.jpg',
          name: 'Rengar',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Riven_0.jpg',
          name: 'Riven',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Sett_0.jpg',
          name: 'Sett',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Shen_0.jpg',
          name: 'Shen',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Singed_0.jpg',
          name: 'Singed',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Sion_0.jpg',
          name: 'Sion',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Teemo_0.jpg',
          name: 'Teemo',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Trundle_0.jpg',
          name: 'Trundle',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Tryndamere_0.jpg',
          name: 'Tryndamere',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Urgot_0.jpg',
          name: 'Urgot',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vladimir_0.jpg',
          name: 'Vladimir',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Volibear_0.jpg',
          name: 'Volibear',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/MonkeyKing_0.jpg',
          name: 'Wukong',
          previousText: 'Prévia da Matchup',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yasuo_0.jpg',
          name: 'Yasuo',
          previousText:
            'É necessário jogar  com cautela até o level 3, já que seu DPS inicial é inferior ao dele, devido ao ritmo fatal e Q com baixo cooldown.',
          expanded: false,
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yone_0.jpg',
          name: 'Yone',
          previousText:
            'É necessário jogar  com cautela até o level 3, já que seu DPS inicial é inferior ao dele, devido ao ritmo fatal e Q com baixo cooldown..',
          expanded: false,
          danger: 'Fácil'
        }
      ]
    }
  },
  methods: {
    expandCard(match) {
      match.expanded = !match.expanded
    },
    getDangerColor(match) {
      if (match.danger === 'Fácil') {
        return 'var(--dangerEasy)'
      } else if (match.danger === 'Médio') {
        return 'var(--dangerMedium)'
      } else if (match.danger === 'Difícil') {
        return 'var(--dangerHard)'
      } else {
        // Se nenhum valor corresponder, retorna uma cor padrão
        return ''
      }
    }
  }
}
</script>

<template>
  <PageNavigation />
  <PageHeader />
  <main id="main">
    <div
      class="matchCard"
      :class="{ expanded: match.expanded }"
      v-for="match in matchs"
      :key="match.name"
      :style="{ backgroundImage: 'url(' + match.image + ')' }"
      @click="expandCard(match)"
    >
      <h1 class="cardName">
        {{ match.name }}
        <h2 class="cardDanger" :style="{ color: getDangerColor(match) }">
          {{ match.danger }}
        </h2>
      </h1>
      <p class="cardPrevious" v-show="match.expanded">
        {{ match.previousText }}
      </p>
    </div>
  </main>
</template>

<style scoped>
#main {
  margin-block: 5vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-shadow: 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black,
    0px 0px 5px black, 0px 0px 5px black;
}

.matchCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0);
  background-size: cover;
  background-position: center;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 3px 2px 5px 0px black;
  overflow: hidden;

  transition: height 0.5s ease-in;
  height: 150px;
}

.matchCard:hover {
  cursor: pointer;
  box-shadow: 3px 2px 5px 0px var(--colorTheme);
  border: 1px solid var(--colorTheme);
}

.cardName {
  font-size: 2rem;
  color: white;
  text-align: center;
}

.cardDanger {
  font-size: 1rem;
}

.cardPrevious {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  text-align: center;
  color: white;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.25);
  margin: 2vh 0 0 0;
  flex: 1;
  width: 100%;
  border-radius: 20px;
  padding: 10px;
}

.matchCard.expanded {
  grid-row-end: span 3;
  height: 490px;
}

.matchCard.expanded {
  grid-row-end: span 3;
  max-height: 600px; /* altura máxima quando expandido */
}
</style>
