import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchFilter from "./components/SearchFilter";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <h1 className="heading">Todo List</h1>
      <TodoForm />
      <SearchFilter />
      <TodoList />
    </div>
  );
}

export default App;
