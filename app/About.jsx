import React from 'react'

const About = () => {
  return (
    <section id='about' className='md:flex md:flex-row h-auto'>
      {/* description */}
      <div className='flex flex-col gap-8 items-center justify-center bg-primary/30 w-full md:w-[70%]'>
        <div className='w-full p-6 lg:w-[90%] flex flex-col md:text-justify'>
          <h2 className="font-heading font-semibold text-5xl text-center capitalize leading-normal tracking-wider">
           <span className='text-xs md:text-xl'>🐶🐾</span>{" "}welcome!{" "}<span className='text-xs md:text-xl'>🐾🐱</span>
          </h2>
          <br />
          <div className='font-body text-lg space-y-6'>
            <p>
              My name is Kelley Smith and I offer pet services in Elmwood Park and the surrounding neighborhoods.
            </p>
            <p>
              I am a trustworthy and honest person that stands by the saying: <q className='font-bold text-cream p-2 my-4 block bg-gradient-to-l from-primary to-secondary rounded-md text-center'><em>treat others the way you want to be treated</em></q> I will respect your house and treat your pets like my own.</p>
            <p>
              Let your pet be the judge! Pets have an amazing sense detecting character and personality.🐶🐱💝
            </p>
            <p>
              I have a positive attitude, I get the job done, and I'm driven to provide a wonderful performance to my customers. I want both the pet and owner to be happy at the end of the day.✌🏻🐾
            </p>
          </div>
        </div>
      </div>
      {/* image */}
      <div className='w-full h-[20rem] md:h-auto md:w-[30%]'>
        <img src="/portrait.jpg" alt="" className='object-cover h-full w-full px-0' />
      </div>
    </section>
  )
}

export default About