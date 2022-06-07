import React from 'react'
import ethereum from '../../../assets/images/svgs/ethereum.svg'
import ItemActivityBtn from './ItemActivityBtn'

const ItemActivity = () => {
  return (
    <div>
        <div className='text-17 uppercase px-3 py-2 rounded-[6px] bg-[#fef9ed] text-davygrey font-semibold'>
            <h1>Item activity</h1>
        </div>
        <div className="flex py-15">
        <ItemActivityBtn title="Sale" active={true} adiClass="mr-15" />
        <ItemActivityBtn title="Transfer" active={true} adiClass="mr-15" />
        <ItemActivityBtn title="Bid" active={false}  adiClass="mr-15"/>
        <ItemActivityBtn title="Listing" active={false} />
        </div>
        <div className='p-2  border-[0.5px] rounded-[6px] border-active'>
        <table className=' table-fixed w-full text-center font-semibold'>
            <thead className=''>
            <tr className='uppercase'>
    <th className=' py-1 border-r-[0.5px] border-borderdefault'>Event</th>
    <th className=' py-1 border-r-[0.5px] border-borderdefault'>Price</th>
    <th className=' py-1  border-r-[0.5px] border-borderdefault'>From</th>
    <th className=' py-1 border-r-[0.5px] border-borderdefault'>To</th>
    <th className=' py-1'>Time</th>
  </tr>
            </thead>
  
  <tr className=''>
      <td colSpan={5} className=" border-b-[0.5px]  border-borderdefault pt-2"></td>
  </tr>
  
  <tbody className=''>
  <tr>
    <td>Sale</td>
    <td>
        <span className='flex items-center justify-center'>
           <span>
               <img src={ethereum} alt="ethereum" />
           </span>
            <span className='flex flex-col pl-1'>
                <span className='leading-[24px]'>0.95</span>
                <span className='leading-0 text-8'>$31.43</span>
            </span>
        </span>
    </td>
    <td className='text-texasRose'>E5545C</td>
    <td className='text-texasRose'>E5545C</td>
    <td>2 days ago</td>
  </tr>
  <tr>
    <td>Sale</td>
    <td>
        <span className='flex items-center justify-center'>
           <span>
               <img src={ethereum} alt="ethereum" />
           </span>
            <span className='flex flex-col pl-1'>
                <span className='leading-[24px]'>0.95</span>
                <span className='leading-0 text-8'>$31.43</span>
            </span>
        </span>
    </td>
    <td className='text-texasRose'>E5545C</td>
    <td className='text-texasRose'>E5545C</td>
    <td>2 days ago</td>
  </tr>
  <tr>
    <td>Sale</td>
    <td>
        <span className='flex items-center justify-center'>
           <span>
               <img src={ethereum} alt="ethereum" />
           </span>
            <span className='flex flex-col pl-1'>
                <span className='leading-[24px]'>0.95</span>
                <span className='leading-0 text-8'>$31.43</span>
            </span>
        </span>
    </td>
    <td className='text-texasRose'>E5545C</td>
    <td className='text-texasRose'>E5545C</td>
    <td>2 days ago</td>
  </tr>
  <tr>
    <td>Sale</td>
    <td>
        <span className='flex items-center justify-center'>
           <span>
               <img src={ethereum} alt="ethereum" />
           </span>
            <span className='flex flex-col pl-1'>
                <span className='leading-[24px]'>0.95</span>
                <span className='leading-0 text-8'>$31.43</span>
            </span>
        </span>
    </td>
    <td className='text-texasRose'>E5545C</td>
    <td className='text-texasRose'>E5545C</td>
    <td>2 days ago</td>
  </tr>
  <tr>
    <td>Sale</td>
    <td>
        <span className='flex items-center justify-center'>
           <span>
               <img src={ethereum} alt="ethereum" />
           </span>
            <span className='flex flex-col pl-1'>
                <span className='leading-[24px]'>0.95</span>
                <span className='leading-0 text-8'>$31.43</span>
            </span>
        </span>
    </td>
    <td className='text-texasRose'>E5545C</td>
    <td className='text-texasRose'>E5545C</td>
    <td>2 days ago</td>
  </tr>
  <tr>
    <td>Sale</td>
    <td>
        <span className='flex items-center justify-center'>
           <span>
               <img src={ethereum} alt="ethereum" />
           </span>
            <span className='flex flex-col pl-1'>
                <span className='leading-[24px]'>0.95</span>
                <span className='leading-0 text-8'>$31.43</span>
            </span>
        </span>
    </td>
    <td className='text-texasRose'>E5545C</td>
    <td className='text-texasRose'>E5545C</td>
    <td>2 days ago</td>
  </tr>
  <tr>
    <td>Sale</td>
    <td>
        <span className='flex items-center justify-center'>
           <span>
               <img src={ethereum} alt="ethereum" />
           </span>
            <span className='flex flex-col pl-1'>
                <span className='leading-[24px]'>0.95</span>
                <span className='leading-0 text-8'>$31.43</span>
            </span>
        </span>
    </td>
    <td className='text-texasRose'>E5545C</td>
    <td className='text-texasRose'>E5545C</td>
    <td>2 days ago</td>
  </tr>
  </tbody>

 
</table> 
        </div>
    </div>
  )
}

export default ItemActivity