import React from 'react'
import BankIconsTicker from './BankIconsTicker'
const Partners = () => {
  return (
    <div className='w-full h-full flex'>
      <div className='bg-blue-200 rounded-l-3xl h-full  w-3/5 text-2xl font-serif font-extrabold p-4 text-blue-950 gap-4 items-center justify-center text-center flex flex-col'>-Our Banking Partners-
      <p className='text-xs text-blue-400'>We work with a network of reliable and well-established banking partners to ensure you receive competitive loan offers.</p>
      </div>
      <div className="w-full flex items-center justify-center overflow-hidden rounded-r-2xl">
        <BankIconsTicker/>
     </div>
    </div>
  )
}

export default Partners