const initialState = {
  items: []
};

// Akcje
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Reducer
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter((_, i) => i !== action.payload)
      };

    default:
      return state;
  }
}