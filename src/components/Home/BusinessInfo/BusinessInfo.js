import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faMapMarkerAlt, faClock, faPhone } from '@fortawesome/free-solid-svg-icons'


const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn NY 1003 USa',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call Us now',
        description: '+166963946',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;