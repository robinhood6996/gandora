import React from 'react'
import { FiSearch } from "react-icons/fi"

const SearchInput = () => {
    return (
        <div className='flex items-center padding-size border-[0.5px] rounded-[5px] border-borderdefault'>
            <span className='pr-4 text-default'><FiSearch /></span>
            <input type="text" name="search" id="search" placeholder='Search by name' className='w-full border-none outline-none uppercase md:text-[15px] text-14 font-Rajdhani text-cloudygrey font-semibold' />
        </div>
    )
}

export default SearchInput