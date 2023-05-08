import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { footerInfo, neighborhoods } from '../constants'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  const apiKey = import.meta.env.VITE_MAPS_KEY;

  const headerHeight = 48;
  function handleClick(sectionId) {
    if (sectionId) {
      const formattedId = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
      const section = document.getElementById(formattedId);
      const offsetTop = section.offsetTop;
      console.log(formattedId);
      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
  return (
    <footer className='w-[80%] mx-auto pt-2'>
      <div className='bg-gradient-to-l from-primary to-secondary h-2 my-4 rounded-md'></div>

      <div className='flex justify-between items-center py-8 font-heading text-lg md:text-3xl font-bold gap-4'>
        <a href='#'><img src={logo} alt="logo" className='w-[15rem] hidden md:block' /></a>
        <Link to="tel:+17087699451">708-769-9451</Link>
        <Link to='https://www.facebook.com/Petservicesinelmwoodpark' target='_blank'>
          <FaFacebook />
        </Link>
        <Link to="mailto:kelleypetlover@gmail.com">kelleypetlover@gmail.com</Link>
      </div>

      <div
        className='
          flex flex-col gap-5 justify-between items-center
          md:flex-row md:gap-0
        '
      >
        <div className='flex gap-12'>
          {footerInfo.map((footerLink, i) => (
            <div className='flex flex-col'>
              <h3 className='text-xl font-bold capitalize font-heading pb-2'>
                {footerLink.title}
              </h3>
              <ul>
                {footerLink.links.map((link) => (
                  link.to.includes('#') ? (
                    <HashLink
                      to={`/services${link.to}`}
                      scroll={() => handleClick(link.to)}
                    >
                      <li className='capitalize font-body'>{link.name}</li>
                    </HashLink>
                  ) : (
                    <HashLink
                      to={`/#${link.to}`}
                      scroll={() => handleClick(link.to)}
                    >
                      <li className='capitalize font-body'>{link.name}</li>
                    </HashLink>
                  )
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
              hidden lg:block
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
            className='md:w-[20rem]'
            height="200"
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