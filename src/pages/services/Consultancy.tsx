import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Server, Shield, Network, Code, Briefcase } from 'lucide-react';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble } from '@/components/decorative/Scribbles';
import { AnimatedSection } from '@/components/AnimatedSection';

const sections = [
  {
    id: 'it',
    icon: Server,
    title: 'IT Consultancy (Infrastructure & Strategy)',
    description: "Technology should accelerate your business, not bottle-neck it. We analyze your current IT landscape to identify gaps, risks, and opportunities for consolidation. We help you move from a reactive \"break-fix\" model to a proactive, scalable infrastructure strategy.",
    items: ['IT Infrastructure Audits', 'Digital Transformation', 'Cloud Migration Strategy'],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security Consultancy',
    description: "Cybersecurity is no longer just an IT requirement; it is a business survival imperative. Our security consultants don't just sell antivirus; we design comprehensive governance frameworks. We assess your vulnerabilities—both digital and human—and build a defense strategy that ensures business continuity.",
    items: ['Vulnerability Assessments', 'Security Policy Design', 'Data Protection & Compliance Audits', 'Disaster Recovery Planning'],
  },
  {
    id: 'network',
    icon: Network,
    title: 'Network Architecture & Connectivity Optimization',
    description: "In a cloud-first world, your internet connection is your lifeline. We don't just \"speed up\" your internet; we design resilient network architectures that can handle high-demand enterprise loads. We analyze traffic patterns and design redundancy layers to ensure your business never goes offline.",
    items: ['WAN/LAN Architecture Design', 'Redundancy & Failover Planning', 'Bandwidth Management Strategy', 'WISP Feasibility Studies'],
  },
  {
    id: 'software',
    icon: Code,
    title: 'Software Consultancy',
    description: "Buying software is easy; making it work together is hard. Before you commit to a license, our experts analyze your requirements to prevent \"software bloat.\" We help you decide between off-the-shelf solutions and custom development, ensuring your software stack talks to each other efficiently.",
    items: ['Requirements Analysis', '"Build vs. Buy" Feasibility Studies', 'Software Stack Integration Planning', 'System Migration Strategy'],
  },
  {
    id: 'business',
    icon: Briefcase,
    title: 'Business Optimization Consultancy',
    description: "Before we implement an ERP, Financial system or HRM, we align on your operational logic. We bridge the gap between financial administration and operational reality, identifying bottlenecks, inventory management, and human resource requirements. RPBG aligns with your business needs, so that solutions provided help you succeed.",
    items: ['Business automation through software solutions', 'Workflow optimization', 'HRM simplification'],
  },
];

const Consultancy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <div className="flex justify-center mb-6">
                <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground">
                  Consultancy
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="relative inline-block">
                <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
                  Strategic    Consultancy
                </h1>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 opacity-40">
                  <Scribble variant="underline" className="stroke-primary-foreground/50" />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl text-primary-foreground/90 font-medium mb-4 mt-4">
                We don't just fix problems; we architect solutions that prevent them.
              </p>
              <p className="text-primary-foreground/70">
                At RPBG, consultancy is not about selling you a product or a service; it is about solving a business equation. Whether you are navigating a digital transformation, securing your assets, or optimizing your financial workflows, our consultants help with planning and executing the projects successfully.
              </p>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Service Sections */}
      {sections.map((section, index) => {
        const Icon = section.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section key={section.id} className={`py-24 ${isEven ? 'bg-background' : 'bg-muted/30'} relative overflow-hidden`}>
            <SectionDecorations position={isEven ? 'right' : 'left'} />
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                <AnimatedSection animation={isEven ? 'fade-right' : 'fade-left'} className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center hugo-float relative">
                    <Icon className="w-32 h-32 text-primary" />
                    <div className="absolute -top-4 -right-4">
                      <Scribble variant="star" color="primary" size="sm" className="opacity-40" />
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation={isEven ? 'fade-left' : 'fade-right'} delay={100} className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative inline-block mb-6">
                    <h2 className="hugo-subtitle text-2xl md:text-3xl text-foreground">
                      {section.title}
                    </h2>
                    <div className="absolute -bottom-2 left-0 w-32">
                      <Scribble variant="underline" color="primary" className="opacity-50" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {section.description}
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
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <h2 className="hugo-subtitle text-3xl md:text-4xl mb-6">
              Let's    solve    your    business    equation.
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <Link to="/contact" className="hugo-cta bg-background text-foreground hover:bg-background/90">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 hugo-arrow" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Consultancy;
