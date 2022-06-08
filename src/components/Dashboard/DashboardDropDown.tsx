import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Select from 'react-select';


const DashboardDropDown = ({ options }: any) => {
    return (
        <div className='w-full'>
            <Select options={options} defaultValue={options[0]} isSearchable={false}  classNamePrefix="drop-select" className="uppercase md:text-[15px] text-13 font-Rajdhani text-cloudygrey font-semibold" />
        </div>
    )
}

export default DashboardDropDown