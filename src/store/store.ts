import { createStore, combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
