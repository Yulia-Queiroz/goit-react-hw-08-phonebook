import { AuthBtn, AuthContainer } from './AuthNavStyled';

const AuthNav = () => {
  return (
    <AuthContainer>
      <AuthBtn to="/login">Log in</AuthBtn>
      <AuthBtn to="/register">Register</AuthBtn>
    </AuthContainer>
  );
};

export default AuthNav;
