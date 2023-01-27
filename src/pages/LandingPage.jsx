import React from 'react'
import HeroSection from '../components/HeroSection'
import MidSection from '../components/MidSection'
import LocationSection from '../components/LocationSection'
import ReviewSection from '../components/ReviewSection'
import PlanSection from '../components/PlanSection'
import Footer from '../components/Footer'
import Notifications from '../components/Notifications'


export default function LandingPage() {
  return (
    <div >
     <HeroSection />
     <MidSection />
     <PlanSection />
     <LocationSection />
      {/* <ReviewSection />  */}
      <Notifications/>
     <Footer />

    </div>
  )
}
