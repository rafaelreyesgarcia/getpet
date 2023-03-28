import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  const apiKey = import.meta.env.VITE_MAPS_KEY;
  return (
    <footer>
      <div className='w-[500px] mx-auto hidden sm:block'>
        <img src="./footer.png" alt="footer" className='w-full object-cover' />
      </div>

      <div className='flex flex-col justify-evenly text-center md:flex-row'>
        {/* GET IN TOUCH */}
        <div className='flex-col items-center justify-center gap-4 p-4'>
          <h2 className='font-heading uppercase text-lg mb-2'>get in touch</h2>
          <div className='flex justify-center gap-4 md:flex-col'>

            <div>
              <h3 className='font-heading uppercase'>socials</h3>
              <Link
                to="https://www.facebook.com/Petservicesinelmwoodpark"
                target="_blank"
              >
                <FaFacebook className='mx-auto'/>
              </Link>
            </div>

            <div>
              <h3 className='font-heading uppercase'>email</h3>
              <Link to="mailto:kelleypetlover@gmail.com" className='font-body'>kelleypetlover@gmail.com</Link>
            </div>

            <div>
              <h3 className='font-heading uppercase'>phone</h3>
              <Link href="tel:+17087699451">708-769-9451</Link>
            </div>

          </div>
        </div>

        {/* SERVICES & HOURS */}
        <div className='flex flex-col items-center gap-4 p-4'>
          <div>
            <h2 className='font-heading uppercase text-lg mb-2'>services</h2>

            <div className='flex gap-4 md:flex-col'>
              <Link to="/services"className="gradient-link">
                Dog Walking
              </Link>
              <Link to="/services" className="gradient-link">
                Pet Sitting
              </Link>
              <Link to="/services" className="gradient-link">
                waste cleanups
              </Link>
            </div>
          </div>

          <div>
            <h2 className='font-heading uppercase text-lg mb-2'>Hours</h2>
            <p><b>Monday - Saturday</b></p>
            <p><b>10:00am - 4:00pm</b></p>
          </div>
        </div>
        {/* AREA & MAP */}
        <div className='flex flex-col items-center gap-4 p-4'>
          <h2 className='font-heading uppercase text-lg'>area</h2>
          <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
            <ul className='hidden md:flex gap-2 capitalize md:flex-col'>
              <li className='item'>elmwood park</li>
              <li className='item'>montclare</li>
              <li className='item'>galewood</li>
              <li className='item'>river grove</li>
              <li className='item'>franklin park</li>
            </ul>
            <div>
            <iframe
              height="250"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Elmwood+Park,Layden+Township+IL`}
            >
            </iframe>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center pt-4'>&#169; 2023 GetPet Elmwood Park, Chicago, Il</div>
    </footer>
  )
}

export default Footer