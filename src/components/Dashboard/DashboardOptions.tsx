import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import DashboardBtn from './DashboardBtn';

const DashboardOptions = () => {
    return (
        <div className=''>
            <h1 className='flex text-[34px] text-default font-Rajdhani font-semibold items-center'> <span className='text-[20px]'><AiFillCaretRight /></span> Dashboard</h1>
            <div className='flex'>
                <DashboardBtn />
                <DashboardBtn />
                <DashboardBtn />
                <DashboardBtn />
                <DashboardBtn />
            </div>
        </div>
    )
}

export default DashboardOptions