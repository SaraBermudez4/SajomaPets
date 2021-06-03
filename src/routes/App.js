import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
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
import '../styles/style.css'
const App = () => {

  const [checking, setChecking] = useState(true)
  const [isLoogedIn, setIsLoogedIn] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
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
          <Route exact path='/' component={Home} />
          <PublicRouter path='/auth' component={Routes} isAuthenticated={isLoogedIn} />
          <PrivateRouter exact path='/profile' component={Profile} isAuthenticated={isLoogedIn} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;