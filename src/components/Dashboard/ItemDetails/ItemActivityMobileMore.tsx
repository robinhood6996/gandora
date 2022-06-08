import React, { useState } from 'react'
import ethereum from "../../../assets/images/svgs/ethereum.svg"

const ItemActivityMobileMore = (props: any) => {
    const { image, name, title, number, price, hours } = props;
    const [show, setShow] = useState(false);
    const styleBorder = show ? "border-b-[0.5px] border-t-[0.5px] border-active activity-shadow" : "";
    const styleActive = show ? "text-texasRose" : "text-cloudygrey";
    const styleDisplay = show ? "flex" : "hidden";

    return (
        <div className={`flex flex-col ${styleBorder} cursor-pointer p-2 mt-1 activity-table`}
            onClick={() => setShow(!show)}
        >
            <div className="flex items-center justify-between pb-2">
                <div className='flex flex-row gap-4'>
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <p>{title}</p>
                        <h1 className={`font-semibold text-17 ${styleActive}`}>{name ? name : 'SALE'}</h1>
                        <p>
                            {number}
                        </p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-end'>
                        <img src={ethereum} alt="ethereum" className='w-[17px]' />
                        <h1 className="pl-3 font-semibold text-17">0.95</h1>
                    </div>
                    <p>{hours}</p>
                </div>
            </div>
            <div className={`flex items-center justify-between border-t-[0.5px] border-dashed border-borderdefault pt-8`}>
                {/*  ${styleDisplay} */}
                <div className='text-center'>
                    <p>usd price</p>
                    <h1 className='font-semibold text-17'>$449.51</h1>
                </div>
                <div className='text-center'>
                    <p>quantity</p>
                    <h1 className='font-semibold text-17'>1</h1>
                </div>
                <div className='text-center'>
                    <p>from</p>
                    <h1 className='font-semibold text-17 '>Unnamed</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemActivityMobileMore