import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyAppointment from "../Pages/DashBoard/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Reviews from "../Pages/Reviews/Reviews";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
            },
            {
                path : '/home',
                element : <Home></Home>,
            },
            {
                path : '/appointment',
                element : <Appointment></Appointment>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/reviews',
                element : <Reviews></Reviews>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signUp',
                element : <SignUp></SignUp>
            }
        ]
    },
    {
        path : '/dashboard',
        element : <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children : [
            {
                path : '/dashboard',
                element : <MyAppointment></MyAppointment>
            }
        ]
    }
])