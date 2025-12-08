const initialState = 0;

type CounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: string };

export default function counterReducer(state = initialState, action: CounterAction): number {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
