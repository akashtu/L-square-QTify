import React from "react";
import "./Slider.css";
// import Carousel from "../Carousel/Carousel";
import SongCarousel from "../Carousel/SongCarousel";
const Slider = ({ data1, text }) => {
  return (
    <div className="section-wraper">
      <div className="Section-parent">
        <div className="Section-content">{text}</div>
      </div>
      <div>
        <SongCarousel data1={data1} swiperId={text} />
      </div>
    </div>
  );
};

export default Slider;
