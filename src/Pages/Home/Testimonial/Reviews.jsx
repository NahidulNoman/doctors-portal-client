import React from "react";

const Reviews = ({ perReview }) => {
  const { name, img, review, location } = perReview;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review}</p>
      
      <div className="flex items-center mt-6">
        <div className="avatar mr-6">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" className="" />
          </div>
        </div>
        <div>
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Reviews;
