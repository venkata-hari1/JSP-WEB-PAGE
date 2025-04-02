'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormOne from './FormOne';
import FormTwo from './FormTwo';

const steps = [
  {
    content: <FormOne />,
  },
  {
    content: <FormTwo />,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (step:number) => {
    if(step===0){
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    else{
      setActiveStep(0)
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', mx: 'auto' }}>
      <Stepper activeStep={activeStep} orientation="vertical" connector={null}
        sx={{
          '& .MuiStepContent-root': { paddingLeft: 0, borderLeft: 'none' }
        }}
      
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepContent>
              {step.content}
              <Box sx={{ mt: 2 }}>
            
               {index === 1&& <Button
                
                  disabled={activeStep !== 1} 
                  onClick={handleBack}
                  sx={{ mt: 1 }}
                >
                  Back
                </Button>}
                <Button
            
                  variant="contained"
                  onClick={()=>handleNext(index)}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
     
    </Box>
  );
}
