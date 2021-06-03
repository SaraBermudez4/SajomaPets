import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/authAction';
import CarouselSwipeableTextMobileStepper from '../../components/home/CarouselSwipeableTextMobileStepper';
import TabScrollButton from '../../components/home/TabScrollButton';
import NabBarMiniVariantDrawer from '../sideBar/NabBarMiniVariantDrawer';

const Home = () => {

    return (
        <>
            <CarouselSwipeableTextMobileStepper />
            <NabBarMiniVariantDrawer />
        </>
    )
}

export default Home
