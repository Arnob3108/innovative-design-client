import React from "react";
import img1 from "../../Assets/Images/carosel-img/bg1.jpg";
import img2 from "../../Assets/Images/carosel-img/bg2.jpg";
import img3 from "../../Assets/Images/carosel-img/bg3.jpg";

const Carosel = () => {
  return (
    <div>
      <div className="carousel w-[95%] lg:w-[80%] mx-auto rounded-2xl mt-14 shadow-2xl shadow-slate-600/80 lg:h-[45rem] h-[20rem] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full h-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn glass btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn glass btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full h-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn glass btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn glass btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full h-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn glass btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn glass btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
