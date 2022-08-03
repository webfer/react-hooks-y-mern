import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('Testing on component <MainApp/>', () => {
  test('display the HomePage component', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('Home Page')).toBeTruthy();
    // screen.debug();
  });

  test('display the LoginPage component', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('Login Page')).toBeTruthy();
    // screen.debug();
  });

  test('display the AboutPage component', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('About Page')).toBeTruthy();
    // screen.debug();
  });
});
