import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    

  return (
    <div className="flex justify-center items-center mt-10 mx-5">
      <div className="w-96 shadow-lg p-4 rounded-md">
        <h3 className="text-xl text-center font-bold m-6">Log In</h3>
        <form>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email address"
              className="input input-bordered w-full"
            />{" "}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="text"
              placeholder="Your password"
              className="input input-bordered w-full"
            />{" "}
          </div>

          <button className="btn btn-accent w-full mt-4">log In</button>
          <p className="text-sm text-center mt-3">
            New Doctor Portals{" "}
            <Link className="text-secondary" to="/signUp">
              Create an account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
