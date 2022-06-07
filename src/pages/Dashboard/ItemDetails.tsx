import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import ItemActivity from '../../components/Dashboard/ItemDetails/ItemActivity'
import ItemDetailsTop from '../../components/Dashboard/ItemDetails/ItemDetailsTop'
import ItemOffers from '../../components/Dashboard/ItemDetails/ItemOffers'
import ItemStat from '../../components/Dashboard/ItemDetails/ItemStat'

const ItemDetails = () => {
    return (
        <div className='container pt-100 pb-40'>
            <h3 className='flex items-center text-davygrey text-18'> <span className="pl-2 text-davygrey text-17"><MdArrowBackIosNew /></span> Back to item</h3>
            <div className='pt-20'>
                <ItemDetailsTop />
            </div>
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
    )
}

export default ItemDetails