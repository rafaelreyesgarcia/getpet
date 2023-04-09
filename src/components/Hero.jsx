import logo from '../assets/logo.svg'
import { neighborhoods } from '../constants'
import {Link} from 'react-router-dom'
import About from './About'

const Hero = () => {
  return (
    <section id='home' className='flex items-center justify-center lg:justify-start bg-cover bg-center h-screen' style={{backgroundImage: 'url(./src/assets/hero.jpg)'}}>
      {/* <div className='h-[630px] w-full relative hidden md:block'>
        <img src='./src/assets/hero.jpg' alt="dogs" className='object-cover h-full w-[100%] transform scale-x-[-1] z-0'/>
      </div> */}
      <div
        className='
          flex flex-col justify-between items-center gap-8
          lg:ml-16
          lg:pl-4
          max-w-xs
          md:max-w-full
        '
      >
        <h1 className='font-heading font-semibold text-5xl text-center capitalize tracking-wider'>
          pet services in <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>elmwood park</span> <br />
          & <br />
          surrounding neighborhoods
        </h1>
        <div className='w-[20rem] md:w-[30rem] h-[130px] relative bg-gradient-to-r from-primary to-secondary p-1 rounded-md'>
          {/* place-items-center shorthand for items-center justify-items-center */}
          <ul className='bg-primary-light p-2 h-full rounded-md grid grid-cols-3 grid-rows-2 gap-4 place-items-center '>
            {neighborhoods.map(neighborhood => (
              <li className='font-body capitalize text-lg font-semibold text-center'>{neighborhood}</li>
            ))}
          </ul>
        </div>
        <Link to='/services'>
          <button className='bg-gradient-to-l from-primary to-secondary text-cream py-2 px-4 rounded-2xl uppercase text-lg'>
            get started
          </button>
        </Link>
      </div>
    </section>

  )
}

export default Hero