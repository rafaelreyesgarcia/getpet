import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react'
import { reviews } from '../constants'

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
      flex flex-col justify-evenly items-center my-12
    "
    id='reviews'
    >
      <h2 className='font-heading font-semibold text-5xl text-center capitalize leading-normal tracking-wider mb-8'>
        Reviews
      </h2>
      
      <div className='bg-gradient-to-r from-primary to-secondary w-full'>
        {/* card */}
        <div className='px-10 relative group mx-auto lg:w-[60%] text-white'>
          <div
            className='
              h-[17rem] py-5 px-7 flex flex-col justify-between
          '
          >
            <p className='my-auto'><q><i>{reviews[currentIndex].description}</i></q></p>
            <div className='flex justify-between'>
              <span className='font-bold'>{reviews[currentIndex].name}</span>
              <span>{reviews[currentIndex].stars}</span>
            </div>
          </div>
          <div className='group-hover:block absolute top-[50%] -translate-y-[50%] left-2 text-2xl p-1 cursor-pointer'
          >
            <FaChevronLeft onClick={previous} />
          </div>
          <div className='group-hover:block absolute top-[50%] -translate-y-[50%] right-2 text-2xl p-1 cursor-pointer'
          >
            <FaChevronRight onClick={next}/>
          </div>
        </div>
      </div>
      
    </section>
  )
}
