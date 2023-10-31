import React, { useState } from 'react';
import ListaTareas from './components/ListaTareas';
import TareaFormulario from './components/TareaFormulario';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div id='container'>
      <h1>Lista de Tareas</h1>
      <TareaFormulario addTodo={addTodo} />
      <ListaTareas todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
