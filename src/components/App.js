import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import Router from './Router';
import UserObserver from './UserObserver';
// import logo from './logo.svg';

function App() {
  return (
    <>
      <UserObserver />
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
