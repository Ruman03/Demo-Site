import React from 'react'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Button from './button';


const Hero = () => {

    const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to My Blog",
        "Explore Tech Articles",
        "Stay Updated with Latest Trends",
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
    <section className='bg-gradient-1'>
        <div className="flex flex-col justify-center items-center bg-dark-1 ">
            <div className='mt-52 z-50'>
            <h1 className="text-3xl text-center text-white font-bold md:text-5xl  lg:text-7xl">Empowering Digital Innovation
            </h1>
            <h2 className='text-3xl text-center mt-2 font-bold md:text-5xl'><span ref={typedElement}></span></h2>
            <p className='text-md text-center text-slate-300 px-16 my-4 md:px-3 md:text-xl'>Our team of expert developers and designers is dedicated to crafting custom applications that drive growth, streamline operations, and deliver exceptional user experiences. Let's build the future of technology together.</p>
            <div className='flex flex-col gap-3 justify-center items-center mb-4 md:flex-row'>
                <Button
                text={'Latest Posts'}
                />
                <Button
                text={'Trending Articles'}
                />
            </div>
            
            
            </div>

        </div>
    </section>
  )
}

export default Hero