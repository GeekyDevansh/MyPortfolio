import Image from 'next/image'
import React from 'react'

const Thunderstorm = () => {
  return (
    <div>
        <div className='text-gray-900 font-semibold text-center' >
          <div className='flex justify-center' >

            <Image src='/thunderstorm.gif' alt='m' width={100} height={100}/>
          </div>
          
          

          Hey visitor! Avoid standing under a tree as there is a thunderstorm outside ;)
        
        </div>
    </div>
  )
}

export default Thunderstorm