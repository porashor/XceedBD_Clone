import React from 'react'
import { AddLogo } from '../Data/ImageGaDa'

const AddPage = () => {
  return (
    <div>
      {/* container section  */}
      <div className='w-[90%] mx-auto'>
        {/* header  */}
        <h1 className='text-center py-10 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>Advertise your business on</h1>
        {/* details area  */}
        <div className='flex items-center justify-between py-10'>
            {AddLogo.map((item, index)=>(
                <div key={index}>
                    <img src={item} alt="" />
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AddPage
