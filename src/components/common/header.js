import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from '../GlobalStyles';
import Button from './Button';
import { userStore } from '../../store';
import { useObserver } from 'mobx-react';

const HeaderBox = styled.header`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  a {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 768px) {
    padding: 2rem 4rem 4rem;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
const NavBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(Link)`
  color: ${palette.white};
`;
const LinkTag = styled(Link)`
  color: ${palette.green};
  transition: color 0.2s;
  &:hover {
    color: ${palette.white};
  }
`;
const NavListBox = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  li {
    margin: 0 15px;
  }
`;

const Header = () => {
  const onLogout = useCallback(() => {
    userStore.logOut();
  }, []);

  return useObserver(() => (
    <>
      <HeaderBox>
        <NavBox>
          <h1>
            <Logo to="/">CodingPalette</Logo>
          </h1>
          <NavListBox>
            <li>
              <LinkTag to="/">Home</LinkTag>
            </li>
            <li>
              <LinkTag to="/about">About</LinkTag>
            </li>
          </NavListBox>
          {userStore.currentUser && userStore.currentUser.level === 0 && (
            <div>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          )}
        </NavBox>
      </HeaderBox>
    </>
  ));
};

export default Header;
