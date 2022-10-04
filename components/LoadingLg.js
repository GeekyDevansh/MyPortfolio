import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingLg = () => {
  return (
    <div>
        <div className='flex justify-center align-middle' >

        <Skeleton circle width={50} height={50} />
        </div>
        <div className='my-3' >

        <Skeleton count={2}/>
        </div>
    </div>
  )
}

export default LoadingLg