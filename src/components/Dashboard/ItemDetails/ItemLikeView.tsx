import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const ItemLikeView = ({icon, title, amount}:any) => {
  return (
    <div className='flex flex-col md:flex-row items-center border-[0.5px] px-3 py-2 rounded-[6px] border-active'>
        <div className="text-center flex flex-col justify-center items-center w-[30%]">
            <span className='text-[58px] text-texasRose'>
               {icon}
            </span>
            <h3 className='uppercase text-26 font-semibold text-texasRose'>{amount}<span className='text-davygrey pl-5'>{title}</span></h3>
        </div>
        <div className="md:w-[70%] w-full md:pl-30 md:border-l-[0.5px] border-t-[0.5px] md:border-t-0 md:pr-20 border-borderdefault pt-2 md:pt-0">
             <h1 className="text-davygrey inline-bolck text-align uppercase text-17 font-semibold">{`Recently ${title} by`}</h1>
             <div className='flex items-center justify-between pl-6'>
             <div>
                 <span className="flex items-center pt-2">
                     <span className='w-15 h-15 rounded-full bg-[#D9D9D9] block'></span>
                     <span className="pl-2">Acjrv863</span>
                 </span>
                 <span className="flex items-center pt-2">
                     <span className='w-15 h-15 rounded-full bg-[#D9D9D9] block'></span>
                     <span className="pl-2">Acjrv863</span>
                 </span>
                 <span className="flex items-center pt-2">
                     <span className='w-15 h-15 rounded-full bg-[#D9D9D9] block'></span>
                     <span className="pl-2">Acjrv863</span>
                 </span>
             </div>
             <div className='hidden md:block'>
                 <span className="flex items-center pt-2">
                     <span className='w-15 h-15 rounded-full bg-[#D9D9D9] block'></span>
                     <span className="pl-2">Acjrv863</span>
                 </span>
                 <span className="flex items-center pt-2">
                     <span className='w-15 h-15 rounded-full bg-[#D9D9D9] block'></span>
                     <span className="pl-2">Acjrv863</span>
                 </span>
                 <span className="flex items-center pt-2">
                     <span className='w-15 h-15 rounded-full bg-[#D9D9D9] block'></span>
                     <span className="pl-2">Acjrv863</span>
                 </span>
             </div>
             </div>
            
        </div>
    </div>
  )
}

export default ItemLikeView