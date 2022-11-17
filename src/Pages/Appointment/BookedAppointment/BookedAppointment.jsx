import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../UserContext/UserContext";
import toast from "react-hot-toast";

const BookedAppointment = ({ treatment, selected ,setTreatment, refetch}) => {
    const {name , slots} = treatment;
  const date = format(selected, "PP");
  const {user} = useContext(AuthContext);

    const handlerBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const patient = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate : date,
            patientName : patient,
            yourTreatment : name,
            phone,
            email,
            slot
        };

        //  TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast

        fetch('http://localhost:5000/bookings', {
          method : 'POST',
          headers : {
            'content-type': 'application/json'
          },
          body : JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged){
            setTreatment(null);
            form.reset();
            toast.success('submit confirmed');
            refetch();
          }
          else{
            toast.error(data.message)
          }
        })

        // console.log(booking)
        
    }


  return (
    <>
      <input type="checkbox" id="appointment" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handlerBooking} className="py-4">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered input-accent w-full mb-3"
            />{" "}
            <br />
            <select name="slot" className="select input-bordered w-full mb-3">
              {
                slots.map((slot,i) => <option
                    value={slot}
                    key={i}
                >{slot}</option>)
              }
            </select>
            <br />
            <input
              type="text"
              name="name"
              disabled
              defaultValue={user?.displayName}
              placeholder="your name"
              className="input input-bordered input-accent w-full mb-3"
            />{" "}
            <br />
            <input
              type="email"
              name="email"
              disabled
              defaultValue={user?.email}
              placeholder="email address"
              className="input input-bordered input-accent w-full mb-3"
            />{" "}
            <br />
            
            <input
              type="phone"
              name="phone"
              placeholder="phone number"
              className="input input-bordered input-accent w-full mb-3"
            />{" "}
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookedAppointment;
