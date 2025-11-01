import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TodoSkeleton from "./TodoSkeleton";
import EmptyState from "./EmptyState";

function TodoList() {
  const { todos, loading, searchTerm, filter } = useSelector(
    (state) => state.todo
  );

  const filteredTodos = useMemo(() => {
    let filtered = todos;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    switch (filter) {
      case "active":
        filtered = filtered.filter((todo) => !todo.completed);
        break;
      case "completed":
        filtered = filtered.filter((todo) => todo.completed);
        break;
      default:
        // 'all' - no additional filtering
        break;
    }

    return filtered;
  }, [todos, searchTerm, filter]);

  if (loading) {
    return <TodoSkeleton />;
  }

  if (filteredTodos.length === 0) {
    const emptyType = searchTerm ? "search" : filter;
    return <EmptyState type={emptyType} />;
  }

  return (
    <ul className="todos container">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
