import React from 'react'
import { featuredData } from '../Data/FeaturedData'

const Featured = () => {
  return (
    <div className='py-5 md:py-10 xl:py-20 '>
      {/* container section  */}
      <div className='w-[90%] mx-auto'>
        {/* header section  */}
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center py-5 md:py-10'>Website Features That You Will Love</h1>
        {/* main sections  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-5 '>
            {
                featuredData.map((item, index)=>(
                    <div key={index} className=' flex flex-col items-center justify-center gap-5'>
                        {/* icons section  */}
                        <div className='text-[#124F7E] text-center text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold flex items-center justify-center py-5'>{item.icons}</div>
                        {/* titile section  */}
                        <div className='text-2xl md:text-3xl text-center font-semibold'>{item.title}</div>
                        {/* subtitle section  */}
                        <div className='text-xl text-center py-3'>{item.subtitle}</div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Featured
