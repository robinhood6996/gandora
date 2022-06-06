import React from 'react';
import DashboardBtnGroup from '../../components/Dashboard/DashboardBtnGroup';
import Favorite from '../../components/Dashboard/Favourite';

const DashboardFavourite = () => {
    return (
        <div className="container pt-70">
            <DashboardBtnGroup />
            <Favorite />
        </div>
    );
};

export default DashboardFavourite;