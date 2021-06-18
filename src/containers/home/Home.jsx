import React from "react";
import CarouselSwipeableTextMobileStepper from "../../components/home/CarouselSwipeableTextMobileStepper";
import styled from "styled-components";
import TabScrollButton from "../../components/home/TabScrollButton";
// import NabBarMiniVariantDrawer from '../sideBar/NabBarMiniVariantDrawer';
import imagen1 from "../../imagenes/imagen1.jpg";
import imagen2 from "../../imagenes/imagen2.png";
import imagen3 from "../../imagenes/imagen3.jpg";
import imagen4 from "../../imagenes/imagen4.jpg";
import imagen5 from "../../imagenes/imagen5.jpg";
import imagen6 from "../../imagenes/imagen6.jpg";
import imagen7 from "../../imagenes/imagen7.jpg";
import imagen8 from "../../imagenes/imagen8.png";
import imagen9 from "../../imagenes/imagen9.png";
import imagen10 from '../../imagenes/1.png'
import imagen11 from '../../imagenes/2.png'
import imagen12 from '../../imagenes/3.png'

const StyledDivTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 1px;
  margin-left: 72px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-left: 58px;
  }
`;

const Home = () => {
  const tutorialSteps = [
    {
      label: "Imagen10",
      imgPath: imagen10,
      // video: 'https://www.youtube.com/watch?v=HYzP2YjM2IM'
    },
    {
      label: "Imagen1",
      imgPath: imagen1,
      // video: ''
    },
    {
      label: "Imagen2",
      imgPath: imagen2,
      // video: ''
    },
    {
      label: "Imagen3",
      imgPath: imagen3,
      // video: ''
    },
    {
      label: "Imagen11",
      imgPath: imagen11,
      // video: 'https://www.youtube.com/watch?v=N0dEsDEtxag'
    },
    {
      label: "Imagen4",
      imgPath: imagen4,
      // video: ''
    },
    {
      label: "Imagen5",
      imgPath: imagen5,
      // video: ''
    },
    {
      label: "Imagen6",
      imgPath: imagen6,
      // video: ''
    },
    {
      label: "Imagen12",
      imgPath: imagen12,
      // video: ''
    },
    {
      label: "Imagen7",
      imgPath: imagen7,
      // video: ''
    },
    {
      label: "Imagen8",
      imgPath: imagen8,
      // video: ''
    },
    {
      label: "Imagen9",
      imgPath: imagen9,
      // video: ''
    },
  ];

  return (
    <>
      {/* <NabBarMiniVariantDrawer /> */}
      <CarouselSwipeableTextMobileStepper images={tutorialSteps} />
      <StyledDivTabs>
        <TabScrollButton />
      </StyledDivTabs>
    </>
  );
};

export default Home;
