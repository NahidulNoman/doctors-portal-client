import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import BookedAppointment from '../BookedAppointment/BookedAppointment';

const AvailableAppointments = ({selected}) => {
    const [appointmentOptions , setAppointmentOptions] = useState([]);

    useEffect( () => {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])

    return (
        <div className='lg:mt-32 mt-16'>
            <h3 className='text-center text-secondary font-bold'>Available Appointments on {format(selected, 'PP')}</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-24 mt-6'>
                {
                    appointmentOptions.map(options => <AppointmentOptions
                        options={options}
                        key={options._id}
                    ></AppointmentOptions>)
                }
            </div>
            <BookedAppointment></BookedAppointment>
        </div>
    );
};

export default AvailableAppointments;