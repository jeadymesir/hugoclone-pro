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
            <h2 className="hugo-title text-4xl md:text-5xl lg:text-6xl font-bold">
              Your    success    is    our    mission
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
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                After nearly three decades of helping businesses transform, we know what holds companies back—and how to move them forward.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Partner with a team that understands your challenges and delivers solutions that actually work.
              </p>
              <Link to="/contact" className="hugo-cta inline-flex">
                Let's talk
                <ArrowRight className="w-5 h-5 hugo-arrow" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};