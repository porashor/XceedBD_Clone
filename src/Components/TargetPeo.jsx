import React from 'react'
import RImage from "../assets/target.jpg"
const TargetPeo = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
      {/* image  */}
      <div className='flex items-center'>
        <img src={RImage} alt="" />
      </div>
      {/* details  */}
      <div>
        {/* heading section  */}
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold py-10'>Target the right people with Facebook ads management services</h1>
        {/* details  */}
        <div className='text-xl leading-8 py-5'>
            At XCEEDBD, our Facebook advertising experts can handle all aspects of your FB ads management activities, including:
        </div>
        {/* options details  */}
        <div className='grid grid-cols-2 gap-5 text-2xl py-10'>
            <li>Identify and analyze target audiences to tailor a campaign that relates to them.</li>
            <li>Set up Facebook Pixel tracking for conversion tracking purposes.</li>
            <li>Provide accurate, transparent, and timely Facebook ad performance reports.</li>
            <li>Deliver the right messages at the right time on Facebook.</li>
        </div>
      </div>
    </div>
  )
}

export default TargetPeo
