<script>
export default {
  data() {
    return {
      linkTo: 'desenvolvimento'
    }
  },
  methods: {
    toggleLinkTo() {
      this.linkTo = this.linkTo === 'desenvolvimento' ? '/' : 'desenvolvimento'
    }
  }
}
</script>

<template>
  <div id="navigation">
    <a class="navigationButton" href="https://discord.gg/MpWnCWw54s" target="_blank">
      <img class="navigationButtonImg" src="../assets/icons/discord.png" alt="" />
      <p>Discord</p>
    </a>
    <a class="navigationButton" href="https://twitter.com/thesh1ro_" target="_blank">
      <img class="navigationButtonImg" src="../assets/icons/twitter.png" alt="" />
      <p>Twitter</p>
    </a>
    <a
      class="navigationButton"
      href="https://ggmax.com.br/anuncio/sh1ro-elojobs-league-of-legends"
      target="_blank"
    >
      <img class="navigationButtonImg" src="../assets/icons/riven.png" alt="" />
      <p>Sh1roJobs</p>
    </a>
    <RouterLink @click="toggleLinkTo" :to="linkTo" class="navigationButton">
      <img
        class="navigationButtonImg"
        alt=""
        src="https://www.adobe.com/br/express/create/media_114db2401080d263d7338e6fab6589ca67f85274c.jpeg?width=400&format=jpeg&optimize=medium"
      />
      <p>Ir para Início</p>
    </RouterLink>
  </div>
</template>

<style scoped>
#navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px;
  min-height: 10vh;
}

.navigationButton {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--colorTheme);
  background-color: var(--invisible);
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

.navigationButtonImg {
  height: 30px;
}
</style>
