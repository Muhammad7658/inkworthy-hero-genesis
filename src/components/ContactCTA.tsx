
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, Send, Star } from 'lucide-react';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-sand-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* URGENCY ELEMENT */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gold-50 text-indigo-900 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gold-600" />
            We're Nearly Booked for This Month
          </div>
          <p className="text-indigo-900/70 font-inter max-w-md mx-auto text-sm sm:text-base">
            We only work with <strong className="text-indigo-900">4–5 clients per month</strong> to ensure deep creative focus. 
            Spots fill up fast — secure yours today to get on the calendar.
          </p>
        </div>

        {/* MAIN CTA SECTION */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-indigo-900 mb-4 sm:mb-6">
              Let's Tell the Story Your Brand Deserves
            </h2>
            <p className="text-lg sm:text-xl text-indigo-900/80 font-inter leading-relaxed max-w-2xl mx-auto">
              We only take on a few projects at a time—so we can give each client our full attention.
              If you're ready for premium, personalized content that <em className="font-medium">actually works</em>, we'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            
            {/* CONTACT FORM */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 text-gold-600" />
                    Start the Conversation
                  </h3>
                  <p className="text-indigo-900/70 text-xs sm:text-sm font-inter">
                    Tell us about your goals and we'll craft a personalized strategy.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-indigo-900/20 focus:border-gold-500 focus:ring-gold-500/20 text-sm sm:text-base py-2 sm:py-3"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-indigo-900/20 focus:border-gold-500 focus:ring-gold-500/20 text-sm sm:text-base py-2 sm:py-3"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your content goals and challenges..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-indigo-900/20 focus:border-gold-500 focus:ring-gold-500/20 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full gold-gradient text-white hover:opacity-90 transition-opacity duration-200 font-medium py-3 sm:py-4 rounded-lg text-base sm:text-lg group"
                  >
                    Send My Message
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  
                  <p className="text-xs text-indigo-900/60 text-center font-inter">
                    No pressure. No spam. Just clarity.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* ALTERNATIVE CTA - STRATEGY CALL */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="border-2 border-gold-500/20 bg-gradient-to-br from-gold-50/50 to-white shadow-lg">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-gold-500/10 to-indigo-900/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-gold-600" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-indigo-900 mb-3 sm:mb-4">
                    Prefer to Talk First?
                  </h3>
                  
                  <p className="text-indigo-900/70 font-inter mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Book a complimentary 30-minute strategy call to explore your content opportunities and see if we're a perfect fit.
                  </p>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white transition-colors duration-200 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg group"
                  >
                    <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Book a Strategy Call</span>
                    <span className="sm:hidden">Strategy Call</span>
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>

              {/* TRUST SIGNALS */}
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-indigo-900/70 font-inter">
                  Trusted by 50+ thought leaders and service-based professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
