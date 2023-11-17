import React from "react";
import "./Card.css";

const SongCard = ({ title, likes, image }) => {
  return (
    <div className="card-component">
      <div className="card-top">
        <div className="card-top-img">
          <img src={image} alt="random" />
        </div>
        <div className="card-top-text">
          <span className="text-color1">{likes} Likes</span>
        </div>
      </div>
      <div className="card-bottom">
        <span className="text-color">{title}</span>
      </div>
    </div>
  );
};

export default SongCard;
