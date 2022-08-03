import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/components/TodoItem';

describe('Testing on <TodoItem/>', () => {
  const todo = {
    id: 1,
    description: "Soul's stone",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks;
  });

  test('should show the TODO to be completed', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');

    // console.log(liElement.innerHTML);
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');
    // console.log(spanElement.className);
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('should show the completed TODO ', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    // console.log(spanElement.className);
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('should called toggleTodo, when you click on the span', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    // screen.debug();
  });

  test('should called onDeleteTodo by  button', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const btnElement = screen.getByLabelText('button');
    fireEvent.click(btnElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    // screen.debug();
  });
});
