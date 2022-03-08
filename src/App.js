import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './assets/css/App.css';
import './assets/css/Font.css';
import './assets/css/Layout.css';
import './assets/css/ckeditor.css';
import Header from './components/Header';
import Home from './containers/Home'
import Postdetail from './containers/detail/Postdetail'
import Login from './containers/Login'
import Register from './containers/Register'

import ListPost from './containers/haslogin/ListPost'
import AddPost from './containers/haslogin/AddPost'
import EditPost from './containers/haslogin/EditPost'

import { statusLogged } from './store';
import { useRecoilValue } from 'recoil';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post/:slug" component={Postdetail} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <PrivateRoute path="/admin/add/post"><AddPost /></PrivateRoute>
          <PrivateRoute exact path="/admin/edit/post/:id" component={EditPost}><EditPost /></PrivateRoute>
          <PrivateRoute path="/admin/list/post"><ListPost /></PrivateRoute>

        </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {

  let isLogged = useRecoilValue(statusLogged)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged == true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
