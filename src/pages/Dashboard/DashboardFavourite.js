import React from 'react';
import DashboardOptions from '../../components/Dashboard/DashboardOptions';
import Favorite from '../../components/Dashboard/Favourite';
import SearchInput from '../../components/Dashboard/SearchInput';

const DashboardFavourite = () => {
    return (
        <div className="container pt-70">
            <DashboardOptions />

            <div>
                <Favorite />
            </div>
        </div>
    );
};

export default DashboardFavourite;