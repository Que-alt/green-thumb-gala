
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import AnimatedCounter from './common/AnimatedCounter';

const Impact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { value: 2500000, label: "Trees Planted", suffix: "+" },
    { value: 45, label: "Countries", suffix: "" },
    { value: 78000, label: "Volunteers", suffix: "+" },
    { value: 250, label: "Award Recipients", suffix: "" }
  ];

  return (
    <section className="py-20 bg-leaf-50 overflow-hidden" ref={ref}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-medium mb-4 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Our Impact
          </h2>
          
          <p className={cn(
            "text-lg text-foreground/80 transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Together with our partners and volunteers, we've made significant progress
            toward a greener world. But there's still much more to do.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "text-center transition-all duration-700 ease-apple",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ 
                transitionDelay: inView ? `${index * 100 + 200}ms` : '0ms',
              }}
            >
              <div className="text-4xl sm:text-5xl font-medium text-leaf-900 mb-2">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  duration={2000}
                />
              </div>
              <p className="text-foreground/70 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
