import { Link, useLocation } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosClose } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { navlinks } from '../constants'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
          <Link to='/#'>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* navigation */}
        <div className='gap-8 items-center uppercase hidden sm:flex'>
          {navlinks.map(link => (
            <Link className='hover:bg-gradient-to-r hover:from-primary hover:to-secondary p-1 rounded-md' to={link.to}>
              {link.name}
            </Link>
          ))}
        </div>
        {/* contact */}
        <div className='flex items-center gap-2 ml-4'>
          <Link to='https://www.facebook.com/Petservicesinelmwoodpark' target='_blank'>
            <FaFacebook />
          </Link>
          <Link to='tel:+17087699451'>
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
            <Link className='bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l hover:from-primary hover:to-secondary py-2' to={link.to}>
              {link.name}
            </Link>
          ))}
        </ul>
      )}
    </>

  )
}

export default Header