import React from 'react'
import { AiFillCaretRight, AiFillStar } from "react-icons/ai";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { BsFillSuitHeartFill, BsFillTagFill } from "react-icons/bs";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { } from "react-icons/bs";
import DashboardBtn from './DashboardBtn';
import SearchInput from './SearchInput';
import DashboardDropDown from './DashboardDropDown';
import Item from './Item';
import Favorite from './Favourite';
import Collection from "./Collection"

const DashboardOptions = () => {
    const marginStyle = "mr-12"
    return (
        <div className=''>
            <h1 className='text-center md:text-left inline-flex md:flex text-[34px] text-default font-Rajdhani font-semibold items-center tracking-widest'> <span className='text-[20px]'><AiFillCaretRight /></span> Dashboard</h1>
            <div className='w-[100%] md:w-[70%] flex justify-between items-center mx-auto pt-20'>
                <DashboardBtn title={"Item"} icon={<AiFillStar />} adiClass={marginStyle} />
                <DashboardBtn title={"Collection"} icon={<RiCheckboxMultipleBlankFill />} adiClass={marginStyle} />
                <DashboardBtn title={"Favorite"} icon={<BsFillSuitHeartFill />} adiClass={marginStyle} />
                <DashboardBtn title={"Activity"} icon={<MdOutlineSettingsBackupRestore />} adiClass={marginStyle} />
                <DashboardBtn title={"Offers"} icon={<BsFillTagFill />} />
            </div>
            <div className='w-full'>
                {/* <Item /> */}
                <Favorite />
                {/* <Collection /> */}
            </div>
        </div>
    )
}

export default DashboardOptions