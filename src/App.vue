<template>
  <main class="min-h-screen bg-gray-100 p-4 max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-4 flex items-center gap-2">
      📅 Daily Planner
    </h1>

    <!-- Task Form -->
    <PlannerForm @add-task="addTask" />

    <!-- Task List or Placeholder -->
    <div class="mt-6">
      <TaskList
        v-if="tasks.length > 0"
        :tasks="tasks"
        @toggle-complete="toggleComplete"
        @delete-task="deleteTask"
      />
      <div
        v-else
        class="text-gray-500 text-center italic bg-white rounded p-6 shadow"
      >
        No tasks yet. Add one above ☝️
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from './types/task';
import PlannerForm from './components/PlannerForm.vue';
import TaskList from './components/TaskList.vue';

const tasks = ref<Task[]>([]);

// Add new task
const addTask = (task: Task) => {
  tasks.value.push(task);
};

// Toggle completion status
const toggleComplete = (id: number) => {
  const task = tasks.value.find((t) => t.id === id);
  if (task) task.completed = !task.completed;
};

// Delete task
const deleteTask = (id: number) => {
  tasks.value = tasks.value.filter((t) => t.id !== id);
};
</script>
