import React from 'react'
import BannerSec from "../assets/bannerSr.jpg"
const SrBanner = ({bg, d1, d2, d3, f1, f2}) => {
  const bgStyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: -1
  }
  return (
    <div style={bgStyles} className='relative text-white min-h-[100vh] flex items-center justify-center py-10'>
      {/* overlay area  */}
      <div className='absolute top-0 left-0 w-full h-full bg-[#1d39625a] backdrop-blur-[2px] z-10'></div>
      {/* container section   */}
      <div className='w-[90%] relative z-20 mx-auto flex items-center justify-between gap-5'>
        <div className='w-3/5 flex flex-col items-start justify-center gap-5 space-y-7'>
          <div className='text-2xl lg:text-3xl text-yellow-600'>{d1}</div>
          <div className='text-4xl lg:text-6xl'>{d2}</div>
          <div className='text-lg md:text-xl'>{d3}</div>
        </div>
        <div className='w-2/5 flex flex-col items-center justify-center gap-5'>
          {/* main form here  */}
          <div className='bg-black px-5  py-[50px] flex flex-col items-start justify-center text-xl gap-5'>
            <div className='text-3xl lg:text-6xl text-center '>{f1}</div>
            <div className='text-xl text-center mx-auto'>{f2}</div>
            {/* progress area  */}
            <div className='flex items-center justify-between gap-5 w-full px-2'>
              <div className=' w-[80px] aspect-square border-2 flex items-center justify-center rounded-full bg-white text-yellow-600 border-slate-400'>1</div>
              <hr  className='w-[100%] border-1'/>
              <div className=' w-[80px] aspect-square border-2 flex items-center justify-center rounded-full bg-white text-black border-slate-400'>2</div>
            </div>
            {/* form area  */}
            <form action="#" className='w-[90%] mx-auto flex flex-col items-start justify-center gap-4'>
              <input type="text" placeholder='Full Name*' className='py-2 px-4 w-full rounded-md outline-none border border-slate-400 bg-white text-black' requared />
              <input type="email" placeholder='Enter Email*' className='py-2 px-4 w-full rounded-md outline-none border border-slate-400 bg-white text-black' requared />
              <input type="number" placeholder='Enter phone number*' className='py-2 px-4 w-full rounded-md outline-none border border-slate-400 bg-white text-black' requared />
              <input type="submit" value="Submit" className='py-2 px-4 w-full rounded-md outline-none border border-slate-400 bg-[#20d66f]' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SrBanner
