
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
        <div className='flex justify-center md:justify-between my-8 gap-4' id={service.id}>
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
    </section>
  )
}

export default Services