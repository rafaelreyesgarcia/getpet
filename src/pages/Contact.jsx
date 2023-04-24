import { useEffect, useState } from 'react'
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='flex flex-col'>
      <h1 className="font-heading font-semibold text-5xl text-center capitalize leading-normal tracking-wider my-6">
        <span className='text-3xl md:text-5xl'>🐾</span> Get In Touch <span className='text-3xl md:text-5xl'>🐾</span>
      </h1>
      <p className='text-center mb-8 w-[80%] md:w-[40%] mx-auto'>
        If you have any questions about any service, please don't hesitate to get in touch and I'll be more than happy to assist you.
      </p>

      <div className='flex justify-center md:justify-between w-[70%] mx-auto gap-4'>
        <div className='flex flex-col gap-8 items-center justify-between py-8 font-heading text-3xl font-bold max-h-80'>
          <Link to="tel:+17087699451" className='contact-button'>708-769-9451</Link>
          <Link to='https://www.facebook.com/Petservicesinelmwoodpark' className='contact-button'>
            <FaFacebook />
          </Link>
          <Link to="mailto:kelleypetlover@gmail.com" className='contact-button'>kelleypetlover@gmail.com</Link>
        </div>

        <div className="h-[400px] w-[40rem] hidden md:flex">
          <img src="./src/assets/contact.jpg" alt="" className='object-cover w-full h-full' />
        </div>
      </div>
    </section>

  );
}

export default Contact