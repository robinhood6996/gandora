import React from 'react'
import ItemActivityBtn from './ItemActivityBtn'

const ItemActivity = () => {
  return (
    <div>
        <div className='text-17 uppercase px-1 py-2 rounded-[6px] bg-[#fef9ed] text-davygrey font-semibold'>
            <h1>Item activity</h1>
        </div>
        <div className="flex py-15">
        <ItemActivityBtn title="Sale" active={true} adiClass="mr-15" />
        <ItemActivityBtn title="Transfer" active={true} adiClass="mr-15" />
        <ItemActivityBtn title="Bid" active={false}  adiClass="mr-15"/>
        <ItemActivityBtn title="Listing" active={false} />
        </div>
        <div className='p-2  border-[0.5px] rounded-[6px] border-active'>
        <table className=' table-fixed w-full text-center'>
            <thead className=''>
            <tr className='uppercase'>
    <th className=' py-2 border-r-[0.5px] border-borderdefault'>Company</th>
    <th className=' py-2 border-r-[0.5px] border-borderdefault'>Contact</th>
    <th className=' py-2  border-r-[0.5px] border-borderdefault'>Country</th>
    <th className=' py-2 border-r-[0.5px] border-borderdefault'>Company</th>
    <th className=' py-2'>Contact</th>
  </tr>
            </thead>
  
  <tbody className='border-t-[0.5px] border-borderdefault pt-2'>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  </tbody>

 
</table> 
        </div>
    </div>
  )
}

export default ItemActivity