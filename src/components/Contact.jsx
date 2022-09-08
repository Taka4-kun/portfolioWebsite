import React from 'react'

const Contact = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:-4xl sm:text-3xl text-2xl font-bold py-2'> Please feel free to contact me:</h1>
                    <p>Replies may take up to 48hrs</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Please enter your Email' />
                        <button className='bg-[#880000] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact