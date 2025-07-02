import React from 'react'
import HeroSection from '../../CommonComponents/About/HeroSection';
import WhatWeOffer from '../../CommonComponents/About/WeOffer';
import CounterSection from '../../CommonComponents/About/Counter';
import QuoteSection from '../../CommonComponents/About/QuoteSection';
import TestimonialSection from '../../CommonComponents/About/Testimonials';
import WelcomeSection from '../../CommonComponents/About/WelcomeSection';



const Aboutpage = () => {
    return(
        <div>
            <HeroSection />
            <WhatWeOffer />
            <WelcomeSection />
            <CounterSection />
            <TestimonialSection/>
            <QuoteSection />
            
        </div>
    )
}
export default Aboutpage;
