import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"


import Image from 'next/image';
import Menu from './Menu';
import Button from './button';

  

const Navbar = () => {
  return (
    <nav className="bg-gradient-1 ">
        <div className="bg-dark-1 flex justify-between lg:justify-around items-center p-4 z-20 w-full bg-transparent">

        <div>
            <Link className='flex justify-center items-center gap-x-2' href='/'>
            <Image
            src='/icons/logo.png'
            alt='Ruman Tech Logo'
            width={24}
            height={24}
            className='md:w-12 md:h-12 lg:w-8 lg:h-8 xl:w-12 xl:h-12'
            />
            <span className='text-2xl font-bold md:text-5xl lg:text-3xl xl:text-5xl'>Ruman Tech</span>
            </Link>
        </div>

        <div className='lg:hidden'>
        <Sheet >
            <SheetTrigger>
                <Image
                src='/icons/hamburger.svg'
                alt="Hamburger Icon"
                width={32}
                height={32}
                />
             </SheetTrigger>
                <SheetContent className='flex justify-center items-center bg-gray-800'>
                    <div className='flex flex-col gap-y-8 justify-center items-center  container '>
                    <Link className='text-2xl hover:bg-white hover:text-black hover:p-2 hover:rounded-lg' href='/'>Home</Link>
                    <Link className='text-2xl hover:bg-white hover:text-black hover:p-2 hover:rounded-lg' href='/about'>About Us</Link>
                    <Link className='text-2xl hover:bg-white hover:text-black hover:p-2 hover:rounded-lg' href='/blog'>Blog</Link>
                    <Link className='text-2xl hover:bg-white hover:text-black hover:p-2 hover:rounded-lg' href='/projects'>Projects</Link>
                    <Link className='text-2xl hover:bg-white hover:text-black hover:p-2 hover:rounded-lg' href='/services'>Services</Link>
                    <Button
                    text='Contact Us'
                    />
                    </div>
             </SheetContent>
            </Sheet>
        </div>

        <div className='max-lg:hidden'>
         <Menu/>
        </div>

        <div className='flex justify-center items-center max-lg:hidden'>
        <Button
        text='Contact Us'
        />
        </div>

        </div>
    </nav>
  );
};

export default Navbar;
