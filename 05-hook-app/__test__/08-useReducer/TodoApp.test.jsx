import { render, screen } from '@testing-library/react';
import { useTodos } from '../../src/08-useReducer/hooks/useTodos';
import { TodoApp } from '../../src/08-useReducer/TodoApp';

jest.mock('../../src/08-useReducer/hooks/useTodos');
describe('Testing on <TodoApp/>', () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: 'New TODO #3', done: false },
      { id: 2, description: 'New TODO four #4', done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });
  test('should display the component correctly', () => {
    render(<TodoApp />);
    expect(screen.getByText('New TODO #3')).toBeTruthy();
    expect(screen.getByText('New TODO four #4')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
    // screen.debug();
  });
});
