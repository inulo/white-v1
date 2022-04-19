import React from 'react';
//import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import { Link as ScrollLink } from 'react-scroll';


//import useWindowPosition from '../hook/useWindowPosition';


export default function Contact() {
  //const animated = useWindowPosition('header', 0.6, 4);
  return (
    <div
      className="flex justify-center items-center  "
      id="mycontact"
    >
      
      <div
        style={{
          
          background: '#FFF',
        }}
        className="w-full h-3/6 pt-16 pb-16 flex md:flex-row flex-col-reverse justify-around items-center"
      ><div className="flex items-center w-4/8  py-3">
        <ScrollLink
          to="header"
          smooth={true}
          className="text-3xl  font-bold text-grey-900 flex-1 cursor-pointer"
        >
        <h1 className="text-6xl font-dosis font-bold text-grey-900">
      {content.nav.logo}
      <span className="h-12 w-12 bg-red-700 inline-block ml-2  rounded-full"></span>
    </h1>
    </ScrollLink>
         </div>
         <div className="text-grey-900">
           <h1>Contact</h1>
           <hr className="pb-2"/>
           <a href="mailto:kanchev.veselin@gmail.com" target="_top" rel="noopener noreferrer" className="px-2">Email</a>
          
            
         </div>
         
          </div>
    </div>
  );
}
