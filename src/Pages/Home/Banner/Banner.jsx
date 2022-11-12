import React from "react";
import chair from '../../../assets/images/chair.png';
import bgPng from '../../../assets/images/bg.png';

const Banner = () => {
  return (
    <div className="hero min-h-screen" 
    style={{background : `url(${bgPng})`}}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="rounded-lg shadow-2xl sm:w-1/2 "
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
