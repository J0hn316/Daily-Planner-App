<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 mb-6">
    <div>
      <label class="block text-sm font-medium">Title</label>
      <input
        v-model="title"
        type="text"
        placeholder="Task title"
        class="w-full px-3 py-2 border rounded"
      />
    </div>

    <div>
      <label class="block text-sm font-medium">Date</label>
      <input
        v-model="date"
        type="date"
        class="w-full px-3 py-2 border rounded"
      />
    </div>

    <div>
      <label class="block text-sm font-medium">Description</label>
      <textarea
        v-model="description"
        placeholder="Optional description"
        class="w-full px-3 py-2 border rounded"
      ></textarea>
    </div>

    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
    >
      Add Task
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useTasks from '../composables/useTask';

const { addTask } = useTasks();

// Reactive form inputs
const title = ref('');
const date = ref('');
const description = ref('');

const handleSubmit = (): void => {
  if (!title.value || !date.value) {
    alert('Title and date are required');
    return;
  }

  addTask(title.value, date.value, description.value);
  title.value = '';
  date.value = '';
  description.value = '';
};
</script>
