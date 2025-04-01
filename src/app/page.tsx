import { Box, Grid, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import  {ParentDiv, StyledBox,StyledBox1,TypographyStyles} from './style'
import Form from './components/FormOne'
import Header from './components/Header'
import Stepper from './components/Stepper'

export default function page() {
  return (
    <Fragment>
    <Header/>
      <Stepper/>
     </Fragment>
  )
}
