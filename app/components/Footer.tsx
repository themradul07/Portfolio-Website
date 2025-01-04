import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-2' id="contact">
      <div className='w-full absolute left-0 -bottom-72 min-h-80'>
        <img src="/footer-grid.svg" alt="grid" className='w-full h-full  opacity-50' />
      </div>
      <div className='flex flex-col mx-auto items-center lg:max-w-[40vw] gap-6 sm:w-full md:max-w-[80vw]'>
        <h1 className="heading text-center text-4xl font-bold">
          Ready to take  {' '}
          <span className='text-purple'>your</span>
          {' '} digital presence to the next level?
        </h1>
        <p className='text-center mt-5 text-white-200 md:mt-10'>
          Reach out to me today and let&apos;s discuss how I can help achieve your goals.</p>


      <a href='mailto:mradulgandhi18@gmail.com'>
          <MagicButton 
          title='Lets get in Touch'
          icon={<FaLocationArrow/>}
          position='right' />

      </a>

      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center gap-6 pb-20'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Mradul</p>


      <div className='flex items-center md:gap-3 gap-6'>
        {socialMedia.map((profile) => (
          <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-xl border border-black-300' >
            <a href={profile.link} target='_blank' rel='noreferrer'>

            <img src={profile.img}  width={20} height={20} />
            </a>


          </div>
        ))}
        </div>
      </div>


    </footer>
  )
}

export default Footer