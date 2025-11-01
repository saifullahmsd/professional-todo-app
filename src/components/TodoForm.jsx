import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setLoading } from "../store/slices/todoSlice";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.todo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "" || isSubmitting) return;

    setIsSubmitting(true);
    dispatch(setLoading(true));

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    dispatch(addTodo({ title: title }));
    setTitle("");

    dispatch(setLoading(false));
    setIsSubmitting(false);
  };

  return (
    <form id="form" className="form container" onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo-title-input"
        className="todo-title-input"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isSubmitting || loading}
      />
      <button
        type="submit"
        className="todo-form-button"
        disabled={isSubmitting || loading || title.trim() === ""}
      >
        {isSubmitting ? "Adding..." : "Add"}
      </button>
    </form>
  );
}

export default TodoForm;
