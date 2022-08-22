import Image from 'next/image'
import React from 'react'

const Snow = () => {
  return (
    <div>
        <div className='text-gray-900 font-semibold text-center' >
          <div className='flex justify-center' >

            <Image src='/snow.gif' alt='m' width={100} height={100}/>
          </div>
          
          

          Hey visitor! Make sure to carry an umbrella with you as its cloudy outside ;)
        
        </div>
    </div>
  )
}

export default Snow