import counterReducer from './counterSlice';
import todosReducer from './todosSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  }
});

export default store;