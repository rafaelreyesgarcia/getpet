'use client'

import { servicesDetails } from '../constants';
import ServiceCard from './ServiceCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Services = ({scrollToId}) => {
  const router = useRouter();

  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if(element) {
        const headerHeight = 48;
        window.scrollTo({
          top: element.offsetTop - headerHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [scrollToId]);

  return (
    <section id='home'>
      <div className='flex flex-col w-[80%] mx-auto'>
        {servicesDetails.map((service, i) => (
          <div className='flex justify-center items-center md:justify-between my-8 gap-4' id={service.id}>
            {i % 2 === 0 ? (
              <>
                <ServiceCard {...service} index={i} />
                <div className='h-[630px] w-[570px] hidden md:block'>
                  <img src={service.img} alt={service.type} className='object-cover h-full w-full transform scale-x-[-1] z-0 rounded-2xl'/>
                </div>
              </>
            ) : (
              <>
                <div className='h-[630px] w-[570px] hidden md:block'>
                  <img src={service.img} alt={service.type} className='object-cover h-full w-full transform scale-x-[-1] z-0 rounded-2xl'/>
                </div>
                <ServiceCard {...service} index={i} />
              </>
            )}

          </div>
          // sections

        ))}
      </div>
      <div className='bg-gradient-to-r from-primary to-secondary flex flex-col gap-6'>
        <h2 className='font-heading font-semibold text-4xl text-center capitalize leading-normal tracking-wide text-white mt-5'>Lets meet and greet!</h2>
        <p className='font-body text-white mx-auto text-center text-xl w-[50%]'>
          We'll talk through all the details of your pets specific needs and routines to make sure your pets receive the best possible care.
        </p>
        <Link
          className='bg-secondary hover:bg-primary self-center py-2 px-4 rounded-md mb-5'
          href={'/contact'}
        >
          <button
            className='text-white uppercase text-xl'
          >
            schedule
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Services