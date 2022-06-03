import React from 'react'
import SocialIcons from '../../components/SocialIcons'
import Timer from './Timer'

const ComingTimer = () => {
    return (
        <div className="pt-40 min-h-screen h-full coming__timer-bg text-center px-20">
            <div className="flex flex-col justify-center items-center w-full h-full min-h-[80vh]">

                <h1 className="uppercase text-35 sm:text-40 md:text-50 tracking-widest font-poppins font-semibold md:leading-60 text-white">
                    <span>coming soon</span>{" "}
                </h1>

                <div className='pt-2 pb-4'>
                    <Timer />
                </div>

                <h3 className="font-Rajdhani pt-10 pb-10 font-semibold uppercase text-white text-14 sm:text-18 tracking-widest">
                    Stay tuned something exciting is coming up.
                </h3>
                <div className="w-full mlg:w-402 flex tex-center">
                    <input
                        type="email"
                        className="w-full h-35 bg-white py-1 px-2 rounded  text-12 sm:text-14 md:text-18 font-Rajdhani font-semibold text-cloud text-center mr-8"
                        placeholder="grandora@email.com"
                    />
                    <button className="text-10 sm:text-14 md:text-18 h-35 w-50 sm:w-60 md:w-70 lg:w-112 text-white py-1 px-2 rounded bg-texasRose font-poppins font-semibold uppercase tracking-wide">send</button>
                </div>
                <div className="pt-15 sm:pt-15">
                    <SocialIcons type={"text-white"} />
                </div>
            </div>
        </div>
    )
}

export default ComingTimer