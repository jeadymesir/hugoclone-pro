import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
export const SuccessSection = () => {
  return <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-background" style={{
      clipPath: 'ellipse(80% 100% at 50% 0%)'
    }} />
      
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
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-12 hugo-subtitle">
              Your    Success
            </h2>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export const DeserveBetterSection = () => {
  return <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Title */}
          <AnimatedSection animation="fade-right">
            <div>
              <h2 className="hugo-subtitle text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
                You    deserve    better.
              </h2>
              <div className="w-24 h-1 bg-primary" />
            </div>
          </AnimatedSection>
          
          {/* Right - Content */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div />
          </AnimatedSection>
        </div>
      </div>
    </section>;
};