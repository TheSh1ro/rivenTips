<script>
import axios from 'axios'

export default {
  data() {
    return {
      championData: null,
      testVar: null
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios
        .get('https://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion/Garen.json')
        .then((response) => {
          this.championData = response.data.data.Garen
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getImageUrl(imageName) {
      const imageBaseUrl = 'https://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/'
      return imageBaseUrl + imageName
    }
  }
}
</script>

<template>
  <div id="main" v-if="championData">
    <div class="championSpell" v-for="spell in championData.spells" :key="spell.name">
      <div class="spellTitle">
        <img class="spellImage" :src="getImageUrl(spell.image.full)" alt="" />
        <h1 class="spellName">{{ spell.name }}</h1>
      </div>
      <div class="spellBody">
        <p class="spellCooldown">Cooldowns: {{ spell.cooldown }}</p>
        <p class="spellDescription">Descrição: {{ spell.description }}</p>
      </div>
    </div>
  </div>
</template>

<style>
#main {
  display: flex;
  flex-direction: column;
  gap: 5vh;

  color: var(--colorTheme);
}

.championSpell {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.spellTitle {
  display: flex;
  gap: 10px;
}
.spellBody {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.spellName {
  color: var(--dangerHard);
}

#json {
  margin-block: 5vh;
}
</style>
