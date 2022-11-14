import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();

    const handlerSingUp = data => {
        console.log(data);
    }

  return (
    <div className="flex justify-center items-center mx-5 mt-10">
      <div className="w-96 shadow-lg p-4 rounded-lg">
        <h3 className="text-xl text-center font-bold m-6">Sign Up</h3>
        <form onSubmit={handleSubmit(handlerSingUp)}>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              required
              {...register('name', {
                required : 'name is required'
              })}
              placeholder="Your name"
              className="input input-bordered w-full"
            />{" "}
            {
                errors.name && <p className="text-sm text-red-700">{errors.name?.message}</p>
            }
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              required
              {...register('email', {
                required : 'email is required'
              })}
              placeholder="Email address"
              className="input input-bordered w-full "
            />{" "}
            {
                errors.email && <p className="text-sm text-red-700">{errors.email?.message}</p>
            }
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Your Password</span>
            </label>
            <input
              type="password"
              {...register('password',{
                required : 'password is required',
                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
              })}
              placeholder="Your password"
              className="input input-bordered w-full"
            />{" "}
            {
                errors.password && <p className="text-sm text-red-700">{errors.password?.message}</p>
            }
          </div>

          <input className='btn btn-accent w-full mt-4' value="Sign up" type="submit" />
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