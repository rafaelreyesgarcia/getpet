import {Link} from "react-router-dom";

const services = [
  {
    image: '/walking.png',
    title: 'dog walking',
    description: 'A walk around the neighborhood'
  },
  {
    image: '/cleanup.png',
    title: 'waste cleanups',
    description: 'weekly pet waste removal '
  },
  {
    image: '/sitting.png',
    title: 'pet sitting',
    description: 'vacation care at home'
  }
];

const Services = () => {
  return (
    <section
      className="
        pt-16
        flex flex-col justify-evenly items-center"
    >
      <h1 className="font-heading font-bold tracking-[0.3rem] text-2xl uppercase">
        services
      </h1>
      <div
        className="
          flex flex-col gap-14 items-center
          md:flex-row md:justify-around md:gap-0
          w-full pb-8 mt-4"
      >
        {services.map((service) => (
          <div
            key={service.title}
            className='
              flex flex-col justify-center items-center gap-4
              text-center
              snap-start
              bg-gray-300/20 rounded-2xl p-4'
          >
            <div className="w-52 h-52">
              <img src={service.image} alt={service.title}/>
            </div>
            <h2 className="font-heading uppercase">{service.title}</h2>
            <p className="font-body pb-2 ">{service.description}</p>
            <button
              className="
                uppercase
                p-2 rounded-lg
                bg-gradient-to-l from-indigo-500/40 to-blue-500/40
                hover:from-indigo-500 hover:to-blue-500"
            >
              <Link href="/services">learn more</Link>
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;