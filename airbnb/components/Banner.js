import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[500px] lg:h-[600px] xl:h-[800px] 2xl:h-[900px]'>
        <Image
         src="https://links.papareact.com/0fm"
         layout='fill'
         objectFit='cover'
         alt='Banner'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
            <button 
            className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full
             font-bold my-3 hover:shadow-xl
             active:scale-90 transition transform duration-150'> I am flex</button>
        </div>
    </div>
  )
}

export default Banner