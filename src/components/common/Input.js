import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../GlobalStyles';

const InputTag = styled.input`
  outline: none;
  border: none;
  box-shadow: none;
  display: inline-block;
  padding: 8px;
  box-sizing: border-box;
  background-color: #424242;
  color: ${palette.white};
  font-size: 16px;
  border-radius: 4px;
  ${props =>
    props.full &&
    css`
      width: 100%;
    `}
`;

const Input = props => {
  return <InputTag {...props} />;
};

export default Input;
