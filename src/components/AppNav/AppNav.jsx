import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';
import { HeaderStyled } from './AppNavStyles';

const AppNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyled>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};

export default AppNav;
