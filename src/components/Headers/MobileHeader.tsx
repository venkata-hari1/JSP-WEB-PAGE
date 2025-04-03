import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import pawan from "@/utils/assets/images/pawan.png";
export default function MobileHeader() {
  return (
    <Box sx={{display:{lg:'none',xs:'block',md:'block'}}}>
    <Image src={pawan}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '10vh' }}
            alt='pawan kalay'/>
     </Box>
   
  )
}
