<template>
  <div>
    <div v-for="(taskGroup, date) in groupedTasks" :key="date" class="mb-6">
      <h2 class="text-xl font-semibold mb-2 border-b pb-1">
        📅 {{ formatDate(date) }}
      </h2>
      <div class="space-y-2">
        <TaskItem
          v-for="task in taskGroup"
          :key="task.id"
          :task="task"
          @toggle-complete="onToggleComplete"
          @delete-task="onDeleteTask"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import TaskItem from './TaskItem.vue';
import type { Task } from '../types/task';

const props = defineProps<{ tasks: Task[] }>();

const emit = defineEmits<{
  (evt: 'toggle-complete', id: number): void;
  (evt: 'delete-task', id: number): void;
}>();

const onToggleComplete = (id: number): void => emit('toggle-complete', id);
const onDeleteTask = (id: number): void => emit('delete-task', id);

const groupedTasks = computed(() => {
  const groups: Record<string, Task[]> = {};
  props.tasks.forEach((task) => {
    if (!groups[task.date]) {
      groups[task.date] = [];
    }
    groups[task.date].push(task);
  });
  return groups;
});

const formatDate = (dateStr: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};
</script>
