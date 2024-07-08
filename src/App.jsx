import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css'

function App() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if(!newTodo){
      return
    }
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div>
      <h1
        className="block text-purple-900 m-5"
      >Todos :)</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggleTodo(todo.id)}>
            {todo.completed ? <del>{todo.text}</del> : todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)} className="bg-red-500 hover:bg-red-700 m-2 text-white font-bold py-2 px-4 rounded text-sm">Delete</button>
          </li>
        ))}
      </ul>
      <input 
        type="text" 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="block w-full rounded-md border-0 p-4 m-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:text-purple-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default App;
