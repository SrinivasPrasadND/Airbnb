import React from 'react'
import Image from 'next/image'


const SmallCard = ({ image, location, distance }) => {
    const getImageLink = (src) => {
        return fetch(src, { redirect: 'manual' })
            .then(response => {
                if (response.ok) {
                    // If the response is not a redirect, return the URL
                    return response.url;
                } else {
                    // If the response is a redirect, get the Location header
                    return response.headers.get('Location');
                }
            });
    }

    return (
        <div 
            className='flex items-center m-2 mt-5 space-x-4 rounded-xl
            cursor-pointer hover:bg-gray-100 hover:scale-105
            transition transform duration-200 ease-out'>
            <div className='relative h-16 w-16'>
                <Image
                    src={image}
                    layout='fill'
                    className='rounded-lg '
                />
            </div>
            <div>
                <h2>{location}</h2>
                <h3 className='text-gray-500'> {distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard;