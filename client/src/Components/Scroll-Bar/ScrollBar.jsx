import React from "react";
import ScrollImages from "../../DataFiles/Scroll-Images";
import "./ScrollBar.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ScrollBar() {
  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft -= 700;
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft += 700;
  };

  return (
    <>
      <div className="title">
        <div className="mind">
          <p>What's on your mind?</p>
        </div>
        <div className="arrows">
          <div className="circle">
            <FaArrowLeft
              className="left-arrow"
              onClick={sliderLeft}
              size={15}
            />
          </div>
          <div className="circle">
            <FaArrowRight
              className="right-arrow"
              onClick={sliderRight}
              size={15}
            />
          </div>
        </div>
      </div>
      <div className="scroll-img">
        <div id="slider" className="scrollbar-hide">
          {ScrollImages.map((image, index) => (
            <img
              key={index}
              src={image.house}
              alt={`House ${image.id}`}
              className="food-icons"
            />
          ))}
        </div>
      </div>
      <div className="parent-container">
        <div className="hr-line"></div>
      </div>
    </>
  );
}

export default ScrollBar;
