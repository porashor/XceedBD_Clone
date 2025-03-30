import React from 'react'
import { ContactFollow } from '../Data/ContactData'

const FollowXc = () => {
  return (
    <div className='py-5 md:py-10 xl:py-[100px] bg-[#297EBB] text-white'>
      {/* container section  */}
      <div className='w-[90%] mx-auto space-y-8'>
        {/* header section  */}
        <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-center'>Follow XCEEDBD</h1>
        {/* main section  */}
        <div className='flex items-center justify-between'>{ContactFollow.map((item, index)=>(
            <div key={index} className='flex flex-col items-center justify-center gap-5 py-5'>
                {/* icon  */}
                <div className='bg-black w-[80px] h-[80px] rounded-full flex items-center justify-center text-2xl md:text-3xl'>{item.icon}</div>
                {/* title  */}
                <div className='text-2xl md:text-3xl font-semibold'>{item.title}</div>
                {/* details  */}
                <div className='text-xl'>{item.details}</div>
            </div>
            ))}</div>
      </div>
    </div>
  )
}

export default FollowXc
