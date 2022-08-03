import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Testing on component <LoginPage/>', () => {
  const user = {
    id: 123,
    name: 'Jhon Daril',
    email: 'daril@pm.me',
  };

  const setUserMock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks;
  });
  test('should display user null on pre Tag', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
    // screen.debug();
  });

  test('should display component with user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(`${user.id}`);
    // screen.debug();
  });

  test('should called setUser on click button', () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const btnUser = screen.getByLabelText('button');
    fireEvent.click(btnUser);
    expect(setUserMock).toHaveBeenCalledWith({
      email: 'dare@pm.me',
      id: 123,
      name: 'Jhon Dare',
    });
    // screen.debug();
  });
});
