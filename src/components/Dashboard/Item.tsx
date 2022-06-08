import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import DashboardDropDown from './DashboardDropDown'
import ProductCard from './ProductCard'
import SearchInput from './SearchInput'

const Item = () => {

    const options1 = [
        { value: 'allitem', label: 'All item' },
        { value: 'singleitem', label: 'Single item' },
        { value: 'bundle', label: 'Bundle' }
    ]

    const options2 = [
        { value: 'recently-create', label: 'Recently Create' },
        { value: 'recently-sold', label: 'Recently Sold' },
        { value: 'recently-received', label: 'Recently Received' },
        { value: 'ending-soon', label: 'Ending Soon' },
        { value: 'price-low-to-high', label: 'Price [Low - High]' },
        { value: 'price-high-to-low', label: 'Price [High - Low]' },
        { value: 'hight-last-sale', label: 'Highest Last Sale' },
        { value: 'most-favorite', label: 'Most Favorite' },
        { value: 'most-view', label: 'Most View' },
        { value: 'oldest', label: 'Oldest' }
    ]

    const [showOption, setShowOptions] = useState(false)

    return (
        <div>
            <div className='flex pt-40 w-[100%] lg:w-[90%] mx-auto'>
                <div className='w-[90%] md:w-[55%] mr-12'>
                    <SearchInput />
                </div>
                <div className='w-[20%] mr-12 hidden md:block'>
                    <DashboardDropDown options={options1} />
                </div>
                <div className='w-[25%] hidden md:block'>
                    <DashboardDropDown options={options2} />
                </div>

                <div className='p-1 border-[0.5px] rounded-[5px] border-borderdefault md:hidden block cursor-pointer'>
                    {showOption ?
                        <AiOutlineClose className="text-20" onClick={() => setShowOptions(false)} />
                        :
                        <BiMenuAltRight className='text-20' onClick={() => setShowOptions(true)} />
                    }

                </div>

            </div>
            {
                showOption && <div className='md:hidden flex items-center justify-between pt-10 w-full'>
                    <div className='mr-12 w-[40%]'>
                        <DashboardDropDown options={options1} />
                    </div>
                    <div className=' w-[60%]'>
                        <DashboardDropDown options={options2} />
                    </div>
                </div>
            }
            <div className='w-full grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 pt-15'>
                <ProductCard link={'/dashboard/collection/1/details'} />
                <ProductCard link={'/dashboard/collection/1/details'} />
                <ProductCard link={'/dashboard/collection/1/details'} />
                <ProductCard link={'/dashboard/collection/1/details'} />
            </div>
        </div>
    )
}

export default Item