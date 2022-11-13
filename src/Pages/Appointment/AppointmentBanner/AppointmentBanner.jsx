import React from "react";
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png';
import bgPng from '../../../assets/images/bg.png';

const AppointmentBanner = ({selected,setSelected}) => {
   
  return (
    <div className="hero min-h-screen"
    style={{background : `url(${bgPng})`}}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:w-1/2 rounded-lg shadow-2xl"
          alt="appointment banner"
        />
        <div className="lg:w-1/2 lg:ml-32 ">
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
            />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
