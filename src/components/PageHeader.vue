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
      <img class="headerPublicityImage" src="../assets/icons/TikTok.png" alt="TikTok" />
      <p class="headerPublicityText">see on TikTok</p>
    </div>
  </header>
</template>
<style scoped>
#header {
  height: 500px;

  display: grid;
  grid-template-rows: 1fr 10%;

  background-image: url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_55.jpg);
  background-size: cover;

  border-radius: 20px;
  border: 1px solid var(--colorHeader);
  text-shadow: 0px 0px 5px var(--colorHeader), 0px 0px 5px var(--colorHeader), 0px 0px 5px var(--colorHeader), 0px 0px 5px var(--colorHeader),
    0px 0px 5px var(--colorHeader), 0px 0px 5px var(--colorHeader);
  color: white;
}
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
}
.headerPublicity {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: rgba(255, 255, 255, 0.3);
  font-size: 1.3rem;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.headerPublicityImage {
  height: 60%;
}
</style>
