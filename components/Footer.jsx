import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className='footer border-t z-10 border-t-[#33353F] text-white'>
        <div className='container p-12 flex justify-between'>
            <span>
            <Link href={'/'} className=' text-2xl md:text-5xl text-white font-semibold'>
            <Image
                        className=" border-2 rounded-full w-[50px] h-[50px]"
                        src='/images/profile-main.png'
                        alt='logo'
                        width={300}
                        height={300}   />
            </Link>
            </span>
            <p className='text-slate-600'>
                All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer