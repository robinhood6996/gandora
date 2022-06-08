import React from 'react'
import ItemTypeBox from "./ItemTypeBox"
import ItemDetailsBox from "./ItemDetailsBox"
import ItemStat from './ItemStat'

const ItemMobileDetails = () => {
  return (
    <div>
         <div className='pt-20  grid  grid-cols-1 gap-10'>
                        <ItemTypeBox title="Type" type="Entity" />
                        <ItemTypeBox title="Behaviors" type="Avatar" />
                        <ItemTypeBox title="Biomes" type="None" />
                        <ItemTypeBox title="Tag" type="Magic Fantasy" />
                    </div>
                    <div className=" w-full  pt-4 block">
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

                <div className='pt-10'>
                    <ItemStat />
                </div>
    </div>
  )
}

export default ItemMobileDetails