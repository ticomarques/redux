import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css'

function App() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggleTodo(todo.id)}>
            {todo.completed ? <del>{todo.text}</del> : todo.text}
          </li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default App;
