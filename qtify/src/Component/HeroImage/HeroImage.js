import React from "react";
import "./HeroImage.css";
import Logo1 from "../../Images/Logo1";

function HeroImage() {
  return (
    <div className="heroalign">
      <div className="text-color">
        <h1 className="heading">100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div className="logo-layout">
        <Logo1 />
      </div>
    </div>
  );
}

export default HeroImage;
