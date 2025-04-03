'use client'
import React from 'react'
import Slider from './Slider/MobileSlider'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from './Redux/Store/store'

function FormOne() {
  const selector=useSelector((state:RootState)=>state.Language)
  console.log(selector)
  return (
    <Box>
    <Slider/>
     
    </Box>
  )
}
export default FormOne