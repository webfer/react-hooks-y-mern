import { useEffect, useState } from 'react';
import { Mesagge } from './Mesagge';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'webform',
    email: 'webform@pm.me',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    // console.log(event.target);
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('formState called!');
  }, [formState]);

  useEffect(() => {
    // console.log('email called!');
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@pm.me"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === 'webfer2' && <Mesagge />}
    </>
  );
};
