import React from 'react'
import SrBanner from '../Components/SrBanner'
import dBanner from "../assets/ppc.jpg"
import MFocusFace from '../Components/MFocusFace'
import MFdata from '../Data/MFdata'
import ServiceDetails from '../Components/ServiceDetails'
import W1 from "../assets/dFacebook/w1.jpg"
import W2 from "../assets/dFacebook/w2.jpg"
import FMStemp from '../Components/FMStemp'
import AddPage from '../Components/AddPage'
import BFAMsec from '../Components/BFAMsec'
import Getstart from '../Components/Getstart'
import TargetPeo from '../Components/TargetPeo'


const Dfacebook = () => {
  return (
    <div>
      <SrBanner bg={dBanner} d1={'Facebook Advertising Agency'} d2={'Reach your customers and their friends with Facebook advertising'} d3={'Tap into lucrative Facebook marketing strategies that help you get more leads for cheaper.'} f1={'Grow Your Brand'} f2={'with Facebook Advertising'} />
      {/* main focus area  */}
      <MFocusFace data={MFdata}/>
      {/* service details  */}
      <ServiceDetails Image={W1} name1={"Get more results by showing ads to your most valuable prospective customers"} name2={'Facebook audience targeting is unmatched. Our specialists can help you expertly navigate FB Ads platform, while effectively managing both reach and engagement.'} css={{order: false}} />
      <ServiceDetails Image={W2} name1={"Boost your business with performance-driven Facebook Ads campaigns"} name2={'Reach and engage your ideal customer with Facebook Ads campaigns. We utilize the full range of what Facebook Ads has to offer: Facebook pixel tracking, Carousel Ads, Behavior & Interest Targeting, Demographic Targeting, Custom Audiences, Video Ads, and more.'} css={{order: true}} />
      {/* fms  */}
      <FMStemp/>
      <AddPage/>
      <BFAMsec/>
      <TargetPeo/>
      <Getstart/>
    </div>
  )
}

export default Dfacebook
