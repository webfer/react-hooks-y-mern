import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Testing on CounterApp', () => {
  const initialValue = 10;
  test('CounterApp debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });
  test('CounterApp debe mostrar el valor inicail de 100', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getAllByText(initialValue)).toBeTruthy();
    // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain( '100'); // Other option
  });
  test('Debe incrementar con el boton +1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('11')).toBeTruthy();
  });
  test('Debe decrementar con el boton -1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('-1'));
    // screen.debug();
    expect(screen.getByText('9')).toBeTruthy();
  });
  test('Debe de funcionar el boton de reset', () => {
    render(<CounterApp value={'355'} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(355)).toBeTruthy();
  });
});
