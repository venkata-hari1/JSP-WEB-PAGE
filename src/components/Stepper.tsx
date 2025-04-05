'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import { useStyles } from './MakeStyles/Style';
import { React_Type } from '@/utils/Types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './Redux/Store/store';
import { setOpen, setScroll } from './Redux/Reducers/Language';
import ScrollDialog from './ConformationPopUp/ScrollDailog';
const steps = [
  {
    content: <FormOne />,
  },
  {
    content: <FormTwo/>,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { classes }: React_Type = useStyles()
  const formState = useSelector((state: RootState) => state.Language.form)
  const isMobileValid = useSelector((state: RootState) => state.Language.isMobileValid);
  const dispatch = useDispatch<AppDispatch>()
  React.useEffect(() => {
    const scrollToStepper = () => {
      const el = document.getElementById('stepper-box');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (activeStep === 1) {
      setTimeout(scrollToStepper, 2);
    }
  }, [activeStep]);
  const handleNext = (step: number) => {
    if (step === 1) {
      dispatch(setScroll('paper'));
      dispatch(setOpen(true));
    }
    else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const isFormComplete = !!formState.name.trim() && isMobileValid;
  return (
    <React.Fragment>
      <ScrollDialog />
      <Box sx={{ width: '100%', mx: 'auto' }}>
        <Stepper activeStep={activeStep} orientation="vertical" connector={null}
          classes={{ root: classes.stepper }}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepContent>
                {step.content}
                <Box className={classes.btncontainer}>

                  {index === 1 && <Button
                    className={classes.backbtn}
                    variant="outlined"
                    disabled={activeStep !== 1}
                    onClick={handleBack}
                    sx={{ mt: 1 }}
                  >
                    Back
                  </Button>}
                  <Button
                    className={classes.nextbtn}
                    variant="outlined"
                    onClick={() => handleNext(index)}
                    disabled={index === 0 && !isFormComplete}

                   
                  >
                    {index === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>

      </Box>
    </React.Fragment>
  );
}
