import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
const testimonials = [{
  logo: 'Enterprise Co.',
  quote: "We're constantly trying to bring the best the market has to offer to support our global business operations. In RPBG, we found an incredible partner.",
  author: 'Director',
  title: 'Global Operations'
}, {
  logo: 'Financial Services',
  quote: "Everyone on our RPBG team could have successfully interviewed for our in-house team. That is important to us. We're getting top-tier talent.",
  author: 'Chief Operating Officer',
  title: 'Financial Services'
}, {
  logo: 'Healthcare Provider',
  quote: "The RPBG team is always flexible with process changes and commits 100% to making every interaction the best our clients have ever had.",
  author: 'Director of Client Experience',
  title: 'Healthcare'
}];
export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextTestimonial = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section className="py-24 bg-muted/30">
      
    </section>;
};