import React from "react";

function TodoSkeleton() {
  return (
    <div className="skeleton-container">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="skeleton-todo">
          <div className="skeleton-line skeleton-title"></div>
          <div className="skeleton-actions">
            <div className="skeleton-line skeleton-checkbox"></div>
            <div className="skeleton-line skeleton-button"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoSkeleton;
