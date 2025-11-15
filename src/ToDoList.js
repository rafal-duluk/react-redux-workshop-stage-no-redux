import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, REMOVE_TODO } from './store/todosReducer';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);

  const handleAddTodo = () => {
    dispatch({ type: ADD_TODO, payload: "Nowe zadanie" });
  };

  const handleRemove = (index) => {
    dispatch({ type: REMOVE_TODO, payload: index })
  }

  return (
    <div>
      <button onClick={handleAddTodo}>Dodaj</button>
      <ul>
        {todos.map((task, i) => (
          <li key={i}>
            {task}
            <button onClick={() => handleRemove(i)}>Remove</button>
          </li>
          ))}
      </ul>
    </div>
  );
}