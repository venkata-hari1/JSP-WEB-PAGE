import { Container, Grid } from '@mui/material'
import React from 'react'
import VerticalLinearStepper from './Stepper'
import DeskTopSlider from './Slider/DeskTopSlider'
export default function Main() {
  return (

    <Grid container spacing={2}>
      <Grid size={{ lg:6}}  sx={{display:{xs:'none',md:'none',lg:'block'}}}>
      <DeskTopSlider/>
      </Grid>
      <Grid size={{ lg:6,xs:12,md:12 }} >
      <VerticalLinearStepper/>
      </Grid>
    </Grid>
  )
}
