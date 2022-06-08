import React from 'react'
import blog7 from "../../../assets/images/blogs/blog7.png"
import ethereum from "../../../assets/images/svgs/ethereum.svg"
import ItemDetailsBox from './ItemDetailsBox'
import ItemTypeBox from './ItemTypeBox'


const ItemDetailsTop = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-[465px] w-full rounded-[10px] overflow-hidden'>
                    <img src={blog7} alt="nft" className='w-full' />
                </div>
                <div className='md:px-25 md:w-[50%] w-full pt-4 md:pt-0'>
                    <h1 className='font-semibold text-28 uppercase text-cloudygrey '>BAREBLOCK#01</h1>
                    <p className='text-14 uppercase text-cloudygrey'>TKEN: 937374........39827498</p>
                    <div className='py-4 border-b border-dashed border-[#cdcdcd]'>
                        <div>
                            <div className='flex items-start'>
                                <img src={ethereum} alt="ehtereum" className='w-42 pr-1' />
                                <div>
                                    <h1 className='font-semibold text-28 uppercase text-cloudygrey leading-[24px]'>0.069</h1>
                                    <p className='text-13 uppercase text-cloudygrey'>($2,388.74)</p>
                                    <p className='text-14 uppercase text-cloudygrey pt-1'>Sale ends June 13, 2022 at 9:50pm GMT+7 </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='pt-30 border-t border-dashed border-[#cdcdcd] grid md:grid-cols-2 grid-cols-1 gap-10'>
                        <ItemTypeBox title="Type" type="Entity" />
                        <ItemTypeBox title="Behaviors" type="Avatar" />
                        <ItemTypeBox title="Biomes" type="None" />
                        <ItemTypeBox title="Tag" type="Magic Fantasy" />
                    </div>
                </div>
                <div className="md:w-[30%] w-full md:pt-0 pt-4">
                    <ItemDetailsBox title="Description">
                        <p className='text-14 text-cloudygrey whitespace-normal'>Jenkins The Valet’s Writer’s Room is a Collection of 6942 NFTs That Unlock a Memberrs-Only Web3 Authenticated</p>
                    </ItemDetailsBox>
                    <div className='pt-2'>
                    <ItemDetailsBox title="Detail">
                        <div>
                            <div className="">
                               <h3 className='text-14 text-cloudygrey font-semibold'>Contact Address</h3>
                               <p className="text-14 text-cloudygrey">0x8806....6fcc</p>
                            </div>
                            <div className="pt-2">
                               <h3 className='text-14 text-cloudygrey font-semibold'>Token ID</h3>
                               <p className="text-14 text-cloudygrey">2428</p>
                            </div>
                            <div className="pt-2">
                               <h3 className='text-14 text-cloudygrey font-semibold'>Token Standard</h3>
                               <p className="text-14 text-cloudygrey">ERC-721</p>
                            </div>
                            <div className="pt-2">
                               <h3 className='text-14 text-cloudygrey font-semibold'>Blockchain</h3>
                               <p className="text-14 text-cloudygrey">Ethereum</p>
                            </div>
                           
                        </div>
                    </ItemDetailsBox>
                    </div>
                    <div className='pt-2'>
                        <ItemDetailsBox title="Properties">

                        </ItemDetailsBox>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ItemDetailsTop