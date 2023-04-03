import logo from '../assets/logo.svg'
import { neighborhoods } from '../constants'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section id='home' className='flex justify-between items-center h-[700px] w-[80%] mx-auto'>

      <div className='h-[630px] w-[570px] relative'>
        <img src='./src/assets/hero.jpg' alt="dogs" className='object-cover h-full transform scale-x-[-1] z-0 rounded-2xl'/>
      </div>

      <div className='flex flex-col justify-between items-center gap-8'>
        <div>
          <img src={logo} alt="logo" className='' />
        </div>
        <h1 className='font-barlow font-semibold text-5xl text-center capitalize leading-normal tracking-wider'>
          pet services in <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>elmwood park</span> <br />
          & <br />
          surrounding neighborhoods
        </h1>

        <div className='w-[570px] h-[130px] relative bg-gradient-to-r from-primary to-secondary p-1 rounded-md'>
          {/* place-items-center shorthand for items-center justify-items-center */}
          <ul className='bg-primary-light p-2 h-full rounded-md grid grid-cols-3 grid-rows-2 gap-4 place-items-center '>
            {neighborhoods.map(neighborhood => (
              <li className='font-montserrat capitalize text-lg'>{neighborhood}</li>
            ))}
          </ul>
        </div>
        <Link to='/services'>
          <button className='bg-gradient-to-l from-primary to-secondary text-white py-2 px-4 rounded-2xl uppercase text-lg'>
            get started
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Hero