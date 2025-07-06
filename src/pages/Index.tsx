
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import ServicesTestimonials from '@/components/ServicesTestimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ValueProposition />
      <ServicesTestimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
