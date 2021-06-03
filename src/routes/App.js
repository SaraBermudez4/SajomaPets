import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import { useDispatch } from "react-redux";
import Routes from './Routes';
import Home from "../containers/home/Home";
import { useEffect, useState } from "react";
import { login } from '../actions/authAction'
import firebase from 'firebase'
import { PrivateRouter } from './PrivateRoute'
import { PublicRouter } from './PublicRoute'
import Profile from '../containers/profile/Profile';

const App = () => {

  const [checking, setChecking] = useState(true)
  const [isLoogedIn, setIsLoogedIn] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      console.log(user);

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoogedIn(true)
      } else {
        setIsLoogedIn(false)
      }
      setChecking(false)
    })
  }, [dispatch, setChecking])

  if (checking) {
    return (
      <h1>Loading ...</h1>
    )
  }

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <PublicRouter path='/auth' component={Routes} isAuthenticated={isLoogedIn} />
          <PrivateRouter exact path='/home' component={Home} isAuthenticated={isLoogedIn} />
          <PrivateRouter exact path='/profile' component={Profile} isAuthenticated={isLoogedIn} />
          <Redirect to='/auth/login' />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;