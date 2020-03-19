import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    text-align: center;
    color: rgb(245, 247, 250);
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background: #33363b;
  color: rgb(245, 247, 250);
  border-radius: 20px;
  display: block;
  padding: 10px 15px;
  box-sizing: border-box;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    text-decoration: none;
    &:hover {
    }
  }
`;

const textMap = {
  login: '로그인',
  register: '회원가입'
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <>
      <AuthFormBlock>
        {/* <h3>{text}</h3> */}
        <form onSubmit={onSubmit}>
          <StyledInput
            name="email"
            placeholder="아이디"
            onChange={onChange}
            value={form.email}
          />
          <StyledInput
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
          />
          <Button full>{text}</Button>
        </form>
      </AuthFormBlock>
    </>
  );
};

export default AuthForm;
