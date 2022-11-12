import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            img: clock
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            img: marker
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            img: phone
        },
    ]
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
            {
                servicesData.map(service =><InfoCard
                    key={service.id}
                    service={service}
                ></InfoCard>)
            }
        </div>
    );
};

export default Services;