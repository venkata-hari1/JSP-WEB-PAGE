"use client"; 
import { styled } from "@mui/material/styles";
import { Typography,Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display:'grid',
  gridTemplateColumns:'23% 23% 23% 23%',
  gridGap:'1%',
  height:'100vh',
  backgroundColor: "purple",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns:'100%',
    backgroundColor: "green",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns:'100%',
    backgroundColor: "orange",
  },
}));
export const TypographyStyles=styled(Typography)(({theme})=>({
  marginTop:'10%',
  border:'1px solid black',
  height:'40vh'
}))
