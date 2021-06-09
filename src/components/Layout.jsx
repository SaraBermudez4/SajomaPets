import React from 'react'
import NabBarMiniVariantDrawer from '../containers/sideBar/NabBarMiniVariantDrawer'


const Layout = ({children}) =>(
    <div>
        <NabBarMiniVariantDrawer/>
            {children}
        
        
    </div>
)

export default Layout