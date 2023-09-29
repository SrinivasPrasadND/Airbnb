import React from 'react'
import Image from 'next/image'

function LargeCard({image, title, description, buttonText}) {
  return (
    
    <section className='relative py-16 cursor-pointer hover:scale-110 transform transition duration-500 ease-out'>
        <div className='relative h-96 min-w-[300px]'>
            <Image
            src='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
            layout='fill'
            objectFit='cover'
            className='rounded-xl' />
        </div>
        <div className='absolute top-24 left-6 sm:top-18 sm:left-9 md:top-24 md:left-12'>
            <h3 className='text-4xl mb-3 w-64'>{title}</h3>
            <p>{description}</p>
            <button className='text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 shadow-md active:scale-90 transition transform duration-300'>{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard;