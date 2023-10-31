import React, { useState } from 'react';

const TareaFormulario = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Agregar nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TareaFormulario;
