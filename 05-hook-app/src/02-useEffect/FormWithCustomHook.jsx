import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const { onInputChange, username, email, password, onResetForm } = useForm({
    // Here (line above) you can destructuring " username, email, password" if from hook it si espose it.
    username: '',
    email: '',
    password: '',
  });

  // const { username, email, password } = formState; // Other option to destructuring

  return (
    <>
      <h1>Form With Custom Hook</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-3">
        Reset
      </button>
    </>
  );
};
