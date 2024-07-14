<template>
  <div class="item">
    <span class="id"> {{ todo.id }}</span>
    <input type="text" :value="todo.title" />
    <button @click="del(todo.id)">删除</button>
  </div>
</template>

<script setup>
import useTodo from '@/composables/useTodo';
const { todo } = defineProps({ todo: { type: Object, required: true } });
const { del } = useTodo();
</script>

<style lang="scss">
div.item {
  display: flex;
  .id {
    flex-basis: 30px;
    align-self: center;
    padding: 5px 10px;
  }
  input {
    flex: 1;
    padding: 10px;
  }
  button {
    margin-left: 10px;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 5px 10px;
  }
}
</style>
