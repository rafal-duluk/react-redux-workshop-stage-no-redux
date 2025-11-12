import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO } from './store/todosReducer';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);

  const handleAddTodo = () => {
    dispatch({ type: ADD_TODO, payload: "Nowe zadanie" });
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Dodaj</button>
      <ul>
        {todos.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}