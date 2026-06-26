import React from "react";
import "./TodoItem.css";

export default function TodoItem({ todo, onDelete }) {
  return (
    <div className="todo-card">
      
      <div className="todo-content">
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
      </div>

      <div className="todo-actions">
        <button 
          className="delete-btn"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
      </div>

    </div>
  );
}