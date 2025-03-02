import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10' id='contact-us'> 
      <h1 className='text-4xl lg:max-w-md leading-[89px] font-palanquin font-bold  '>
        Sign Up From <span className='text-coral-red'>Updates</span> & Newslatter
      </h1>
      
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full' >
        <input type="text"
        placeholder='subscribe@nike.com'
        className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full' >
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe