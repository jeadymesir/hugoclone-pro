import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Scribble, FloatingElement, Sparkle, DecorativeDiamond } from '@/components/decorative/Scribbles';

export const SuccessSection = () => {
  return (
    <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-background" style={{ clipPath: 'ellipse(80% 100% at 50% 0%)' }} />
      
      {/* Floating elements */}
      <FloatingElement className="top-40 right-20 hidden lg:block opacity-30">
        <Scribble variant="circle" color="accent" size="lg" className="stroke-primary-foreground/20" />
      </FloatingElement>
      
      <FloatingElement className="bottom-20 left-16 hidden lg:block opacity-40" style={{ animationDelay: '1s' }}>
        <Sparkle className="w-10 h-10 text-primary-foreground/30" />
      </FloatingElement>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            {/* Small text */}
            <p className="text-primary-foreground/70 uppercase tracking-widest text-sm mb-6">
              Your success is our mission
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scale" delay={100}>
            {/* Large title - Hugo style */}
            <div className="relative inline-block">
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-12 hugo-subtitle">
                Your    Success
              </h2>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48">
                <Scribble variant="wave" className="stroke-primary-foreground/30 w-full" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export const DeserveBetterSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Floating decorative elements */}
      <FloatingElement className="top-20 right-20 hidden lg:block" style={{ animationDelay: '0.5s' }}>
        <DecorativeDiamond className="w-8 h-8" />
      </FloatingElement>
      
      <FloatingElement className="bottom-32 right-1/3 hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <Scribble variant="star" color="muted" size="sm" />
      </FloatingElement>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Title */}
          <AnimatedSection animation="fade-right">
            <div className="relative">
              <h2 className="hugo-subtitle text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
                You    deserve    better.
              </h2>
              <div className="w-24 h-1 bg-primary" />
              {/* Scribble accent */}
              <div className="absolute -top-8 -left-8 hidden lg:block">
                <Scribble variant="circle" color="muted" size="lg" className="opacity-40" />
              </div>
            </div>
          </AnimatedSection>
          
          {/* Right - Content */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                You deserve better outcomes, insights, and conversations. You deserve to work with the best proactive teams that embrace complexity, adapt to ambiguity, and flex to your needs with just 24 hours notice.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Whether you're a growing startup or an established enterprise, with RPBG you get more than outsourcing – you get what you deserve.
              </p>
              <Link to="/contact" className="hugo-cta-outline">
                Take RPBG for a spin
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
