import React from 'react'
import First from '../assets/1st.png'
import Second from '../assets/2nd.png'
import Third from '../assets/3rd.png'

const Projects = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='items-center w-full bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-10 mx-auto mt-[-1rem] bg-gray-100'
                        src={First} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Project1 Name</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                    </div>
                    <button className='bg-[#9f88f7] text-white rounded-md font-large w-[200px] ml-4 my-6 px-6 py-3'>Fly to Project Code</button>
                </div>
                <div className='items-center w-full bg-gray-100 shadow-xl flex flex-col p-4 my-3 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-10 mx-auto mt-[-1rem] bg-gray-100'
                        src={Second} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Project2 Name</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                    </div>
                    <button className='bg-black text-[#9f88f7] rounded-md font-large w-[200px] ml-4 my-6 px-6 py-3'>Fly to Project Code</button>
                </div>
                <div className='items-center w-full bg-gray-100 shadow-xl flex flex-col p-4 my-3 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-10 mx-auto mt-[-1rem] bg-gray-100'
                        src={Third} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Project3 Name</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                        <p className='py-2 border-b mx-8 mt-8'>Python</p>
                    </div>
                    <button className='bg-[#9f88f7] text-white rounded-md font-large w-[200px] ml-4 my-6 px-6 py-3'>Fly to Project Code</button>
                </div>
            </div>
        </div>
    )
}

export default Projects