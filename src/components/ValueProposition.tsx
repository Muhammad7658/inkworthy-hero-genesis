
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* SECTION 1: VALUE PROPOSITION */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-indigo-900 mb-6 leading-tight">
            Strategic Content That Makes Your Expertise 
            <span className="text-gradient block mt-2">Impossible to Ignore.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-indigo-900/80 font-inter font-light mb-6 leading-relaxed">
            You've mastered your craft. You deliver transformational results. 
            Now let's make your words do the same.
          </p>
          
          <p className="text-lg text-indigo-900/70 font-inter max-w-2xl mx-auto">
            Premier ghostwriting and marketing content for thought leaders, consultants, 
            and service-based experts—bringing your voice to life with every word.
          </p>
        </div>

        {/* SECTION 2: PROBLEM & AGITATION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-indigo-900 mb-4">
              Are Your Words Working as Hard as You Do?
            </h3>
            
            <p className="text-lg text-indigo-900/80 leading-relaxed font-inter">
              You've nailed your niche. But does your content reflect your expertise? 
              Maybe your blog is stale, your newsletter inconsistent, or your About page flat. 
              Even brilliant professionals fade into the background when their content doesn't connect.
            </p>
            
            <div className="space-y-3 pt-4">
              {[
                "Your expertise deserves better than generic content",
                "Time spent writing is time away from clients", 
                "Inconsistent messaging dilutes your authority"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold-500 mt-3 flex-shrink-0"></div>
                  <p className="text-indigo-900/70 font-inter">{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-sand-50 to-sand-100 rounded-2xl p-8 border border-indigo-900/10 shadow-lg">
              <div className="h-full flex flex-col justify-center items-center text-center space-y-4">
                <div className="w-16 h-16 bg-indigo-900/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-indigo-900/60" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-indigo-900/20 rounded w-3/4 mx-auto"></div>
                  <div className="h-3 bg-indigo-900/20 rounded w-1/2 mx-auto"></div>
                  <div className="h-3 bg-gold-500/30 rounded w-2/3 mx-auto"></div>
                </div>
                <p className="text-sm text-indigo-900/60 font-inter">
                  Your expertise waiting to shine
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: THE SOLUTION */}
        <div className="bg-gradient-to-r from-sand-50 to-white rounded-3xl p-8 md:p-12 mb-20 border border-indigo-900/5">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-playfair font-semibold text-indigo-900 mb-6">
              Professional Ghostwriting that Elevates Authority + Generates Growth
            </h3>
            
            <p className="text-lg text-indigo-900/80 leading-relaxed font-inter mb-8 max-w-3xl mx-auto">
              We combine ghostwriting precision with strategic marketing insight—so your content 
              attracts ideal clients, builds trust, and elevates your brand. Imagine handing off 
              the words, while still sounding unmistakably like you. That's our specialty.
            </p>
            
            <Button 
              size="lg"
              className="gold-gradient text-white hover:opacity-90 transition-opacity duration-200 font-medium px-8 py-4 rounded-full text-lg group"
            >
              Claim Your Free Strategy Session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>

        {/* SECTION 4: TRANSFORMATION STORY */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-indigo-900 mb-6">
              How One Wealth Manager Turned His Voice Into Revenue
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-900/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-indigo-900 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">The Challenge</h4>
                  <p className="text-indigo-900/70 font-inter">
                    A brilliant financial mind whose content was dry and unengaging.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gold-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">The Process</h4>
                  <p className="text-indigo-900/70 font-inter">
                    Collaborated on a content marketing plan + ghostwrote long-form blogs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">The Results</h4>
                  <p className="text-indigo-900/70 font-inter">
                    Doubled referrals, increased visibility, and finally sounded like the expert he was.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white border-none shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-playfair italic leading-relaxed mb-6">
                "My ghostwritten content made me sound like the real me—and my business took off."
              </blockquote>
              
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold">Sarah M.</p>
                <p className="text-white/80 text-sm">Wealth Management Consultant</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
