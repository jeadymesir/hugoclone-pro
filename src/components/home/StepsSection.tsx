import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const steps = [
  {
    number: '1',
    title: 'Deep dive into your goals and team structure.',
    description: 'We take the time to understand your unique needs and goals. Our talent becomes an extension of your team, supporting your initiatives within your strategic direction, timelines and budgets.',
  },
  {
    number: '2',
    title: 'We design a customized solution for you.',
    description: 'Within 1 week, we\'ll design a customized solution tailored to your unique needs. This includes selecting the right approach, customizing implementation, and integrating with your existing processes.',
  },
  {
    number: '3',
    title: 'Review and assemble your dream team.',
    description: 'Let us handle the coordination so you can focus on your core business. We identify solutions that match your precise needs and refine until we land on just the right fit.',
  },
  {
    number: '4',
    title: 'We\'ll implement a dedicated program.',
    description: 'Our implementation and onboarding integrate with your processes while optimizing for scale. We develop programs tailored to complement your approach.',
  },
  {
    number: '5',
    title: 'Go Live & schedule check-ins!',
    description: 'Your dedicated solution is now fully operational. We will set up regular check-ins that work with your schedule, ensuring you have ongoing visibility into performance.',
  },
];

export const StepsSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header - Hugo style with arrow */}
        <AnimatedSection animation="fade-up">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
              Launch    in    5    easy    steps
            </h2>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
            We design, plan, and implement your solution in as little as 2 weeks. Once you go live, we continuously work to ensure you hit your goals.
          </p>
        </AnimatedSection>
        
        {/* Steps - Hugo style accordion look */}
        <div className="space-y-0 border-t border-border">
          {steps.map((step, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="border-b border-border py-8 group hover:bg-muted/30 transition-colors px-4 -mx-4">
                <div className="flex gap-8">
                  {/* Number */}
                  <div className="hugo-step-number">
                    {step.number}.
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-4">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-12">
            <Link to="/contact" className="hugo-cta">
              Book a Meeting
              <ArrowRight className="w-5 h-5 hugo-arrow" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
