<template>
  <form
    @submit.prevent="handleSubmit"
    class="space-y-4 bg-white p-4 rounded shadow"
  >
    <div>
      <label class="block font-semibold mb-1">Title</label>
      <input
        v-model="title"
        type="text"
        class="w-full border px-3 py-2 rounded"
      />
    </div>
    <div>
      <label class="block font-semibold mb-1">Date</label>
      <input
        v-model="date"
        type="date"
        class="w-full border px-3 py-2 rounded"
        required
      />
    </div>
    <div>
      <label class="block font-semibold mb-1">Description</label>
      <textarea
        v-model="description"
        class="w-full border px-3 py-2 rounded"
        rows="3"
        placeholder="Optional description..."
      >
      </textarea>
    </div>
    <button
      type="submit"
      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      Add Task
    </button>
  </form>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { Task } from '../types/task';

const emit = defineEmits<{
  (e: 'add-task', task: Task): void;
}>();

// Reactive form inputs
const title = ref('');
const date = ref('');
const description = ref('');

const handleSubmit = (): void => {
  if (!title.value || !date.value) {
    alert('Title and date are required');
    return;
  }

  const newTask: Task = {
    id: Date.now(),
    title: title.value,
    date: date.value,
    description: description.value,
    completed: false,
  };

  emit('add-task', newTask);

  title.value = '';
  date.value = '';
  description.value = '';
};
</script>
