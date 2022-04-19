import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


import content from '../content'

export default function Stack() {
  return (
    
    <div
      className='min-h-screen flex items-center justify-center flex-col'
      style={{
        background: '#FFF',
      }}
      id='mystack'
    >
      
      <h1 className='text-5xl font-dosis text-gray-900 font-bold mb-10'>
        Stack I Use
      </h1>
      
      <div>
        <div className='flex flex-wrap justify-center'>
          {content.stack.tech.map((tech, index) => (
            <span
              key={index}
              className={` h-40 w-40 bg-gray-100 shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${
                index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
              }`}
            >
              <LazyLoadImage effect='blur' src={tech.img} alt={tech.alt} />
            </span>
          ))}
        </div>
      </div>
      <p className='mt-10 mb-10 w-11/12 md:max-w-xl text-center text-gray-900 inline-block text-xl md:text-2xl font-dosis '>
        {content.stack.desc}.
      </p>
    </div>
  )
}
