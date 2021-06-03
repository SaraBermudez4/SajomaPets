import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import '../../styles/style.css'
import imagen1 from '../../imagenes/perros.jpg'
import imagen2 from '../../imagenes/peces.jpg'
import imagen3 from '../../imagenes/pajaros.jpg'
import imagen4 from '../../imagenes/hamnsters.jpg'
import imagen5 from '../../imagenes/gatos.jpg'
import imagen6 from '../../imagenes/conejos.jpg'
import imagen7 from '../../imagenes/beneficios.jpeg'
import imagen8 from '../../imagenes/alimentacion.jpg'
import imagen9 from '../../imagenes/dientes.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'imagen1',
    imgPath:
      imagen1,
  },
  {
    label: 'imagen2',
    imgPath:
      imagen2,
  },
  {
    label: 'imagen3',
    imgPath:
      imagen3,
  },
  {
    label: 'imagen4',
    imgPath:
      imagen4,
  },
  {
    label: 'imagen5',
    imgPath:
      imagen5,
  },
  {
    label: 'imagen6',
    imgPath:
      imagen6,
  },
  {
    label: 'imagen7',
    imgPath:
      imagen7,
  },
  {
    label: 'imagen8',
    imgPath:
      imagen8,
  },
  {
    label: 'imagen9',
    imgPath:
      imagen9,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    marginLeft: "17%",
    marginTop: "17%",
    marginRight: "-50px"

  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 400,
    display: 'block',
    maxWidth: "100%",
    overflow: 'hidden',
    width: '100%',
  },
}));

function CarouselSwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} width="500px" />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}


export default CarouselSwipeableTextMobileStepper
