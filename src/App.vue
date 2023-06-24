<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      matchs: [
        {
          image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/centered/Aatrox_0.jpg',
          name: 'Aatrox',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Akshan_0.jpg',
          name: 'Akshan',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Camille_0.jpg',
          name: 'Camille',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Chogath_0.jpg',
          name: 'Cho Gath',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Darius_0.jpg',
          name: 'Darius',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/DrMundo_0.jpg',
          name: 'Dr. Mundo',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Fiora_0.jpg',
          name: 'Fiora',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Gangplank_0.jpg',
          name: 'Gang Plank',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Garen_0.jpg',
          name: 'Garen',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Gnar_0.jpg',
          name: 'Gnar',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Irelia_0.jpg',
          name: 'Irélia',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Jax_0.jpg',
          name: 'Jax',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Jayce_0.jpg',
          name: 'Jayce',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kayle_0.jpg',
          name: 'Kayle',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kennen_0.jpg',
          name: 'Kennen',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Kled_0.jpg',
          name: 'Kled',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/KSante_0.jpg',
          name: 'KSante',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Malphite_0.jpg',
          name: 'Malphite',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Maokai_0.jpg',
          name: 'Maokai',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Nasus_0.jpg',
          name: 'Nasus',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ornn_0.jpg',
          name: 'Ornn',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yorick_0.jpg',
          name: 'Yorick',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Poppy_0.jpg',
          name: 'Poppy',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Quinn_0.jpg',
          name: 'Quinn',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Renekton_0.jpg',
          name: 'Renekton',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Rengar_0.jpg',
          name: 'Rengar',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Riven_0.jpg',
          name: 'Riven',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Sett_0.jpg',
          name: 'Sett',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Shen_0.jpg',
          name: 'Shen',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Singed_0.jpg',
          name: 'Singed',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Sion_0.jpg',
          name: 'Sion',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Teemo_0.jpg',
          name: 'Teemo',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Trundle_0.jpg',
          name: 'Trundle',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Tryndamere_0.jpg',
          name: 'Tryndamere',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Urgot_0.jpg',
          name: 'Urgot',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vladimir_0.jpg',
          name: 'Vladimir',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Volibear_0.jpg',
          name: 'Volibear',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/MonkeyKing_0.jpg',
          name: 'Wukong',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yasuo_0.jpg',
          name: 'Yasuo',
          previousText: 'Prévia da Matchup'
        },
        {
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yone_0.jpg',
          name: 'Yone',
          previousText: 'Prévia da Matchup'
        }
      ]
    }
  }
}
</script>

<template>
  <navigation id="navigation">
    <div class="navigationButton">
      <a href="https://twitter.com/thesh1ro_" target="_blank">Discord</a>
      <img src="./components/icons/discord.png" alt="" />
    </div>
    <div class="navigationButton">
      <a href="https://discord.gg/MpWnCWw54s" target="_blank">Twitter</a>
      <img src="./components/icons/twitter.png" alt="" />
    </div>
    <div class="navigationButton">
      <p>Sh1roJobs</p>
      <img src="./components/icons/riven.png" alt="" />
    </div>
  </navigation>
  <header id="header">
    <div class="welcome">
      <div class="welcomeArea">
        <p class="welcomeAreaText">all about riven</p>
        <p class="welcomeAreaText">by @bielzin</p>
      </div>
    </div>
    <div class="headerPublicity">
      <p class="headerPublicityText">TikTok</p>
      <img class="headerPublicityImg" src="./components/icons/TikTok.png" alt="TikTok" />
    </div>
  </header>
  <main id="main">
    <div
      class="matchCard"
      v-for="match in matchs"
      :key="match.name"
      :style="{ backgroundImage: 'url(' + match.image + ')' }"
    >
      <h1 class="matchCardName">{{ match.name }}</h1>
      <!-- <p class="matchCardPrevious">{{ match.previousText }}</p> -->
      <p class="matchCardPrevious">Fácil</p>
    </div>
  </main>
</template>

<style>
* {
  list-style-type: none;
  color: inherit;
  margin: 0px;
  padding: 0px;
  text-decoration: inherit;
}
body {
  font-weight: normal;
  font-size: 16px;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  padding-inline: 4vw;
}
:root {
  --colorTheme: rgb(207, 79, 96);
}

#navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 5vh 22vw;
  color: white;
  gap: 2vw;
}
.navigationButton {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* border: 1px solid rgba(0, 0, 0, 0); */
  border: 1px solid var(--colorTheme);
  /* background-color: var(--colorTheme); */
  background-color: rgba(0, 0, 0, 0);
  border-radius: 15px;
  text-shadow: 0px 0px 5px var(--colorTheme), 0px 0px 5px var(--colorTheme),
    0px 0px 5px var(--colorTheme), 0px 0px 5px var(--colorTheme);
  padding: 10px;
}
.navigationButton:hover {
  cursor: pointer;
  box-shadow: 0px 0px 20px 2px var(--colorTheme);
  border: 1px solid var(--colorTheme);
}
.navigationButton > img {
  height: 30px;
}

#header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Riven_55.jpg);
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0);
  flex: 1;
}
#header:hover {
  cursor: pointer;
  box-shadow: 0px 0px 20px 2px var(--colorTheme);
  border: 1px solid var(--colorTheme);
}
.headerPublicity {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: rgba(255, 255, 255, 0.3);
  flex: 1;
  gap: 5px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.headerPublicityImg {
  height: 20px;
}
.headerPublicityText {
  font-size: 1.2rem;
  font-weight: bolder;
}

.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcomeAreaText {
  font-size: 7rem;
  text-shadow: 0px 0px 5px var(--colorTheme), 0px 0px 5px var(--colorTheme),
    0px 0px 5px var(--colorTheme), 0px 0px 5px var(--colorTheme);
}

#main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-block: 5vh;
}

.matchCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--colorTheme);
  border: 1px solid rgba(0, 0, 0, 0);
  background-size: cover;
  background-position: center;
  padding-block: 2vh;
  border-radius: 20px;
  box-shadow: 3px 2px 5px 0px black;
}

.matchCard:hover {
  cursor: pointer;
  box-shadow: 3px 2px 5px 0px var(--colorTheme);
  border: 1px solid var(--colorTheme);
}

.matchCardName {
  color: white;
  text-shadow: 0px 0px 5px var(--colorTheme), 0px 0px 5px var(--colorTheme),
    0px 0px 5px var(--colorTheme), 0px 0px 5px var(--colorTheme), 0px 0px 5px var(--colorTheme),
    0px 0px 5px var(--colorTheme);
}

.matchCardPrevious {
  color: white;
}
</style>
