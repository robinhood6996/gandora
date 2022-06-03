import React from 'react'

const TimerBox = (props: any) => {
    return (
        <div className='rounded-[10px] bg-white w-65 h-85 sm:w-100 sm:h-112 md:h-154 md:w-142 flex flex-col justify-center items-center'>
            <h1 className='font-Rajdhani font-semibold text-texasRose md:leading-80 md:text-90 sm:text-45 sm:leading-44 text-25 leading-24'>{props.amount}</h1>
            <p className='font-poppins uppercase text-10 sm:text-12 md:16 text-davygrey leading-12'>{props.title}</p>
        </div>
    )
}

export default TimerBox