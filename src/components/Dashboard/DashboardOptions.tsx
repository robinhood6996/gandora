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
import DashboardBtnGroup from './DashboardBtnGroup';

const DashboardOptions = () => {
    const marginStyle = "mr-12"
    return (
        <div className=''>
            <DashboardBtnGroup />
            <div className='w-full'>
                <Item />
                <Favorite />
                <Collection />
            </div>
        </div>
    )
}

export default DashboardOptions