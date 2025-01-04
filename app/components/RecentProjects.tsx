import React from 'react'
import { projects } from '@/data/index'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { rotate } from 'three/tsl'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className="heading text-center text-4xl font-bold">
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap gap-x-28 gap-y-16 items-center justify-center px-4 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='lg:min-h-[32.5rem] h-fit flex items-center gap-6 justify-center sm:w-96 w-[80vw]'>
                <PinContainer href={link} title={link} className='flex flex-col gap-3'>

                    <div className='relative flex items-center justify-center sm:w-[420px] w-[80vw]  overflow-hidden h-[20vh] lg:h-[30vh] '>
                        <div className='relative w-full h-full rounded-3xl overflow-hidden bg-[#13162d] object-cover object-center'>
                            <img className='w-full h-full' src="/bg.png" alt="bg-img" />
                        </div>
                        <img src={img} alt='title' className='rotate-3 z-10 absolute botton-0'/>
                    </div>
                    <h1 className='text-bold lg:text-xl md:text-lg text-base line-clamp-1'>
                        {title}

                    </h1>
                    <p className='lg:text-sm lg:font-normal font-light text-xs  text-gray-300 line-clamp-2'>{des}</p>

                    <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className='flex items-center '>
                            {iconLists.map((icon , index) => (
                                <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center'
                                style={{transform: `translateX(-${10 * index}px)`}}>
                                    
                                <img src={icon} alt='icon' className='p-2' />
                                </div>))}
                        </div>

                        <div className=' flex items-center justify-center px-4 py-2 text-xs lg:text-sm rounded-full'>
                            <p >
                                Check Live Site
                            </p>
                            <FaLocationArrow className='ms-3' color='#CBACF9'/>
                        </div>

                    </div>


                </PinContainer>
                </div>
                ))}


        </div>



    </div>
  )
}

export default RecentProjects