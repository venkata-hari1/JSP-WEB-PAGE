import { Box, Grid, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import  {ParentDiv, StyledBox,StyledBox1,TypographyStyles} from './style'
import Form from '../components/FormOne'
import Header from '../components/Headers/MobileHeader'
import Stepper from '../components/Stepper'
import Main from '../components/Main'

export default function page() {
  return (
    <Fragment>
    <Header/>
      <Main/>
     </Fragment>
  )
}
