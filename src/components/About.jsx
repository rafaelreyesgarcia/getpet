import React from 'react'

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <h1 className="font-heading font-bold tracking-[0.3rem] text-2xl uppercase">
        About
      </h1>
      <div
        className='
          flex flex-col gap-8 items-center
          pt-8 mt-8
          md:flex-row md:px-5
        '
      >
        <img src="/portrait.jpg" alt="" className='object-cover w-[200px] h-[200px] md:w-[500px] md:h-[500px] rounded-3xl px-4' />
        <div className='w-full px-6 md:w-[500px] flex flex-col md:text-justify'>
          <h2 className='capitalize font-heading text-center'>🐶😄👋🏻 Welcome To My Page! 👋🏻🐾🐱 </h2>
          <br />
          <p className='font-body'>My name is Kelley Smith and I offer pet services in Elmwood Park and the surrounding neighborhoods.</p>
          <br />
          <p className='font-body'>I am a trustworthy and honest person that stands by the saying: <q className='item font-extrabold py-2 my-4 block'><em>treat others the way you want to be treated</em></q> I will respect your house as if it was mine.</p>
          <br />
          <p className='font-body'>
          Let your pet be the judge! Pets have an amazing sense detecting character and personality in a person.🐶🐱💝
          </p>
          <br />
          <p className='font-body'>😊I have a positive attitude, I get the job done, and I'm driven to provide a wonderful performance to my customers. I want both the pet and owner to be happy at the end of the day.✌🏻🐾</p>
        </div>
      </div>
    </section>
  )
}

export default About