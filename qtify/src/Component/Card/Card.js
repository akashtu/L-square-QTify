import React from "react";
import "./Card.css";
import { Tooltip } from "@mui/material";

const Card = ({ title, follows, image, songs }) => {
  return (
    <Tooltip title={songs} placement="top">
      <div className="card-component">
        <div className="card-top">
          <div className="card-top-img">
            <img src={image} alt="random" />
          </div>
          <div className="card-top-text">
            <span className="text-color1">{follows} Follows</span>
          </div>
        </div>
        <div className="card-bottom">
          <span className="text-color">{title}</span>
        </div>
      </div>
    </Tooltip>
  );
};

export default Card;
