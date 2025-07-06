
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import ServicesTestimonials from '@/components/ServicesTestimonials';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ValueProposition />
      <ServicesTestimonials />
    </div>
  );
};

export default Index;
