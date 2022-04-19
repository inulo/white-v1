import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import content from '../content'


export default function Navigation() {
  return (
    <div
      style={{
        background: '#FFF',
      }}
      className='font-dosis fixed top-0 w-screen z-40'
    >
      <div className='flex items-center w-10/12  mx-auto py-3'>
        
        <ScrollLink
          to='header'
          smooth={true}
          className='text-3xl  font-bold text-gray-900 flex-1 cursor-pointer'
        >
          <h1>
            {content.nav.logo}
            <span className='h-4 w-4 bg-green-700 inline-block ml-2  rounded-full z-40'></span>
          </h1>
        </ScrollLink>

        <div className='text-gray-900 text-xl'>
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className='mr-4 cursor-pointer' key={index}>
                  {link.text}
                </span>
              </ScrollLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}
