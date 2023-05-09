'use client'

import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import Link from 'next/link'
import { footerInfo, neighborhoods } from './constants'

const Footer = () => {
  const apiKey = process.env.GOOGLE_API;

  const headerHeight = 48;
  // function handleClick(sectionId) {
  //   if (sectionId) {
  //     const formattedId = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
  //     const section = document.getElementById(formattedId);
  //     const offsetTop = section.offsetTop;
  //     console.log(formattedId);
  //     window.scrollTo({
  //       top: offsetTop - headerHeight,
  //       behavior: 'smooth',
  //     });
  //   } else {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   }
  // }

  const handleScroll = (e) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    console.log(href);
    const targetId = href.replace(/.*\#/, "");
    console.log(targetId);

    const elem = document.getElementById(targetId);
    console.log(elem);

    window.scrollTo({
      top: elem?.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  }

  return (
    <footer className='w-[80%] mx-auto pt-2'>
      <div className='bg-gradient-to-l from-primary to-secondary h-2 my-4 rounded-md'></div>

      <div className='flex justify-between items-center py-8 font-heading text-lg md:text-3xl font-bold gap-4'>
        <a href='#'><img src='./logo.svg' alt="logo" className='w-[15rem] hidden md:block' /></a>
        <Link href="tel:+17087699451">708-769-9451</Link>
        <Link href='https://www.facebook.com/Petservicesinelmwoodpark' target='_blank'>
          <FaFacebook />
        </Link>
        <Link href="mailto:kelleypetlover@gmail.com">kelleypetlover@gmail.com</Link>
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
                  // services page links
                  link.to.includes('#') ? (
                    <Link
                      href={`/services${link.to}`}
                    >
                      <li className='capitalize font-body'>{link.name}</li>
                    </Link>
                    // home page links
                  ) : link.name === 'home' ? (
                    <Link
                      href={`/`}
                      onClick={handleScroll}
                    >
                      <li className='capitalize font-body'>{link.name}</li>
                    </Link>
                  ) : (
                    <Link
                      href={`/#${link.to}`}
                      onClick={handleScroll}
                    >
                      <li className='capitalize font-body'>{link.name}</li>
                    </Link>
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