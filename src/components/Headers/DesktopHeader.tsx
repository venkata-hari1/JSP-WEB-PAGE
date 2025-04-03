import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import { Box_Div } from './Style'
export default function DeskTopHeader() {
  return (
    <Box_Div>
    <Image src='/assets/images/pawan.png' 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '80%', height: '13vh' }}
            alt='pawan kalay'/>
     </Box_Div>
   
  )
}
