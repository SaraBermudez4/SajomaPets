import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { useDispatch } from "react-redux";
import AuthRoutes from './AuthRoutes';
import Home from "../containers/home/Home";
import { useEffect, useState } from "react";
import { login } from '../actions/authAction'
import firebase from 'firebase'
import { PrivateRouter } from './PrivateRoute'
import { PublicRouter } from './PublicRoute'
import '../styles/style.css'
import Favorite from '../containers/favorite/Favorite';
import Cart from '../containers/cart/Cart';
import Search from '../containers/search/Search';
import Accessories from '../containers/products/Accessories';
import Food from '../containers/products/Food';
import Toys from '../containers/products/Toys';
import Profile from '../containers/profile/Profile';
// import ProfileRoutes from './ProfileRoutes';
// import DashboardRouter from './DashboardRouter';

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
          {/* <Route path='/' component={DashboardRouter} /> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/food' component={Food} />
          <Route exact path='/accessories' component={Accessories} />
          <Route exact path='/toys' component={Toys} />
          <PublicRouter path='/auth' component={AuthRoutes} isAuthenticated={isLoogedIn} />
          <PrivateRouter exact path='/cart' component={Cart} isAuthenticated={isLoogedIn} />
          <PrivateRouter exact path='/favorite' component={Favorite} isAuthenticated={isLoogedIn} />
          <PrivateRouter path='/profile' component={Profile} isAuthenticated={isLoogedIn} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;