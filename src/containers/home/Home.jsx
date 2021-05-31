import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/authAction';

const Home = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log('holaa');
        dispatch(startLogout())
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home
