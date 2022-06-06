import React from 'react';
import Activity from '../../components/Activity/Activity';
import DashboardBtnGroup from '../../components/Dashboard/DashboardBtnGroup';

const DashboardActivity = () => {
    return (
        <div className="container pt-70">
            <DashboardBtnGroup />
            <Activity />
        </div>
    );
};

export default DashboardActivity;