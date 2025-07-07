
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* SECTION 1: VALUE PROPOSITION */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-indigo-900 mb-4 sm:mb-6 leading-tight">
            Strategic Content That Makes Your Expertise
            <span className="text-gradient block mt-2">
              Impossible to Ignore.
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-indigo-900/80 font-inter font-light mb-4 sm:mb-6 leading-relaxed">
            You've mastered your craft. You deliver transformational results.
            Now let's make your words do the same.
          </p>

          <p className="text-base sm:text-lg text-indigo-900/70 font-inter max-w-2xl mx-auto">
            Premier ghostwriting and marketing content for thought leaders,
            consultants, and service-based experts—bringing your voice to life
            with every word.
          </p>
        </div>

        {/* SECTION 2: PROBLEM & AGITATION */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair font-semibold text-indigo-900 mb-3 sm:mb-4">
              Are Your Words Working as Hard as You Do?
            </h3>

            <p className="text-base sm:text-lg text-indigo-900/80 leading-relaxed font-inter">
              You've nailed your niche. But does your content reflect your
              expertise? Maybe your blog is stale, your newsletter inconsistent,
              or your About page flat. Even brilliant professionals fade into
              the background when their content doesn't connect.
            </p>

            <div className="space-y-3 pt-2 sm:pt-4">
              {[
                "Your expertise deserves better than generic content",
                "Time spent writing is time away from clients",
                "Inconsistent messaging dilutes your authority",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-indigo-900/70 font-inter text-sm sm:text-base">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-indigo-900/10 shadow-xl animate-float max-w-md mx-auto lg:max-w-none">
              <img
                src="/images/scnd.webp"
                alt="Content strategy that builds authority"
                className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: THE SOLUTION */}
        <div className="bg-gradient-to-r from-sand-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 lg:mb-20 border border-indigo-900/5">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold text-indigo-900 mb-4 sm:mb-6">
              Professional Ghostwriting that Elevates Authority + Generates
              Growth
            </h3>

            <p className="text-base sm:text-lg text-indigo-900/80 leading-relaxed font-inter mb-6 sm:mb-8 max-w-3xl mx-auto">
              We combine ghostwriting precision with strategic marketing
              insight—so your content attracts ideal clients, builds trust, and
              elevates your brand. Imagine handing off the words, while still
              sounding unmistakably like you. That's our specialty.
            </p>

            <Button
              size="lg"
              className="gold-gradient text-white hover:opacity-90 transition-opacity duration-200 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg group"
            >
              <span className="hidden sm:inline">Claim Your Free Strategy Session</span>
              <span className="sm:hidden">Free Strategy Session</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>

        {/* SECTION 4: TRANSFORMATION STORY */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair font-semibold text-indigo-900 mb-4 sm:mb-6">
              How One Wealth Manager Turned His Voice Into Revenue
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-900/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-indigo-900 font-semibold text-xs sm:text-sm">
                    1
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2 text-sm sm:text-base">
                    The Challenge
                  </h4>
                  <p className="text-indigo-900/70 font-inter text-sm sm:text-base">
                    A brilliant financial mind whose content was dry and
                    unengaging.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gold-600 font-semibold text-xs sm:text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2 text-sm sm:text-base">
                    The Process
                  </h4>
                  <p className="text-indigo-900/70 font-inter text-sm sm:text-base">
                    Collaborated on a content marketing plan + ghostwrote
                    long-form blogs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2 text-sm sm:text-base">
                    The Results
                  </h4>
                  <p className="text-indigo-900/70 font-inter text-sm sm:text-base">
                    Doubled referrals, increased visibility, and finally sounded
                    like the expert he was.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white border-none shadow-2xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl md:text-2xl font-playfair italic leading-relaxed mb-4 sm:mb-6">
                "My ghostwritten content made me sound like the real me—and my
                business took off."
              </blockquote>

              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-sm sm:text-base">Sarah M.</p>
                <p className="text-white/80 text-xs sm:text-sm">
                  Wealth Management Consultant
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
