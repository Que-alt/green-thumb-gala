import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Handshake, Globe, Shield, Building, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const OurPartners: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Main featured partners with detailed descriptions
  const mainPartners = [
    {
      name: "Kenya Forest Service (KFS)",
      logo: "/partners/kenya-forest-service.png",
      description: "KFS is the guardian of Kenya's forests, tasked with protecting, managing, and restoring them under the Forest Conservation and Management Act of 2016. From enforcing forest laws to running the Kenya Forestry College, KFS plays a crucial role in safeguarding Kenya's green spaces.\n\nBy implementing conservation plans in key forests like Arabuko-Sokoke, Mau, and Karura, KFS is driving Kenya's commitment to the AFR100 initiative, which aims to restore 100 million hectares of degraded land across Africa by 2030. With a bold target of 30% tree cover by 2032, KFS is at the forefront of reforestation, biodiversity conservation, and climate resilience—ensuring a greener, healthier future for generations to come."
    },
    {
      name: "BlueFocus",
      logo: "/partners/ministry-environment.png",
      description: "BlueFocus Africa is a strategic communication and event management firm based in Nairobi, Kenya. Led by Managing Director Philip Wahome, the company specializes in media strategy, planning, and corporate reputation advisory services.\n\nWhile BlueFocus Africa's core services center on communication and event management, the firm has demonstrated a commitment to environmental sustainability through its involvement in initiatives like the ACT Awards. This collaboration highlights the company's dedication to promoting environmental conservation and supporting Kenya's green agenda.\n\nBy leveraging its expertise in strategic communication, BlueFocus Africa plays a pivotal role in amplifying environmental initiatives, fostering community engagement, and advancing sustainable development goals in the region."
    },
    {
      name: "The Kenyan Government",
      logo: "/partners/green-belt-movement.png",
      description: "The government of Kenya is a committed signatory to the AFR100 initiative, a pan-African effort to restore 100 million hectares of degraded land by 2030. By ratifying AFR100, the Kenyan government has pledged to restore 5.1 million hectares, aligning with national programs like the 15 Billion Tree Campaign and the 30% tree cover target by 2032. This commitment reinforces Kenya's leadership in climate action, sustainable land management, and biodiversity conservation."
    }
  ];

  // Other partners with logos only
  const otherPartners = [
    {
      name: "United Nations Environment Programme",
      logo: "/partners/unep-logo.png"
    },
    {
      name: "Food and Agriculture Organization",
      logo: "/partners/nature-kenya.png"
    },
    {
      name: "World Wildlife Fund",
      logo: "/partners/wwf-logo.png"
    }
  ];

  return (
    <section id="our-partners" className="section-padding bg-white py-20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
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
            Partners & Sponsors
          </h2>
          
          <p className={cn(
            "text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Working together with leading organizations to make Kenya greener, one tree at a time.
          </p>
        </div>
        
        {/* Main featured partners with detailed descriptions */}
        <div className="space-y-16 mb-20">
          {mainPartners.map((partner, index) => (
            <div 
              key={index}
              className={cn(
                "transition-all duration-700 ease-apple",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ 
                transitionDelay: inView ? `${index * 150}ms` : '0ms',
              }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-40 h-40 flex items-center justify-center bg-gray-50 rounded-lg p-4 overflow-hidden">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-32 max-w-full object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-medium mb-4">{partner.name}</h3>
                  <div className="prose prose-slate max-w-none">
                    {partner.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-foreground/80 mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
              {index < mainPartners.length - 1 && (
                <Separator className="mt-12" />
              )}
            </div>
          ))}
        </div>
        
        {/* Other partners section */}
        <div className="mb-16">
          <h3 className={cn(
            "text-2xl font-medium mb-10 text-center transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Other Partners
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
            {otherPartners.map((partner, index) => (
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
                <div className="flex flex-col items-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-24 max-w-full object-contain transition-all duration-300"
                  />
                  <span className="mt-3 text-center text-sm font-medium">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Become a partner CTA */}
        <div className={cn(
          "bg-leaf-50 p-8 rounded-lg text-center transition-all duration-700 ease-apple max-w-3xl mx-auto",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ 
          transitionDelay: inView ? `600ms` : '0ms',
        }}>
          <h3 className="text-xl font-medium mb-3">Become a Partner</h3>
          <p className="mb-6 text-foreground/80">Join our mission to restore Kenya's forests and combat climate change.</p>
          <Button className="bg-leaf-600 hover:bg-leaf-700">
            Become a Partner
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
