<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    expandCard(card) {
      card.expanded = !card.expanded
      console.log(card)
    }
  }
}
</script>
<template></template>
<style scoped></style>
