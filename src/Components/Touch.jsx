import React from 'react'
import { BiLocationPlus, BiMessage, BiPhone } from 'react-icons/bi'

const Touch = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 items-center justify-between'>
      {/* details section  */}
      <div className='w-[80%] flex flex-col items-start mx-auto py-10 justify-between gap-[50px]'>
        {/* header  */}
        <h1 className='leading-6 text-4xl md:text-6xl lg:text-7xl font-bold'>Get In Touch</h1>
        {/* address  */}
        <div className='flex items-start justify-center gap-2 '>
            <BiLocationPlus className='text-3xl md:text-4xl lg:text-5xl text-yellow-700'/>
            <div className='flex flex-col items-start justify-center gap-4 '>
                <h1 className='text-2xl md:text-3xl font-semibold text-slate-900'>Address</h1>
                <div className='flex flex-col items-start justify-center gap-3 text-xl text-slate-600'>
                    <p>Xceed Bangladesh LTD.</p>
                    <p>Chattogram Software Technology Park </p>
                    <p>(Level 9),</p>
                    <p>Agrabad, Chattogram – 4100</p>
                </div>
            </div>
        </div>
        {/* call section  */}
        <div className='flex items-start justify-center gap-2 '>
            <BiPhone className='text-3xl md:text-4xl lg:text-5xl text-yellow-700'/>
            <div className='flex flex-col items-start justify-center gap-4 '>
                <h1 className='text-2xl md:text-3xl font-semibold text-slate-900'>Call us </h1>
                <div className='flex flex-col items-start justify-center gap-3 text-xl text-slate-600'>
                    <p>WhatsApp: Click To Whatsapp Me</p>
                </div>
            </div>
        </div>
        <div className='flex items-start justify-center gap-2 '>
            <BiMessage className='text-3xl md:text-4xl lg:text-5xl text-yellow-700'/>
            <div className='flex flex-col items-start justify-center gap-4 '>
                <h1 className='text-2xl md:text-3xl font-semibold text-slate-900'>Email Address </h1>
                <div className='flex flex-col items-start justify-center gap-3 text-xl text-slate-600'>
                    <p>info@xceedbd.com</p>
                </div>
            </div>
        </div>
        {/* call section  */}
      </div>
      {/* map sections  */}
      <div></div>
    </div>
  )
}

export default Touch
