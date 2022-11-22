import React, {  useState } from "react";
import { format } from "date-fns";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import BookedAppointment from "../BookedAppointment/BookedAppointment";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Share/Loading/Loading";

const AvailableAppointments = ({ selected }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selected,'PP');

  const {data:appointmentOptions = [], refetch, isLoading } = useQuery({
    queryKey : ['appOptions', date],
    queryFn : () => fetch(`https://doctors-portal-server-liart.vercel.app/appOptions?date=${date}`)
    .then(res => res.json())
  });

  if(isLoading){
    return <Loading></Loading>
  }
  // console.log(appointmentOptions)


  // useEffect(() => {
  //   fetch("https://doctors-portal-server-liart.vercel.app/appOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);

  return (
    <div className="lg:mt-32 mt-16">
      <h3 className="text-center text-secondary font-bold">
        Available Appointments on {format(selected, "PP")}
      </h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-24 mt-6">
        {appointmentOptions.map((options) => (
          <AppointmentOptions
            options={options}
            key={options._id}
            setTreatment={setTreatment}
          ></AppointmentOptions>
        ))}
      </div>
      {treatment && (
        <BookedAppointment
          treatment={treatment}
          selected={selected}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookedAppointment>
      )}
    </div>
  );
};

export default AvailableAppointments;
