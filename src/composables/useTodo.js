import { ref, watch } from 'vue';
import useRequest from './useRequest';
const todos = ref([]);
const orderBy = ref('asc');
export default () => {
  const request = useRequest();
  const load = async () => {
    todos.value = await request.get();
    sort();
  };
  const del = async (id) => {
    await request.delete(id);
    load();
  };
  const add = async (data) => {
    data.id = Math.max(...todos.value.map((item) => parseInt(item.id))) + 1;
    await request.add(data);
    load();
  };
  const sort = () => {
    todos.values = Array.prototype.sort.call(todos.value, (a, b) => {
      return orderBy.value === 'asc' ? a.id - b.id : b.id - a.id;
    });
  };
  watch(orderBy, () => {
    sort();
  });
  return { todos, load, del, add, orderBy };
};
