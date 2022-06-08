import React from 'react'
import { BsEye } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import ItemLikeView from './ItemLikeView'

const ItemStat = () => {
  return (
    <div>
         <div className='text-17 uppercase px-3 py-2 rounded-[6px] bg-[#fef9ed] text-davygrey font-semibold'>
            <h1>Product stat</h1>
        </div>
        <div className='grid grid-cols-2 gap-x-20 pt-10'>
            <ItemLikeView icon={<FaRegHeart/>} amount="100" title="like" />
            <ItemLikeView icon={<BsEye/>} amount="21k" title="views" />
        </div> 
    </div>
  )
}

export default ItemStat