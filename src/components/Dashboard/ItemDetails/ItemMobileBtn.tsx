import React from 'react'

const ItemMobileBtn = ({title, active, adiClass}:any) => {
    const styleBtn = active ? "bg-texasRose text-white" : "border-[0.5px] border border-borderdefault text-cloudygrey"
    return (
      <div className={`text-14 w-[111px] text-center font-semibold p-1 cursor-pointer rounded-[6px] ${styleBtn} ${adiClass} `}>
          <p>{title}</p>
      </div>
    )
}

export default ItemMobileBtn