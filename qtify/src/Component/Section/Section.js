import React from "react";
import Card from "../Card/Card";
import "./Section.css";
import { useState } from "react";
import Carousel from "../Carousel/Carousel";
const Section = ({ data, text, totalSongs }) => {
  const [toCollapse, setToCollapse] = useState(true);
  return (
    <div className="section-wraper">
      <div className="Section-parent">
        <div className="Section-content">{text}</div>
        <div
          className="Section-content-1"
          onClick={() => setToCollapse(!toCollapse)}
        >
          {toCollapse ? "Show all" : "Collapse"}
        </div>
      </div>
      {toCollapse ? (
        <div>
          <Carousel data={data} swiperId={text} />
        </div>
      ) : (
        <div className="Section-img">
          {data.map((value) => {
            return (
              <Card
                key={value.id}
                title={value.title}
                follows={value.follows}
                image={value.image}
                songs={value.songs.length}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Section;
