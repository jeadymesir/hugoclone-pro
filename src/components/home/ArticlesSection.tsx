import { Award, Handshake, HeadsetIcon, Users, Heart } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const benefits = [
  {
    icon: Award,
    title: '30 Years of Proven ICT Expertise',
    description: 'Three decades of delivering reliable technology solutions across Suriname and beyond.',
  },
  {
    icon: Handshake,
    title: 'Strong International Brand Partnerships',
    description: 'Official partnerships with Microsoft, Cisco, Dell, Fortinet, and other global technology leaders.',
  },
  {
    icon: HeadsetIcon,
    title: '24/7/365 Dedicated Support',
    description: 'Round-the-clock support to keep your business running smoothly, every day of the year.',
  },
  {
    icon: Users,
    title: 'In-House Expertise Across All ICT Domains',
    description: 'A complete team of specialists covering networking, security, cloud, software, and more.',
  },
  {
    icon: Heart,
    title: 'Trusted by Over 6,000 Customers',
    description: 'Join thousands of satisfied businesses who rely on RPBG for their technology needs.',
  },
];

export const ArticlesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="hugo-tag mb-4 inline-block">Why RPBG</span>
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
            Partnering with RPBG means...
          </h2>
        </AnimatedSection>

        {/* Benefits Grid - 5 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="hugo-article-card group h-full">
                  {/* Card Top Accent */}
                  <div className="h-1 bg-primary" />
                  
                  <div className="p-6 text-center">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-heading font-semibold text-base text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
