
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  const trustLogos = [
    "Wellness Pro", "Capital Advisors", "Executive Coach", "Brand Studio", "Consulting Co"
  ];

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-indigo-900 blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gold-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold leading-tight">
                <span className="text-gradient">Where Words</span>
                <br />
                <span className="text-indigo-900">Build Legacies.</span>
              </h1>
              
              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-indigo-900/80 font-inter font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Premier ghostwriting and content marketing services for thought leaders, consultants, 
                and service-based brands ready to be unforgettable.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="gold-gradient text-white hover:opacity-90 transition-opacity duration-200 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg group"
              >
                <span className="hidden sm:inline">Claim Your Free Strategy Session</span>
                <span className="sm:hidden">Free Strategy Session</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="ghost"
                size="lg"
                className="text-indigo-900 hover:text-gold-500 font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-indigo-900/20 hover:border-gold-500/50 rounded-full transition-all duration-200"
              >
                See Our Work
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <div className="text-indigo-900/70 font-medium text-sm sm:text-base">
                Rated 5.0 by 200+ clients
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-white/20 shadow-2xl animate-float max-w-md sm:max-w-lg mx-auto lg:max-w-none">
              <img
                src="/images/hero.jpeg"
                alt="Premium ghostwriting for thought leaders"
                className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
              />
              {/* Floating elements */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gold-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-indigo-900 rounded-full opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-indigo-900/10">
          <p className="text-center text-indigo-900/60 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
            Trusted by consultants, financial experts, wellness brands & professional service providers
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-8 opacity-60">
            {trustLogos.map((logo, index) => (
              <div
                key={index}
                className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-white/50 rounded-lg border border-indigo-900/10 text-indigo-900 font-medium text-xs sm:text-sm hover:opacity-80 transition-opacity duration-200"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
