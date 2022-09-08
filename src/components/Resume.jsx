import React from 'react'

const Resume = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'></div>
            <div>
                <h1 className=' md:text-4xl sm:text-2xl text-xl'>Interested in working together?</h1>
                <p>Please feel free to checkout my resume</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <button className='bg-[#00df9a] text-black rounded-md font-large w-[200px] ml-4 my-6 px-6 py-3'>Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Resume