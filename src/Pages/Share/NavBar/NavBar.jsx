import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handlerOut = () => {
    logOut();
  };

  const menuItems = (
    <>
      <li className="font-semibold ">
        <Link to="/home" className="rounded-lg">
          Home
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/appointment" className="rounded-lg">
          Appointment
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/about" className="rounded-lg">
          About
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/reviews" className="rounded-lg">
          Reviews
        </Link>
      </li>
      <li className="font-semibold">
        <Link to='/dashboard' className="rounded-lg">Dashboard</Link>
      </li>
      {user?.email ? (
        <li onClick={handlerOut} className="font-semibold">
          <Link to="/login" className="rounded-lg">
            LogOut
          </Link>
        </li>
      ) : (
        <li className="font-semibold">
          <Link to="/login" className="rounded-lg">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-light-100 rounded-lg flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
    </div>
  );
};

export default NavBar;
