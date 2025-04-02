import React from 'react'

const Presence = () => {
  return (
    <div className='bg-[#297EBB] text-white py-10 lg:py-20'>
      {/* container section  */}
      <div className='w-[90%] mx-auto py-5 flex flex-col items-center justify-center gap-10'>
        {/* header section  */}
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center'>Ready to Transform Your Online Presence?</h1>
        {/* details section  */}
        <div className='text-2xl md:text-3xl  font-thin text-center'>Let’s Create an Extraordinary Website Together!</div>
        {/* button section  */}
        <button className='capitalize bg-yellow-600 text-2xl lg:text-4xl py-4 font-semibold flex items-center gap-2 px-8'>Get Your Free Proposal </button>
        {/* another details  */}
        <div className='text-2xl md:text-3xl xl:text-4xl text-center'>or call <span className='text-yellow-600'>01818-049484</span> to get started today</div>
      </div>
    </div>
  )
}

export default Presence
