import React from 'react'
import { FiSearch } from "react-icons/fi"

const SearchInput = () => {
    return (
        <div className='flex items-center p-2 border-[0.5px] rounded-[5px] border-borderdefault'>
            <span className='pr-4 text-default'><FiSearch /></span>
            <input type="text" name="search" id="search" placeholder='Search by name' className='w-full border-none outline-none uppercase text-[15px] font-Rajdhani text-cloudygrey font-semibold' />
        </div>
    )
}

export default SearchInput