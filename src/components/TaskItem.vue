<template>
  <div
    class="bg-white p-4 rounded shadow flex justify-between items-start gap-4"
  >
    <div class="space-y-1">
      <p
        class="text-gray-500 flex items-center gap-1"
        :class="{ 'line-through': task.completed }"
      >
        <span>📅</span> {{ task.date }}
      </p>

      <h2
        class="text-lg font-semibold"
        :class="{ 'line-through': task.completed }"
      >
        {{ task.title }}
      </h2>

      <p class="text-gray-700" :class="{ 'line-through': task.completed }">
        {{ task.description }}
      </p>
    </div>

    <div class="flex flex-col items-end gap-2">
      <button
        @click="onToggleComplete(task.id)"
        class="bg-blue-400 text-white px-2 py-1 rounded hover:bg-blue-500 transition"
      >
        ✔️
      </button>

      <button
        v-if="task.completed"
        @click="onDeleteTask(task.id)"
        class="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500 transition"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '../types/task';

defineProps<{ task: Task }>();

const emit = defineEmits<{
  (evt: 'toggle-complete', id: number): void;
  (evt: 'delete-task', id: number): void;
}>();

const onToggleComplete = (id: number): void => emit('toggle-complete', id);
const onDeleteTask = (id: number): void => emit('delete-task', id);
</script>
