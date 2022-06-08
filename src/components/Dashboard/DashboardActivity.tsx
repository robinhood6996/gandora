import React, { useState } from 'react';
import ethereum from '../../assets/images/svgs/ethereum.svg'
import ItemActivityBtn from './ItemDetails/ItemActivityBtn'
import nft1 from '../../assets/images/activity/nft1.png';
import nft2 from '../../assets/images/activity/nft2.png';
import nft3 from '../../assets/images/activity/nft3.png';
import nft4 from '../../assets/images/activity/nft4.png';
import nft5 from '../../assets/images/activity/nft5.png';
import nft6 from '../../assets/images/activity/nft6.png';
import chart from '../../assets/images/activity/chart.jpg'
import DashboardDropDown from './DashboardDropDown';
import SearchInput from './SearchInput';
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import ItemActivityMobileMore from './ItemDetails/ItemActivityMobileMore';

const DashboardActivity = () => {
    const [showOption, setShowOptions] = useState(false)

    const options0 = [
        { value: 'allitem', label: 'LAST 7 DAYS' },
        { value: 'singleitem', label: 'LAST 14 DAYS' },
        { value: 'bundle', label: 'LAST 30 DAYS' },
        { value: 'bundle', label: 'LAST 60 DAYS' },
        { value: 'bundle', label: 'ALL TIME' }
    ]
    const options1 = [
        { value: 'allitem', label: 'ALL CHAINS' },
        { value: 'singleitem', label: 'LISTING' },
        { value: 'bundle', label: 'SALES' },
        { value: 'bundle', label: 'BIDS' }
    ]

    const options2 = [
        { value: 'allitem', label: 'ALL TYPES' },
        { value: 'singleitem', label: 'LISTING' },
        { value: 'bundle', label: 'SALES' },
        { value: 'bundle', label: 'BIDS' }
    ]


    return (
        <div>

            {/* Filter Button End */}

            <div className="bg-backg">
                {/* Filter Options Start*/}
                <div className='flex pt-40 w-[100%] lg:w-[90%] mx-auto'>
                    <div className='w-[40%] md:w-[55%] mr-12'>
                        <DashboardDropDown options={options0} />
                    </div>
                    <div className='w-[35%] md:w-[55%] mr-12  flex gap-10'>
                        <div>
                            <h1>7 Day AVG. Price:</h1>
                            <h2 className='price'> 0.0184 ETH</h2>
                        </div>

                        <div className='hidden sm:hidden lg:block'>
                            <h1>7 Day Volume:</h1>
                            <h2 className='price'>  27.4875 ETH</h2>
                        </div>
                    </div>

                    <div className='w-[15%] mr-12 hidden lg:block'>
                        <DashboardDropDown options={options1} />
                    </div>
                    <div className='w-[15%] hidden lg:block'>
                        <DashboardDropDown options={options2} />
                    </div>

                    <div className='p-1 border-[0.5px] rounded-[5px] border-borderdefault hidden sm:block lg:hidden cursor-pointer'>
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
            </div>
            {/* Filter Options End*/}


            <div className='m-2 flex justify-center'>
                <img src={chart} alt="" />
            </div>



            <div className='p-2 mt-5 bg-gray-50 rounded-[6px] hidden lg:block'>
                <table className='table-fixed w-full text-center font-semibold'>
                    <thead className=''>
                        <tr className='uppercase'>
                            <th className=' py-1 border-r-[0.5px] border-borderdefault'>NFT TYPES</th>
                            <th className=' py-1 border-r-[0.5px] border-borderdefault'>Item</th>
                            <th className=' py-1 border-r-[0.5px] border-borderdefault'>Price</th>
                            {/* <th className=' py-1  border-r-[0.5px] border-borderdefault'>Price</th> */}
                            <th className=' py-1 border-r-[0.5px] border-borderdefault'>Quantity</th>
                            <th className=' py-1 border-r-[0.5px] border-borderdefault'>From</th>
                            <th className=' py-1 border-r-[0.5px] border-borderdefault'>TO</th>
                            <th className=' py-1 border-r-[0.5px] border-borderdefault'>Time</th>
                        </tr>
                    </thead>

                    <tr className=''>
                        <td colSpan={7} className="border-b-[0.5px]  border-borderdefault pt-2"></td>
                    </tr>

                    <tbody className=''>
                        <tr>
                            <td>Sale</td>
                            <td>
                                <div className='flex gap-4 items-center'>
                                    <div><img src={nft1} alt="" /></div>
                                    <div><span>Bareblockclub#75</span></div>
                                </div>
                            </td>
                            <td>
                                <span className='flex items-center justify-center'>
                                    <span>
                                        <img src={ethereum} alt="ethereum" />
                                    </span>
                                    <span className='flex flex-col pl-1'>
                                        <span className='leading-[24px]'>0.95</span>
                                        <span className='leading-0 text-8'>$31.43</span>
                                    </span>
                                </span>
                            </td>
                            <td>
                                1
                            </td>
                            <td className='text-texasRose'>E5545C</td>
                            <td className='text-texasRose'>E5545C</td>
                            <td>2 minutes ago</td>
                        </tr>

                        <tr>
                            <td>Bid</td>
                            <td>
                                <div className='flex gap-4 items-center'>
                                    <div><img src={nft2} alt="" /></div>
                                    <div><span>Bareblockclub#35</span></div>
                                </div>
                            </td>
                            <td>
                                <span className='flex items-center justify-center'>
                                    <span>
                                        <img src={ethereum} alt="ethereum" />
                                    </span>
                                    <span className='flex flex-col pl-1'>
                                        <span className='leading-[24px]'>0.68</span>
                                        <span className='leading-0 text-8'>$31.43</span>
                                    </span>
                                </span>
                            </td>
                            <td>
                                1
                            </td>
                            <td className='text-texasRose'>E5545C</td>
                            <td className='text-texasRose'>E5545C</td>
                            <td>15 minutes ago</td>
                        </tr>

                        <tr>
                            <td>Sale</td>
                            <td>
                                <div className='flex gap-4 items-center'>
                                    <div><img src={nft3} alt="" /></div>
                                    <div><span>Bareblockclub#15</span></div>
                                </div>
                            </td>
                            <td>
                                <span className='flex items-center justify-center'>
                                    <span>
                                        <img src={ethereum} alt="ethereum" />
                                    </span>
                                    <span className='flex flex-col pl-1'>
                                        <span className='leading-[24px]'>0.95</span>
                                        <span className='leading-0 text-8'>$31.43</span>
                                    </span>
                                </span>
                            </td>
                            <td>
                                1
                            </td>
                            <td className='text-texasRose'>E5545C</td>
                            <td className='text-texasRose'>E5545C</td>
                            <td>45 minutes ago</td>
                        </tr>

                        <tr>
                            <td>List</td>
                            <td>
                                <div className='flex gap-4 items-center'>
                                    <div><img src={nft4} alt="" /></div>
                                    <div><span>Bareblockclub#01</span></div>
                                </div>
                            </td>
                            <td>
                                <span className='flex items-center justify-center'>
                                    <span>
                                        <img src={ethereum} alt="ethereum" />
                                    </span>
                                    <span className='flex flex-col pl-1'>
                                        <span className='leading-[24px]'>0.95</span>
                                        <span className='leading-0 text-8'>$31.43</span>
                                    </span>
                                </span>
                            </td>
                            <td>
                                1
                            </td>
                            <td className='text-texasRose'>E5545C</td>
                            <td className='text-texasRose'>E5545C</td>
                            <td>2 hours agos</td>
                        </tr>

                        <tr>
                            <td>Sale</td>
                            <td>
                                <div className='flex gap-4 items-center'>
                                    <div><img src={nft5} alt="" /></div>
                                    <div><span>Bareblockclub#01</span></div>
                                </div>
                            </td>
                            <td>
                                <span className='flex items-center justify-center'>
                                    <span>
                                        <img src={ethereum} alt="ethereum" />
                                    </span>
                                    <span className='flex flex-col pl-1'>
                                        <span className='leading-[24px]'>0.95</span>
                                        <span className='leading-0 text-8'>$31.43</span>
                                    </span>
                                </span>
                            </td>
                            <td>
                                1
                            </td>
                            <td className='text-texasRose'>E5545C</td>
                            <td className='text-texasRose'>E5545C</td>
                            <td>1 hour ago</td>
                        </tr>


                        <tr>
                            <td>Sale</td>
                            <td>
                                <div className='flex gap-4 items-center'>
                                    <div><img src={nft6} alt="" /></div>
                                    <div><span>Bareblockclub#01</span></div>
                                </div>
                            </td>
                            <td>
                                <span className='flex items-center justify-center'>
                                    <span>
                                        <img src={ethereum} alt="ethereum" />
                                    </span>
                                    <span className='flex flex-col pl-1'>
                                        <span className='leading-[24px]'>0.95</span>
                                        <span className='leading-0 text-8'>$31.43</span>
                                    </span>
                                </span>
                            </td>
                            <td>
                                1
                            </td>
                            <td className='text-texasRose'>E5545C</td>
                            <td className='text-texasRose'>E5545C</td>
                            <td>2 days ago</td>
                        </tr>

                    </tbody>


                </table>
            </div>

            <div className='pt-15 border-t-[0.5px] border-borderdefault lg:hidden'>
                <ItemActivityMobileMore image={nft1} title={'SALE'} name={'Bareblockclub'} number={'#1257961'} price={0.60} hours={'about 24 hours ago'} />
                <ItemActivityMobileMore image={nft2} title={'SALE'} name={'Bareblockclub'} number={'#1257961'} price={0.60} hours={'about 24 hours ago'} />
                <ItemActivityMobileMore image={nft3} title={'SALE'} name={'Bareblockclub'} number={'#1257961'} price={0.60} hours={'about 24 hours ago'} />
            </div>
        </div>
    );
};

export default DashboardActivity;