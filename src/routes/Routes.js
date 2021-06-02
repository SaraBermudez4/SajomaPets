import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Register from '../containers/login/Register';
import Login from '../containers/login/Login';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/auth/login' component={Login} />
                <Route exact path='/auth/registro' component={Register} />
            </Switch>
        </Router>
    )
}

export default Routes
