import React from 'react'
import { IoMdArrowDropright} from "react-icons/io"

const ItemTypeBox = ({title, type}:any) => {
  return (
    <div className='w-full px-2 item-type-padding border-[0.5px] rounded-[6px] border-active '>
        <div className='flex'>
        <span className='text-18 text-active'><IoMdArrowDropright/> </span>
            <div>
            <h3 className='flex items-center text-17 text-davygrey'>{title}</h3>
        <p className='text-cloudygrey text-14'>{type}</p>
            </div>
        </div>
        
    </div>
  )
}

export default ItemTypeBox