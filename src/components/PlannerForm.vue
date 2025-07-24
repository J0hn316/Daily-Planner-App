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
      <label class="block font-semibold mb-1">Description</label>
      <textarea
        v-model="description"
        class="w-full border px-3 py-2 rounded"
        rows="3"
        placeholder="Optional notes..."
      >
      </textarea>
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
    <button
      type="submit"
      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      Add Task
    </button>
  </form>
</template>
<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import type { Task } from '../types/task';

const emit = defineEmits<{ (event: 'add-task', task: Task): void }>();

const title = ref('');
const description = ref('');
const date = ref('');

const handleSubmit = (): void => {
  const task: Task = {
    id: Date.now(),
    title: title.value,
    description: description.value || undefined,
    date: date.value,
    completed: false,
  };

  emit('add-task', task);

  // clear form
  title.value = '';
  description.value = '';
  date.value = '';
};
</script>
