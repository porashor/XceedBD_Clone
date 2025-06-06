import React from 'react'
import BfmData from '../Data/BFAM'
const BFAMsec = () => {
  return (
    <div className='bg-black text-white'>
      {/* container section  */}
      <div className='w-[90%] mx-auto'>
        {/* header section  */}
        <div className='text-2xl md:text3xl lg:text-4xl xl:text-5xl font-bold text-center py-10'>Benefits of Facebook Ads Management</div>
        {/* details section  */}
        <div className='flex items-start py-10 justify-between gap-5'>
            {BfmData.map((item, index)=>(
                <div key={index} className='flex flex-col items-center justify-center gap-5'>
                    {/* image section  */}
                    <img src={item.image} alt="" />
                    {/* title section  */}
                    <div className='py-5 text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>{item.name}</div>
                    {/* details section  */}
                    <div className='text-xl leading-8'>{item.details}</div>
                </div>            
            ))}
        </div>
      </div>
    </div>
  )
}

export default BFAMsec
