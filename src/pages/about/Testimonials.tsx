import { Layout } from '@/components/layout/Layout';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "RPBG has been an invaluable partner in our digital transformation journey. Their expertise and dedication to excellence are unmatched.",
    author: "Client 1",
    company: "Enterprise Company",
    rating: 5,
  },
  {
    quote: "The team at RPBG understood our needs from day one and delivered solutions that exceeded our expectations.",
    author: "Client 2",
    company: "Financial Services",
    rating: 5,
  },
  {
    quote: "Outstanding IT support and cybersecurity services. We feel secure knowing RPBG is watching over our systems 24/7.",
    author: "Client 3",
    company: "Healthcare Provider",
    rating: 5,
  },
  {
    quote: "Their training programs transformed our team's productivity. Highly recommended for any organization looking to upskill.",
    author: "Client 4",
    company: "Manufacturing Co.",
    rating: 5,
  },
  {
    quote: "RPBG's internet services are reliable and their customer support is always responsive and helpful.",
    author: "Client 5",
    company: "Retail Business",
    rating: 5,
  },
  {
    quote: "The ERP implementation was smooth and the ongoing support has been exceptional. True partners in our success.",
    author: "Client 6",
    company: "Logistics Company",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="page-hero pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Client    Testimonials
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from organizations that trust RPBG with their technology needs.
          </p>
          
          {/* Dot Separator */}
          <div className="dot-separator mt-8">
            <div className="dot-separator-dots">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="service-card">
                <div className="p-8">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  
                  {/* Quote Text */}
                  <p className="text-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
