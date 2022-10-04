import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSm = () => {
  return (
    <div>
        <div className='flex justify-center mt-5'  >

        <Skeleton circle width={50} height={50} />
        </div>
        <div className='my-3' >

        <Skeleton count={3}/>
        </div>
    </div>
  )
}

export default LoadingSm