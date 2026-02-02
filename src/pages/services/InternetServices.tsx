import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Check, Wifi } from 'lucide-react';

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
    answer: 'No, there are no hidden costs. The monthly fee covers everything including installation.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We cover the greater Paramaribo area and surrounding regions. Contact us for specific coverage.',
  },
  {
    question: 'How fast can I get connected?',
    answer: 'We typically complete installations within 7 business days of order confirmation.',
  },
];

const InternetServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="page-hero pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Choose    your    perfect    internet    package
          </h1>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className="pricing-card">
                <div className={`pricing-card-header ${pkg.color}`}>
                  <h3 className="font-heading text-2xl font-bold">{pkg.name}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-success" />
                        </div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="btn-primary block text-center text-sm"
                  >
                    REGISTER HERE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            RPBG (Parbonet) is one of the 3 internet providers in Suriname, 
            specializing in providing wireless connectivity in the region.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* Dot Separator */}
          <div className="dot-separator mt-12">
            <div className="dot-separator-dots">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="section-title text-2xl md:text-3xl text-foreground mb-10 text-center">
            Frequently    asked    questions:
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InternetServices;
