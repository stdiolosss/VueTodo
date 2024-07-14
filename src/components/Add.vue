<template>
  <div class="add">
    <input type="text" v-model="title" placeholder="请输入任务内容,回车提交任务" @keyup.enter="onSubmit" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useTodo from '../composables/useTodo';
const { add } = useTodo();
const title = ref('');
const onSubmit = () => {
  add({ title: title.value });
  title.value = '';
};
</script>

<style lang="scss">
div.add {
  display: flex;
  input {
    flex: 1;
    border: 5px solid #2ecc71;
    padding: 10px;
  }
}
</style>
