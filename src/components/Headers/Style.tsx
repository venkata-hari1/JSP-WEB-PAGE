"use client"; 
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { flex } from "../ReusableStyles/Styles";
export const Box_Div=styled(Box)(({theme})=>({
    ...flex,
    flexDirection:'column',
    [theme.breakpoints.down('md')]:{
       display:'none'
    },
    [theme.breakpoints.down('sm')]:{
        display:'none'
    }
}))
export const MainTitle=styled(Box)(({theme})=>({
  color:'#FF0000',
  textDecoration:'underline',
  fontWeight:'900',
  fontSize:'20px',
  marginTop:'2%',
  marginBottom:'1%'

}))
export const MobileHeaderStyle=styled(Box)(({theme})=>({
...flex,
 position:'fixed',
 zIndex:900,
 background:'white',
 height:'10vh',
 display:'none',
 width:'100%',
 [theme.breakpoints.down('md')]:{
  display:'block'
 },
 [theme.breakpoints.down('xs')]:{
  display:'block'
 }

}))