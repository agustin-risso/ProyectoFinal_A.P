import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Tarea
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default ListaTareas;
