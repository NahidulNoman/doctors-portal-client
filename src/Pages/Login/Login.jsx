import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { AuthContext } from "../../UserContext/UserContext";

const Login = () => {
    const {logInUser,signUpGoogle,resetPassword} = useContext(AuthContext);
    const {register,handleSubmit, formState:{errors}} = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [logEmail , setLogEmail] = useState('');
    const [token] = useToken(logEmail);

    const from = location.state?.from?.pathname || '/';

    if(token) {
      navigate(from , {replace: true});
    }
    // console.log(email)

    const handlerLogin = (data) => {
        console.log(data);
        // setEmail(data.email);
        logInUser(data.email,data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLogEmail(data.email);
        })
        .catch(error => {
            console.log(error)
        })
    };

    const handlerGoogle = () => {
        signUpGoogle()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error);
        })
    };
    

    const handlerResetPassword = () => {
      resetPassword(email)
      .then(()=>{
        alert('check your email.')
      })
      .catch(error => console.log(error))
    }

  return (
    <div className="flex justify-center items-center mt-10 mx-5">
      <div className="w-96 shadow-lg p-4 rounded-md">
        <h3 className="text-xl text-center font-bold m-6">Log In</h3>
        <form onSubmit={handleSubmit(handlerLogin)}>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              required
              {...register('email', {
                required : 'email is required',
                onBlur : (e)=>setEmail(e.target.value),
              },
              )}
              placeholder="Email address"
              className="input input-bordered w-full"
            />{" "}
            {
                errors.email && <p className="text-red-700 text-sm">{errors.email?.message}</p>
            }
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              {...register('password', {
                required : 'password is required'
              })}
              placeholder="Your password"
              className="input input-bordered w-full"
            />{" "}
            {
                errors.password && <p className="text-red-700 text-sm m-1">{errors.password?.message}</p>
            }
          </div>
          <label className="label">
              <span className="label-text text-sm" onClick={handlerResetPassword}>Forgot Password ?</span>
            </label>
          <input className='btn btn-accent w-full' value="Login" type="submit" />
          <p className="text-sm text-center mt-3">
            New Doctor Portals{" "}
            <Link className="text-secondary" to="/signUp">
              Create an account
            </Link>
          </p>
          <div className="divider">OR</div>
        </form>
          <button onClick={handlerGoogle} className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
      </div>
    </div>
  );
};

export default Login;
