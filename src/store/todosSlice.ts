import { createSlice, PayloadAction, createAsyncThunk, ActionReducerMapBuilder, WritableDraft } from '@reduxjs/toolkit';

export interface TodosState {
  items: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

const initialState: TodosState = {
  items: [],
  status: 'idle',
  error: null,
};

// Funkcja thunk wywołyjąca trzy różne typy akcji, odpowiadające trzem stanom cyklu życia operacji asynchronicznej
export const fetchTodos = createAsyncThunk<string[], void, { rejectValue: string }>(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    try {
      const res = await fetch(url);
      if (!res.ok) return rejectWithValue('Network response was not ok');
      const data = await res.json();
      return data.map((t: any) => String(t.title));
    } catch (err: any) {
      return rejectWithValue(String(err?.message ?? err));
    }
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state: WritableDraft<TodosState>, action: PayloadAction<string>) {
      state.items.push(action.payload);
    },
    removeTodo(state: WritableDraft<TodosState>, action: PayloadAction<number>) {
      state.items = state.items.filter((_, i) => i !== action.payload);
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<TodosState>) => {
    builder
      .addCase(fetchTodos.pending, (state: WritableDraft<TodosState>) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state: WritableDraft<TodosState>, action: PayloadAction<string[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state: WritableDraft<TodosState>, action) => {
        state.status = 'failed';
        state.error = (action.payload as string) ?? action.error.message ?? 'Failed to fetch';
      });
  }
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
