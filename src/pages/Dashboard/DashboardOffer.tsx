import React from 'react';
import DashboardOptions from '../../components/Dashboard/DashboardOptions';
import Offers from '../../components/Dashboard/Offers/Offers';


const DashboardOffer = () => {
    return (
        <div className='container pt-70'>
            <DashboardOptions />

            <Offers />
        </div>
    );
};

export default DashboardOffer;