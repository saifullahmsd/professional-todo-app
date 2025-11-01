import { createSlice } from "@reduxjs/toolkit";

const getInitialTodos = () => {
  try {
    const localStore = localStorage.getItem("store");
    if (localStore) {
      const parsedStore = JSON.parse(localStore);
      if (parsedStore?.todos && Array.isArray(parsedStore.todos)) {
        return parsedStore.todos;
      }
    }
  } catch (e) {
    console.error("Failed to parse localStorage", e);
  }
  return [
    { id: "1", title: "Complete Task A", completed: false },
    { id: "2", title: "Read Books", completed: true },
  ];
};

const initialState = {
  todos: getInitialTodos(),
  loading: false,
  searchTerm: "",
  filter: "all", // 'all', 'active', 'completed'
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addTodo: (state, action) => {
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      const { id, completed } = action.payload;
      const todoToToggle = state.todos.find((todo) => todo.id === id);
      if (todoToToggle) {
        todoToToggle.completed = completed;
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const {
  setLoading,
  addTodo,
  deleteTodo,
  toggleCompleted,
  setSearchTerm,
  setFilter,
  clearCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
