import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Home, About } from '../Routes';
import Header from './common/header';

const Router = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
