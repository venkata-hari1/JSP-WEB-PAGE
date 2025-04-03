"use client"; 
import { styled } from "@mui/material/styles";
import { Typography,Box, Button } from "@mui/material";


export const Typography_Div=styled(Box)(({theme})=>({
    width:'100%',
    height:'100vh',
    [theme.breakpoints.down('md')]:{
        height:'50vh',
    },
    [theme.breakpoints.down('sm')]:{
        height:'50vh',
    }

  }))

  export const DeskTop_Slider_Container=styled(Box)(({theme})=>({
    position:'fixed',
    background:'#fdd4b6',
    padding:'1%',
    width:'50%',
    height:'100vh',
   
    display:'block',
    [theme.breakpoints.down('md')]:{
        display:'none',
    },
    [theme.breakpoints.down('sm')]:{
        display:'none',
    }

  }))
  export const Mobile_Slider_Container=styled(Box)(({theme})=>({
    position: "relative",
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block',
    },
    [theme.breakpoints.down('sm')]:{
        display:'block',
    }

  }))
export const NextButton=styled(Button)(({theme})=>({
    position: "absolute",
    boxShadow:'0 0 4px grey',
    top: "40%",
    width:"21px",
    left: "1px",
    zIndex: 10,
    minWidth:'30px !important',
    minHeight:'30px !important',
    cursor: "pointer",
    background: "white",

  }))
  export const PrevButton=styled(Button)(({theme})=>({
    boxShadow:'0 0 4px grey',
    position: "absolute",
    top: "40%",
    minWidth:'30px !important',
    minHeight:'30px !important',
    width:"21px !important",
    right: "1px",
    zIndex: 10,
    cursor: "pointer",
    background: "white"

  }))
