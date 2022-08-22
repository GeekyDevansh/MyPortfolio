import Image from 'next/image'
import React from 'react'

const Clear = () => {
  return (
    <div>
        <div className='text-gray-900 font-semibold text-center' >
          <div className='flex justify-center' >

            <Image src='/clear.gif' alt='m' width={100} height={100}/>
          </div>
          
          

          Hey visitor! I hope you are enjoying the clear and sunny day at your place ;)
        
        </div>
    </div>
  )
}

export default Clear