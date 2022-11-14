import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center mx-5 mt-10">
      <div className="w-96 shadow-lg p-4 rounded-lg">
        <h3 className="text-xl text-center font-bold m-6">Sign Up</h3>
        <form>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full"
            />{" "}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="text"
              placeholder="Email address"
              className="input input-bordered w-full "
            />{" "}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Your Password</span>
            </label>
            <input
              type="text"
              placeholder="Your password"
              className="input input-bordered w-full"
            />{" "}
            <label className="label">
              <span className="label-text text-sm ">Forgot Password ?</span>
            </label>
          </div>

          <button className="btn btn-accent w-full mt-3">Sign Up</button>
          <p className="text-sm text-center mt-4">Have an Account <Link to='/login' className="text-secondary">Please Log In ?</Link></p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
