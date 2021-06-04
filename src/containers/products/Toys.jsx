import React from 'react'
import NabBarMiniVariantDrawer from '../sideBar/NabBarMiniVariantDrawer'

const Toys = () => {
    return (
        <>
            <NabBarMiniVariantDrawer />
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <h1>Toys</h1>
            </div>
        </>
    )
}

export default Toys
