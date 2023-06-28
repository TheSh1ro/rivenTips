<script>
import axios from 'axios'

export default {
  data() {
    return {
      championsJSON: null,
      championKeys: [] // Array para armazenar as chaves
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios
        .get('http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion.json')
        .then((response) => {
          this.championsJSON = response.data.data
          this.championKeys = Object.keys(this.championsJSON.Ahri) // Obter as chaves do objeto
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<template>
  <div v-if="championsJSON">
    <div v-for="champion in championsJSON" :key="champion.name">
      <p>{{ champion.name }} {{ champion.id }} {{ champion.role }}</p>
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
