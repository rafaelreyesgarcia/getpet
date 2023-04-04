
import { servicesDetails } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id='home' className='flex flex-col w-[80%] mx-auto'>
      {servicesDetails.map((service, i) => (
        // sections
        <ServiceCard {...service} index={i} />
      ))}
    </section>
  )
}

export default Services