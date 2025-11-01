import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../store/slices/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = (e) => {
    dispatch(toggleCompleted({ id: todo.id, completed: e.target.checked }));
  };

  return (
    <li className="todo" data-id={todo.id}>
      <span className={`todo-title ${todo.completed ? "completed" : ""}`}>
        {todo.title}
      </span>
      <div className="toggle-delete">
        <input
          type="checkbox"
          name="completed"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <button className="delete-todo-button" onClick={handleDelete}>
          x
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
