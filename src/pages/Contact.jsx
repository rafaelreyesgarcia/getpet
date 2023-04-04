import { useEffect, useState } from 'react'
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(firstName, lastName, email, message);

  return (
    <section className='flex flex-col'>
      <h1 className="font-heading font-semibold text-5xl text-center capitalize leading-normal tracking-wider my-6">
        <span className='text-3xl md:text-5xl'>🐾</span> Get In Touch <span className='text-3xl md:text-5xl'>🐾</span>
      </h1>
      <div className='flex justify-between w-[80%] mx-auto'>
        <div className=' hidden md:flex flex-col items-center justify-between py-8 font-heading text-3xl font-bold max-h-80'>
          <Link to="tel:+17087699451">708-769-9451</Link>
          <Link to='https://www.facebook.com/Petservicesinelmwoodpark'>
            <FaFacebook />
          </Link>
          <Link to="mailto:kelleypetlover@gmail.com">kelleypetlover@gmail.com</Link>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg w-full px-5 md:w-[70%]">
          <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <form className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="form-heading">First Name</label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="form-heading">Last Name</label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="email" className="form-heading">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="message" className="form-heading">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-cream bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Contact