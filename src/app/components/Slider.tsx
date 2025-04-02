"use client";
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from "@mui/material";
import {  NextButton, PrevButton, Typography_Div } from "./Styles";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const NextArrow = ({ onClick }: any) => {
  return (
    <NextButton onClick={onClick}>
    <ArrowBackIosIcon style={{ color: "white" }} />
  </NextButton>
  );
};

const PrevArrow = ({ onClick }: any) => {
  return (
    <PrevButton onClick={onClick}>
    <ArrowForwardIosIcon style={{ color: "white" }} />
   </PrevButton>
  
  );
};

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container" style={{ position: "relative",height:'40vh' }}>
      <Slider {...settings}>
        <Typography_Div>
          <h3>1</h3>
        </Typography_Div>
        <Typography_Div>
          <h3>2</h3>
        </Typography_Div>
        <Typography_Div>
          <h3>3</h3>
        </Typography_Div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
