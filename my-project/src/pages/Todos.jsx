// src/pages/Todos.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  return (
    <div className="page">
      <h2>Todos List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.completed ? "✅ Done" : "❌ Not Done"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
