<script setup></script>
<template>
  <header id="header">
    <a class="welcome" href="https://www.tiktok.com/@elohigher?lang=pt-BR" target="_blank">
      <div class="welcomeArea">
        <p class="welcomeAreaText">all about riven</p>
        <p class="welcomeAreaText">by @bielzin</p>
      </div>
    </a>
    <div class="headerPublicity">
      <img class="headerPublicityImg" src="../assets/icons/TikTok.png" alt="TikTok" />
      <p class="headerPublicityText">TikTok</p>
    </div>
  </header>
</template>
<style scoped>
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
  text-shadow: 0px 0px 3px var(--colorTheme), 0px 0px 3px var(--colorTheme),
    0px 0px 3px var(--colorTheme), 0px 0px 3px var(--colorTheme);
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
  font-size: 6rem;
  text-shadow: 0px 0px 5px var(--colorTheme), 0px 0px 5px var(--colorTheme),
    0px 0px 5px var(--colorTheme), 0px 0px 5px var(--colorTheme);
}
</style>
