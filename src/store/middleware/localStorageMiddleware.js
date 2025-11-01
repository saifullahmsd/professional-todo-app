export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  try {
    const state = store.getState();
    const todos = state.todo.todos;
    localStorage.setItem("store", JSON.stringify({ todos: todos }));
  } catch (e) {
    console.error("Failed to save to localStorage", e);
  }
  return result;
};
