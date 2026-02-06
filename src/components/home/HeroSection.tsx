import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[200px] -z-10" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Tagline - Hugo style */}
          <AnimatedSection animation="fade-up">
            <div className="hugo-tag mb-8">
              Strategic Technology Solutions
            </div>
          </AnimatedSection>
          
          {/* Main headline - Hugo spaced style */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="hugo-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-8">
              Built    to    make    you    better.
            </h1>
          </AnimatedSection>
          
          {/* Subtitle */}
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              We're not traditional outsourcers. We build world-class IT solutions—from managed services to digital transformation—helping you scale faster and smarter.
            </p>
          </AnimatedSection>
          
          {/* CTA Buttons - Hugo style */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="hugo-cta text-lg">
                Build your Dream Team
                <ArrowRight className="w-5 h-5 hugo-arrow" />
              </Link>
            </div>
          </AnimatedSection>
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
