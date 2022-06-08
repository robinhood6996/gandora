import React from 'react'
import DashboardDropDown from '../DashboardDropDown'
import ItemActivityMobileMore from './ItemActivityMobileMore'


const ItemMobileActivity = () => {
    const options1 = [
        { value: 'sale', label: 'Sale' },
        { value: 'transfer', label: 'Transfer' },
        { value: 'bid', label: 'Bid' },
        { value: 'listing', label: 'Listing' }
    ]

  return (
    <div>
        <div className='text-17 uppercase px-3 py-2 rounded-[6px] bg-[#fef9ed] text-davygrey font-semibold'>
            <h1>Item activity</h1>
        </div>
        <div className='py-15 w-[50%] mx-auto'>
            <DashboardDropDown options={options1} />
        </div>
        <div className='pt-15 border-t-[0.5px] border-borderdefault'>
            <ItemActivityMobileMore />
            <ItemActivityMobileMore />
            <ItemActivityMobileMore />
        </div>
    </div>
  )
}

export default ItemMobileActivity