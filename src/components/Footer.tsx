
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Sitemap', href: '#sitemap' }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-sand-100 border-t border-indigo-900/10">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* MAIN FOOTER CONTENT */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          
          {/* BRAND COLUMN */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-indigo-900 mb-2">
                InkWorthy Creations
              </h3>
              <p className="text-indigo-900/70 font-inter italic text-sm leading-relaxed">
                Content that makes your expertise unforgettable.
              </p>
            </div>
            
            <div className="space-y-3">
              <a 
                href="mailto:hello@inkworthycreations.com" 
                className="flex items-center gap-2 text-indigo-900/70 hover:text-indigo-900 transition-colors duration-200 text-sm font-inter"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">hello@inkworthycreations.com</span>
              </a>
            </div>
          </div>

          {/* NAVIGATION COLUMN */}
          <div>
            <h4 className="text-base sm:text-lg font-playfair font-semibold text-indigo-900 mb-3 sm:mb-4">
              Navigation
            </h4>
            <nav className="space-y-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-indigo-900/70 hover:text-indigo-900 transition-colors duration-200 text-sm font-inter"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* LEGAL COLUMN */}
          <div>
            <h4 className="text-base sm:text-lg font-playfair font-semibold text-indigo-900 mb-3 sm:mb-4">
              Trust & Legal
            </h4>
            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-indigo-900/70 hover:text-indigo-900 transition-colors duration-200 text-sm font-inter"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* SOCIAL & CONTACT COLUMN */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-playfair font-semibold text-indigo-900 mb-3 sm:mb-4">
              Connect With Us
            </h4>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-900/5 hover:bg-indigo-900/10 flex items-center justify-center text-indigo-900 hover:text-gold-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-900/5 hover:bg-indigo-900/10 flex items-center justify-center text-indigo-900 hover:text-gold-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              
              <div className="pt-2">
                <p className="text-xs text-indigo-900/60 font-inter leading-relaxed">
                  Follow us for content marketing insights, writing tips, and behind-the-scenes glimpses of our creative process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEPARATOR */}
        <Separator className="bg-indigo-900/10 mb-6 sm:mb-8" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="text-sm text-indigo-900/60 font-inter">
            © {currentYear} InkWorthy Creations. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-xs text-indigo-900/50 font-inter">
            <span>Crafted with care for thought leaders worldwide</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
