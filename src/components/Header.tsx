
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
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
              className="lg:hidden text-indigo-900 hover:text-gold-500 transition-colors duration-200 p-1 z-[110] relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed left-0 right-0 bg-white border-t border-indigo-900/10 shadow-lg z-[95]" style={{ top: '100%' }}>
          <nav className="container mx-auto px-4 sm:px-6 py-6">
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-2 text-indigo-900 hover:text-gold-500 hover:bg-gold-50 transition-all duration-200 font-medium text-base rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="pt-6 mt-6 border-t border-indigo-900/10">
              <Button 
                className="w-full gold-gradient text-white hover:opacity-90 transition-opacity duration-200 font-medium py-3 rounded-full text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start My Free Strategy Session
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[80] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
