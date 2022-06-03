import React from 'react'
import TimerBox from './TimerBox'
import { useTimer } from 'react-timer-hook';

const Timer = () => {

    const expiryTimestamp = new Date("2022-06-29T01:02:03");
    const {
        seconds,
        minutes,
        hours,
        days
    } = useTimer({ expiryTimestamp });

    return (
        <div className='flex justify-center items-center'>
            <TimerBox amount={days} title="day" />
            <span className='font-Rajdhani font-medium md:text-90 text-50 sm:text-60 mx-1 md:mx-10 text-white'>:</span>
            <TimerBox amount={hours} title="hours" />
            <span className='font-Rajdhani font-medium md:text-90 text-50 sm:text-60 mx-1 md:mx-10 text-white'>:</span>
            <TimerBox amount={minutes} title="minute" />
            <span className='font-Rajdhani font-medium md:text-90 text-50 sm:text-60 mx-1 md:mx-10 text-white'>:</span>
            <TimerBox amount={seconds} title="seconds" />
        </div>
    )
}

export default Timer