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
  return (
    <>
      {/* <NabBarMiniVariantDrawer /> */}
      <CarouselSwipeableTextMobileStepper />
      <StyledDivTabs>
        <TabScrollButton />
        <NabBarMiniVariantDrawer />
      </StyledDivTabs>
    </>
  );
};

const tutorialSteps = [
  {
    label: "Imagen1",
    imgPath: imagen1,
  },
  {
    label: "Imagen2",
    imgPath: imagen2,
  },
  {
    label: "Imagen3",
    imgPath: imagen3,
  },
  {
    label: "Imagen4",
    imgPath: imagen4,
  },
  {
    label: "Imagen5",
    imgPath: imagen5,
  },
  {
    label: "Imagen6",
    imgPath: imagen6,
  },
  {
    label: "Imagen7",
    imgPath: imagen7,
  },
  {
    label: "Imagen8",
    imgPath: imagen8,
  },
  {
    label: "Imagen9",
    imgPath: imagen9,
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

export default Home;
