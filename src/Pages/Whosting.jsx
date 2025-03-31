import React from 'react'
import whbanner from "../assets/whostbanner.jpg"
import SrBanner from '../Components/SrBanner'





const Whosting = () => {
  return (
    <div>
      {/* whosting banner section  */}
      <SrBanner bg={whbanner} d1={'Corporate Shared Web Hosting'} d2={'Make sure your website is always available and easy to use with managed web hosting services.'} d3={'Since 2008, we have been faithfully serving our customers with powerful hosting servers based in USA at affordable prices.'} f1={'Keep it up 24/7'} f2={'with web hosting by XCEEDBD'} />
    </div>
  )
}

export default Whosting
