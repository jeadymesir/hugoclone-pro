import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Scribble, FloatingElement, Sparkle, DecorativePlus, DecorativeDiamond } from '@/components/decorative/Scribbles';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[200px] -z-10" />
      
      {/* Floating decorative elements */}
      <FloatingElement className="top-32 right-20 hidden lg:block">
        <Scribble variant="spiral" color="accent" size="lg" />
      </FloatingElement>
      
      <FloatingElement className="top-1/3 right-1/4 hidden lg:block" style={{ animationDelay: '1s' }}>
        <Sparkle className="w-8 h-8" />
      </FloatingElement>
      
      <FloatingElement className="bottom-1/3 right-16 hidden lg:block" style={{ animationDelay: '2s' }}>
        <DecorativePlus className="w-10 h-10" />
      </FloatingElement>
      
      <FloatingElement className="top-1/2 left-10 hidden xl:block" style={{ animationDelay: '1.5s' }}>
        <DecorativeDiamond className="w-6 h-6" />
      </FloatingElement>
      
      <FloatingElement className="bottom-40 left-1/4 hidden lg:block" style={{ animationDelay: '0.5s' }}>
        <Scribble variant="star" color="muted" size="sm" />
      </FloatingElement>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Tagline - Hugo style */}
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-primary mb-4">
              Rosheuvel & Partners Business Group N.V.
            </h2>
            <p className="text-sm text-muted-foreground mb-6 tracking-wide uppercase">Strategic Technology Solutions</p>
          </AnimatedSection>
          
          {/* Main headline - Hugo spaced style */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="relative inline-block">
              <h1 className="hugo-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-8">
                Built    to    make    you    better.
              </h1>
            </div>
          </AnimatedSection>
          
          {/* Subtitle */}
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              We're not traditional outsourcers. We build world-class IT solutions—from managed services to digital transformation—helping you scale faster and smarter.
            </p>
          </AnimatedSection>
          
          {/* CTA Button */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#services" 
                className="hugo-cta text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discover our services
                <ArrowRight className="w-5 h-5 hugo-arrow" />
              </a>
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
