import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { footerInfo, neighborhoods } from '../constants'

const Footer = () => {
  const apiKey = import.meta.env.VITE_MAPS_KEY;
  return (
    <footer className='w-[80%] mx-auto'>
      <div className='bg-gradient-to-l from-primary to-secondary h-2 my-4 rounded-md'></div>

      <div className='flex justify-between items-center py-8 font-heading text-3xl font-bold'>
        <a href='#'><img src={logo} alt="logo" /></a>
        <Link to="tel:+17087699451">708-769-9451</Link>
        <Link to='https://www.facebook.com/Petservicesinelmwoodpark'>
          <FaFacebook />
        </Link>
        <Link to="mailto:kelleypetlover@gmail.com">kelleypetlover@gmail.com</Link>
      </div>

      <div className='flex justify-between items-start'>
        <div className='flex gap-12'>
          {footerInfo.map((footerLink, i) => (
            <div className='flex flex-col'>
              <h3 className='text-xl font-bold capitalize font-heading pb-2'>
                {footerLink.title}
              </h3>
              <ul>
                {footerLink.links.map((link) => (
                  <a href={link.to}>
                    <li className='capitalize font-body'>{link.name}</li>
                  </a>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className='text-xl font-bold capitalize font-heading pb-2'>
              hours
            </h3>
            <ul className='font-body'>
              <li>Monday - Saturday</li>
              <li>10:00am - 4:00pm</li>
            </ul>
          </div>
        </div>

        <div className='flex gap-4 items-center'>
          <ul
            className='
              font-body capitalize font-medium
              bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text
            '
          >
            <li>elmwood park</li>
            {neighborhoods.map(neighborhood => (
              <li>{neighborhood}</li>
            ))}
          </ul>
          <iframe
            height="200"
            width='500'
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Elmwood+Park,Layden+Township+IL`}
          >
          </iframe>
        </div>

      </div>

      <div className='text-center pt-4'>&#169; 2023 GetPet Elmwood Park, Chicago, IL</div>
    </footer>
  )
}

export default Footer