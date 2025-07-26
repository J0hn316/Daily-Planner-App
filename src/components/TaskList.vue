<template>
  <div class="space-y-4 mt-6">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle-complete="onToggleComplete"
      @delete-task="onDeleteTask"
    />
  </div>
</template>

<script setup lang="ts">
import type { Task } from '../types/task';
import TaskItem from './TaskItem.vue';

defineProps<{ tasks: Task[] }>();

const emit = defineEmits<{
  (evt: 'toggle-complete', id: number): void;
  (evt: 'delete-task', id: number): void;
}>();

const onToggleComplete = (id: number): void => emit('toggle-complete', id);
const onDeleteTask = (id: number): void => emit('delete-task', id);
</script>
