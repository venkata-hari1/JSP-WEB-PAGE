"use client"; 
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { flex } from "../ReusableStyles/Styles";
export const Box_Div=styled(Box)(({theme})=>({
    ...flex,
    [theme.breakpoints.down('md')]:{
       display:'none'
    },
    [theme.breakpoints.down('sm')]:{
        display:'none'
    }

  }))