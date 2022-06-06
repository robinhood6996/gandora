import React from 'react'
import { AiFillCaretRight, AiFillStar } from "react-icons/ai";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { BsFillSuitHeartFill, BsFillTagFill } from "react-icons/bs";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { } from "react-icons/bs";
import DashboardBtn from './DashboardBtn';
import SearchInput from './SearchInput';
import DashboardDropDown from './DashboardDropDown';

const DashboardOptions = () => {
    const marginStyle = "mr-10"
    return (
        <div className=''>
            <h1 className='flex text-[34px] text-default font-Rajdhani font-semibold items-center tracking-widest'> <span className='text-[20px]'><AiFillCaretRight /></span> Dashboard</h1>
            <div className='flex w-[100%] md:w-[70%] justify-between items-center mx-auto'>
                <DashboardBtn title={"Item"} icon={<AiFillStar />} adiClass={marginStyle} />
                <DashboardBtn title={"Collection"} icon={<RiCheckboxMultipleBlankFill />} adiClass={marginStyle} />
                <DashboardBtn title={"Favorite"} icon={<BsFillSuitHeartFill />} adiClass={marginStyle} />
                <DashboardBtn title={"Activity"} icon={<MdOutlineSettingsBackupRestore />} adiClass={marginStyle} />
                <DashboardBtn title={"Offers"} icon={<BsFillTagFill />} />
            </div>
            <div className='flex'>
                <div>
                    <SearchInput />
                </div>
                <div>
                    <DashboardDropDown />
                </div>
                <div>
                    <DashboardDropDown />
                </div>

            </div>
        </div>
    )
}

export default DashboardOptions