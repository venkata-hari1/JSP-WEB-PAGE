import React from 'react'
import { Box,ButtonGroup,Typography,Button } from '@mui/material'
import { SmallText } from './ReusableStyles/Styles'

const Childthree = () => {
  return (
    <Box mt={5} display="flex" flexDirection="row">

    <SmallText>No of Voters In The Family<Typography component='span' color='red'>*</Typography> <Box component="br" />(Including You)</SmallText>
   <ButtonGroup sx={{display:"flex",justifyContent:"center",alignItems:"center", gap:"20px"}}>
   <Button sx={{background:"#BBB9B9", border:"none",marginLeft:"30px",color:"white" }}>-</Button>
   <Typography>1</Typography>
   <Button  sx={{background:"#BBB9B9",border:"none", color:"white"}}>+</Button>
   </ButtonGroup>

</Box>


  )
}

export default Childthree