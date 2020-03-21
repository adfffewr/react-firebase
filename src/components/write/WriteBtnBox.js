import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button,
  a {
    margin: 0 10px;
  }
`;

const WriteBtnBox = () => {
  return (
    <>
      <BtnContainer>
        <Button to="/">취소</Button>
        <Button>작성</Button>
      </BtnContainer>
    </>
  );
};

export default WriteBtnBox;
