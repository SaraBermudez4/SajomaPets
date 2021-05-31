import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  // Route,
  // Redirect
} from 'react-router-dom';
import { useDispatch } from "react-redux";
import Routes from './Routes';
import Home from "../containers/home/Home";
import { useEffect, useState } from "react";
import { login } from '../actions/authAction'
import firebase from 'firebase'
import { PrivateRouter } from './PrivateRoute'
import { PublicRouter } from './PublicRoute'

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
          <PrivateRouter exact path='/' component={Home} isAuthenticated={isLoogedIn} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;