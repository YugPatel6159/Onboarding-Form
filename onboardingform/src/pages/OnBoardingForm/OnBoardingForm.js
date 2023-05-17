import React from 'react'
import FormStepper from './Stepper'
import Header from '../../layouts/Header'
import { Stack } from '@mui/material'


function OnBoardingForm() {
  return (
    <>
    <Stack direction={"column"} spacing={2}>
    <Header/>
    <FormStepper/>
    </Stack>
    </>
  )
}

export default OnBoardingForm