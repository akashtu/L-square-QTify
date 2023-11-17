import React from "react";
import "./Slider.css";
import Carousel from "../Carousel/Carousel";
const Slider = ({ data, text }) => {
  return (
    <div className="section-wraper">
      <div className="Section-parent">
        <div className="Section-content">{text}</div>
      </div>
      <div>
        <Carousel data={data} swiperId={text} />
      </div>
    </div>
  );
};

export default Slider;
