import React, { useState } from 'react'
import { CgMenuRound, CgCloseO } from 'react-icons/cg'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 mx-auto max-w-[1240px] px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-yellow-400 '>Takashi</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Resume</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Connect</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? < CgCloseO size={25} /> : <CgMenuRound size={25} />}

            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-yellow-400 m-4'>Takashi</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-700'>Home</li>
                    <li className='p-4 border-b border-gray-500'>About</li>
                    <li className='p-4 border-b border-gray-300'>Resume</li>
                    <li className='p-4 border-b border-gray-100'>Projects</li>
                    <li className='p-4'>Connect</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar