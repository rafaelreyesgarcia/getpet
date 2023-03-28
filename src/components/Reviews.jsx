import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react'

const reviews = [
  {
    description: 'Kelley is amazing and my pups love her! Highly recommend her if you need someone to care for your pups ❤️🐶❤️',
    name: 'Samantha',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    description: 'Kelley is awesome. We had her come while we were on vacation. My fur babies love her. She is trustworthy, she sent us very detailed updates at every visit. I would highly recommend her!',
    name: 'Cassie',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    description: 'I totally recommend GetPet for your fur babies! We have used Kelley to watch my two doxies and she takes such good care of them. I get text messages with updates and is always so friendly and courteous! I\'ll continue to use her service in the future!',
    name: 'Patty',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    description: 'We are so happy to have found Kelly! She is amazing with our Cooper (Pitt/Lab mix) who is a bit rambunctious but also scared of everything lol. It\'s like he knows when she is scheduled to come and sits by the window waiting for her in anticipation and gets so excited when he sees her!',
    name: 'Sandy',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    description: 'Kelley was wonderful with our two dogs.  She is trustworthy, and very reliable.   We hired her for a weekend, and she took care of the pups like they were her own. We won\'t hesitate to use her services again.',
    name: 'Susan',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    description: 'Kelley was very nice.  She followed directions that we left.  We really appreciated her great service!',
    name: 'Laura',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    description: 'Kelley took great care of my cats while we were on vacation.  She came on the scheduled days and sent me updates and pictures.  I will definitely be using Kelley\'s services in the future!',
    name: 'Michelle',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    description: 'Kelley continues to exceed our expectations! I just assumed that she would be a "run of the mill" dog walker. However, that is FAR from true. She has formed a wonderful bond with our golden retriever, Rocky (our Rockstar).',
    name: 'Jeniffer',
    stars: '⭐⭐⭐⭐⭐',
  },

];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const next = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  return (
    <section
    className="
      flex flex-col justify-evenly items-center my-16"
    >
      <h1 className='font-heading text-2xl uppercase font-bold tracking-[0.3rem] pb-4'>
        Reviews
      </h1>
      <div
        className='
          flex flex-col gap-10
          px-10 relative group'
      >
        <div
          className='
            bg-gray-300/20 w-[20rem] h-[15rem] py-5 px-5 flex flex-col justify-between
            rounded-lg md:w-[40rem]'
        >
          <p className='my-auto'><q><i>{reviews[currentIndex].description}</i></q></p>
          <div className='flex justify-between'>
            <span>{reviews[currentIndex].name}</span>
            <span>{reviews[currentIndex].stars}</span>
          </div>
        </div>

        <div className='hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-2 text-2xl p-1 cursor-pointer'
        >
          <FaChevronLeft onClick={previous} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-2 text-2xl p-1 cursor-pointer'
        >
          <FaChevronRight onClick={next}/>
        </div>
      </div>
      
    </section>
  )
}
