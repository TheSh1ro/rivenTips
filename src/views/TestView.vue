<template>
  <div id="app">
    <button @click="addItem">Adicionar Item</button>
    <button @click="removeItem">Remover Item</button>
    <grid-layout
      v-model="layout"
      :col-num="4"
      :row-height="100"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
      :responsive="true"
    >
      <grid-item v-for="(item, index) in layout" :key="index" :x="item.x" :y="item.y" :w="item.w" :h="item.h">
        {{ item.name }}
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import GridLayout from 'vue-grid-layout';

export default {
  components: {
    GridLayout
  },
  data() {
    return {
      layout: [
        { name: 'Item 1', x: 0, y: 0, w: 1, h: 1 },
        { name: 'Item 2', x: 1, y: 0, w: 1, h: 1 },
        { name: 'Item 3', x: 2, y: 0, w: 1, h: 1 },
        { name: 'Item 4', x: 3, y: 0, w: 1, h: 1 }
      ]
    };
  },
  methods: {
    addItem() {
      const newItem = {
        name: `Item ${this.layout.length + 1}`,
        x: 0,
        y: this.layout.length,
        w: 1,
        h: 1
      };
      this.layout.push(newItem);
    },
    removeItem() {
      this.layout.pop();
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

button {
  margin-bottom: 10px;
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
