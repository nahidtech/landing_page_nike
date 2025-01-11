import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start flex-wrap max-lg:flex-col gap-20'>
        <div className='flex flex-col items-start'>
          <a href="">
            <img src={footerLogo} alt="" height={46} width={150} /> 
          </a>
          <p className='text-white-400 font-montserrat text-base leading-6 sm:max-w-sm info-text mt-6'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size in store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <a href="">
                  <img 
                    src={icon.src}
                    alt={icon.alt}
                    height={24}
                    width={24}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className=' flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer' key={link.name}>
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max:sm:flex-col max-sm:items-center pb-3'>
        <div className='flex flex-1 justify-start font-montserrat gap-1 cursor-pointer'>
          <img src={copyrightSign} alt="copy right sign" width={20} height={20} className='rounded-full m-0' />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>
          <a href="/">Tearms & Conditions</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer