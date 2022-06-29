import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../../src/components/GifExpertApp';

describe('Testin on GifExpertApp<GifExpertApp/> component', () => {
  test('should match wit the snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });
});
