import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from '../GlobalStyles';

const buttonStyle = css`
  display: inline-block;
  /* height: 32px; */
  line-height: 1;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 2px;
  background: #33363b;
  color: ${palette.white};
  border: none;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
  ${props =>
    props.full &&
    css`
      width: 100%;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
