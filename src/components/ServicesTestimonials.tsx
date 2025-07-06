
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, BookOpen, Calendar, MessageSquare, PenTool } from 'lucide-react';

const ServicesTestimonials = () => {
  const services = [
    {
      title: "Blog & Newsletter Writing",
      description: "Keep your audience engaged, informed, and loyal.",
      icon: PenTool
    },
    {
      title: "Professional Book Ghostwriting", 
      description: "Bring your ideas to life in a voice that's unmistakably yours.",
      icon: BookOpen
    },
    {
      title: "Social Media & Web Copy",
      description: "Be everywhere your audience is—consistently and clearly.",
      icon: MessageSquare
    },
    {
      title: "Client Communications & Branding",
      description: "From client onboarding emails to polished pitches—we write it all.",
      icon: Calendar
    }
  ];

  const testimonials = [
    {
      quote: "You took my ideas and made them shine. My blog now reflects my brand perfectly—and saves me hours each week.",
      name: "Sherrie S.",
      title: "Interior Designer"
    },
    {
      quote: "You nailed my voice better than I could. My visibility skyrocketed after we launched the new strategy.",
      name: "Alex M.", 
      title: "Financial Advisor"
    },
    {
      quote: "I now sound like the expert I truly am—and leads are coming in consistently.",
      name: "Martin W.",
      title: "Wealth Manager"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sand-50">
      <div className="container mx-auto px-6">
        
        {/* SERVICES SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-indigo-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-indigo-900/80 font-inter max-w-2xl mx-auto">
            From strategic ghostwriting to powerful branding content—our words build legacies.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-900/10 to-gold-500/10 flex items-center justify-center group-hover:from-indigo-900/20 group-hover:to-gold-500/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-indigo-900 group-hover:text-gold-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-indigo-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-indigo-900/70 font-inter leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* TESTIMONIALS SECTION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-indigo-900 mb-4">
              Here's What Clients Say About InkWorthy Content
            </h2>
          </div>

          {/* Desktop: 3 Column Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <blockquote className="text-lg font-playfair italic text-indigo-900 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-indigo-900/10 pt-4">
                    <p className="font-semibold text-indigo-900 font-inter">{testimonial.name}</p>
                    <p className="text-indigo-900/70 text-sm font-inter">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden max-w-sm mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-white border-0 shadow-lg">
                      <CardContent className="p-6">
                        <blockquote className="text-lg font-playfair italic text-indigo-900 mb-6 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="border-t border-indigo-900/10 pt-4">
                          <p className="font-semibold text-indigo-900 font-inter">{testimonial.name}</p>
                          <p className="text-indigo-900/70 text-sm font-inter">{testimonial.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* FREE STRATEGY SESSION CTA */}
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-3xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-4">
              Not Sure Where to Start? Let's Talk.
            </h3>
            
            <p className="text-lg text-white/90 font-inter leading-relaxed mb-8">
              We offer a complimentary 30-minute strategy call to uncover your best content 
              opportunities and position your expertise powerfully.
            </p>
            
            <Button 
              size="lg"
              className="gold-gradient text-white hover:opacity-90 transition-opacity duration-200 font-medium px-8 py-4 rounded-full text-lg group"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Claim Your Free Session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonials;
