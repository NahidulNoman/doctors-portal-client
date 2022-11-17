import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";

const MyAppointment = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    console.log(user?.email)
    const {data: bookings = []} = useQuery({
        queryKey : [ 'bookings', user?.email],
        queryFn : async()=> {
            const res = await fetch(url, {
              headers : {
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
        }
    });
    
    console.log(bookings)

  return (
    <div>
      <h3 className="font-semibold text-2xl mb-6">My Appointment</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map((book, i) => <tr  className="hover">
                <th>{i+1}</th>
                <td>{book.patientName}</td>
                <td>{book.yourTreatment}</td>
                <td>{book.appointmentDate}</td>
                <td>{book.slot}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
