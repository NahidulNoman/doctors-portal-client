import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const serviceData = [
        {
            id : 1,
            img : cavity,
            name : 'Fluoride Treatment',
            describe :'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id : 2,
            img : fluoride,
            name : 'Cavity Filling',
            describe :'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id : 3,
            img : whitening,
            name : 'Teeth Whitening',
            describe :'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]

    return (
        <section className='mt-32'>
            <div>
                <h3 className='text-center font-bold text-primary'>OUR SERVICES</h3>
                <p className='text-center text-4xl'>Services We Provide</p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            
        </section>
    );
};

export default Services;