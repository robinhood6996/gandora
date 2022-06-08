import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import ItemActivity from '../../components/Dashboard/ItemDetails/ItemActivity'
import ItemDetailsTop from '../../components/Dashboard/ItemDetails/ItemDetailsTop'
import ItemMobileActivity from '../../components/Dashboard/ItemDetails/ItemMobileActivity'
import ItemMobileBtn from '../../components/Dashboard/ItemDetails/ItemMobileBtn'
import ItemMobileDetails from '../../components/Dashboard/ItemDetails/ItemMobileDetails'
import ItemOfferMobile from '../../components/Dashboard/ItemDetails/ItemOfferMobile'
import ItemOffers from '../../components/Dashboard/ItemDetails/ItemOffers'
import ItemStat from '../../components/Dashboard/ItemDetails/ItemStat'

const ItemDetails = () => {
    return (
        <div className='container pt-100 pb-40 px-0 md:px-10'>
            <h3 className='flex items-center text-davygrey text-18'> <span className="pl-2 text-davygrey text-17"><MdArrowBackIosNew /></span> Back to item</h3>
            <div className='pt-20'>
                <ItemDetailsTop />
            </div>
            <div className='hidden md:block'>
            <div className='pt-15'>
                <ItemStat />
            </div>
            <div className='pt-20'>
                <ItemActivity />
            </div>
            <div className='pt-20'>
                <ItemOffers />
            </div>
            </div>
{/* mobile vewStart */}
            <div className='block md:hidden'>
                <div className='flex items-center justify-between pt-20'>
                    <ItemMobileBtn title="Detail" active={true} adiClass="mr-12" />
                    <ItemMobileBtn title="Activity" active={false} adiClass="mr-12" />
                    <ItemMobileBtn title="Offer" active={false} />
                </div>

<div>
    <ItemMobileDetails />
</div>

<div className='pt-20'>
    <ItemMobileActivity />
</div>

<div className='pt-20'>
    <ItemOfferMobile />
</div>

            </div>
          
        </div>
    )
}

export default ItemDetails