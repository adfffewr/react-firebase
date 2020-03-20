import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Home, About, Login, Post, PostWrite } from '../routes';

const Router = () => (
  <BrowserRouter>
    <>
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/post" component={Post}></Route>
        <Route path="/write" component={PostWrite}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
