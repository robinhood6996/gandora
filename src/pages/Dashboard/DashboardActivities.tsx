import React from 'react';
import ActivityTable from '../../components/Dashboard/ActivityTable';
import DashboardActivity from '../../components/Dashboard/DashboardActivity';
import DashboardOptions from '../../components/Dashboard/DashboardOptions';
import nft1 from '../../assets/images/activity/nft1.png'
import nft2 from '../../assets/images/activity/nft2.png'
import nft3 from '../../assets/images/activity/nft3.png'
import nft4 from '../../assets/images/activity/nft4.png'
import nft5 from '../../assets/images/activity/nft5.png'
import nft6 from '../../assets/images/activity/nft6.png'
const DashboardActivities = () => {
    return (
        <div className='container pt-70'>
            <DashboardOptions />
            <div>
                <DashboardActivity />
            </div>
            {/* <div className='hidden'>
                <ActivityTable image={nft1} title={'SALE'} name={'Bareblockclub'} number={'#1257961'} price={0.60} hours={'about 24 hours ago'} />
            </div> */}
        </div>
    );
};

export default DashboardActivities;