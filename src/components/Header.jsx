import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header
      className='
        flex justify-between items-center px-6 py-1
        bg-gradient-to-r from-primary to-secondary text-white
        font-heading font-semibold text-xl
        sticky top-0 shadow-md z-10'
    >
      {/* logo */}
      <div className='max-w-full w-[200px]'>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {/* navigation */}
      <div className='flex gap-8 items-center'>
        <Link to='/' className='uppercase'>Home</Link>
        <Link to='/services' className='uppercase'>Services</Link>
        <Link to='/contact' className='uppercase'>Contact</Link>
      </div>
      {/* contact */}
      <div className='flex items-center gap-2 ml-4'>
        <Link to='https://www.facebook.com/Petservicesinelmwoodpark' target='_blank'>
          <FaFacebook />
        </Link>
        <Link to='tel:+17087699451' className='hidden sm:block'>
          708-769-9451
        </Link>
      </div>
    </header>
  )
}

export default Header