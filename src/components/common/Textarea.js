import React from 'react';
import Styled, { css } from 'styled-components';
import { palette } from '../GlobalStyles';

const TextareaBox = Styled.textarea`
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
  resize:none;
  min-height:150px;
  ${props =>
    props.full &&
    css`
      width: 100%;
    `}
`;

const Textarea = props => {
  return (
    <>
      <TextareaBox {...props}></TextareaBox>
    </>
  );
};

export default Textarea;
