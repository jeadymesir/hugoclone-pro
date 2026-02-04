import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Server, Shield, Calculator } from 'lucide-react';

const sections = [
  {
    id: 'it',
    icon: Server,
    title: 'IT Consultancy',
    subtitle: 'Infrastructure & Strategy',
    description: "Technology should accelerate your business, not bottle-neck it. We analyze your current IT landscape to identify gaps, risks, and opportunities. From aging legacy systems that hinder productivity to security vulnerabilities that threaten your data, we diagnose the issues and design solutions.",
    highlight: "We help you move from a reactive 'break-fix' model to a proactive, scalable infrastructure strategy that supports your business goals for years to come.",
    items: ['IT Infrastructure Audits & Assessments', 'Digital Transformation Strategy', 'Cloud Migration Planning & Execution', 'Technology Roadmap Development', 'Vendor Selection & Management', 'IT Budget Optimization'],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security Consultancy',
    subtitle: 'Protection & Compliance',
    description: "Cyber threats evolve by the hour. Our consultants assess your digital assets, identify vulnerabilities, and design a comprehensive defense strategy that protects your business without impeding productivity. We understand that security isn't just about technology—it's about people, processes, and culture.",
    highlight: "From CISO-level advisory and Zero Trust architecture to compliance with international standards (ISO 27001, GDPR, PCI-DSS), our security advisors become your trusted guardians.",
    items: ['IT Security Audits & Penetration Testing', 'Compliance Assessment & Remediation', 'Security Policy Development', 'Risk Assessment & Management', 'Incident Response Planning', 'Security Awareness Programs'],
  },
  {
    id: 'finance',
    icon: Calculator,
    title: 'Financial Consultancy',
    subtitle: 'Strategy & Optimization',
    description: "Sustainable growth requires financial clarity. Our consultants work at the intersection of technology and business strategy, helping you make smarter investments, optimize costs, and build business cases that win stakeholder approval. We translate complex IT initiatives into language that resonates with financial decision-makers.",
    highlight: "Let us help you build a smarter, more agile financial foundation that supports innovation while maintaining fiscal responsibility.",
    items: ['Cost Optimization & TCO Analysis', 'Business Case Development', 'Process Automation ROI Modeling', 'IT Investment Strategy', 'Financial Systems Integration', 'Budget Planning & Forecasting'],
  },
];

const Consultancy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6 inline-block">
              Consultancy
            </div>
            <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
              Strategic    Consultancy
            </h1>
            <p className="text-xl text-primary-foreground/90 font-medium mb-4">
              We don't just fix problems; we architect solutions that prevent them.
            </p>
            <p className="text-primary-foreground/70">
              At RPBG, consultancy is about solving a business equation—not selling you a product.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Service Sections */}
      {sections.map((section, index) => {
        const Icon = section.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section key={section.id} className={`py-24 ${isEven ? 'bg-background' : 'bg-muted/30'}`}>
            <div className="container mx-auto px-6 lg:px-12">
              <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center hugo-float">
                    <Icon className="w-32 h-32 text-primary" />
                  </div>
                </div>

                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="hugo-tag mb-4">{section.subtitle}</div>
                  <h2 className="hugo-subtitle text-2xl md:text-3xl text-foreground mb-6">
                    {section.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.description}
                  </p>
                  
                  <p className="text-foreground font-medium mb-8">
                    {section.highlight}
                  </p>
                  
                  <p className="text-sm font-semibold text-foreground mb-4">What we deliver:</p>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary-foreground" />
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

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="hugo-subtitle text-3xl md:text-4xl mb-6">
            Let's    solve    your    business    equation.
          </h2>
          <Link to="/contact" className="hugo-cta bg-background text-foreground hover:bg-background/90">
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Consultancy;
