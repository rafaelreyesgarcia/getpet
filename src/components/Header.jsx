import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='flex justify-between px-2 py-1 bg-slate-300/10 sticky top-0'>
      {/* logo */}
      <div className='max-w-full w-16'>
        <Link to='/'>
          <img src="./logo.png" alt="logo" />
        </Link>
      </div>
      {/* navigation */}
      <div className='flex gap-8 items-center'>
        <Link to='/' className='uppercase'>Home</Link>
        <Link to='/services' className='uppercase'>Services</Link>
        <Link to='/contact' className='uppercase'>Contact</Link>
      </div>
      {/* contact */}
      <div className='flex items-center gap-2'>
        <Link to='https://www.facebook.com/Petservicesinelmwoodpark'>
          <FaFacebook />
        </Link>
        <Link to='tel:+17087699451'>
          708-769-9451
        </Link>
      </div>
    </header>
  )
}

export default Header