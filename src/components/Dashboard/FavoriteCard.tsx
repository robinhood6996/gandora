import React from 'react'
import { BsEye } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { BsBagFill } from "react-icons/bs";
import item3 from "../../assets/images/news/item3.png"
import ethereum from "../../assets/images/svgs/ethereum.svg"


const FavoriteCard = () => {
    return (
        <div className='w-full card-box-shadow border-[0.5px] border-borderdefault overflow-hidden flex flex-col rounded-tl-[10px] rounded-tr-[10px]  md:rounded-bl-[40px] rounded-bl-[30px] md:rounded-br-[40px] rounded-br-[30px] font-lato'>
            <div>
                <img src={item3} alt="" className='w-full' />
            </div>
            <div className='md:px-3 px-1 md:pb-5 pb-4'>
                <div className='pt-3 pb-2 text-left'>
                    <h1 className='uppercase md:text-14 text-10 text-cloudygrey fonnt-semibold font-lato'>Bearblock<span className='text-14 text-cloudygrey fonnt-semibold font-lato'>#01</span></h1>
                    <div className='flex justify-between items-center py-1'>
                        <h4 className='md:text-10 text-7 uppercase text-cloudygrey font-lato'>created by: <span className='uppercase text-cloudygrey font-lato'>IAMPPOOKK</span> </h4>
                        <h4 className='md:text-10 text-7 uppercase text-cloudygrey font-lato'>3 day left</h4>
                    </div>
                </div>
                <div className='flex justify-between items-center py-2 border-t-[0.5px] border-b-[0.5px] border-borderdefault'>
                    <div className='flex items-center'>
                        <div>
                            <img src={ethereum} alt={"ethereum icon"} />
                        </div>
                        <div>
                            <h1 className='uppercase md:text-14 text-12 font-lato font-semibold text-cloudygrey'>110</h1>
                            <h5 className='md:text-10 text-7 text-cloudygrey'>($2,388.74)</h5>
                        </div>
                    </div>
                    <div className="flex">
                        <h2 className='md:text-10 text-8 font-semibold font-lato text-cloudygrey'>Last:</h2>
                        <img src={ethereum} alt="ethereum" className='md:w-[15px] w-[10px]' />
                        <h2 className='md:text-10 text-8 font-semibold font-lato text-cloudygrey'>121.9</h2>
                    </div>
                </div>
                <div className='flex pt-2'>
                    <div className='pr-10 flex items-center md:text-9 text-7'>
                        <span className='pr-3 '><BsEye /></span>
                        120k
                    </div>
                    <div className='flex items-center md:text-9 text-7'>
                        <span className='pr-3 '><FaRegHeart /></span>
                        80.1k
                    </div>
                </div>
                <div className="flex pt-2">
                    <button className={`mx-auto   px-2 py-[5px]  rounded-[5px] md:w-[155px] w-80 flex  justify-center items-center uppercase md:text-[14px] text-10 font-Rajdhani font-semibold text-white bg-default `}> <span className='pr-6'><BsBagFill /></span>Buy Now</button>
                </div>

            </div>
        </div>
    )
}

export default FavoriteCard



