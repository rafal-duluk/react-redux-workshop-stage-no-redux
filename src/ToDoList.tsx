import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, REMOVE_TODO } from './store/todosReducer';
import type { RootState } from './store/store';

export default function TodoList(): JSX.Element {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.items);

  const handleAddTodo = () => {
    dispatch({ type: ADD_TODO, payload: 'Nowe zadanie' } as any);
  };

  const handleRemove = (index: number) => {
    dispatch({ type: REMOVE_TODO, payload: index } as any);
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Dodaj</button>
      <ul>
        {todos.map((task, i) => (
          <li key={i}>
            {task}
            <button onClick={() => handleRemove(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
