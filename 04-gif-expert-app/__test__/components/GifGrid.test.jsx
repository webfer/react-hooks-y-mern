import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
jest.mock('../../src/hooks/useFetchGifs');

describe('Testing on <GifGrid/> component', () => {
  const category = 'Dragon Ball';
  test('should shown loading first', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByText('Loading...'));
    expect(screen.getAllByText(category));
  });

  test('should  show items, based on useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABCD',
        title: 'Saitama',
        url: 'https://www.saitama.es/pop.jpg',
      },
      {
        id: 'AB123CD',
        title: 'Carman',
        url: 'https://www.saitama.es/pop-3.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
    // screen.debug();
  });
});
