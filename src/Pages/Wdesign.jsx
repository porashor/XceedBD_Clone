import React from 'react'
import wbanner from "../assets/wdbanner.jpg"
import SrBanner from '../Components/SrBanner'
import ServiceDetails from '../Components/ServiceDetails'
import w1 from "../assets/wdesign/w1.jpg"
import w2 from "../assets/wdesign/w2.jpg"
import w3 from "../assets/wdesign/w3.jpg"



const Wdesign = () => {
  return (
    <div>
      <SrBanner bg={wbanner} d1={'Best Website Design Services'} d2={'Our experts will help you create your perfect website.'} d3={'Xceed is the best web design company in Chittagong, Bangladesh delivering cutting-edge, user-centric websites that drive results.'} f1={'Get A Free Consultation'} f2={'Crafted with Precision, Designed for Success'} />
      {/* details section start here  */}
      <ServiceDetails Image={w1} name1={"Boost your business! Create a stunning responsive website your customers will love."} name2={"Our website designers can create a fantastic and unique website for your brand that attracts and keeps customers. With our experience, we’ll ensure that your website looks great and works well with the right content and colors. Trust us to help you create the website your business deserves and watch your customer base grow!"} css={{order: true}}/>
      <ServiceDetails Image={w2} name1={"Drive users to action and grow your brand with a results-driven experience."} name2={"We help you with your website by researching the words people use to find things like yours and what your competition is doing. Then, we make a plan to make your website look good and easy to use on phones and computers. We also make sure it loads quickly. This helps more people find your website and do what you want them to do."} css={{order: false}}/>
      <ServiceDetails Image={w3} name1={"We learn about your business so we can figure out what your audience likes."} name2={"Your website is the first thing people see; we want it to make a good impression. We can design it to look nice and be easy to use. We’ll use your logo and colors so people will know it’s from your business. Your website will show that you know much about your industry and that people can trust you."} css={{order: true}}/>
    </div>
  )
}

export default Wdesign
