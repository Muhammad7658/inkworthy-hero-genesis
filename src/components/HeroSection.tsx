
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  const trustLogos = [
    "Wellness Pro", "Capital Advisors", "Executive Coach", "Brand Studio", "Consulting Co"
  ];

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-indigo-900 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
                <span className="text-gradient">Where Words</span>
                <br />
                <span className="text-indigo-900">Build Legacies.</span>
              </h1>
              
              {/* Subheading */}
              <p className="text-xl md:text-2xl text-indigo-900/80 font-inter font-light leading-relaxed max-w-2xl">
                Premier ghostwriting and content marketing services for thought leaders, consultants, 
                and service-based brands ready to be unforgettable.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="gold-gradient text-white hover:opacity-90 transition-opacity duration-200 font-medium px-8 py-4 rounded-full text-lg group"
              >
                Claim Your Free Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="ghost"
                size="lg"
                className="text-indigo-900 hover:text-gold-500 font-medium px-8 py-4 text-lg border-2 border-indigo-900/20 hover:border-gold-500/50 rounded-full transition-all duration-200"
              >
                See Our Work
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <div className="text-indigo-900/70 font-medium">
                Rated 5.0 by 200+ clients
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl animate-float">
              {/* Typewriter illustration placeholder */}
              <div className="aspect-square bg-gradient-to-br from-indigo-900/10 to-gold-500/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-indigo-900/20 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-gold-500/30 rounded-lg"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-indigo-900/20 rounded w-3/4 mx-auto"></div>
                    <div className="h-2 bg-indigo-900/20 rounded w-1/2 mx-auto"></div>
                    <div className="h-2 bg-gold-500/30 rounded w-2/3 mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gold-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-indigo-900 rounded-full opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 pt-8 border-t border-indigo-900/10">
          <p className="text-center text-indigo-900/60 font-medium mb-6">
            Trusted by consultants, financial experts, wellness brands & professional service providers
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustLogos.map((logo, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/50 rounded-lg border border-indigo-900/10 text-indigo-900 font-medium text-sm hover:opacity-80 transition-opacity duration-200"
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
