import React from 'react'
import Image from 'next/image'
import { Box_Div } from './Style'
import pawan from "@/utils/assets/images/pawan.png";
export default function DeskTopHeader() {
 
  return (
    <Box_Div>
    <Image src={pawan} 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '80%', height: '13vh' }}
            alt='pawan kalay'/>
     </Box_Div>
   
  )
}
