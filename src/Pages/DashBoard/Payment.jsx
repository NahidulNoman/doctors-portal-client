import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const {appointmentDate,patientName,yourTreatment,price,email,slot} = useLoaderData();

    return (
        <div>
            <h3 className='text-3xl text-semibold'>Payment For {yourTreatment}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;