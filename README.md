# 🗓️ Daily Planner App

A simple yet powerful daily task management app built with **Vue 3 + TypeScript + Tailwind CSS**. Tasks are grouped by date, and you can mark them as completed or delete them. All tasks are saved in the browser using `localStorage`.

---

## 🚀 Features

- ✅ Add new tasks with title, date, and optional description
- 📅 Tasks are grouped and displayed by selected date
- ✅ Mark tasks as completed (with visual styling)
- 🗑️ Delete completed tasks
- 💾 Tasks persist in browser using `localStorage`
- 🎯 Clean, responsive UI using Tailwind CSS
- 🔁 Reusable and composable architecture using Vue 3 Composition API
- 🧠 Written in **TypeScript** for strong type safety

---

## 🧱 Tech Stack

| Tech         | Purpose                        |
| ------------ | ------------------------------ |
| Vue 3        | Component structure & logic    |
| TypeScript   | Static typing & IntelliSense   |
| Tailwind CSS | Utility-first styling          |
| localStorage | Persistent client-side storage |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── PlannerForm.vue      # Form for task input
│   ├── TaskItem.vue         # UI for single task
│   └── TaskList.vue         # Groups and displays tasks by date
├── composables/
│   ├── useLocalStorage.ts   # Generic localStorage handler
│   └── useTasks.ts          # Composable for task logic
├── types/
│   └── task.ts              # Task interface definition
├── App.vue                  # Main app logic and task state
└── main.ts                  # App entry point
```

---

## ✨ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/J0hn316/Daily-Planner-App.git
cd daily-planner-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

### 4. Open in browser

Go to `http://localhost:5173`

---

## ✅ To-Do (Future Improvements)

- ✅ Group tasks by date (done)
- ✅ Polish task toggle/delete logic (done)
- ⏳ Add task filtering (e.g. show completed only)
- ⏳ Add local notifications or reminders
- ⏳ Add drag-and-drop reordering
- ⏳ Export/import tasks as JSON

---

## 🧠 Concepts Practiced

- `ref`, `computed`, `defineProps`, `defineEmits`
- Emitting events up to parent components
- Creating and consuming composables
- Managing state across components
- Custom localStorage logic with TypeScript generics

---

## 📘 License

## MIT — Free to use and modify
