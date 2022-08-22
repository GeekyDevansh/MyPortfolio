import React from 'react'
import Image from 'next/image'

const Distance = ({dist}) => {
  return (
    <div>
        <div className='text-gray-900 font-semibold text-center' >
          <div className='flex justify-center' >

            <Image src='/distance.gif' alt='m' width={100} height={100}/>
          </div>
          
          
          Fun Fact! <br />
          Hey visitor! We are {dist} km apart ;)
        
        </div>
    </div>
  )
}

export default Distance