import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-component">
      <div className="card-top">
        <div className="card-top-img">
          <img
            src="https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="random"
          />
        </div>
        <div className="card-top-text">
          <span className="text-color1">100 Follows</span>
        </div>
      </div>
      <div className="card-bottom">
        <span className="text-color">New Bollywood</span>
      </div>
    </div>
  );
};

export default Card;
