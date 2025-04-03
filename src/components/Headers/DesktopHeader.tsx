import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import { Box_Div, MainTitle } from './Style'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/Store/store'
import { React_Type } from '@/utils/Types'
export default function DeskTopHeader() {
  const selector:React_Type=useSelector((state:RootState)=>state.Language.data)
  return (
    <Box_Div>
    <Image src='/assets/images/Pawan.png' 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '80%', height: '13vh' }}
            alt='pawan kalay'/>
     </Box_Div>
   
  )
}
