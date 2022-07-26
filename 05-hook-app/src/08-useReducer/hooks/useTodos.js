import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoReducer';

// custom hook
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};
export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add todo',
      payload: todo,
    };
    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    dispatch({
      type: '[TODO] Remove todo',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle todo',
      payload: id,
    });
  };

  return {
    todos,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    todosCount: todos.length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };
};
