import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <>
        <div className='flex justify-center' >

        <Image src='/loading.gif' alt='Loading...' width={180} height={180} />
        </div>
    </>
  )
}

export default Loading