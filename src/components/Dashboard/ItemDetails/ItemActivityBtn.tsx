import React from 'react'

const ItemActivityBtn = ({title, active, adiClass = ""}:any) => {
const styleBtn = active ? "bg-texasRose text-white" : "bg-[#F9F8F6] text-cloudygrey"
  return (
    <div className={`text-19 w-[111px] text-center p-1 cursor-pointer rounded-[6px] ${styleBtn} ${adiClass} `}>
        <p>{title}</p>
    </div>
  )
}

export default ItemActivityBtn