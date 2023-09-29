import React from 'react'

function Footer() {
    return (
        <div className='relative grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h4 className='font-bold'>AboutT</h4>
                <p>How Airbnb works</p>
                <p>News room</p>
                <p>Investors</p>
                <p>Airbnb Puls</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h4 className='font-bold'>Support</h4>
                <p>Help Centre</p>
                <p>AirCover</p>
                <p>Disability support</p>
                <p>Cancellation options</p>
                <p>Anti-discrimination</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h4 className='font-bold'>Hosting</h4>
                <p>Airbnb your home</p>
                <p>AirCover for Hosts</p>
                <p>Investors</p>
                <p>Community forum</p>
                <p>Hosting responsibly</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h3 className='font-bold'>Airbnb</h3>
                <p>Newsroom</p>
                <p>New features</p>
                <p>Careers</p>
                <p>Report neighbourhood concern</p>
            </div>
        </div>

    )
}

export default Footer