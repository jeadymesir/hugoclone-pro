import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble } from '@/components/decorative/Scribbles';

const testimonials = [
  {
    quote: "RPBG has been an invaluable partner in our digital transformation journey. Their expertise and dedication to excellence are unmatched in the region.",
    author: "Director of IT",
    company: "Enterprise Company",
    rating: 5,
  },
  {
    quote: "The team at RPBG understood our needs from day one and delivered solutions that exceeded our expectations. True professionals.",
    author: "CEO",
    company: "Financial Services",
    rating: 5,
  },
  {
    quote: "Outstanding IT support and cybersecurity services. We feel secure knowing RPBG is watching over our systems 24/7.",
    author: "IT Manager",
    company: "Healthcare Provider",
    rating: 5,
  },
  {
    quote: "Their training programs transformed our team's productivity. Highly recommended for any organization looking to upskill.",
    author: "HR Director",
    company: "Manufacturing Co.",
    rating: 5,
  },
  {
    quote: "RPBG's internet services are reliable and their customer support is always responsive and helpful. Best ISP we've worked with.",
    author: "Operations Manager",
    company: "Retail Business",
    rating: 5,
  },
  {
    quote: "The ERP implementation was smooth and the ongoing support has been exceptional. True partners in our success.",
    author: "CFO",
    company: "Logistics Company",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6 inline-block">
              Testimonials
            </div>
            <div className="relative inline-block">
              <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
                Client    Stories
              </h1>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 opacity-40">
                <Scribble variant="underline" className="stroke-primary-foreground/50" />
              </div>
            </div>
            <p className="text-xl text-primary-foreground/80 mt-4">
              Hear from organizations that trust RPBG with their technology needs.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <SectionDecorations position="both" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 relative group">
                {/* Hover scribble */}
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Scribble variant="star" color="primary" size="sm" />
                </div>
                
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                
                {/* Quote Text */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Author */}
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="hugo-subtitle text-3xl md:text-4xl mb-6">
            Ready    to    be    our    next    success    story?
          </h2>
          <Link to="/contact" className="hugo-cta bg-background text-foreground hover:bg-background/90">
            Get Started
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
