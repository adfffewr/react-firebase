import React, { useState, useCallback } from 'react';
import AuthContainer from '../Containers/AuthContainer';
import AuthForm from '../Components/auth/AuthForm';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  // 인풋 변경 이벤트 핸들러
  const onChange = useCallback(
    e => {
      const { value, name } = e.target;
      // console.log(value, name);
      setForm({
        ...form,
        [name]: value
      });
    },
    [form]
  );

  // console.log(form);

  return (
    <AuthContainer>
      <AuthForm type="login" form={form} onChange={onChange} />
    </AuthContainer>
  );
};

export default Login;
