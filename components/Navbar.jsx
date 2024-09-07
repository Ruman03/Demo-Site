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
    <nav>
        <div className="flex justify-between lg:justify-around items-center p-4 z-20 w-full bg-transparent">

        <div>
            <Link className='flex justify-center items-center gap-x-2' href='/'>
            <Image
            src='/icons/logo.png'
            alt='Ruman Tech Logo'
            width={24}
            height={24}
            className='md:w-12 md:h-12 lg:w-8 lg:h-8 xl:w-10 xl:h-10'
            />
            <span className='text-2xl font-bold md:text-5xl lg:text-3xl xl:text-4xl'>Ruman Tech</span>
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
                className='invert'
                />
             </SheetTrigger>
                <SheetContent className='flex bg-slate-100'>
                    <div className='py-3 flex flex-col gap-y-[calc(2vh)] items-center container h-fit '>
                    <Link className='text-2xl rounded font-bold hover:bg-blue-600 hover:text-white hover:p-2 hover:rounded-xl' href='/'>Home</Link>
                    <div className='bg-slate-500 h-[1px] w-full'></div>
                    <Link className='text-2xl rounded font-bold hover:bg-blue-600 hover:text-white hover:p-2 hover:rounded-xl' href='/about'>About Us</Link>
                    <div className='bg-slate-500 h-[1px] w-full'></div>
                    <Link className='text-2xl rounded font-bold hover:bg-blue-600 hover:text-white hover:p-2 hover:rounded-xl' href='/blog'>Blog</Link>
                    <div className='bg-slate-500 h-[1px] w-full'></div>
                    <Link className='text-2xl rounded font-bold hover:bg-blue-600 hover:text-white hover:p-2 hover:rounded-xl' href='/projects'>Projects</Link>
                    <div className='bg-slate-500 h-[1px] w-full'></div>
                    <Link className='text-2xl  font-bold hover:bg-blue-600 hover:text-white hover:p-2 
                   hover:rounded-xl ' href='/services'>Services</Link>
                    <div className='bg-slate-500 h-[1px] w-full'></div>
                    <Button
                    text='Contact Us'
                    link={'/contact'}
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
        link={'/contact'}
        />
        </div>

        </div>
    </nav>
  );
};

export default Navbar;
