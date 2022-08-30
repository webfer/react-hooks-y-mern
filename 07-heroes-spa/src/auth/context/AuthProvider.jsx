import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { useReducer } from 'react';
import { types } from '../types/types';

// const initialState = {
//   logged: false,
// };

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user: user,
  };
};
export const AuthProvider = ({ children }) => {
  const [authState, dispach] = useReducer(authReducer, {}, init);
  const login = (name = '') => {
    const user = {
      id: 'abc',
      name,
    };
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispach(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispach(action);
  };
  return (
    <AuthContext.Provider
      value={{
        ...authState,
        // methods
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
