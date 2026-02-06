import { Award, Handshake, HeadsetIcon, Users, Heart } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const benefits = [
  {
    icon: Award,
    title: '30 Years of Proven ICT Expertise',
  },
  {
    icon: Handshake,
    title: 'Strong International Brand Partnerships',
  },
  {
    icon: HeadsetIcon,
    title: '24/7/365 Dedicated Support',
  },
  {
    icon: Users,
    title: 'In-House Expertise Across All ICT Domains',
  },
  {
    icon: Heart,
    title: 'Trusted by Over 6,000 Customers',
  },
];

export const ArticlesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
            What Sets RPBG Apart
          </h2>
        </AnimatedSection>

        {/* Benefits Grid - 3 on top, 2 centered below */}
        <div className="flex flex-col gap-6">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.slice(0, 3).map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="hugo-article-card group h-full">
                    <div className="h-1 bg-primary" />
                    <div className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="font-heading font-semibold text-base text-foreground">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          
          {/* Bottom row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto w-full">
            {benefits.slice(3).map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection key={index + 3} animation="fade-up" delay={(index + 3) * 100}>
                  <div className="hugo-article-card group h-full">
                    <div className="h-1 bg-primary" />
                    <div className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="font-heading font-semibold text-base text-foreground">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
