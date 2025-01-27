import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {
    const sideMenuRef = useRef();
    const openMenu = () =>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () =>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt='' className='w-full' />
        </div>
        <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
            <a href="#top">
                <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt=''/>
            </a>
            <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
                <li className='font-Ovo'><a href="#top">Home</a></li>
                <li className='font-Ovo'><a href="#about">About Me</a></li>
                <li className='font-Ovo'><a href="#services">Service</a></li>
                <li className='font-Ovo'><a href="#work">My Work</a></li>
                <li className='font-Ovo'><a href="#contact">Contact Me</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                <button>
                    <Image src={assets.moon_icon} alt='' className='w-6' />
                </button>
                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} className='w-3' alt=''/> </a>

                <button onClick={openMenu} className='block md:hidden ml-3'>
                    <Image src={assets.menu_black} className='w-6'  alt=''/>
                </button>
            </div>

            {/*---Mobile Menu---*/}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                <div onClick={closeMenu} className='absolute right-6 top-6'>
                    <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                </div>
                <li onClick={closeMenu} className='font-Ovo'><a href="#top">Home</a></li>
                <li onClick={closeMenu} className='font-Ovo'><a href="#about">About Me</a></li>
                <li onClick={closeMenu} className='font-Ovo'><a href="#services">Service</a></li>
                <li onClick={closeMenu} className='font-Ovo'><a href="#work">My Work</a></li>
                <li onClick={closeMenu} className='font-Ovo'><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar