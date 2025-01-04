import React from 'react'
import { workExperience } from '@/data/index'
import { Button } from './ui/MovingBorder'

const Experience = () => {
    return (
        <div className='py-20' id='Experience'>
            <h1 className="heading text-center text-4xl font-bold">
                My {' '}
                <span className='text-purple'>Work Experience</span>
            </h1>
            <div className='w-full mt-12 lg:grid-cols-4 
            grid grid-cols-1 gap-10'>
                {workExperience.map((card) => (
                    <Button key={card.id} duration={Math.floor(Math.random()*1000 +2000)} borderRadius='1.75rem' className='flex-1 text-white border-neutral-200 dark:border-neutral-800 '>
                        <div className='flex lg:flex-row flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16'/>
                        </div>
                        <div className='ms-5 '>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start mt-3 text-white-100 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </Button>
                ))}
            </div>
        </div>


    )
}

export default Experience