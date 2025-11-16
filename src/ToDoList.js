import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './store/todosSlice';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleAddTodo = () => {
    dispatch(addTodo("Nowe zadanie"));
  };

  const handleRemove = (index) => {
    dispatch(removeTodo(index))
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