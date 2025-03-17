
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Award } from 'lucide-react';

const AboutHero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      className="pt-32 pb-20 bg-gradient-to-b from-leaf-50 to-white relative overflow-hidden"
      ref={ref}
    >
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn(
            "inline-flex items-center justify-center w-16 h-16 rounded-full bg-leaf-100 text-leaf-600 mb-8 transition-all duration-500 ease-apple",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <Award className="h-8 w-8" />
          </div>
          
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-medium mb-6 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            The Africa Champions of Tree Awards (ACT Awards)
          </h1>
          
          <p className={cn(
            "text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Recognizing Kenya's tree-growing heroes and driving real action toward a greener future
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-32 h-32 bg-leaf-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-leaf-200 rounded-full opacity-40 blur-3xl"></div>
    </section>
  );
};

export default AboutHero;
