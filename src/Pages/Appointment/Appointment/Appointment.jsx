import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div className="mx-5">
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <AvailableAppointments selected={selected}></AvailableAppointments>
    </div>
  );
};

export default Appointment;
