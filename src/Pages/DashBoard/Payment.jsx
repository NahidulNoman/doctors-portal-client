import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

// console.log(stripePromise);
const Payment = () => {
    const booking = useLoaderData();
    const {price,appointmentDate,yourTreatment,slot,} = booking
    return (
        <div>
        <h3 className="text-3xl">Payment for {yourTreatment}</h3>
        <p className="text-xl mt-5">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
        <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    booking={booking}
                />
            </Elements>
        </div>
    </div>
    );
};

export default Payment;