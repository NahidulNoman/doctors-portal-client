import React from "react";

const AppointmentOptions = ({ options,setTreatment }) => {
  const { slots, name } = options;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold text-secondary text-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
           htmlFor="appointment"
            className="btn btn-primary text-white"
            disabled={slots.length ===0}
            onClick={()=>setTreatment(options)}
            >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
