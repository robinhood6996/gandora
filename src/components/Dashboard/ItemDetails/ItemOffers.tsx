import React from 'react'
import ethereum from '../../../assets/images/svgs/ethereum.svg'

const ItemOffers = () => {
  return (
    <div>
    <div className='text-17 uppercase px-3 py-2 rounded-[6px] bg-[#fef9ed] text-davygrey font-semibold'>
        <h1>Offers</h1>
    </div>
    <div className='p-2 mt-20 border-[0.5px] rounded-[6px] border-active'>
    <table className=' table-fixed w-full text-center font-semibold'>
        <thead className=''>
        <tr className='uppercase'>
<th className=' py-1 border-r-[0.5px] border-borderdefault'>Price</th>
<th className=' py-1 border-r-[0.5px] border-borderdefault'>Usd price</th>
<th className=' py-1  border-r-[0.5px] border-borderdefault'>Floor difference</th>
<th className=' py-1 border-r-[0.5px] border-borderdefault'>Expiration</th>
<th className=' py-1'>From</th>
</tr>
        </thead>

<tr className=''>
  <td colSpan={5} className=" border-b-[0.5px]  border-borderdefault pt-2"></td>
</tr>

<tbody className=''>
<tr>
<td>
    <span className='flex items-center justify-center'>
    <img src={ethereum} alt="ethereum" />
    <span className='leading-[24px] pl-1'>0.95</span>
    </span>
</td>
<td>2 days ago</td>
<td>7% bellow</td>
<td>about 24 hours</td>
<td className='text-texasRose'>E5545C</td>
</tr>
<tr>
<td>
    <span className='flex items-center justify-center'>
    <img src={ethereum} alt="ethereum" />
    <span className='leading-[24px] pl-1'>0.95</span>
    </span>
</td>
<td>2 days ago</td>
<td>7% bellow</td>
<td>about 24 hours</td>
<td className='text-texasRose'>E5545C</td>
</tr>
<tr>
<td>
    <span className='flex items-center justify-center'>
    <img src={ethereum} alt="ethereum" />
    <span className='leading-[24px] pl-1'>0.95</span>
    </span>
</td>
<td>2 days ago</td>
<td>7% bellow</td>
<td>about 24 hours</td>
<td className='text-texasRose'>E5545C</td>
</tr>
</tbody>
</table> 
    </div>
</div>
  )
}

export default ItemOffers