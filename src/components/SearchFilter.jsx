import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchTerm,
  setFilter,
  clearCompleted,
} from "../store/slices/todoSlice";

function SearchFilter() {
  const dispatch = useDispatch();
  const { searchTerm, filter, todos } = useSelector((state) => state.todo);

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className="search-filter-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      <div className="filter-controls">
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All ({todos.length})
          </button>
          <button
            className={`filter-btn ${filter === "active" ? "active" : ""}`}
            onClick={() => handleFilterChange("active")}
          >
            Active ({activeCount})
          </button>
          <button
            className={`filter-btn ${filter === "completed" ? "active" : ""}`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed ({completedCount})
          </button>
        </div>

        {completedCount > 0 && (
          <button
            className="clear-completed-btn"
            onClick={handleClearCompleted}
          >
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchFilter;
