import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({id, type, img, duration, price, features, cheaper, index}) => {
  const [amount, setAmount] = useState(2);
  const max = 2;
  const min = 1;

  const handleDecrease = () => {
    if (amount > min) {
      setAmount(amount - 1);
    }
  }

  const handleIncrease = () => {
    if (amount < max) {
      setAmount(amount + 1);
    }
  }
  return (
    <>
      <div className='flex flex-col justify-evenly items-center gap-8'>
        <h2 className='font-heading font-semibold text-5xl text-center capitalize leading-normal tracking-wider'>
          {type}
        </h2>
        <div className='w-[470px] h-[32rem] max-w-[20rem] lg:max-w-full relative bg-gradient-to-r from-primary to-secondary p-1 rounded-md'>
          <div className='bg-primary-light h-full rounded-md flex flex-col justify-between'>
            {/* grid for header */}
            <div className='grid grid-cols-2 gap-4 font-semibold font-heading capitalize text-xl w-full mx-auto justify-items-center py-8 px-3'>
              <p>⏱duration</p>
              <div className='flex gap-4 items-center text-center'>
                {!cheaper ? (
                  <p>{amount === 2 ? duration : cheaper.duration}</p>
                ) : (
                  <>
                    <span className={`${amount === min ? 'custom-button-disabled' : 'custom-button'}`} onClick={handleDecrease}>
                      -
                    </span>
                    <p>{amount === 2 ? duration : cheaper.duration}</p>
                    <span className={`${amount === max ? 'custom-button-disabled' : 'custom-button'}`} onClick={handleIncrease}>
                      +
                    </span>
                  </>
                )}
              </div>
              <p>💵price</p>
              <p>{amount == 2 ? price : cheaper.price }</p>
            </div>
            <div className='bg-gradient-to-l from-primary to-secondary h-1 my-4 rounded-md w-[80%] mx-auto'></div>
            <ul className='flex flex-col w-[80%] mx-auto space-y-4'>
              {amount == 2 && features.map(feature => (
                <li>{feature}</li>
              ))}
              {amount == 1 && cheaper.features.map(feature => (
                <li>{feature}</li>
              ))}
            </ul>
            <div className='self-center py-8'>
              <Link to='/contact'>
                <button className='bg-gradient-to-l from-primary/90 to-secondary/90 text-white py-2 px-4 rounded-2xl uppercase text-lg hover:from-primary hover:to-secondary'>
                  book
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceCard