import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading}) {
  
  return (
    (loading)
    ?
      <h2 className={`TodoCounter`}>Cargando</h2>
    :
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    
  );
}

export { TodoCounter };
