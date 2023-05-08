'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { FaFacebook } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosClose } from 'react-icons/io'

import { navlinks } from './constants'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const CloseMobileMenu = () => {
    setIsOpen(false);
  }

  return (
    <>
      <header
        className='
          flex justify-between items-center px-6 py-1
          bg-gradient-to-r from-primary to-secondary text-cream
          font-heading font-semibold text-sm md:text-xl
          sticky top-0 shadow-md z-20 h-[3rem]'
      >
        {/* logo */}
        <div className='max-w-full w-[7rem]'>
          <Link href='/#'>
            <Image src='./logo.svg' alt="logo" width={112} height={112} />
          </Link>
        </div>
        {/* navigation */}
        <div className='gap-8 items-center uppercase hidden sm:flex'>
          {navlinks.map(link => (
            <Link className='hover:bg-gradient-to-r hover:from-primary hover:to-secondary p-1 rounded-md' href={link.to}>
              {link.name}
            </Link>
          ))}
        </div>
        {/* contact */}
        <div className='flex items-center gap-2 ml-4'>
          <Link href='https://www.facebook.com/Petservicesinelmwoodpark' target='_blank'>
            <FaFacebook />
          </Link>
          <Link href='tel:+17087699451' prefetch={false} passHref>
            708-769-9451
          </Link>
        </div>
        <button onClick={() => setIsOpen(prev => !prev)} className='sm:hidden'>
          {isOpen ? <IoIosClose size={30} /> : <RxHamburgerMenu size={20}/> }
        </button>
      </header>
      {/* mobile */}
      {isOpen && (
        <ul className='text-center sticky top-12 z-20 uppercase flex flex-col text-cream font-heading text-sm font-semibold'>
          {navlinks.map(link => (
            <Link className='bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l hover:from-primary hover:to-secondary py-2' href={link.to} onClick={CloseMobileMenu}>
              {link.name}
            </Link>
          ))}
        </ul>
      )}
    </>

  )
}

export default Header