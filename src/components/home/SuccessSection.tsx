import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const SuccessSection = () => {
  return (
    <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-background" style={{ clipPath: 'ellipse(80% 100% at 50% 0%)' }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small text */}
          <p className="text-primary-foreground/70 uppercase tracking-widest text-sm mb-6">
            Your success is our mission
          </p>
          
          {/* Large title - Hugo style */}
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-12 hugo-subtitle">
            Your    Success
          </h2>
        </div>
      </div>
    </section>
  );
};

export const DeserveBetterSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Title */}
          <div>
            <h2 className="hugo-subtitle text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              You    deserve    better.
            </h2>
            <div className="w-24 h-1 bg-primary" />
          </div>
          
          {/* Right - Content */}
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
        </div>
      </div>
    </section>
  );
};
