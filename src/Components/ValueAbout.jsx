import React from 'react'
import image from "../assets/About/stapAbout.jpg"
import { ValueData } from '../Data/ValueData'
const ValueAbout = () => {
  return (
    <div className='py-10'>
      <div className='w-[90%] mx-auto py-5 flex items-center justify-between gap-5'>
        {/* image section  */}
        <div className='w-1/2 h-[500px] overflow-hidden'>
            <img src={image} alt="" className='' />
        </div>
        {/* details section  */}
        <div className='w-1/2'>
          {/* header section  */}
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold py-5'>Our Values are:</h1>
          {/* all details  */}
          <div className='space-y-5'>{ValueData.map((item, index)=>(
            <div key={index} className='flex items-start gap-3 justify-start'>
              <h2 className='text-2xl font-semibold text-slate-700'>{item.title}</h2> :
              <div className='text-xl text-slate-600'>{item.details}</div>
            </div>
          ))}</div>
        </div>
      </div>
    </div>
  )
}

export default ValueAbout
