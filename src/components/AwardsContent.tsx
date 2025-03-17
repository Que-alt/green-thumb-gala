
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Award, Trees, Leaf, User, Users, FileText, Video, Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import {
  Card,
  CardContent
} from '@/components/ui/card';

const AwardsContent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [backgroundRef, backgroundInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [impactRef, impactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [categoriesRef, categoriesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [nominationRef, nominationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('public/lovable-uploads/650ef888-17b2-4f94-b320-e51e7f17673b.png')" 
        }}
      >
        <div className="absolute inset-0 bg-leaf-900/70 backdrop-blur-sm"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Africa Tree Champion Awards
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Celebrating the champions who are growing a greener future for Africa
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-10">
              <Image className="h-8 w-8 text-leaf-500" />
              <h2 className="text-3xl font-bold text-gray-800">Award Moments</h2>
            </div>
            
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <img 
                          src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                          alt="Tree planting ceremony" 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <img 
                          src="https://images.unsplash.com/photo-1615796153287-98f3dfb15678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                          alt="Award winners" 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <img 
                          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                          alt="Beautiful forest" 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-lg shadow-sm h-64">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Community tree planting" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-sm h-64">
                <img 
                  src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Forest canopy" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-sm h-64 md:col-span-2 lg:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Tree seedlings" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-10">
              <Video className="h-8 w-8 text-leaf-500" />
              <h2 className="text-3xl font-bold text-gray-800">Featured Videos</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/MN0P-jJp3Hg" 
                  title="The Importance of Trees" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/aICaAEXDJQQ" 
                  title="AFR100: Growing Africa's Prosperity" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Award Highlights</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/OVQchUdpzrw" 
                  title="Kenya's Reforestation Initiative" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-4 text-gray-700">
                Watch our documentary featuring previous award winners and their incredible journeys to restore Africa's forests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef} 
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={cn(
              "flex items-center space-x-4 mb-6 transition-all duration-700",
              storyInView ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              <Award className="h-8 w-8 text-leaf-500" />
              <h2 className="text-3xl font-bold text-gray-800">About the ACT Awards</h2>
            </div>
            
            <div className={cn(
              "mb-12 transition-all duration-700 delay-100",
              storyInView ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The ACT Awards are more than just trophies and titles—we are a movement. The first of their kind in the continent. Born from a dynamic partnership between BlueFocus Africa and the Kenya Forest Service (KFS), the awards are fueled by a shared vision of a greener, more sustainable Kenya. BlueFocus Africa, a leading strategic communication and event management firm, is known for crafting impactful brand experiences and igniting conversations that drive real change.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Together with KFS, we aim to accelerate forest restoration, celebrate tree-growing champions, and inspire communities to join the journey toward achieving Kenya's ambitious 30% tree cover goal by 2032.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Through the AFR100 initiative, Kenya has pledged to restore 5.1 million hectares of degraded land by 2030, and we're here to champion those leading the way through the ACT Awards. Our collaboration amplifies the impact of the 15 Billion Tree Growing Initiative, blending innovation, community spirit, and strategic action to nurture both forests and futures.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                AFR100 is a big, bold plan to bring 100 million hectares of African land back to life by 2030! 34 countries, including Kenya, are already on board.
              </p>
              <p className="text-gray-700 font-medium">
                As part of the green warriors, we are here to spotlight stories, ignite inspiration, and plant the seeds for a greener tomorrow. Join us, and let's inspire greatness together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section 
        ref={backgroundRef} 
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={cn(
              "flex items-center space-x-4 mb-6 transition-all duration-700",
              backgroundInView ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              <Trees className="h-8 w-8 text-leaf-500" />
              <h2 className="text-3xl font-bold text-gray-800">Background: Kenya's Green Promise</h2>
            </div>
            
            <div className={cn(
              "mb-6 transition-all duration-700 delay-100",
              backgroundInView ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Growing Roots for a Greener Tomorrow</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Kenya is on a mission to turn barren landscapes into thriving forests. As part of the <span className="font-semibold">AFR100 Initiative</span>, the country has pledged to restore a whopping 5.1 million hectares of degraded forests by 2030. And with the bold <span className="font-semibold">15 Billion Tree Planting Strategy</span>, Kenya aims to boost its tree cover to 17.87% by 2032—that's a lot of leaves!
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This is where the Africa Tree Champion Awards (ACT Awards) come in. These awards aren't just shiny trophies; they're a powerful and a much needed nudge to keep the momentum going.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By celebrating tree-growing trailblazers and conservation champions, the ACT Awards help transform ambitious commitments into real, rooted results. It's all about inspiring action, recognizing impact, and proving that when it comes to restoring our planet, every tree—and every champion—counts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section 
        ref={impactRef} 
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={cn(
              "flex items-center space-x-4 mb-6 transition-all duration-700",
              impactInView ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              <Leaf className="h-8 w-8 text-leaf-500" />
              <h2 className="text-3xl font-bold text-gray-800">Impact of the Awards</h2>
            </div>
            
            <div className={cn(
              "mb-6 transition-all duration-700 delay-100",
              impactInView ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tree-llionaires Deserve the Spotlight!</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Let's face it—trees are basically the unsung heroes of our planet. They clean our air, cool our world, and provide homes for critters of all shapes and sizes. But behind most thriving trees is a human or group with muddy boots, green thumbs, and a big heart. The Africa Tree Champion Awards (ACT Awards) are here to celebrate these leafy legends—the innovators, tree growers, forest protectors, and earth-loving warriors who are literally saving the planet one sapling at a time.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                These champions aren't just planting trees—they're pioneering new ways to restore forests, combat climate change, and create greener communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By honoring their creativity and commitment, we're inspiring a movement, sowing seeds of hope, showing the world that innovation and nature go hand-in-hand. So, let's give these champions the standing ovation they deserve—because when they grow trees, they grow futures!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Categories Section */}
      <section 
        ref={categoriesRef} 
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={cn(
              "flex items-center space-x-4 mb-10 transition-all duration-700",
              categoriesInView ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              <Award className="h-8 w-8 text-leaf-500" />
              <h2 className="text-3xl font-bold text-gray-800">Award Categories</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className={cn(
                "bg-white rounded-lg shadow-sm p-6 transition-all duration-700",
                categoriesInView ? "opacity-100" : "opacity-0 translate-y-8"
              )} style={{ transitionDelay: '100ms' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <User className="h-6 w-6 text-leaf-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Most Trees Grown</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Awarded to the individual who has grown the most trees during the campaign.
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
                  <li>High rainfall area</li>
                  <li>Medium rainfall area</li>
                  <li>Low rainfall area</li>
                </ul>
              </div>
              
              <div className={cn(
                "bg-white rounded-lg shadow-sm p-6 transition-all duration-700",
                categoriesInView ? "opacity-100" : "opacity-0 translate-y-8"
              )} style={{ transitionDelay: '200ms' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <Leaf className="h-6 w-6 text-leaf-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Most Innovative Tree Growing Method</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Recognizes individuals who develop or implement unique and effective tree growing techniques.
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
                  <li>ASAL Technologies</li>
                  <li>Water conservation during droughts</li>
                  <li>Simplicity & Replicability</li>
                  <li>Originality of the idea</li>
                </ul>
              </div>
              
              <div className={cn(
                "bg-white rounded-lg shadow-sm p-6 transition-all duration-700",
                categoriesInView ? "opacity-100" : "opacity-0 translate-y-8"
              )} style={{ transitionDelay: '300ms' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <User className="h-6 w-6 text-leaf-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Young Tree Champion</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  For individuals under a certain age who have made significant contributions to the campaign.
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
                  <li>Under 18 years</li>
                  <li>High School and below</li>
                  <li>Impact of action</li>
                  <li>Community mobilization</li>
                  <li>Creative communication (music, poems, etc.)</li>
                </ul>
              </div>
              
              <div className={cn(
                "bg-white rounded-lg shadow-sm p-6 transition-all duration-700",
                categoriesInView ? "opacity-100" : "opacity-0 translate-y-8"
              )} style={{ transitionDelay: '400ms' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-6 w-6 text-leaf-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Community Tree Champion</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Awarded to an individual who has motivated and led their community in tree growing efforts.
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
                  <li>For individuals above 18 years</li>
                  <li>Special focus on individuals with special needs</li>
                  <li>Regional representation considerations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nomination Section */}
      <section 
        ref={nominationRef} 
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={cn(
              "flex items-center space-x-4 mb-10 transition-all duration-700",
              nominationInView ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              <FileText className="h-8 w-8 text-leaf-500" />
              <h2 className="text-3xl font-bold text-gray-800">Nomination Forms</h2>
            </div>
            
            <div className={cn(
              "mb-10 transition-all duration-700 delay-100",
              nominationInView ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Easy-to-navigate forms with clear instructions and tips on submitting a strong nomination.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={cn(
                "bg-gray-50 rounded-lg p-6 border border-gray-100 transition-all duration-700",
                nominationInView ? "opacity-100" : "opacity-0 translate-y-8"
              )} style={{ transitionDelay: '200ms' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Nomination Process</h3>
                <ul className="list-disc list-inside text-gray-700 ml-2 space-y-2 mb-6">
                  <li>Identify your champion</li>
                  <li>Choose the appropriate category</li>
                  <li>Fill out the nomination form completely</li>
                  <li>Provide supporting documents</li>
                  <li>Submit before the deadline</li>
                </ul>
                <Link to="/nomination" className="inline-block px-5 py-3 bg-leaf-500 text-white rounded-md hover:bg-leaf-600 transition-colors duration-200">
                  Nominate a Champion
                </Link>
              </div>
              
              <div className={cn(
                "bg-gray-50 rounded-lg p-6 border border-gray-100 transition-all duration-700",
                nominationInView ? "opacity-100" : "opacity-0 translate-y-8"
              )} style={{ transitionDelay: '300ms' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Judging Criteria</h3>
                <ul className="list-disc list-inside text-gray-700 ml-2 space-y-2 mb-6">
                  <li><strong>Innovation:</strong> Unique approaches to tree growing</li>
                  <li><strong>Impact:</strong> Number of trees grown and survival rate</li>
                  <li><strong>Community Involvement:</strong> How others were engaged</li>
                  <li><strong>Sustainability:</strong> Long-term viability of the project</li>
                  <li><strong>Scalability:</strong> Potential for broader application</li>
                </ul>
                <a href="#" className="inline-block px-5 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200">
                  View Full Criteria
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-leaf-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of Africa's green revolution. Nominate a champion, become a sponsor, or volunteer today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved" className="px-6 py-3 bg-white text-leaf-600 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium">
              Get Involved
            </Link>
            <Link to="/donate" className="px-6 py-3 bg-leaf-600 text-white rounded-md hover:bg-leaf-700 transition-colors duration-200 font-medium">
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsContent;
