import React from "react";
import CarouselSwipeableTextMobileStepper from "../../components/home/CarouselSwipeableTextMobileStepper";
import styled from "styled-components";
import TabScrollButton from "../../components/home/TabScrollButton";
// import NabBarMiniVariantDrawer from '../sideBar/NabBarMiniVariantDrawer';

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
      label: "Imagen1",
      imgPath: 'https://i.ibb.co/ysqDg9h/consejo1.png'
    },
    {
      label: "Imagen2",
      imgPath: 'https://i.ibb.co/zsPrpq0/consejo2.png'
    },
    {
      label: "Imagen3",
      imgPath: 'https://i.ibb.co/3kS7cMF/consejo4.png'
    },
    {
      label: "Imagen4",
      imgPath: 'https://i.ibb.co/3pzv64F/consejo9.png'
    }
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
