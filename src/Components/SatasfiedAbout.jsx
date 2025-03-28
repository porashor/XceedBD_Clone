import React from 'react'
import { ClientField } from '../Data/ImageGaDa'

const SatasfiedAbout = () => {
  return (
    <div className='text-white bg-black py-10'>
      {/* container section  */}
      <div className='w-[90%] mx-auto'>
        {/* header section  */}
        <div className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-center '>Our clients love working with us
        </div>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold  text-center py-5 '>We are masters of industry</h1>
        {/* details section  */}
        <div className='text-3xl flex items-center justify-between gap-5 md:text-4xl lg:text-5xl font-bold'>
          {ClientField.map((item, index)=>(
            <div key={index} className='flex flex-col gap-5 justify-center items-center py-5'>
              {/* icons section  */}
              <div>{item.icons}</div>
              {/* name section  */}
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SatasfiedAbout
