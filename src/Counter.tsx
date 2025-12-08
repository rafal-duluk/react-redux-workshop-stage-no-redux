import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/counterSlice';
import type { RootState, AppDispatch } from './store/store';

export default function Counter(): JSX.Element {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
