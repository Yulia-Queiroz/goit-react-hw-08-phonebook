import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout';
import { lazy, useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
