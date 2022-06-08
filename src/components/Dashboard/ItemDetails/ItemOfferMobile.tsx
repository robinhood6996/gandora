import React from 'react'
import ItemOfferMobileMore from "./ItemOfferMobileMore"

const ItemOfferMobile = () => {
  return (
    <div>
        <div className='text-17 uppercase px-3 py-2 rounded-[6px] bg-[#fef9ed] text-davygrey font-semibold'>
            <h1>Item offers</h1>
        </div>
        <div className='pt-15'>
            <ItemOfferMobileMore />
            <ItemOfferMobileMore />
            <ItemOfferMobileMore />
        </div>
    </div>
  )
}

export default ItemOfferMobile