"use client";
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image'
import {  NextButton, PrevButton, Typography_Div, DeskTop_Slider_Container } from "../Styles";
import { React_Type } from "@/utils/Types";
import DeskTopHeader from "../Headers/DesktopHeader";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/store";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const NextArrow = ({ onClick }:React_Type) => {
  return (
    <NextButton size='small' onClick={onClick}>
    <ArrowBackIosIcon style={{ color: "#FF0000" ,fontSize:'14px'}} />
  </NextButton>
  );
};

const PrevArrow = ({ onClick }:React_Type) => {
  return (
    <PrevButton size='small' onClick={onClick}>
    <ArrowForwardIosIcon style={{ color: "#FF0000" ,fontSize:'14px'}} />
   </PrevButton>
  
  );
};

function DeskTopSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const SliderImages = [
    { id: 1, src: "/assets/images/slider-1.jpg", alt: "Slider 1 description" },
    { id: 2, src: "/assets/images/slider-2.jpg", alt: "Slider 2 description" },
    { id: 3, src: "/assets/images/slider-3.jpg", alt: "Slider 3 description" },
    { id: 4, src: "/assets/images/slider-4.jpg", alt: "Slider 4 description" },
    { id: 5, src: "/assets/images/slider-5.jpg", alt: "Slider 5 description" },
  ];
  return (
    <DeskTop_Slider_Container>
    <DeskTopHeader/>

      <Slider {...settings}>

        {SliderImages.map((slider)=>
         <Typography_Div key={slider.id}>
          <Image 
  src={slider.src} 
  width={1920} 
  height={1080}
  alt={slider.alt}
  unoptimized
  style={{ width: '100%', height: '80%' }} 
/>
        </Typography_Div>)}
      </Slider>
    </DeskTop_Slider_Container>
  );
}

export default DeskTopSlider;
