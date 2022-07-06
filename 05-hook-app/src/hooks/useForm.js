import { useState } from 'react';

export const useForm = (initialValue = {}) => {
  const [formState, setFormState] = useState(initialValue);

  const onResetForm = () => {
    setFormState(initialValue);
  };

  const onInputChange = ({ target }) => {
    // console.log(event.target);
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState, // Destructuring to expose the properties
    formState,
    onInputChange,
    onResetForm,
  };
};
