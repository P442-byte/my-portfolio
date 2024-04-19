"use client";
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink';
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

const navLink = [
    {
        title: "About",
        href:"#about"
    },
    {
        title: "Projects",
        href:"#projects"
    },
    {
        title: "Contact",
        href:"#contact"
    }
]

export const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    function handleNavbarOpen(){
        setNavbarOpen(!(navbarOpen));
    };

  return (
    <nav className=' fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className=' flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={'/'} className=' text-2xl md:text-5xl text-white font-semibold'>
            <Image
                        className=" border-2 rounded-full w-[50px] h-[50px]"
                        src='/images/profile-main.png'
                        alt='logo'
                        width={300}
                        height={300}   />
            </Link>
            <div className=' mobile-menu block md:hidden'>
                {
                    navbarOpen ? (
                        <button onClick={() => handleNavbarOpen()} className=' flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white'>
                            <XMarkIcon  className=' h-5 w-5'/>
                        </button>
                    ) : (
                        <button onClick={() => handleNavbarOpen()} className=' flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white'>
                            <Bars3Icon className=' h-5 w-5'/>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-8'>
                    {navLink.map((item, index) => (
                        <li key={index}>
                            <NavLink href={item.href} title={item.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLink}/> : null}
    </nav>
  )
}

export default Navbar