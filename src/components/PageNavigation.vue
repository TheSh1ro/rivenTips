<script setup></script>
<template>
  <navigation id="navigation">
    <a class="navigationButton" href="https://discord.gg/MpWnCWw54s" target="_blank">
      <img class="navigationButtonImg" src="../assets/icons/discord.png" alt="" />
      <p>Discord</p>
    </a>
    <a class="navigationButton" href="https://twitter.com/thesh1ro_" target="_blank">
      <img class="navigationButtonImg" src="../assets/icons/twitter.png" alt="" />
      <p>Twitter</p>
    </a>
    <a class="navigationButton" href="#">
      <img class="navigationButtonImg" src="../assets/icons/riven.png" alt="" />
      <p>Sh1roJobs</p>
    </a>
  </navigation>
</template>
<style scoped>
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
  border: 1px solid var(--colorTheme);
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

.navigationButtonImg {
  height: 30px;
}
</style>
