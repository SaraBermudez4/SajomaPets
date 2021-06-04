import React from 'react'
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom'
import Home from '../containers/home/Home'
import Accessories from '../containers/products/Accessories'
import Food from '../containers/products/Food'
import Toys from '../containers/products/Toys'
import NabBarMiniVariantDrawer from '../containers/sideBar/NabBarMiniVariantDrawer'

const DashboardRouter = () => {
    return (
        <>
            <NabBarMiniVariantDrawer />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/food' component={Food} />
                <Route exact path='/accessories' component={Accessories} />
                <Route exact path='/toys' component={Toys} />
                <Redirect to='/' />
            </Switch>
        </>
    )
}

export default DashboardRouter
