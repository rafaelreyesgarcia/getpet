import {useState} from 'react'

const Faqs = [
  {
    question: 'how long are the walks?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    question: 'what does a walk include?',
    answer: 'consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    question: 'do you need keys to my house?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, asperiores?',
  },
  {
    question: 'how can i schedule a service?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'what payments do you accept?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'what is your cancellation policy?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'can you medically assist pets?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'do you work on the holidays?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'what about walking in bad weather?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

console.log(Faqs);

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <section className='h-screen
    flex flex-col justify-evenly items-center'>
      <h1 className='font-heading text-2xl uppercase font-bold tracking-[0.3rem] text-center'>
        Frequently asked questions
      </h1>
      { Faqs.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg mb-4 w-[80%]"
        >
          <div
            className="flex justify-between items-center cursor-pointer py-4 px-6 bg-gray-100 w-full flex-shrink-0"
            onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
          >
            <h3 className='font-heading capitalize text-[#000]'>{item.question}</h3>
            <svg
              className={`w-6 h-6 ${
                index === activeIndex ? 'transform rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
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
            <div className="px-6 pb-4">{item.answer}</div>
          )}
        </div>
      ))}
    </section>

  )
}

export default Faq