import { Layout } from '@/components/layout/Layout';
import { Check, Server, Shield, Calculator } from 'lucide-react';

const sections = [
  {
    id: 'it',
    icon: Server,
    title: 'IT Consultancy (Infrastructure & Strategy)',
    description: "Technology should accelerate your business, not bottle-neck it. We analyze your current IT landscape to identify gaps, risks, and opportunities for consolidation.",
    highlight: "We help you move from a reactive 'break-fix' model to a proactive, scalable infrastructure strategy.",
    items: ['IT Infrastructure Audits', 'Digital Transformation', 'Cloud Migration Strategy'],
    imagePosition: 'left',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security Consultancy',
    description: "Cyber threats evolve by the hour, and a one-size-fits-all security approach leaves gaps. Our consultants assess your digital assets, identify vulnerabilities, and design a comprehensive defense strategy.",
    highlight: "From CISO-level advisory and Zero Trust architecture to compliance (ISO 27001, GDPR), our security advisors become your trusted guardians.",
    items: ['IT Security Audits', 'Compliance Assessment (ISO 27001, GDPR, etc.)', 'Security Policy Development'],
    imagePosition: 'right',
  },
  {
    id: 'finance',
    icon: Calculator,
    title: 'Financial Consultancy',
    description: "Sustainable growth requires more than just sound technical decisions - it demands financial clarity. Our financial consultants work at the intersection of technology and business strategy.",
    highlight: "Let us help you build a smarter, more agile financial foundation.",
    items: ['Cost Optimization (IT and Operations)', 'Business Case Development', 'Process Automation ROI Analysis', 'Vendor & Procurement Strategy'],
    imagePosition: 'left',
  },
];

const Consultancy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="page-hero pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Strategic    Consultancy
          </h1>
          <p className="text-xl text-primary font-medium mb-4">
            We don't just fix problems; we architect solutions that prevent them.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At RPBG, consultancy is not about selling you a product or a service; 
            it is about solving a business equation. Whether you are navigating a 
            digital transformation, securing your assets, or optimizing your financial 
            workflows, our consultants help with planning and executing the projects successfully.
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
      {sections.map((section, index) => {
        const Icon = section.icon;
        return (
          <section
            key={section.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                {/* Image/Icon Side */}
                <div className={`${section.imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center">
                    <Icon className="w-32 h-32 text-primary" />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${section.imagePosition === 'right' ? 'lg:order-1' : ''}`}>
                  <h2 className="section-title text-2xl md:text-3xl text-foreground mb-6">
                    {section.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.description}
                  </p>
                  
                  <p className="text-foreground font-medium mb-6">
                    {section.highlight}
                  </p>
                  
                  <p className="text-sm font-semibold text-foreground mb-4">What we deliver:</p>
                  
                  {/* Checklist */}
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-success" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </Layout>
  );
};

export default Consultancy;
