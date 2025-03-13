
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Leaf, Globe, HandHeart } from 'lucide-react';

const Mission: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-leaf-500" />,
      title: "Reforestation",
      description: "We plant trees in ecosystems that need it most, focusing on biodiversity and community involvement."
    },
    {
      icon: <Globe className="h-10 w-10 text-leaf-500" />,
      title: "Global Impact",
      description: "Our projects span across continents, restoring forests and helping communities worldwide."
    },
    {
      icon: <HandHeart className="h-10 w-10 text-leaf-500" />,
      title: "Recognition",
      description: "We celebrate environmental leaders through our prestigious awards program."
    },
  ];

  return (
    <section id="mission" className="section-padding bg-white" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-medium mb-6 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Our Mission
          </h2>
          
          <p className={cn(
            "text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            GreenAward is dedicated to combating deforestation and climate change through tree planting initiatives 
            and recognizing environmental champions who protect our planet's precious resources.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-8 rounded-2xl transition-all duration-700 ease-apple",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                inView ? `delay-[${index * 100 + 200}ms]` : "delay-0"
              )}
              style={{ 
                transitionDelay: inView ? `${index * 100 + 200}ms` : '0ms',
              }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
