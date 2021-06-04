import React from 'react'
import NabBarMiniVariantDrawer from '../sideBar/NabBarMiniVariantDrawer'

const Food = () => {
    return (
        <>
            <NabBarMiniVariantDrawer />
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <h1>Food</h1>
            </div>
        </>
    )
}

export default Food
