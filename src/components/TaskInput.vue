<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 mb-6">
    <input
      v-model="newTaskTitle"
      type="text"
      placeholder="Enter a task..."
      class="p-2 border rounded"
      required
    />
    <input
      v-model="newTaskDate"
      type="date"
      class="p-2 border rounded"
      required
    />
    <button
      type="submit"
      class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
    >
      Add Task
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from '../types/task';

const emit = defineEmits<{ (evt: 'add-task', task: Task): void }>();

const newTaskTitle = ref('');
const newTaskDate = ref('');

// Generate a unique ID using timestamp
const handleSubmit = (): void => {
  if (!newTaskTitle.value || !newTaskDate.value) return;

  const newTask: Task = {
    id: Date.now(),
    title: newTaskTitle.value,
    date: newTaskDate.value,
    completed: false,
  };

  emit('add-task', newTask);

  // Clear the input fields
  newTaskTitle.value = '';
  newTaskDate.value = '';
};
</script>
