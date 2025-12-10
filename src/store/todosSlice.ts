import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as string[],
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<number>) {
      return state.filter((_, i) => i !== action.payload); //zwracam nowy stan; nie korzystam z Immera
      // state.splice(action.payload, 1); //mutowanie stanu dzięki Immer
    }
  }
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
