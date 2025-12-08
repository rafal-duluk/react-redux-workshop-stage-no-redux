export interface TodosState {
  items: string[];
}

const initialState: TodosState = {
  items: [],
};

// Actions
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

type AddTodoAction = { type: typeof ADD_TODO; payload: string };
type RemoveTodoAction = { type: typeof REMOVE_TODO; payload: number };
type TodosAction = AddTodoAction | RemoveTodoAction;

// Reducer
export default function todosReducer(
  state = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
}
