
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#' },
    { name: 'What We Do', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphism shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-indigo-900">
              <span className="hidden sm:inline">InkWorthy Creations</span>
              <span className="sm:hidden">InkWorthy</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-indigo-900 hover:text-gold-500 transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-900 hover:text-gold-500 cursor-pointer transition-colors duration-200 hidden sm:block" />
            
            <Button 
              className="hidden md:inline-flex gold-gradient text-white hover:opacity-90 transition-opacity duration-200 font-medium px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base"
            >
              <span className="hidden lg:inline">Start My Free Strategy Session</span>
              <span className="lg:hidden">Free Session</span>
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-indigo-900 hover:text-gold-500 transition-colors duration-200 p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pt-4 pb-2 border-t border-indigo-900/10 mt-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-indigo-900 hover:text-gold-500 transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="w-full mt-4 gold-gradient text-white hover:opacity-90 transition-opacity duration-200 font-medium py-3 rounded-full text-sm sm:text-base"
            >
              Start My Free Strategy Session
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
