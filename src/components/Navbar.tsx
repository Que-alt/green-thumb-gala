
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#mission' },
    { name: 'Programs', href: '#programs' },
    { name: 'Awards', href: '#awards' },
    { name: 'Get Involved', href: '#get-involved' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple px-4 md:px-8',
        isScrolled 
          ? 'py-3 glass-morphism backdrop-blur-xl bg-white/70' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-leaf-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0 -6 0" />
              <path d="M12 2v1" />
              <path d="M12 21v1" />
              <path d="M4.6 4.6l.7 .7" />
              <path d="M18.7 18.7l.7 .7" />
              <path d="M2 12h1" />
              <path d="M21 12h1" />
              <path d="M4.6 19.4l.7 -.7" />
              <path d="M18.7 5.3l.7 -.7" />
            </svg>
          </div>
          <span className="text-lg font-medium">GreenAward</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-leaf-500 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Donate Button */}
        <a 
          href="#get-involved"
          className="hidden md:block text-sm px-6 py-2.5 bg-leaf-500 text-white rounded-full
          hover:bg-leaf-600 transition-colors duration-200 shadow-sm"
        >
          Donate
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? 
            <X className="h-6 w-6 text-foreground/80" /> : 
            <Menu className="h-6 w-6 text-foreground/80" />
          }
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[60px] glass-morphism backdrop-blur-xl z-40 md:hidden flex flex-col justify-start pt-10 px-4 space-y-5 transition-all duration-300 ease-apple overflow-hidden",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"
        )}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground/80 hover:text-leaf-500 transition-colors duration-300 p-3 border-b border-gray-100/10"
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#get-involved"
          onClick={() => setMobileMenuOpen(false)}
          className="text-center text-base p-3 bg-leaf-500 text-white rounded-md hover:bg-leaf-600 transition-colors duration-200 mt-6 shadow-sm"
        >
          Donate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
