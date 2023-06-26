<script>
export default {
  data() {
    return {
      matchs: [
        {
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/centered/Aatrox_0.jpg',
          name: 'Aatrox',
          previousText:
            'É uma matchup relativamente simples, onde o seu objetivo principal é baitar o E+Q dele fazendo com que se exponha. Para isso, use o Q na direção do Aatrox quando for desviar do Q1 ou Q2 dele',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Akshan_0.jpg',
          name: 'Akshan',
          previousText:
            'É uma matchup ligeiramente dificil, o mais seguro é evitar ao máximo levar dano até o level 6 e só então jogar agressivamente, já que Riven leva vantagem a partir desse level contra a maior parte dos rangeds. Ao dar all in, mantenha-se próximo para bloquear a corda do Akshan.',
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Camille_0.jpg',
          name: 'Camille',
          previousText:
            'Varia de acordo com o patch, mas a riven sempre vai ter um early igual ou superior ao da Camille. Tente baitar o escudo dela se aproximando e quando for levar o AA use seu E. Você leva vantagem tanto em trocas longas quanto curtas nessa fase do jogo, então não tenha medo',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Chogath_0.jpg',
          name: 'Cho Gath',
          previousText:
            'Matchup um tanto desagradável, tente abusar ao máximo dos primeiros leveis, causando o máximo de dano e recebendo o minimo pois essa vida será importante tanto para evitar ganks quanto pressiona-lo ao longo do tempo.',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Darius_0.jpg',
          name: 'Darius',
          previousText:
            'Nessa matchup é muito importante usar seus stuns de forma consciente, cancelando os auto ataques do Darius para evitar sua passiva. Trocas curtas são importantes para deixa-lo com 70% de vida, e então dar um all in, mas tenha cuidado com o flash adversário',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/DrMundo_0.jpg',
          name: 'Dr. Mundo',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Fiora_0.jpg',
          name: 'Fiora',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Gangplank_0.jpg',
          name: 'Gang Plank',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Garen_0.jpg',
          name: 'Garen',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Gnar_0.jpg',
          name: 'Gnar',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Irelia_0.jpg',
          name: 'Irélia',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Jax_0.jpg',
          name: 'Jax',
          previousText: 'Prévia da Matchup',
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Jayce_0.jpg',
          name: 'Jayce',
          previousText: 'Prévia da Matchup',
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kayle_0.jpg',
          name: 'Kayle',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kennen_0.jpg',
          name: 'Kennen',
          previousText: 'Prévia da Matchup',
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kled_0.jpg',
          name: 'Kled',
          previousText: 'Prévia da Matchup',
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/KSante_0.jpg',
          name: 'KSante',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Malphite_0.jpg',
          name: 'Malphite',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Maokai_0.jpg',
          name: 'Maokai',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Nasus_0.jpg',
          name: 'Nasus',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ornn_0.jpg',
          name: 'Ornn',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yorick_0.jpg',
          name: 'Yorick',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Poppy_0.jpg',
          name: 'Poppy',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Quinn_0.jpg',
          name: 'Quinn',
          previousText: 'Prévia da Matchup',
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Renekton_0.jpg',
          name: 'Renekton',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Rengar_0.jpg',
          name: 'Rengar',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Riven_0.jpg',
          name: 'Riven',
          previousText: 'Prévia da Matchup',
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Sett_0.jpg',
          name: 'Sett',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Shen_0.jpg',
          name: 'Shen',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Singed_0.jpg',
          name: 'Singed',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Sion_0.jpg',
          name: 'Sion',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Teemo_0.jpg',
          name: 'Teemo',
          previousText: 'Prévia da Matchup',
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Trundle_0.jpg',
          name: 'Trundle',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Tryndamere_0.jpg',
          name: 'Tryndamere',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Urgot_0.jpg',
          name: 'Urgot',
          previousText: 'Prévia da Matchup',
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vayne_0.jpg',
          name: 'Vayne',
          previousText: 'Prévia da Matchup',
          danger: 'Difícil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vladimir_0.jpg',
          name: 'Vladimir',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Volibear_0.jpg',
          name: 'Volibear',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/MonkeyKing_0.jpg',
          name: 'Wukong',
          previousText: 'Prévia da Matchup',
          danger: 'Médio'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yasuo_0.jpg',
          name: 'Yasuo',
          previousText:
            'É necessário jogar  com cautela até o level 3, já que seu DPS inicial é inferior ao dele, devido ao ritmo fatal e Q com baixo cooldown.',
          danger: 'Fácil'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yone_0.jpg',
          name: 'Yone',
          previousText:
            'É necessário jogar  com cautela até o level 3, já que seu DPS inicial é inferior ao dele, devido ao ritmo fatal e Q com baixo cooldown..',
          danger: 'Fácil'
        }
      ]
    }
  },
  methods: {
    expandCard(match, index) {
      if (!match.expanded && !match.fullExpanded) {
        match.expanded = true
      } else if (match.expanded) {
        match.fullExpanded = true
        match.expanded = false
        this.matchs.forEach((match, i) => {
          if (i !== index) {
            match.hidden = true
            console.log(match.hidden, i)
          }
        })
      } else {
        match.fullExpanded = false
        match.expanded = false
        this.matchs.forEach((match) => {
          match.hidden = false
        })
      }
    },
    closeCard(match) {
      if (match.expanded) {
        match.expanded = false
      }
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
  },
  mounted() {
    this.matchs.forEach((match) => {
      match.view = false
      match.expanded = false
      match.hidden = false
    })
  }
}
</script>
<template>
  <div id="matchContainer">
    <div
      v-for="(match, index) in matchs"
      v-show="!match.hidden"
      class="matchCard"
      :class="{
        expanded: match.expanded,
        fullExpanded: match.fullExpanded,
        dangerEasy: match.danger === 'Fácil',
        dangerMedium: match.danger === 'Médio',
        dangerHard: match.danger === 'Difícil'
      }"
      :key="match.name"
      :style="{ backgroundImage: 'url(' + match.image + ')' }"
      @click="expandCard(match, index)"
      @mouseleave="closeCard(match)"
    >
      <div id="cardPreview">
        <p class="cardName">
          {{ match.name }}
        </p>
        <p class="cardDanger" :style="{ color: getDangerColor(match) }">
          {{ match.danger }}
        </p>
      </div>
      <p class="cardAbout" v-show="match.expanded">
        {{ match.previousText }}
      </p>
    </div>
  </div>
</template>
<style scoped>
/* Seletores ID */
#matchContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  text-shadow: 0px 0px 15px black, 0px 0px 15px black, 0px 0px 15px black, 0px 0px 15px black,
    0px 0px 15px black, 0px 0px 15px black;
  border-radius: 20px;
}

#cardPreview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Seletores de classe */
.matchCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  padding: 10px;
  border-radius: 20px;
  color: white;
  overflow: hidden;
  width: auto;
  box-shadow: 3px 2px 5px 0px var(--colorTheme);
  border: 1px solid var(--colorTheme);
  cursor: pointer;
  position: relative;
  transition: 0.5s ease;
  height: 140px;
}

.cardName {
  font-size: 2rem;
  text-align: center;
}

.cardDanger {
  font-size: 1.4rem;
}

.cardAbout {
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  flex: 1;
  width: 100%;
  border-radius: 20px;
  padding: 10px;
}

.dangerEasy:hover {
  box-shadow: 3px 2px 5px 0px var(--dangerEasy);
  border: 1px solid var(--dangerEasy);
}

.dangerMedium:hover {
  box-shadow: 3px 2px 5px 0px var(--dangerMedium);
  border: 1px solid var(--dangerMedium);
}

.dangerHard:hover {
  box-shadow: 3px 2px 5px 0px var(--dangerHard);
  border: 1px solid var(--dangerHard);
}

.dangerEasy.expanded,
.dangerEasy.fullExpanded {
  box-shadow: 3px 2px 5px 0px var(--dangerEasy);
  border: 1px solid var(--dangerEasy);
}

.dangerMedium.expanded,
.dangerMedium.fullExpanded {
  box-shadow: 3px 2px 5px 0px var(--dangerMedium);
  border: 1px solid var(--dangerMedium);
}

.dangerHard.expanded,
.dangerHard.fullExpanded {
  box-shadow: 3px 2px 5px 0px var(--dangerHard);
  border: 1px solid var(--dangerHard);
}

.matchCard.expanded {
  grid-row: span 3;
  height: calc(140px * 3 + 20px * 2);
}

.matchCard.fullExpanded {
  grid-column: span 4;
  height: 100vh;
  width: 100%;
  box-shadow: 3px 2px 5px 0px var(--colorTheme);
  border: 1px solid var(--colorTheme);
}
</style>
