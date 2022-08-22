import Image from 'next/image'
import React from 'react'

const Location = () => {
  return (
    <div>
        <div className='text-gray-900 font-semibold text-center ' >
          <div className='flex justify-center' >

            <Image src='/location.gif' alt='m' width={100} height={100}/>
          </div>
          
          

          Hey visitor! Please enable location and reload the page :)
        
        </div>
    </div>
  )
}

export default Location