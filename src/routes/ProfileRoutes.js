import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Profile from '../containers/profile/Profile';

const ProfileRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/profile/data' component={Profile} />
                {/* <Route exact path='/profile/addresses' component={} /> */}
            </Switch>
        </Router>
    )
}

export default ProfileRoutes
