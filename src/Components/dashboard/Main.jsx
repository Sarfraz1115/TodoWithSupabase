import React from 'react'
import Profile from '../../pages/Profile'
import Greeting from './Greeting'

const Main = () => {

    return (

        <main className='flex flex-1 bg-gray-100 flex-col gap-4 p-4 md:gap-8 md:p-6 '>
            {/* <div className='flex items-center '>
                <h1 className='text-2xl font-bold'>Main Content</h1>
                <p className='text-gray-600'>This is the main content area.</p>
            </div> */}
            <Greeting/>
        </main>
    )
}

export default Main