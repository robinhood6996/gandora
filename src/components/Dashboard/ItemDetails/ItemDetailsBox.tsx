import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const ItemDetailsBox = (props:any) => {
    const [show, setShow] = useState(false)
   
  return (
    <div className="w-full">
        <div className='flex items-center justify-between text-17 uppercase py-2 px-3 rounded-[6px] bg-[#fef9ed] cursor-pointer text-davygrey font-semibold'
        onClick={()=> setShow(!show)}
        >
            <h1>{props.title}</h1>
            <span className={`${show ? "origin-center rotate-180": ""}`}><IoIosArrowDown/></span>
        </div>
        <div className={`${show ? "block p-2" : "hidden"}`}>
            {props.children}
        </div>
    </div>
  )
}

export default ItemDetailsBox