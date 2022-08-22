import Image from 'next/image'
import React from 'react'

const Drizzle = () => {
  return (
    <div>
        <div className='text-gray-900 font-semibold text-center' >
          <div className='flex justify-center' >

            <Image src='/rain.gif' alt='m' width={135} height={135}/>
          </div>
          
          

          Hey visitor! Make sure to carry an umbrella with you as its drizzling outside ;)
        
        </div>
    </div>
  )
}

export default Drizzle