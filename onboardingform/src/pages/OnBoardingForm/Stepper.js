import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProfileDetails from './ProfileDetails';
import EducationExp from './EducationExp';
import { makeStyles } from '@mui/styles';
import DocumentForm from './DocumentForm';
import ReviewInformation from './ReviewInformation';

const steps = ['Personal Details','Education / Experience', 'Documents','Review Information'];
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:"0px",
    width: '100%',
    // backgroundColor: 'transparent',
  },
  stepper: {
    backgroundColor: 'transparent',
    // change icon color for all steps
    '& .MuiStepIcon-root': {
      color: '#FF9933', // Customize the color of the Stepper icon
    },
    '& .MuiStepIcon-active': {
      color: '#FF9933', // Customize the color of the active Stepper icon
    },
    '& .MuiStepIcon-completed': {
      color: '#FF9933', // Customize the color of the completed Stepper icon
    },

    // change label color for all steps
    '& .MuiStepLabel-label': {
      color: '#FF9933', // Customize the color of the StepLabel text
    },

    '& .MuiStepLabel-active': {
      color: '#FF9933', // Customize the color of the active StepLabel text
    },
    '& .MuiStepLabel-completed': {
      color: '#FF9933', // Customize the color of the completed StepLabel text
    },
    
    // change connector color for all steps
    '& .MuiStepConnector-line': {
      borderColor: 'var(--my-disabled-step-color)', // Customize the color of the StepConnector line
    },
    // change connector color for active steps
    '& .MuiStepConnector-active': {
      '& .MuiStepConnector-line': {
        borderColor: 'var(--my-brand-color-dark)', // Customize the color of the active StepConnector line
      }
    }
  },
}));
export default function FormStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [formData,setFormData]=React.useState({})
  const [educationData, setEducationData]= React.useState(null)
  const [documentData, setDocumentData] = React.useState(null)
  const classes = useStyles();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const formDataChange=(Data)=>{
    console.log(Data,'Data from stepper')
    setFormData({...Data})
  }

  const educationDataChange=(Data)=>{
    setEducationData({...Data})
  }

  const handleEdit=(num)=>{
    setActiveStep(num)
  }
  console.log(formData,'FormData from stepper')
  return (
    <Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center'  }}>
    <Box sx={{ width: '80%', marginTop: '30px' }}>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
         {activeStep === 0 && <ProfileDetails  formDataChange={formDataChange} handleNext={handleNext} profileDetailsData={formData} />}
         {activeStep === 1 && <EducationExp formDataChange={formDataChange} educationDataChange={educationDataChange} handleNext={handleNext} handleBack={handleBack} educationData={educationData} setEducationData={setEducationData} />}
         {activeStep === 2 && <DocumentForm handleBack={handleBack} handleNext={handleNext} formDataChange={formDataChange} documentData={documentData} setDocumentData = {setDocumentData} />}
         {activeStep === 3 && <ReviewInformation profileDetailsData={formData}  handleBack={handleBack} educationData={educationData} documentData={documentData} handleEdit={handleEdit} handleNext={handleNext} />}
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </Box>
  );
}