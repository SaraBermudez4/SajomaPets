import React, { useEffect, useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import firebase from 'firebase'
import AuthRoutes from './AuthRoutes';
import { login } from '../actions/authAction'
import { startUserLoad } from '../actions/userAction';
import { PrivateRouter } from './PrivateRoute'
import { PublicRouter } from './PublicRoute'
import '../styles/style.css'
import Home from "../containers/home/Home";
import Favorite from '../containers/favorite/Favorite';
import Cart from '../containers/cart/Cart';
import Profile from '../containers/profile/Profile';
import Search from '../containers/search/Search';
import Accessories from '../containers/products/Accessories';
import Food from '../containers/products/Food';
import Toys from '../containers/products/Toys';
import Contenedor from '../containers/sideBar/Contenedor';
import Maps from '../containers/GoogleMapApi/Maps';
import UbicacionActualApi from '../containers/GoogleMapApi/UbicacionActualApi';
import DatailProduct from '../containers/detailProduct/DatailProduct';
import { startCrtLoad, startFavLoad } from '../actions/productAction';
// import ProfileRoutes from './ProfileRoutes';

const App = () => {

  const [checking, setChecking] = useState(true)
  const [isLoogedIn, setIsLoogedIn] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber))
        dispatch(startUserLoad(user.uid))
        dispatch(startFavLoad(user.uid))
        dispatch(startCrtLoad(user.uid))

        console.log(dispatch(startUserLoad(user.uid)));
        setIsLoogedIn(true)
      } else {
        setIsLoogedIn(false)
      }
      setChecking(false)
    })
  }, [dispatch, setChecking, setIsLoogedIn])

  if (checking) {
    return (
      <h1>Loading ...</h1>
    )
  }

  return (
    <ChakraProvider>
      <Router>
        <Contenedor>
          <Switch>
            <PublicRouter path='/auth' component={AuthRoutes} isAuthenticated={isLoogedIn} />
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/food' component={Food} />
            <Route exact path='/accessories' component={Accessories} />
            <Route exact path='/toys' component={Toys} />
            <Route exact path='/maps' component={Maps} />
            <Route path="/detail/:prodId" component={DatailProduct} />
            <PrivateRouter exact path='/cart' component={Cart} isAuthenticated={isLoogedIn} />
            <PrivateRouter exact path='/favorite' component={Favorite} isAuthenticated={isLoogedIn} />
            <PrivateRouter exact path='/profile' component={Profile} isAuthenticated={isLoogedIn} />
            <Redirect to='/' />
          </Switch>
        </Contenedor>
      </Router>
    </ChakraProvider>
  );
}

export default App;