import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const reviews = [
  {
    title: 'Best IT Partner We\'ve Worked With',
    quote: 'With RPBG\'s assistance, we\'ve been able to 3X our operational efficiency with almost 100% system uptime. RPBG ensures everything is up to standards.',
    size: '1000+',
    role: 'Head of IT Operations',
    industry: 'Finance',
  },
  {
    title: 'RPBG: Consistently Delivering Excellence',
    quote: 'Thanks to RPBG, we\'ve modernized our entire infrastructure. The team\'s work helped reduce IT issues by 50% per month and response times to less than an hour.',
    size: '50-200',
    role: 'CTO',
    industry: 'Healthcare',
  },
  {
    title: 'A Partner with Exceptional Understanding',
    quote: 'RPBG has provided strategies and solutions to significantly improve our IT capabilities. Above all, we appreciate their flexibility and punctuality.',
    size: '200-500',
    role: 'IT Manager',
    industry: 'Manufacturing',
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                {/* Award badge placeholder */}
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Star className="w-10 h-10 text-primary fill-primary" />
                </div>
              </div>
              <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
                Validated    by    experts,    valued    by    customers
              </h2>
            </div>
            
            <div className="flex gap-4">
              <Link to="/about/testimonials" className="hugo-cta-outline text-sm">
                All Reviews
              </Link>
              <Link to="/contact" className="hugo-cta text-sm">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <div className="hugo-testimonial h-full">
                {/* Sound wave */}
                <div className="flex items-end gap-1 h-6 mb-6">
                  <div className="hugo-wave-bar" />
                  <div className="hugo-wave-bar" />
                  <div className="hugo-wave-bar" />
                  <div className="hugo-wave-bar" />
                  <div className="hugo-wave-bar" />
                </div>
                
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  {review.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {review.quote}
                </p>
                
                <div className="text-xs text-muted-foreground">
                  Company Size: {review.size}
                </div>
                
                <div className="border-t border-border mt-4 pt-4">
                  <p className="font-medium text-foreground text-sm">{review.role}</p>
                  <p className="text-xs text-muted-foreground">Industry: {review.industry}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
