import React from "react";
import appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div className="mt-36">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${appointment})` }}
      >
        <div className="hero"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h4 className="text-center text-primary font-bold">Contact Us</h4>
            <h1 className="mb-5 lg:text-4xl sm:text-3xl font-bold">
              Stay connected with us
            </h1>
            <input
              type="text"
              placeholder="Email address"
              className="input input-bordered input-secondary w-full max-w-xs mb-4"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Subjects"
              className="input input-bordered input-secondary w-full max-w-xs mb-4"
            />{" "}
            <br />
            <textarea
              className="textarea textarea-secondary mb-4 w-full max-w-xs"
              placeholder="Your messages"
            ></textarea>{" "}
            <br />
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
