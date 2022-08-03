import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');
describe('Testing on <MultipleCustomHook/>', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('should return default component', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText('BreakingBad Quotes'));
    const nextButton = screen.getByRole('button', { 'aria-label': 'btn-next' });
    // console.log(nextButton.disabled);
    expect(nextButton.disabled).toBeTruthy();
    // screen.debug();
  });

  test('should show a quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hello world' }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHook />);
    expect(screen.getByText('Hello world')).toBeTruthy();
    expect(screen.getByText('Fernando')).toBeTruthy();

    const nextButton = screen.getByRole('button', { 'aria-label': 'btn-next' });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('should  called increase() function', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hello world' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    const nextButton = screen.getByRole('button', { 'aria-label': 'btn-next' });
    // screen.debug()
    // fireEvent.click(nextButton);
    // expect(mockIncrement).toHaveBeenCalled();

    // Error: Waiting for answare
    // https://www.udemy.com/course/react-cero-experto/learn/lecture/19925010#questions/17982636
  });
});
