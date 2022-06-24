import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Testing on <FirstApp/>', () => {
  // test('Should be do match with the snapshot', () => {
  // const title = 'Hola, soy Goku!';
  // const { container } = render(<FirstApp title={title} />);

  // expect(container).toMatchSnapshot();
  // });

  test('Debe retornar el titulo en un H1', () => {
    const title = 'Hola, soy Goku!';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);

    // expect(getByTestId('test-title')).toBeTruthy();
    // expect(getByTestId('test-title').innerHTML).toBe(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Debe de mostrar el subtitulo eniado por PROPS', () => {
    const title = 'Hola, soy Goku!';
    const subTitle = 'Soy un subtitulo';
    const { getByText, getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    // expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(1); // getAllByText: Reurn an array of HTML elements

    // ll
  });
});
