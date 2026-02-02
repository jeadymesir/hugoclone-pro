import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Calculator, Users, FileText } from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Financial Services',
    description: 'Comprehensive financial management and bookkeeping services.',
    items: ['Bookkeeping', 'Financial reporting', 'Tax preparation', 'Audit support'],
  },
  {
    icon: Users,
    title: 'HR Outsourcing',
    description: 'Human resource management so you can focus on your core business.',
    items: ['Payroll processing', 'Benefits administration', 'Recruitment support', 'Compliance management'],
  },
  {
    icon: FileText,
    title: 'Administrative Services',
    description: 'Back-office support to streamline your operations.',
    items: ['Document management', 'Data entry services', 'Process optimization', 'Reporting and analytics'],
  },
];

const BusinessServices = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6">
              Business Services
            </div>
            <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
              Managed    Business    Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Through our subsidiary Computech, RPBG offers Finance and HR outsourcing 
              so you can focus on your core business.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h2 className="font-heading font-semibold text-xl text-foreground mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground mb-6">
            Focus    on    what    matters    most.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Let us handle the administrative burden while you grow your business.
          </p>
          <Link to="/contact" className="hugo-cta">
            Learn More
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessServices;
