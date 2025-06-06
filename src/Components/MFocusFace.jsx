import React from 'react'

const MFocusFace = ({data}) => {
  return (
    <div>
      {/* constainer  */}
        <div className='w-[90%] py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {data.map((item, index)=>(
                <div key={index} className='flex flex-col items-center justify-center gap-5 py-5 px-7 mx-3 hover:bg-yellow-600'>
                    {/* header  */}
                    <div className='text-xl md:text-2xl lg:text-3xl font-bold'>{item.name}</div>
                    {/* details  */}
                    <div className='text-xl text-center'>{item.details}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MFocusFace
