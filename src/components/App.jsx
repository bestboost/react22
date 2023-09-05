import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { LoginPage, DashboardPage } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
