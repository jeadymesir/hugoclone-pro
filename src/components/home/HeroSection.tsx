import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[200px] -z-10" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Tagline - Hugo style */}
          <div className="hugo-tag mb-8 hugo-reveal">
            Strategic Technology Solutions
          </div>
          
          {/* Main headline - Hugo spaced style */}
          <h1 className="hugo-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-8 hugo-reveal hugo-reveal-delay-1">
            Built    to    make    you    better.
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 hugo-reveal hugo-reveal-delay-2">
            We're not traditional outsourcers. We build world-class IT solutions—from managed services to digital transformation—helping you scale faster and smarter.
          </p>
          
          {/* CTA Buttons - Hugo style */}
          <div className="flex flex-wrap gap-4 hugo-reveal hugo-reveal-delay-3">
            <Link to="/contact" className="hugo-cta text-lg">
              Build your Dream Team
              <ArrowRight className="w-5 h-5 hugo-arrow" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Hugo style */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};
