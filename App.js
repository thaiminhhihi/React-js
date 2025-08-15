

import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);     
  const [newTodo, setNewTodo] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo App</h2>

    
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button
        onClick={() => {
          if (newTodo.trim() === "") return; 
          setTodos([...todos, { text: newTodo, done: false }]);
          setNewTodo(""); 
        }}
      >
        Thêm
      </button>

    
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ 
            textDecoration: todo.done ? "line-through" : "none" 
          }}>
            {todo.text}

         
            <button
              onClick={() => {
                const newTodos = [...todos];
                newTodos[index].done = !newTodos[index].done;
                setTodos(newTodos);
              }}
            >
              {todo.done ? "Hoàn tác" : "Hoàn thành"}
            </button>

         
            <button
              onClick={() => {
                const newTodos = todos.filter((_, i) => i !== index);
                setTodos(newTodos);
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
