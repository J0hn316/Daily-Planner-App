<template>
  <main class="min-h-screen bg-gray-100 p-4 max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">🗓️ Daily Planner</h1>
    <PlannerForm @add-task="addTask" />

    <TaskInput @add-task="addTask" />
    <pre class="mt-6 bg-white p-4 rounded shadow">
      {{ tasks }}
    </pre>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PlannerForm from './components/PlannerForm.vue';
import TaskInput from './components/TaskInput.vue';
import type { Task } from './types/task';

const tasks = ref<Task[]>([]);

const addTask = (task: Task) => {
  tasks.value.push(task);
};
</script>
