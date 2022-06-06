import React from 'react'
import CollectionCard from "./CollectionCard"


const Collection = () => {


  return (
    <div className='w-full grid md:grid-cols-3 grid-cols-1  gap-4 pt-15'>
      <CollectionCard />
      <CollectionCard />
    </div>
  )
}

export default Collection 