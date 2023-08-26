import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import Fallback from './Fallback/Fallback';
import { MainStyled } from './MainStyles';

const Layout = () => {
  return (
    <>
      <AppNav />
      <MainStyled>
        <Suspense fallback={<Fallback />}>
          <Outlet />
        </Suspense>
      </MainStyled>
    </>
  );
};

export default Layout;
