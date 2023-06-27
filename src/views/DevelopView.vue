<template>
  <div>
    <button @click="fetchData">Obter dados</button>
    <div v-if="championData">
      <h1>{{ championData.name }}</h1>
      <p>{{ championData.title }}</p>
      <!-- Exiba outros dados conforme necessário -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      championData: null,
    };
  },
  methods: {
    fetchData() {
      axios.get('https://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion/Riven.json')
        .then(response => {
          this.championData = response.data.data.Riven;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
