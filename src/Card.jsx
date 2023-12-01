import React from 'react'
import Tilt from 'react-parallax-tilt';

const Card = ({user}) => {
    return (
    <>
        <div id="container" className='w-full h-screen bg-background bg-cover bg-center flex items-center justify-center'>
            <Tilt>
            <div id="card" className=' w-80 max-w-440px text-white text-center px-9 py-12 border border-solid border-white/30  bg-white/20  rounded-2xl  shadow-3xl backdrop-blur-sm'>
                <div id="imageContainer" className='w-full flex justify-center items-center'>
                    <img src={user.picture.large} alt='user' className=' justify-center rounded-full ' />
                </div>
                <h1 className=' text-3xl font-semibold mt-5  '>{`${user.name.first} ${user.name.last}`}</h1>
                <h2 className=' text-2xl font-semibold  '>{`${user.gender.charAt(0).toUpperCase()}${user.gender.slice(1)}`}</h2>
                <p className=' text-lg my-2 mx-auto'>{`${user.location.state}, ${user.location.country}`}</p>
                <div id="contactInfo" class="flex mt-4  items-center justify-center">
                    <a href={`mailto:${user.email}`} class="inline-flex items-center px-4 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Email Me</a>
                    <a href={`tel:+${user.phone}`} class="inline-flex items-center px-4 py-2 text-base font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Call Me</a>
                </div>
            </div>
            </Tilt>
        </div>
        
    </>
  )
}

export default Card