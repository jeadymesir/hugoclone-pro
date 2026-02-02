import { Layout } from '@/components/layout/Layout';
import { Check, Cpu, Database, Users } from 'lucide-react';

const sections = [
  {
    id: 'erp',
    icon: Database,
    title: 'ERP Solutions',
    description: "Enterprise Resource Planning systems that streamline your business processes.",
    items: [
      'Exact Software implementation',
      'Odoo ERP solutions',
      'Custom integrations',
      'Cloud and on-premise options',
    ],
  },
  {
    id: 'hrms',
    icon: Users,
    title: 'HRM Solutions',
    description: "Human Resource Management systems to simplify payroll and improve workforce management.",
    items: [
      'HRMS Plus implementation',
      'Payroll automation',
      'Time & attendance tracking',
      'Employee self-service portals',
    ],
  },
  {
    id: 'hardware',
    icon: Cpu,
    title: 'Hardware Solutions',
    description: "Quality hardware from trusted brands to power your business.",
    items: [
      'Dell enterprise solutions',
      'Lenovo workstations',
      'Cisco networking equipment',
      'APC power solutions',
    ],
  },
];

const SoftwareHardware = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="page-hero pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Software    &    Hardware    Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            RPBG offers on-premise or cloud ERP & HR solutions to simplify payroll, 
            improve decision making, automate tasks, and track performance.
          </p>
          
          {/* Dot Separator */}
          <div className="dot-separator mt-8">
            <div className="dot-separator-dots">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.id} className="service-card">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h2 className="font-heading font-semibold text-xl text-foreground mb-4">
                      {section.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm mb-6">
                      {section.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-success" />
                          </div>
                          <span className="text-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SoftwareHardware;
