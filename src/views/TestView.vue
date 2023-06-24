<template>
  <div id="app">
    <button @click="addItem">Adicionar Item</button>
    <button @click="removeItem">Remover Item</button>
    <grid-layout
      :layout.sync="layout"
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
      <grid-item v-for="item in items" :key="item.name" :x="item.x" :y="item.y" :w="item.w" :h="item.h">
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
      layout: [],
      items: [
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
        name: `Item ${this.items.length + 1}`,
        x: 0,
        y: this.layout.length,
        w: 1,
        h: 1
      };
      this.items.push(newItem);
      this.layout.push(newItem);
    },
    removeItem() {
      this.items.pop();
      this.layout.pop();
    }
  }
};
</script>
