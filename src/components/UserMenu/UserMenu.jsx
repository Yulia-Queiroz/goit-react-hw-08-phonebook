import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { LogoutBtn, MenuStyled, UserIcon } from './UserMenuStyled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const getFirstLetter = () => {
    const firstLetter = user.name.charAt(0).toUpperCase();
    return firstLetter;
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <MenuStyled>
      <UserIcon>{getFirstLetter()}</UserIcon>
      <LogoutBtn onClick={handleLogOut}>Logout</LogoutBtn>
    </MenuStyled>
  );
};

export default UserMenu;
