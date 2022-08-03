const { render, screen } = require('@testing-library/react');
const { UserContext } = require('../../src/09-useContext/context/UserContext');
const { HomePage } = require('../../src/09-useContext/HomePage');

describe('Testing on comonent <HomePage/>', () => {
  const user = {
    id: 1,
    name: 'Fernando',
  };
  test('should display component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
    // screen.debug();
  });

  test('should display component with user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const userName = screen.getByLabelText('name');
    expect(userName.innerHTML).toBe(user.name);
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(`${user.id}`);
    // screen.debug();
  });
});
