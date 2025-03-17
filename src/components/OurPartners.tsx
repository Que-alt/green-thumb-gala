
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Handshake } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const OurPartners: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    { name: "Kenya Forest Service", logo: "/partners/kfs-logo.svg" },
    { name: "Green Belt Movement", logo: "/partners/green-belt-logo.svg" },
    { name: "UNEP", logo: "/partners/unep-logo.svg" },
    { name: "World Wildlife Fund", logo: "/partners/wwf-logo.svg" },
    { name: "Kenya Wildlife Service", logo: "/partners/kws-logo.svg" },
    { name: "The Nature Conservancy", logo: "/partners/tnc-logo.svg" },
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
            We collaborate with leading organizations to advance Kenya's reforestation goals
            and recognize outstanding contributions to our green future.
          </p>
        </div>
        
        <div className={cn(
          "transition-all duration-1000 delay-300 ease-apple",
          inView ? "opacity-100" : "opacity-0"
        )}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-4 h-full">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-full flex flex-col items-center justify-center hover:shadow-md transition-all duration-300">
                      <div className="w-full h-24 relative mb-4">
                        <AspectRatio ratio={3/2} className="bg-gray-50 rounded-md overflow-hidden">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`} 
                            className="object-contain w-full h-full p-2"
                          />
                        </AspectRatio>
                      </div>
                      <p className="text-center text-sm font-medium">{partner.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
