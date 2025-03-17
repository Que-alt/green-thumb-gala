
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import VideoHighlight from '@/components/VideoHighlight';
import MeetTheTeam from '@/components/MeetTheTeam';
import MeetTheBoard from '@/components/MeetTheBoard';
import OurPartners from '@/components/OurPartners';
import JoinMovement from '@/components/JoinMovement';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <WhatWeDo />
      <VideoHighlight />
      <div className="section-padding bg-leaf-50" ref={ref}>
        <div className="container">
          <div className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            <h2 className="text-3xl sm:text-4xl font-medium mb-6">🍃 Meet Our Team</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Get to know the people behind the ACT Awards who are dedicated to recognizing Kenya's tree champions
              and driving the nation toward its ambitious reforestation goals.
            </p>
          </div>
        </div>
      </div>
      <MeetTheTeam />
      <MeetTheBoard />
      <OurPartners />
      <JoinMovement />
      <Footer />
    </div>
  );
};

export default AboutUs;
