import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    logo: 'Enterprise Co.',
    quote: "We're constantly trying to bring the best the market has to offer to support our global business operations. In RPBG, we found an incredible partner.",
    author: 'Director',
    title: 'Global Operations',
  },
  {
    logo: 'Financial Services',
    quote: "Everyone on our RPBG team could have successfully interviewed for our in-house team. That is important to us. We're getting top-tier talent.",
    author: 'Chief Operating Officer',
    title: 'Financial Services',
  },
  {
    logo: 'Healthcare Provider',
    quote: "The RPBG team is always flexible with process changes and commits 100% to making every interaction the best our clients have ever had.",
    author: 'Director of Client Experience',
    title: 'Healthcare',
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="hugo-testimonial relative">
            {/* Company logo placeholder */}
            <div className="mb-8">
              <span className="font-heading font-bold text-2xl text-primary">
                {testimonials[activeIndex].logo}
              </span>
            </div>
            
            {/* Quote */}
            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10" />
              <p className="text-xl md:text-2xl text-foreground leading-relaxed italic pl-8">
                {testimonials[activeIndex].quote}
              </p>
            </div>
            
            {/* Sound wave animation - Hugo style */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-end gap-1 h-6">
                <div className="hugo-wave-bar" />
                <div className="hugo-wave-bar" />
                <div className="hugo-wave-bar" />
                <div className="hugo-wave-bar" />
                <div className="hugo-wave-bar" />
              </div>
              <div className="flex items-end gap-1 h-6">
                <div className="hugo-wave-bar" />
                <div className="hugo-wave-bar" />
                <div className="hugo-wave-bar" />
                <div className="hugo-wave-bar" />
                <div className="hugo-wave-bar" />
              </div>
            </div>
            
            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{testimonials[activeIndex].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].title}</p>
              </div>
              
              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-primary w-8' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
