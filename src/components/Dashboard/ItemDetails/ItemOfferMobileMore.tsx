import React,{useState} from 'react'
import ethereum from "../../../assets/images/svgs/ethereum.svg"

const ItemOfferMobileMore = () => {

    const [show, setShow] = useState(false)

    const styleBorder = show ? "border-b-[0.5px] border-t-[0.5px] border-active activity-shadow": ""
    const styleDisplay = show ? "flex" : "hidden"

  return (
    <div className={`flex flex-col ${styleBorder} cursor-pointer p-2 mt-1 activity-table`}
    onClick={()=> setShow(!show)}
    >
        <div className="flex items-center justify-between pb-2">
        <div>
                <div className='flex items-center justify-end'>
                    <img src={ethereum} alt="ethereum" className='w-[17px]' />
                    <h1 className="pl-3 font-semibold text-17">0.95</h1>
                </div>
                <p>
                    {show ? "- less" : "+ more"}
                </p>
                
            </div>
            <div>
            <p className='uppercase'>Expiration</p>
                <h1 className={`font-semibold text-17 `}>about 24 hours</h1>
               
            </div>
            
        </div>
        <div className={`flex items-center justify-between border-t-[0.5px] border-dashed border-borderdefault pt-8 ${styleDisplay}`}>
            <div className='text-center'>
                <p>usd price</p>
                <h1 className='font-semibold text-17'>$449.51</h1>
            </div>
            <div className='text-center'>
                <p>floor difference</p>
                <h1 className='font-semibold text-17'>7% Below</h1>
            </div>
            <div className='text-center'>
                <p>from</p>
                <h1 className='font-semibold text-17'>Unnamed</h1>
            </div>
        </div>
    </div>
  )
}

export default ItemOfferMobileMore