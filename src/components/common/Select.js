import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../GlobalStyles';

const SelectBox = styled.select`
  appearance: none;
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

const Select = props => {
  return (
    <>
      <SelectBox {...props}></SelectBox>
    </>
  );
};

export default Select;
