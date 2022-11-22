import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import NavBar from "../Pages/Share/NavBar/NavBar";
import { AuthContext } from "../UserContext/UserContext";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin,isAdminLoading] = useAdmin(user?.email);
  // const navigate = useNavigate();
  
  
  // console.log(isAdmin,isAdminLoading)
  if(isAdminLoading){
    return <p>loading</p>
  }
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allUser">All User</Link>
                </li>
                <li>
                  <Link to="/dashboard/addDoctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
