
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import MeetTheTeam from '@/components/MeetTheTeam';
import MeetTheBoard from '@/components/MeetTheBoard';
import VideoHighlight from '@/components/VideoHighlight';
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
      
      <MeetTheTeam />
      
      <MeetTheBoard />
      
      <section className="py-16 bg-white" ref={ref}>
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            JOIN THE MOVEMENT (How to Get Involved!)
          </h2>
          <div className="space-y-6 text-foreground/80 text-lg mb-10">
            <p>
              Nominate a tree champion, become a sponsor, or volunteer to support Kenya's mission for a 
              greener future. Learn more at [link].
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="px-5 py-3 bg-leaf-500 text-white rounded-md hover:bg-leaf-600 transition-colors duration-200 shadow-sm">
              Nominate a Tree Champion
            </a>
            <a href="#" className="px-5 py-3 bg-white border border-leaf-200 text-leaf-700 rounded-md hover:bg-leaf-50 transition-colors duration-200">
              Get Involved
            </a>
            <a href="#" className="px-5 py-3 bg-white border border-leaf-200 text-leaf-700 rounded-md hover:bg-leaf-50 transition-colors duration-200">
              Learn More about ACT Awards
            </a>
            <a href="#" className="px-5 py-3 bg-white border border-leaf-200 text-leaf-700 rounded-md hover:bg-leaf-50 transition-colors duration-200">
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
