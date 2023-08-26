import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthBtn = styled(NavLink)`
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  background-color: #1976d2;

  &.active {
    border: 2px solid #1976d2;
    color: #1976d2;
    background-color: #fff;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-around;
`;
