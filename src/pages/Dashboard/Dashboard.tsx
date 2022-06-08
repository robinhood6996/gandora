import React from 'react'
import Collection from '../../components/Dashboard/Collection'
import DashboardOptions from '../../components/Dashboard/DashboardOptions'
import Favorite from '../../components/Dashboard/Favourite'
import Item from '../../components/Dashboard/Item'

const Dashboard = () => {
    return (
        <div className='container pt-70'>
            <DashboardOptions />
            <div className='w-full'>
                <Item />
                {/* <Favorite />
                <Collection /> */}
            </div>
        </div>
    )
}

export default Dashboard