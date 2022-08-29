import { Route, Routes } from 'react-router-dom';

import { HerosRoutes } from '../heros';
import { LoginPage } from '../auth';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HerosRoutes />} />
      </Routes>
    </>
  );
};
