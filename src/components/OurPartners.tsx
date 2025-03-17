
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Handshake } from 'lucide-react';

const OurPartners: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      name: "Kenya Forest Service",
      logo: "/partners/kenya-forest-service.png"
    },
    {
      name: "Ministry of Environment",
      logo: "/partners/ministry-environment.png"
    },
    {
      name: "World Wildlife Fund",
      logo: "/partners/wwf-logo.png"
    },
    {
      name: "Green Belt Movement",
      logo: "/partners/green-belt-movement.png"
    },
    {
      name: "United Nations Environment Programme",
      logo: "/partners/unep-logo.png"
    },
    {
      name: "Nature Kenya",
      logo: "/partners/nature-kenya.png"
    }
  ];

  return (
    <section id="our-partners" className="section-padding bg-white" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-500 mb-6 transition-all duration-500 ease-apple",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <Handshake className="h-6 w-6" />
          </div>
          
          <h2 className={cn(
            "text-3xl sm:text-4xl font-medium mb-6 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Our Partners in Conservation
          </h2>
          
          <p className={cn(
            "text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Working together with leading organizations to make Kenya greener, one tree at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={cn(
                "flex items-center justify-center transition-all duration-700 ease-apple p-4",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ 
                transitionDelay: inView ? `${index * 100 + 200}ms` : '0ms',
              }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-24 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
