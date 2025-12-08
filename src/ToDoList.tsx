import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, fetchTodos, TodosState } from './store/todosSlice';
import type { RootState, AppDispatch } from './store/store';

export default function TodoList(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const todosState = useSelector((state: RootState) => state.todos) as TodosState;

  const handleAddTodo = () => {
    const ms = new Date().getMilliseconds();
    dispatch(addTodo(`Nowe zadanie ${ms}`));
  };

  const handleRemove = (index: number) => {
    dispatch(removeTodo(index));
  };

  const handleFetch = () => {
    dispatch(fetchTodos());
  };

  const handleRetry = () => {
    dispatch(fetchTodos());
  };

  return (
    <div>
      <button onClick={handleFetch} disabled={todosState.status === 'loading'}>
        {todosState.status === 'loading' ? 'Ładowanie...' : 'Pobierz TODOs'}
      </button>
      <p></p>
      <button onClick={handleAddTodo}>Dodaj</button>
      {todosState.error && (
        <div style={{color: 'red'}}>
          Błąd: {todosState.error} <button onClick={handleRetry}>Retry</button>
        </div>
      )}

      {todosState.status === 'loading' ? (
        <ul>
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} style={{opacity: 0.6}}>
              <div style={{background: '#eee', height: 12, width: 200, marginBottom: 6}} />
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {todosState.items.map((task, i) => (
            <li key={i}>
              {task}
              <button onClick={() => handleRemove(i)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
