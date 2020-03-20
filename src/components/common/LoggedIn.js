import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const LoggedIn = () => {
  return (
    <>
      <Container>
        <Button to="write">포스트 작성</Button>
      </Container>
    </>
  );
};

export default LoggedIn;
