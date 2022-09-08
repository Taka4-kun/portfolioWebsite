import React from 'react'
import pic1 from '../assets/pic1.jpg'

const About = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={pic1} alt="/" />
                <div className='p-4 flex flex-col justify-center'>
                    <h1 className='text-blue-400 md:text-3xl sm:text-2xl text-xl font-bold py-2'>About Me:</h1>
                    <p>Graduated the University of North Florida with a Bachelors degree in Finance. Prior to finishing my Undergraduate studies in Florida, I graduated with my Associates from Lakeland University in Tokyo, Japan. During my time in Japan, I spent 12 years working in the largest Music industry in Japan and since then I have grown a passion for Finance, Business and Web Development. </p>
                </div>
            </div>
        </div>
    )
}

export default About