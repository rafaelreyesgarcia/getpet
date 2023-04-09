import {useState} from 'react'
import { Faqs } from '../constants'

console.log(Faqs);

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <section
      className='
        flex flex-col justify-evenly items-center mb-24
      '
      id='faqs'
    >
      <h1 className='font-heading font-semibold text-5xl text-center capitalize leading-normal tracking-wider mb-8 mt-16'>
        Frequently asked questions
      </h1>
      { Faqs.map((item, index) => (
        <div
          key={index}
          className="mb-4 w-[50%]"
        >
          <div
            className={`flex justify-between items-center cursor-pointer py-4 px-6 bg-gradient-to-l from-primary to-secondary w-full flex-shrink-0 rounded-lg ${index === activeIndex ? 'rounded-bl-none rounded-br-none' : ''}`}
            onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
          >
            <h3 className='font-heading capitalize text-cream font-semibold text-xl'>{item.question}</h3>
            <svg
              className={`w-6 h-6 ${
                index === activeIndex ? 'transform rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {index === activeIndex && (
            <div className="px-6 pb-4 border-t-0 border-r-2 border-l-2 border-b-2 border-primary rounded-bl-lg rounded-br-lg">{item.answer}</div>
          )}
        </div>
      ))}
    </section>

  )
}

export default Faq