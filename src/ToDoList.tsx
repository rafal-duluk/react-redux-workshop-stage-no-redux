import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './store/todosSlice';
import type { RootState, AppDispatch } from './store/store';

export default function TodoList(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos);

  const handleAddTodo = () => {
    dispatch(addTodo('Nowe zadanie'));
  };

  const handleRemove = (index: number) => {
    dispatch(removeTodo(index));
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
