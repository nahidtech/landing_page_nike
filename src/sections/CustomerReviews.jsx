import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h1 className='font-palanquin text-4xl font-bold text-center'>
        What Our  
        <span className='text-coral-red'> Customers </span>
        Say?
      </h1>
      <p className='info-text max-w-lg m-auto mt-4 text-center'>
        Here genuine stories form our customers and their experiences with our products. We are proud to share these reviews with you.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews