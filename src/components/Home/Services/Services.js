import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const servicesData = [
    {
        title: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: fluoride
    },
    {
        title: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: cavity
    },
    {
        title: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className='services-container mt-5'>
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Our Services</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        servicesData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;