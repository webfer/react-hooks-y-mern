import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Testing on todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];
  test('should return the initial state', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('should add a TODO', () => {
    const action = {
      type: '[TODO] Add todo',
      payload: {
        id: 2,
        description: 'New todo #2',
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });
  test('should remove a TODO', () => {
    const action = {
      type: '[TODO] Remove todo',
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test('should done togle', () => {
    const action = {
      type: '[TODO] Toggle todo',
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
