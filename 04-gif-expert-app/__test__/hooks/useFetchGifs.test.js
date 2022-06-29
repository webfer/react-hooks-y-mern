import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Testing on <useFetchGifs/> Hook', () => {
  test('should return the initial state ', () => {
    const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
    // console.log(result);
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an images array and isLoading to true ', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 1200 }
    );
    // console.log(result);
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
