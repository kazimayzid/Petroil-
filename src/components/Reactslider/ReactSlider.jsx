import React from "react";
import Sliderimg1 from "../../assets/sliderimg1.png";
import Sliderimg2 from "../../assets/sliderimg2.png";
import Sliderimg3 from "../../assets/sliderimg3.png";
import Sliderimg4 from "../../assets/sliderimg4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="">
          <img src={Sliderimg1} alt="" />
        </div>
        <div className="">
          <img src={Sliderimg2} alt="" />
        </div>
        <div className="">
          <img src={Sliderimg3} alt="" />
        </div>
        <div className="">
          <img src={Sliderimg4} alt="" />
        </div>
       
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
