import React from 'react';
import nft1 from '../../../assets/images/activity/nft1.png';
import nft2 from '../../../assets/images/activity/nft2.png';
import nft3 from '../../../assets/images/activity/nft3.png';
import nft4 from '../../../assets/images/activity/nft4.png';
import nft5 from '../../../assets/images/activity/nft5.png';
import nft6 from '../../../assets/images/activity/nft6.png';
import ethereum from '../../../assets/images/svgs/ethereum.svg'
import ItemActivityMobileMore from '../ItemDetails/ItemActivityMobileMore';
import ItemOfferMobileMore from '../ItemDetails/ItemOfferMobileMore';
import { BsArrowDownLeft } from 'react-icons/bs';
const Offers = () => {
    return (
        <div className='bg-slate-100'>


            <div className='p-2 mt-5 bg-gray-50 rounded-[6px] hidden lg:block'>
                <div className='flex gap-2 mb-2'>
                    <BsArrowDownLeft />
                    <h2 className='font-semibold'>{` ${` `} OFFERS RECIEVED`}</h2>
                </div>
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

            <div className='pt-15 lg:hidden'>
                <div className='flex gap-2 font-semibold border-dashed border-borderdefault'>
                    <BsArrowDownLeft />
                    <h2> OFFERS RECEIVED</h2>
                </div>
                <ItemActivityMobileMore image={nft1} title={'SALE'} name={'Bareblockclub'} number={'#1257961'} price={0.60} hours={'about 24 hours ago'} />
                <ItemActivityMobileMore image={nft2} title={'SALE'} name={'Bareblockclub'} number={'#1257961'} price={0.60} hours={'about 24 hours ago'} />
                <ItemActivityMobileMore image={nft3} title={'SALE'} name={'Bareblockclub'} number={'#1257961'} price={0.60} hours={'about 24 hours ago'} />
            </div>
        </div>
    );
};

export default Offers;