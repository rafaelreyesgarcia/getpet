import React from 'react'

const About = () => {
  return (
    <section id='about' className='flex flex-col items-center justify-center'>
      <div
        className='
          flex flex-col gap-8 items-center
          pt-8 mt-8
          md:flex-row md:px-5
        '
      >
        <div className='w-full px-6 md:w-[500px] flex flex-col md:text-justify'>
          <h2 className="font-barlow font-semibold text-5xl text-center capitalize leading-normal tracking-wider">
           <span className='text-xl'>🐶😄👋🏻</span>{" "}welcome!{" "}<span className='text-xl'>👋🏻🐾🐱</span>
          </h2>
          <br />
          <div className='font-montserrat space-y-6'>
            <p>
              My name is Kelley Smith and I offer pet services in Elmwood Park and the surrounding neighborhoods.
            </p>
            <p>
              I am a trustworthy and honest person that stands by the saying: <q className='font-bold text-white p-2 my-4 block bg-gradient-to-l from-primary to-secondary rounded-md text-center'><em>treat others the way you want to be treated</em></q> I will respect your house and treat your pets like my own.</p>
            <p>
              Let your pet be the judge! Pets have an amazing sense detecting character and personality in a person.🐶🐱💝
            </p>
            <p>
              I have a positive attitude, I get the job done, and I'm driven to provide a wonderful performance to my customers. I want both the pet and owner to be happy at the end of the day.✌🏻🐾
            </p>
          </div>
        </div>

        <div className='w-[200px] h-[200px] md:w-[570px] md:h-[630px] relative'>
          <img src="/portrait.jpg" alt="" className='object-cover h-full w-full rounded-3xl px-4' />
        </div>
      </div>
    </section>
  )
}

export default About