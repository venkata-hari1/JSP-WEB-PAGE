"use client"
import React from 'react'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import { useSelector } from 'react-redux'
import { RootState } from './Redux/Store/store'

export default function Stepper() {
  const value=useSelector((state:RootState)=>state.Language.value)
  console.log(value,"hari")
  return (
    <div>
      {value?<FormOne/>:<FormTwo/>}
    </div>
  )
}
