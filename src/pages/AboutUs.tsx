
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
      
      <main className="pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-4">
          <section className="mb-16" ref={ref}>
            <h2 className={cn(
              "text-3xl font-bold mb-6 transition-all duration-700 ease-apple",
              inView ? "opacity-100" : "opacity-0 translate-y-4"
            )}>
              Who We Are
            </h2>
            <div className={cn(
              "space-y-6 text-foreground/80 text-lg transition-all duration-700 ease-apple",
              inView ? "opacity-100" : "opacity-0 translate-y-4"
            )}>
              <p>
                The Africa Champions of Tree Awards (ACT Awards) shine a spotlight on Kenya's tree-growing heroes—visionaries, 
                innovators, and communities working to restore the nation's forests.
              </p>
              <p>
                With Kenya's forest cover at 8.83% in 2021 and a bold target of 30% by 2032, these awards aim to 
                recognise tree growing trailblazers and drive real action toward reforestation, climate resilience, 
                and a greener future for all.
              </p>
              <p>
                The ACT Awards are operated by a dedicated Committee of Management from the Kenya Forest Service 
                along with a passionate execution team.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              What We Do
            </h2>
            <div className="space-y-6 text-foreground/80 text-lg">
              <p>
                A first-of-its-kind awards platform, the Africa Champions of Tree Awards (ACT Awards) recognize 
                individuals and groups driving Kenya's ambitious reforestation goals. As Kenya shoots for an 
                ambitious 15 Billion trees by 2032, these awards spotlight the trailblazers making it happen.
              </p>
              <p>
                Annual ceremonies will highlight Kenya's top tree champions, with nominations opening soon. 
                Key dates and judging criteria will be announced on the ACT Awards platform.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              JOIN THE MOVEMENT (How to Get Involved!)
            </h2>
            <div className="space-y-6 text-foreground/80 text-lg">
              <p>
                Nominate a tree champion, become a sponsor, or volunteer to support Kenya's mission for a 
                greener future. Learn more at [link].
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              What We Do
            </h2>
            <div className="space-y-6 text-foreground/80 text-lg">
              <p>
                Act today for a greener tomorrow
              </p>
              <p>
                From bold tree growers to forest-saving innovators, the ACT Awards celebrate the heroes 
                turning empty lands into lush forests.
              </p>
              <p>
                By honoring their groundbreaking efforts, we're not just handing out awards—we're planting 
                the seeds of inspiration, rallying more tree champions, and driving Kenya closer to its 
                canopy-covered dream.
              </p>
            </div>
          </section>

          <section className="mb-16">
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
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
