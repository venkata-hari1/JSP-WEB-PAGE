"use client"; 
import { styled } from "@mui/material/styles";
import { Typography,Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display:'grid',
  gridTemplateColumns:'23% 23% 23% 23%',
  gridGap:'1%',
  height:'100vh',
 
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns:'100%',
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns:'100%',
  },
}));
export const TypographyStyles=styled(Typography)(({theme})=>({
  marginTop:'10%',
  
  height:'40vh'
}))

export const StyledBox1 = styled(Box)(({ theme }) => ({
  color:'red',
  fontWeight:'800'
}));

export const ParentDiv=styled(Box)(({theme})=>({
    background:'black',
    height:'100vh',
    color:'white',
    [theme.breakpoints.down('md')]:{
        background:'red',
    },
    [theme.breakpoints.down('sm')]:{
        background:'orange',
    }

  }))
