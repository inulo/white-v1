// import React from 'react'
import Typical from 'react-typical'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import content from '../content'
import useStartAnimation from '../hook/useStartAnimation'

//import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const transition = (duration) => `transition duration-${duration} ease-in-out`
  const styleTranslate = 'translate-y-10 opacity-0'
  const animated = useStartAnimation()
  return (
    <div>
      
      <div
        style={{
          background: '#FFF',
        }}
        className='min-h-screen flex items-center justify-center rounded-br-6xl'
        id='header'
      >
        <div className='flex flex-col items-center md:flex-row-reverse md:w-10/12 md:justify-between'>
        
          <div className='w-full md:w-2/5 '>
            <LazyLoadImage
              src={content.header.img}
              aft='profile'
              className={`w-full my-auto mx-auto`}
              placeholderSrc={content.header.imgPlaceholder}
            />
            
          </div>

          <div className='font-dosis w-full md:w-3/5 text-center md:text-left '>
            <h2
              className={`text-3xl md:text-4xl lg:text-6xl text-fray-900 font-bold transform ${
                animated ? 'translate-y-0' : styleTranslate
              }  ${transition(2000)} `}
            >
              {content.header.text[0]}
              <br />
              {content.header.text[1]}
            </h2>
            <h1
              className={`text-2xl md:text-4xl text-gray-900 transform ${
                animated ? 'translate-y-0' : styleTranslate
              } ${transition(3000)} `}
            >
              {content.header.text[2]}
              <Typical
                steps={content.header.typical}
                loop={Infinity}
                className='inline-block'
                wrapper='p'
              />
            </h1>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}
