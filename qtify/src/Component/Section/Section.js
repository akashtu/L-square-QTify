import React from "react";
import Card from "../Card/Card";
import "./Section.css";

const Section = ({ data, text }) => {
  return (
    <div className="section-wraper">
      <div className="Section-content">{text}</div>
      <div className="Section-img">
        {data.map((value) => {
          return (
            <Card
              key={value.id}
              title={value.title}
              follows={value.follows}
              image={value.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section;
