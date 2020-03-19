import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Home, About, Login } from '../Routes';

const Router = () => (
  <BrowserRouter>
    <>
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={Login} exact></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
