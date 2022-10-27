import React from "react";
import AwesomeSlider from "react-awesome-slider";
import img1 from "../../Assets/Images/carosel-img/bg1.jpg";
import img2 from "../../Assets/Images/carosel-img/bg2.jpg";
import img3 from "../../Assets/Images/carosel-img/bg3.jpg";
import img4 from "../../Assets/Images/carosel-img/bg4.jpg";

import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AwsomeSlider = () => {
  return (
    <div className="p-0 md:p-28 mx-auto">
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        cancelOnInteraction={false}
        interval={3000}
      >
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
        <div data-src={img4} />
      </AutoplaySlider>
    </div>
  );
};

export default AwsomeSlider;
