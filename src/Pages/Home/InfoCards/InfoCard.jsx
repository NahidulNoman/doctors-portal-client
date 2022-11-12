import React from "react";

const InfoCard = ({ service }) => {

  const { img, name, description,bgClass } = service;

  return (
    <div className={`card md:card-side bg-base-100 p-5 text-white shadow-xl ${bgClass}`}>
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
