import React from "react";
import styled from "styled-components";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import "../../styles/style.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
}));

const StyledDiv = styled.div`
  margin-left: 6%;
  margin-top: 6%;
  margin-right: -50px;
  width: 93%;
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 80%;
    margin-left: 17%;
    margin-top: 17%;
  }
`;

const StyledImage = styled.img`
  height: 400px;
  @media (min-width: 320px) and (max-width: 480px) {
    height: 200px;
  }
`;

function CarouselSwipeableTextMobileStepper({ images }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <StyledDiv className={classes.root}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <StyledImage
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
                width="500px"
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
          {theme.direction === 'rtl' ? <GoChevronLeft /> : <GoChevronRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <GoChevronRight /> : <GoChevronLeft />}
          Back
        </Button>
        }
      /> */}
    </StyledDiv>
  );
}

export default CarouselSwipeableTextMobileStepper;
