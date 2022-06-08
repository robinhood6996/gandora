import React from 'react'

const DashboardBtn = ({ title, icon, adiClass = "", active = false }: any) => {
    const styleActive = active ? "text-white bg-default" : "border-borderdefault text-davygrey"
    return (
        <button className={`border-[0.5px]  padding-size  rounded-[5px] w-[110px] md:w-[170px] ${adiClass} ${styleActive} flex  justify-center items-center uppercase md:text-[15px] text-14 font-Rajdhani font-semibold hover:text-white hover:bg-default `}> <span className='pr-6'>{icon}</span>{title}</button>
    )
}

export default DashboardBtn