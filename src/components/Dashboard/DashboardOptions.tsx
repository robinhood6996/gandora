import React from 'react'
import { AiFillCaretRight, AiFillStar } from "react-icons/ai";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { BsFillSuitHeartFill, BsFillTagFill } from "react-icons/bs";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { } from "react-icons/bs";
import DashboardBtn from './DashboardBtn';


const DashboardOptions = () => {
    const marginStyle = "mr-12"
    return (
        <div className='overflow-hidden'>
            <h1 className='text-align md:flex text-[34px] text-default font-Rajdhani font-semibold items-center tracking-widest'> <span className='text-[20px] hidden md:inline-block'><AiFillCaretRight /></span> Dashboard</h1>
            <div className='w-[100%] md:w-[70%] flex justify-between items-center mx-auto pt-20 overflow-x-scroll dashboard-option'>
                <DashboardBtn link={'/dashboard'} title={"Item"} icon={<AiFillStar />} adiClass={marginStyle} />
                <DashboardBtn link={'/dashboard/collection'} title={"Collection"} icon={<RiCheckboxMultipleBlankFill />} adiClass={marginStyle} />
                <DashboardBtn link={'/dashboard/favourite'} title={"Favorite"} icon={<BsFillSuitHeartFill />} adiClass={marginStyle} />
                <DashboardBtn link={'/dashboard/activity'} title={"Activity"} icon={<MdOutlineSettingsBackupRestore />} adiClass={marginStyle} />
                <DashboardBtn link={'/dashboard/offers'} title={"Offers"} icon={<BsFillTagFill />} />
            </div>

        </div>
    )
}

export default DashboardOptions