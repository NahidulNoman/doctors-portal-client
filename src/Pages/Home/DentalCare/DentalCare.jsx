import React from "react";
import treatment from '../../../assets/images/treatment.png';

const DentalCare = () => {
  return (
    <div className="hero min-h-screen lg:mt-36 mt-8">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="rounded-lg shadow-2xl sm:w-3/4 lg:w-1/3 lg:mr-24"
          alt=""
        />
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
