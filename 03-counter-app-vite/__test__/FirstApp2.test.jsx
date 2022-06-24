import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Testing on <FirstApp/>', () => {
  const title = 'Hola soy Guku';
  const subTitle = 'Soy un sub-titulo';
  test('Debe de hacer match cion el snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola, soy Guku"', () => {
    render(<FirstApp title={title} />);
    // screen.debug();
    // expect(screen.getByText(title)).not.toBeTruthy(); // With negative statement
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('Debe de mostrar el titulo en un H1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('Debe mostrar el subtitulo enviado por PROPS', () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(1);
  });
});
