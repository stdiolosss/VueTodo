<template>
  <div>
    <suspense>
      <template #default><Todo /></template>
      <template #fallback>Loading...</template>
    </suspense>
  </div>
</template>

<script setup>
import Todo from './views/Todo.vue';
</script>

<style lang="scss" scoped>
div {
  color: #fff;
}
</style>
