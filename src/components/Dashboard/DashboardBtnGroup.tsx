import React from 'react';
import DashboardBtn from './DashboardBtn';
import { AiFillCaretRight, AiFillStar } from "react-icons/ai";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { BsFillSuitHeartFill, BsFillTagFill } from "react-icons/bs";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";

const DashboardBtnGroup = () => {
    const marginStyle = "mr-12"
    return (
        <div>
            <h1 className='text-center md:text-left inline-flex md:flex text-[34px] text-default font-Rajdhani font-semibold items-center tracking-widest'> <span className='text-[20px]'><AiFillCaretRight /></span> Dashboard</h1>
            <div className='w-[100%] md:w-[70%] flex justify-between items-center mx-auto pt-20'>
                <DashboardBtn link={'/dashboard/item'} title={"Item"} icon={<AiFillStar />} adiClass={marginStyle} />
                <DashboardBtn link={'/dashboard/collections'} title={"Collection"} icon={<RiCheckboxMultipleBlankFill />} adiClass={marginStyle} />
                <DashboardBtn link={'/dashboard/favourite'} title={"Favorite"} icon={<BsFillSuitHeartFill />} adiClass={marginStyle} />
                <DashboardBtn link={'/dashboard/activity'} title={"Activity"} icon={<MdOutlineSettingsBackupRestore />} adiClass={marginStyle} />
                <DashboardBtn link={'/dashboard/offer'} title={"Offers"} icon={<BsFillTagFill />} />
            </div>
        </div>
    );
};

export default DashboardBtnGroup;