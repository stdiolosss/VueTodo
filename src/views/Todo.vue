<template>
  <div class="todo">
    <div class="form">
      <Add class="add" />
      <Sort />
    </div>
    <Item class="item" v-for="todo of todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup>
import Add from '../components/Add.vue';
import Sort from '../components/Sort.vue';
import Item from '../components/Item.vue';
import useTodo from '../composables/useTodo';
const { todos, load } = useTodo();
load();
</script>

<style lang="scss">
div.form {
  display: flex;
  .add {
    flex: 1;
  }
  margin-bottom: 10px;
}
div.todo {
  display: flex;
  flex-direction: column;
  .item {
    margin-bottom: 10px;
  }
}
</style>
