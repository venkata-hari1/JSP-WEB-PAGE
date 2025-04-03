import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import pawan from "@/utils/assets/images/pawan.png";
import { MobileHeaderStyle } from './Style';
export default function MobileHeader() {
  return (
    <MobileHeaderStyle>
    <Image src={pawan}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '90%',marginLeft:'4%', height: '100%',backgroundPosition:'center' }}
            alt='pawan kalay'/>
     </MobileHeaderStyle>
   
  )
}
