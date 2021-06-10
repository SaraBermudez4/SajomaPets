import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startUserLoad } from '../../actions/userAction'

const Prueba = () => {

    // const dispatch = useDispatch()

    // const auth = useSelector(state => state.auth)

    // console.log(auth);

    // const handlePrueba = (id) => {
    //     dispatch(startUserLoad(id))
    // }

    return (
        <div>
            {/* <button onClick={() => handlePrueba(auth.uid)}>Prueba</button> */}
            <h1>hola</h1>
        </div>
    )
}

export default Prueba
