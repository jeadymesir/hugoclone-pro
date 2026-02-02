import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Wifi } from 'lucide-react';

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
    popular: true,
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
      {/* Hero - Hugo style */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6 inline-block">
              Internet Services
            </div>
            <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
              Choose    your    perfect    internet    package
            </h1>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 ${
                  pkg.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
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
                  <Link to="/contact" className="hugo-cta w-full justify-center text-sm">
                    Register Here
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-muted-foreground mb-10 max-w-3xl mx-auto">
            RPBG (Parbonet) is one of the 3 internet providers in Suriname, 
            specializing in providing wireless connectivity in the region.
          </p>
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
        </div>
      </section>

      {/* FAQs - Hugo style accordion */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground mb-12 text-center">
            Frequently    asked    questions:
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <span className="text-2xl text-primary group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
