import React from 'react';
import AppointmentDoctors from '../Appointment/AppointmentDoctors';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentDoctors></AppointmentDoctors>
        </div>
    );
};

export default Home;