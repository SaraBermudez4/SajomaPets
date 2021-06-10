import React from 'react'
import CarouselSwipeableTextMobileStepper from '../../components/home/CarouselSwipeableTextMobileStepper';
import styled from 'styled-components'
import TabScrollButton from '../../components/home/TabScrollButton';
import NabBarMiniVariantDrawer from '../sideBar/NabBarMiniVariantDrawer';

const StyledDivTabs = styled.div`
    display:flex; 
    justify-content:center;
    margin-right: 1px;  
    margin-left: 72px;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-left: 58px;
    }
`

const Home = () => {

    return (
        <>
            <CarouselSwipeableTextMobileStepper />
            <StyledDivTabs>
                <TabScrollButton />
            <NabBarMiniVariantDrawer />
            </StyledDivTabs>
        </>
        
    )
}

export default Home
