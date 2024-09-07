import React from 'react'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Button from './button';
import Image from 'next/image';


const Hero = () => {

    const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to My Blog",
        "Explore Tech Articles",
        "Stay Updated with Latest Trends",
        "Explore our Services",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className='relative'>

       

          <Image
          src='/image/bg1.svg'
          alt='Background Image'
          width='400'
          height='400'
          className='absolute right-0'
          />

          <Image
          src='/image/bg.svg'
          alt='Background Image'
          width='400'
          height='400'
          className='absolute bottom-[-50px]'
          />
        

        <div className=" flex flex-col justify-center items-center ">
          
            <div className='mt-32 mb-16 z-50'>
            <h1 className="text-2xl text-center text-black font-bold md:text-5xl  lg:text-6xl">Empowering Digital Innovation
            </h1>
            <h2 className='text-xl text-center mt-2 font-bold md:text-4xl'><span ref={typedElement}></span></h2>
            <p className='text-md text-center text-slate-900 px-6 my-7 md:px-3 md:text-xl xl:px-72'>Our team of expert developers and designers is dedicated to crafting custom applications that drive growth, streamline operations, and deliver exceptional user experiences. Let us build the future of technology together.</p>
            <div className='flex flex-col gap-5 justify-center items-center md:flex-row'>
              <Button
              text={'Trending Articles'}
              link={'/blog'}
              />
                <Button
                text={'Services'}
                link={'/services'}
                />
            </div>
            
            
            </div>

        </div>
              
    </section>
  )
}

export default Hero