import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Testing on GifItem', () => {
  const title = 'Dragon Ball';
  const url = 'https://url.test/saitama.jpg';
  test('Should match with the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test('should show the IMG and the URL required', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url); // This option is valid, too!!!!
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show the title in the component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getAllByText(title)).toBeTruthy();
  });
});
