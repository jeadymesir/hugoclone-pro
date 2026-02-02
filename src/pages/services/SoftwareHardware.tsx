import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Cpu, Database, Users } from 'lucide-react';

const solutions = [
  {
    icon: Database,
    title: 'ERP Solutions',
    description: 'Enterprise Resource Planning systems that streamline your business processes.',
    items: ['Exact Software implementation', 'Odoo ERP solutions', 'Custom integrations', 'Cloud and on-premise options'],
  },
  {
    icon: Users,
    title: 'HRM Solutions',
    description: 'Human Resource Management systems to simplify payroll and improve workforce management.',
    items: ['HRMS Plus implementation', 'Payroll automation', 'Time & attendance tracking', 'Employee self-service portals'],
  },
  {
    icon: Cpu,
    title: 'Hardware Solutions',
    description: 'Quality hardware from trusted brands to power your business.',
    items: ['Dell enterprise solutions', 'Lenovo workstations', 'Cisco networking equipment', 'APC power solutions'],
  },
];

const SoftwareHardware = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6">
              Solutions
            </div>
            <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
              Software    &    Hardware
            </h1>
            <p className="text-xl text-primary-foreground/80">
              RPBG offers on-premise or cloud ERP & HR solutions to simplify payroll, 
              improve decision making, and automate tasks.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h2 className="font-heading font-semibold text-xl text-foreground mb-4">
                    {solution.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {solution.items.map((item, i) => (
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
            Need    a    custom    solution?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Our team can help you find the perfect combination of software and hardware for your needs.
          </p>
          <Link to="/contact" className="hugo-cta">
            Get in Touch
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SoftwareHardware;
