import React from 'react'
import NabBarMiniVariantDrawer from './NabBarMiniVariantDrawer'

const Contenedor = ({ children }) => {
    return (
        <div>
            <NabBarMiniVariantDrawer />
            { children }
        </div>
    )
}

export default Contenedor
