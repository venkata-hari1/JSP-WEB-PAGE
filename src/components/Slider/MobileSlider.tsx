"use client";
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {  Mobile_Slider_Container, NextButton, PrevButton, Typography_Div } from "../Styles";
import Image from 'next/image'
import slider1 from "@/utils/assets/images/slider-1.jpg";
import slider2 from "@/utils/assets/images/slider-2.jpg";
import slider3 from "@/utils/assets/images/slider-3.jpg";
import slider4 from "@/utils/assets/images/slider-4.jpg";
import slider5 from "@/utils/assets/images/slider-5.jpg";


import { React_Type } from "@/utils/Types";
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

function MobileSlider() {
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
    { id: 1, src: slider1, alt: "Slider 1 description" },
    { id: 2, src: slider2, alt: "Slider 2 description" },
    { id: 3, src: slider3, alt: "Slider 3 description" },
    { id: 4, src: slider4, alt: "Slider 4 description" },
    { id: 5, src: slider5, alt: "Slider 5 description" },
  ];
  return (
    <Mobile_Slider_Container>
      <Slider {...settings}>
        {SliderImages.map((slider)=>
         <Typography_Div key={slider.id}>
          
          <Image 
          src={slider.src} 
          width={0}
          height={0}
          sizes="100vw"
          alt={slider.alt}
          style={{ width: '100%', height: '80%' }} 
        /> 
        </Typography_Div>)}

       
      </Slider>
    </Mobile_Slider_Container>
  );
}

export default MobileSlider;
