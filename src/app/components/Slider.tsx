"use client";
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Slider = dynamic(() => import("react-slick"), { ssr: false });

function AutoPlay() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: false,
        nextArrow: <ArrowBackIosIcon />,
        prevArrow: <PrevArrow />, // Left arrow
      };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
       
      </Slider>
    </div>
  );
}

export default AutoPlay;
