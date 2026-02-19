import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble, FloatingElement, Sparkle } from '@/components/decorative/Scribbles';
import { AnimatedSection } from '@/components/AnimatedSection';

const packages = [
  {
    name: 'Lite',
    color: 'bg-amber-500',
    features: ['Unlimited internet', 'Download: 10 Mbps', 'Upload: 5 Mbps', 'Up to 6 devices'],
  },
  {
    name: 'Classic',
    color: 'bg-emerald-500',
    features: ['Unlimited internet', 'Download: 20 Mbps', 'Upload: 10 Mbps', 'Up to 9 devices'],
  },
  {
    name: 'Premium',
    color: 'bg-primary',
    features: ['Unlimited internet', 'Download: 30 Mbps', 'Upload: 10 Mbps', 'Up to 13 devices'],
  },
];

const benefits = [
  'Fast connectivity time: within 7 business days',
  'No installation costs',
  'Extensive customer support',
];

const faqs = [
  {
    question: 'Are there any other costs associated with my subscription?',
    answer: 'Yes, apart from the subscription costs RPBG charges a monthly fee for the radio. In case the radio breaks (not a customer\'s fault), we replace it free of charge. You can find out more from one of our customer desk representatives.',
  },
  {
    question: 'Do you provide internet subscriptions for businesses?',
    answer: 'Yes, RPBG provides internet for both B2B and B2C. We offer possibilities of preferred and/or dedicated internet subscriptions to meet the exact needs of our clients.',
  },
];

const InternetServices = () => {
  return (
    <Layout>
      {/* Hero - Hugo style */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <div className="flex justify-center mb-6">
                <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground">
                  Internet Services
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="relative inline-block">
                <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
                  Choose    your    perfect    internet    package
                </h1>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background relative overflow-hidden">
        <SectionDecorations position="both" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <AnimatedSection key={index} animation={index === 0 ? 'fade-right' : index === 2 ? 'fade-left' : 'fade-up'} delay={index * 100}>
                <div
                  className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 relative group h-full"
                >
                  {/* Hover scribble */}
                  <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Scribble variant="star" color="primary" size="sm" />
                  </div>
                  
                  <div className={`${pkg.color} py-8 px-6 text-center text-white`}>
                    <h3 className="font-heading text-3xl font-bold">{pkg.name}</h3>
                  </div>
                  
                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLScLRwoFjK5Bx9NNqWiZQNWNf2OWzytbXSNjyUDBO_cvCGQa5Q/viewform" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hugo-cta w-full justify-center text-sm"
                    >
                      Register Here
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <FloatingElement className="top-8 right-20 hidden lg:block">
          <Scribble variant="spiral" color="muted" size="sm" />
        </FloatingElement>
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <p className="text-lg font-medium text-foreground mb-10 max-w-3xl mx-auto">
              RPBG (Parbonet) is one of the 3 internet providers in Suriname, 
              specializing in providing wireless connectivity in the region.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="flex flex-wrap justify-center gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs - Hugo style accordion */}
      <section className="py-24 bg-background relative overflow-hidden">
        <FloatingElement className="top-16 left-16 hidden lg:block">
          <Sparkle className="w-8 h-8" />
        </FloatingElement>
        <FloatingElement className="bottom-20 right-24 hidden lg:block" style={{ animationDelay: '1s' }}>
          <Scribble variant="circle" color="muted" size="md" />
        </FloatingElement>
        
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="relative inline-block mb-12 w-full text-center">
              <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
                Frequently    asked    questions:
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'} delay={index * 100}>
                <details className="group bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    <span className="text-2xl text-primary group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InternetServices;
