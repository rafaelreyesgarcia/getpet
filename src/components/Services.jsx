import {Link} from "react-router-dom";
import { services } from '../constants'
import { HashLink } from 'react-router-hash-link'

const Services = () => {

  const headerHeight = 75;
  function handleClick(sectionId) {
    const section = document.getElementById(sectionId);
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop - headerHeight,
      behavior: 'smooth',
    });
  }

  return (
    <section
      className="
        pt-16 w-[80%] mx-auto
        flex flex-col justify-evenly items-center
      "
    >
      <h2 className="font-heading font-semibold text-5xl text-center capitalize leading-normal tracking-wider">
        services
      </h2>
      {/* card */}
      <div
        className="
          flex flex-col gap-14 items-center
          w-full pb-8 mt-4
          md:flex-row md:justify-around md:gap-6
        "
      >
        {services.map((service) => (
          <div
            key={service.title}
            className='
              flex flex-col items-center gap-4
              text-center
              w-[20rem] h-[470px]
              bg-primary/20 rounded-2xl
              shadow-md
              transform hover:scale-105 duration-300
            '
          >
            <div className="h-[60%] w-full">
              <img src={service.img} alt={service.title} className="object-cover w-full h-full object-top rounded-tl-xl rounded-tr-xl"/>
            </div>
            <div className="flex flex-col items-center gap-4 w-[90%]">
              <h2 className="font-heading font-semibold capitalize text-2xl">{service.title}</h2>
              <p className="font-body pb-2 ">{service.description}</p>
            </div>
              <HashLink
                to={`/services#${service.id}`}
                scroll={() => handleClick(service.id)}
                className="
                  uppercase font-heading text-cream
                  p-2 rounded-lg cursor-pointer
                  bg-gradient-to-l from-primary/40 to-secondary/40
                hover:from-primary hover:to-secondary
                "
              >
                learn more
              </HashLink>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;