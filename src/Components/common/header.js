import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBox = styled.header`
  padding: 20px;
  a {
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    padding: 2em 4em 4em;
  }
`;
const NavBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(Link)`
  color: rgb(245, 247, 250);
`;
const LinkTag = styled(Link)`
  color: #00bfa6;
  transition: color 0.2s;
  &:hover {
    color: rgb(245, 247, 250);
  }
`;
const NavListBox = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-left: 15px;
  }
`;

const Header = () => {
  return (
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
              <LinkTag to="/about">about</LinkTag>
            </li>
          </NavListBox>
        </NavBox>
      </HeaderBox>
    </>
  );
};

export default Header;
