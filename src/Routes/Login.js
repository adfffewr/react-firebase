import React, { useState, useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import AuthContainer from '../Containers/AuthContainer';
import AuthForm from '../Components/auth/AuthForm';

import { auth } from '../firebase/firebase';

const Login = ({ history }) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  // 로그인 여부 감지
  useEffect(() => {
    localStorage.getItem('__palette_user__') && history.push('/');
  }, [history]);

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

  const onSubmit = async e => {
    e.preventDefault();
    // console.log(form.email);
    const res = await auth.signInWithEmailAndPassword(
      form.email,
      form.password
    );
    console.log(res);
    res && history.push('/');
  };

  // console.log(form);

  return (
    <AuthContainer>
      <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </AuthContainer>
  );
};

export default withRouter(Login);
