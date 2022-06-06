import React from 'react';
import Item from '../../components/Dashboard/Item';
import ItemView from '../../components/Dashboard/ItemView';

const DashboardSingleCollection = () => {
    return (
        <div className="container pt-70">
            <div><ItemView /> </div>
            <div><Item /></div>
        </div>
    );
};

export default DashboardSingleCollection;