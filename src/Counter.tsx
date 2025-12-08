import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './store/store';

export default function Counter(): JSX.Element {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: 'DECREMENT' } as any)}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' } as any)}>+</button>
    </div>
  );
}
