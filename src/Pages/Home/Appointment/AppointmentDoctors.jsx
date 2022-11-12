import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";

const AppointmentDoctors = () => {
  return (
    <section className="lg:mt-44 mt-6" style={{ background: `url(${appointment})` }}>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 rounded-lg hidden md:block lg:w-1/2"
            alt=""
          />
          <div >
            <h4 className="text-lg text-primary font-bold mb-4">Appointment</h4>
            <h1 className="lg:text-5xl text-3xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentDoctors;
