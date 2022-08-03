import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Testing on hook useForm', () => {
  const initialForm = {
    name: 'Fernando',
    email: 'testing@pm.me',
  };
  test('should return default values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should change the form's name", () => {
    const newValue = 'Pepe';
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test('should make the forms reset', () => {
    const newValue = 'Pepe';
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;
    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
