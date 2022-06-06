import React from 'react'

const ItemBox = ({ amount, title, adiClass = "" }: any) => {

    return (
        <div className={`text-center md:px-4 px-1 py-1 ${adiClass}`}>
            <h1 className='uppercase md:text-28 text-20 text-davygrey'>{amount}</h1>
            <p className='uppercase md:text-14 text-cloudygrey text-8'>{title}</p>
        </div>
    )
}

export default ItemBox