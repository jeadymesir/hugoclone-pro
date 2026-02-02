import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const highlights = [
    '30 Years of experience',
    'International brand partnerships',
    '24/7/365 Support',
    'In-house expertise for all your ICT needs',
    'Helped over 6000 customers with their ICT needs',
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Tagline */}
          <p className="text-sm md:text-base tracking-widest uppercase opacity-90 mb-6 animate-fade-in">
            Strategic Business Solutions for Growth
          </p>
          
          {/* Main Headline - Hugo Style */}
          <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Empowering    Organizations    to    Succeed
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            As a trusted technology partner, RPBG delivers nearly three decades of expertise 
            and global brand partnerships to support businesses in scaling, optimizing, and innovating.
          </p>
          
          {/* Why Choose RPBG */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-heading font-semibold text-xl mb-6">Why Choose RPBG:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="btn-cta inline-flex items-center gap-2 text-lg">
              Contact us today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
