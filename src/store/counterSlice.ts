import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 } as CounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
