import { ref, computed, type ComputedRef } from 'vue';
import type { Task } from '../types/task';

const tasks = ref<Task[]>([]);

// Generate unique IDs for tasks
let taskId = 1;

const useTasks = () => {
  // Add task
  const addTask = (title: string, date: string, description?: string): void => {
    const newTask: Task = {
      id: taskId++,
      title,
      date,
      description,
      completed: false,
    };
    tasks.value.push(newTask);
  };

  const toggleComplete = (id: number): void => {
    const task = tasks.value.find((t) => t.id === id);
    if (task) task.completed = !task.completed;
  };

  const deleteTask = (id: number): void => {
    tasks.value = tasks.value.filter((t) => t.id !== id);
  };

  const getTasksForDate = (date: string): ComputedRef<Task[]> => {
    return computed(() => tasks.value.filter((task) => task.date === date));
  };

  return {
    tasks,
    addTask,
    toggleComplete,
    deleteTask,
    getTasksForDate,
  };
};

export default useTasks;
