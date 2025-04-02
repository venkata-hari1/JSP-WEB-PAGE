"use client"; 
import { styled } from "@mui/material/styles";
import { Typography,Box, Button } from "@mui/material";


export const Typography_Div=styled(Box)(({theme})=>({
    width:'100%',
    height:'40vh',
    [theme.breakpoints.down('md')]:{
        background:'red',
    },
    [theme.breakpoints.down('sm')]:{
        background:'orange',
    }

  }))


export const NextButton=styled(Button)(({theme})=>({
    position: "absolute",
    top: "45%",
    width:"21px",
    left: "10px",
    zIndex: 10,
    cursor: "pointer",
    background: "rgba(0,0,0,0.5)",

  }))
  export const PrevButton=styled(Button)(({theme})=>({
    position: "absolute",
    top: "45%",
    width:"21px",
    right: "10px",
    zIndex: 10,
    cursor: "pointer",
    background: "rgba(0,0,0,0.5)",

  }))
