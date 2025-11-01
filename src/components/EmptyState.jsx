import React from "react";

function EmptyState({ type = "all" }) {
  const getMessage = () => {
    switch (type) {
      case "active":
        return "No active todos! Great job!";
      case "completed":
        return "No completed todos yet.";
      case "search":
        return "No todos found matching your search.";
      default:
        return "No todos yet! Add one above to get started.";
    }
  };

  return (
    <div className="empty-state">
      <div className="empty-state-icon">📝</div>
      <p className="empty-state-text">{getMessage()}</p>
    </div>
  );
}

export default EmptyState;
