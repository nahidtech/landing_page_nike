import React, { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import {shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative flex flex-col justify-center items-start xl:w-2/5 w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray  text-lg leading-8 mt-6 mb-14 sm:max-w-sm '>Discover stylish Nike arrivals, quality comfort and innovatin for your active life.</p>
        <Button label="Show now" iconURL={arrowRight} />

        <div className='flex justify-starts items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((item) => (
            <div key={item.label} className='flex flex-col items-start gap-2'>
              <p className='text-4xl font-bold'>{item.value}</p>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg} 
          alt="shoe collection" 
          width={610}
          height={510}
          className='object-contain relative z-10'
          
          />

         <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <ShoeCard
              imgURL = {shoe}
              bigShoeImg = {bigShoeImg}
              changeBigShoeImg = 
              {
                (shoe) => {
                  setBigShoeImg(shoe)
                }
              }
            />
          ))}
         </div>

      </div>
    </section>
  )
}

export default Hero