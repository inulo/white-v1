import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
//import useWindowPosition from '../hook/useWindowPosition';

export default function Work() {
  //const animated = useWindowPosition('header', 0.6);
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        background: '#FFF',
      }}
      id="myProjects"
    >
      <h1 className="text-5xl font-dosis font-bold text-gray-900">{content.work.title}</h1>
      <p className="text-gray-900 text-2xl font-dosis mb-10">I have done</p>
      <div className="flex flex-col md:flex-row justify-between items-center w-full ">
        <div>
          <a href="https://musicon-shop.netlify.app" target="_target">
          <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img1}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5 rounded-2xl shadow-xl"
        
        /></a>
        </div>
        <div>
          <a href="https://chore-door-bot.netlify.app" target="_target">
          <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img2}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5 rounded-2xl shadow-xl"

        />
          </a>
          
        </div>
        <div>
          <a href="https://wanderlust-api.netlify.app" target="_target">
          <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img3}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5 rounded-2xl shadow-xl"

        />
          </a>
          
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full ">
      <div>
          <a href="https://image-engine.netlify.app/" target="_target">
          <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img4}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5 rounded-2xl shadow-xl"

        />
          </a>
          </div>
          <div>
          <a href="https://www.ehoje.fun" target="_target">
          <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img5}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5 rounded-2xl shadow-xl"

        />
          </a>
          </div>
          <div>
          <a href="https://iscargo.netlify.app/" target="_target">
          <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img6}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5 rounded-2xl shadow-xl"

        />
          </a>
          </div>
          

      </div>
    </div>
  );
}

