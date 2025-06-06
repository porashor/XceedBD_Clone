import React from 'react'
import FMSdata from '../Data/FMSdata'

const FMStemp = () => {
  return (
    <div className='my-10 bg-black text-white py-10'>
      {/* container section   */}
      <div className='w-[90%] mx-auto'>
        {/* header section  */}
        <h1 className='text-center py-10 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>Our Facebook Marketing Services</h1>
        {/* details sections  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {FMSdata.map((item, index)=>(
            <div key={index} className='py-5 px-3 my-10'>
              {/* header  */}
              <h1 className='py-10 text-xl md:text-2xl font-bold lg:text-3xl text-center'>{item.name}</h1>
              {/* details  */}
              <div className='text-center leading-8 text-xl md:text-2xl'>{item.details}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FMStemp
