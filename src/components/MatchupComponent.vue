<script>
import axios from 'axios'

export default {
  data() {
    return {
      selectedChampionJson: null,
      matchs: [
        {
          name: 'Aatrox',
          previousText: '',
          fullText: null,
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/centered/Aatrox_0.jpg',
          danger: 'Médio',
          id: 'Aatrox'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Akshan_0.jpg',
          name: 'Akshan',
          previousText: '',
          fullText: null,
          danger: 'Difícil',
          id: 'Akshan'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Camille_0.jpg',
          name: 'Camille',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'Camille'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Chogath_0.jpg',
          name: 'Cho Gath',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Chogath'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Darius_0.jpg',
          name: 'Darius',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Darius'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/DrMundo_0.jpg',
          name: 'Dr. Mundo',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil',
          fullText: null,
          id: 'DrMundo'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Fiora_0.jpg',
          name: 'Fiora',
          previousText: 'Prévia da Matchup',
          danger: 'Médio',
          fullText: null,
          id: 'Fiora'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Gangplank_0.jpg',
          name: 'Gang Plank',
          previousText: 'Prévia da Matchup',
          danger: 'Fácil',
          fullText: null,
          id: 'Gangplank'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Garen_0.jpg',
          name: 'Garen',
          previousText: 'Prévia da Matchup',
          danger: 'Médio',
          fullText: null,
          id: 'Garen'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Gnar_0.jpg',
          name: 'Gnar',
          previousText: 'Prévia da Matchup',
          danger: 'Médio',
          fullText: null,
          id: 'Gnar'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Irelia_0.jpg',
          name: 'Irelia',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'Irelia'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Jax_0.jpg',
          name: 'Jax',
          previousText: '',
          fullText: null,
          danger: 'Difícil',
          id: 'Jax'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Jayce_0.jpg',
          name: 'Jayce',
          previousText: '',
          fullText: null,
          danger: 'Difícil',
          id: 'Jayce'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kayle_0.jpg',
          name: 'Kayle',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Kayle'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kennen_0.jpg',
          name: 'Kennen',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Kennen'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kled_0.jpg',
          name: 'Kled',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Kled'
        },
        {
          name: 'KSante',
          previousText: '',
          fullText: null,
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/centered/KSante_0.jpg',
          danger: 'Fácil',
          id: 'KSante'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Malphite_0.jpg',
          name: 'Malphite',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'Malphite'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Maokai_0.jpg',
          name: 'Maokai',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'Maokai'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Mordekaiser_0.jpg',
          name: 'Mordekaiser',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'Mordekaiser'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Nasus_0.jpg',
          name: 'Nasus',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'Nasus'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ornn_0.jpg',
          name: 'Ornn',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Ornn'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Pantheon_0.jpg',
          name: 'Pantheon',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Pantheon'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Renekton_0.jpg',
          name: 'Renekton',
          previousText: '',
          fullText: null,
          danger: 'Difícil',
          id: 'Renekton'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Rengar_0.jpg',
          name: 'Rengar',
          previousText: '',
          fullText: null,
          danger: 'Difícil',
          id: 'Rengar'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Sett_0.jpg',
          name: 'Sett',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'Sett'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Shen_0.jpg',
          name: 'Shen',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Shen'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Singed_0.jpg',
          name: 'Singed',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'Singed'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Sion_0.jpg',
          name: 'Sion',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'Sion'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Swain_0.jpg',
          name: 'Swain',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Swain'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/TahmKench_0.jpg',
          name: 'Tahm Kench',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'TahmKench'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Talon_0.jpg',
          name: 'Talon',
          previousText: '',
          fullText: null,
          danger: 'Difícil',
          id: 'Talon'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Teemo_0.jpg',
          name: 'Teemo',
          previousText: '',
          fullText: null,
          danger: 'Difícil',
          id: 'Teemo'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Urgot_0.jpg',
          name: 'Urgot',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Urgot'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vayne_0.jpg',
          name: 'Vayne',
          previousText: '',
          fullText: null,
          danger: 'Difícil',
          id: 'Vayne'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vladimir_0.jpg',
          name: 'Vladimir',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Vladimir'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Volibear_0.jpg',
          name: 'Volibear',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'Volibear'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/MonkeyKing_0.jpg',
          name: 'Wukong',
          previousText: '',
          fullText: null,
          danger: 'Fácil',
          id: 'MonkeyKing'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yasuo_0.jpg',
          name: 'Yasuo',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Yasuo'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yone_0.jpg',
          name: 'Yone',
          previousText: '',
          fullText: null,
          danger: 'Médio',
          id: 'Yone'
        }
      ],
      championData: null
    }
  },
  methods: {
    async testData() {
      for (let match of this.matchs) {
        const response = await axios.get(
          `https://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion/${match.id}.json`
        )
        const championData = response.data.data[match.id]
        console.log(championData.spells.name)
      }
    },

    fetchData() {
      axios
        .get('https://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion/Riven.json')
        .then((response) => {
          this.championData = response.data.data.Riven
        })
    },

    getImageUrl(imageName) {
      const imageBaseUrl = 'https://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/'
      return imageBaseUrl + imageName
    },

    // Alterando status de normal / expandido / modo tela cheia dos cards, na variável match.expanded ou match.fullExpanded
    expandCard(match, index) {
      if (match.expanded === 0) {
        match.expanded = 1
      } else if (match.expanded === 1) {
        match.expanded = 2
        this.selectedChampionJson = match.jsonLink
        // this.matchs.forEach((match, i) => {
        //   if (i !== index) {
        //     match.hidden = true
        //   }
        // })
      } else if (match.expanded === 2) {
        match.expanded = 0
        this.selectedChampionJson = null
        this.matchs.forEach((match) => {
          match.hidden = false
        })
      }
    },
    closeCard(match) {
      if (match.expanded === 1) {
        match.expanded = 0
      }
    },
    // Cor do texto conforme a dificuldade da matchup
    getDangerColor(match) {
      if (match.danger === 'Fácil') {
        return 'var(--dangerEasy)'
      } else if (match.danger === 'Médio') {
        return 'var(--dangerMedium)'
      } else if (match.danger === 'Difícil') {
        return 'var(--dangerHard)'
      }
    }
  },
  mounted() {
    // Atualizando axios
    this.fetchData()
    this.testData()
    // Adicionando campos vazios ao array
    this.matchs.forEach((match) => {
      match.view = false
      match.expanded = 0
      match.hidden = false
      match.spells = null
      match.previousText =
        'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text '
    })
  }
}
</script>
<template>
  <div id="container" v-if="championData">
    <div
      v-for="(match, index) in matchs"
      v-show="!match.hidden"
      class="card"
      :class="{
        preview: match.expanded == 0,
        resume: match.expanded == 1,
        expanded: match.expanded == 2,
        dangerEasy: match.danger === 'Fácil',
        dangerMedium: match.danger === 'Médio',
        dangerHard: match.danger === 'Difícil'
      }"
      :key="match.name"
      :style="{ backgroundImage: 'url(' + match.image + ')' }"
      @click="expandCard(match, index)"
    >
      <div class="cardPreview" v-show="match.expanded == 0">
        <p class="previewName">
          {{ match.name }}
        </p>
        <p class="previewDanger" :style="{ color: getDangerColor(match) }">
          {{ match.danger }}
        </p>
      </div>
      <div class="cardResume" v-show="match.expanded == 1">
        <p class="resumeText">
          {{ match.previousText }}
        </p>
      </div>
      <div class="cardExpanded" v-show="match.expanded == 2">
        <div class="expandedSpell" v-for="spell in championData.spells" :key="spell.name">
          <div class="spellHeader">
            <img class="headerImage" :src="getImageUrl(spell.image.full)" alt="" />
            <h1 class="headerName">{{ spell.name }}</h1>
          </div>
          <div>
            <p class="spellCooldown">Cooldown: {{ spell.cooldownBurn }}s</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#container {
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;

  border-radius: 20px;
  text-shadow: 0px 0px 15px black, 0px 0px 15px black, 0px 0px 15px black, 0px 0px 15px black,
    0px 0px 15px black, 0px 0px 15px black;
}

.card {
  background-size: cover;
  background-position: center;
  border: 2px solid var(--colorTheme);
  border-radius: 20px;
  color: white;
  cursor: pointer;
  height: min-content;
  padding: 10px;
  transition: 0.5s ease;
}
.card.preview {
  width: 100%;
  height: 100px;
}
.card.resume {
  grid-row: span 4;
  height: 100%;
  width: 100%;
}
.card.expanded {
  grid-row: span 4;
  grid-column: span 2;
  height: 100%;
  width: 100%;
}
.card.expanded:nth-child(5n) {
  grid-row: span 4;
  height: 100%;
  width: 100%;
}

.cardPreview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.previewName {
}
.previewDanger {
}

.cardResume {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 20px;
  font-size: 1rem;
  height: 100%;
  text-align: center;
}
.resumeText {
}

.cardExpanded {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 50%));
  grid-auto-columns: minmax(210px, 1vh);
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;

  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  height: 100%;
}
.expandedSpell {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.spellHeader {
  display: flex;
  align-items: center;
  gap: 5px;
}
.headerImage {
  height: 1.4rem;
}
.headerName {
  font-size: 1.4rem;
  text-align: center;
}
.spellCooldown {
  text-align: center;
}
.spellLevel {
}

.card.dangerEasy:hover {
  border: 2px solid var(--dangerEasy);
}
.card.dangerMedium:hover {
  border: 2px solid var(--dangerMedium);
}
.card.dangerHard:hover {
  border: 2px solid var(--dangerHard);
}
</style>
