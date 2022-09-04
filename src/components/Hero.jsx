import React from 'react'
import Typed from 'react-typed'
import pic3 from '../assets/pic3.jpg'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-yellow-400 font-bold p-2 md:text-3xl sm:text-2xl text-1xl'>MY NAME IS</p>
                <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-6'>CASEY T. ANDERSON</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>and I have a passion for</p>
                    <Typed className=' md:pl-4md:text-4xl sm:text-3xl text-xl font-bold pl-2 text-blue-600' strings={['Finance', 'Web Developement', 'Problem Solving', 'Economics', 'Project Management', 'Leadership']} typeSpeed={120} backSpeed={130} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>with high ethical standards and a passion for learning</p>
            </div>
        </div>
    )
}

export default Hero