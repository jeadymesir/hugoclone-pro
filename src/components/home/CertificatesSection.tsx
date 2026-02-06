import { AnimatedSection } from '@/components/AnimatedSection';
import { Award, Shield, CheckCircle2, BadgeCheck } from 'lucide-react';

const certificates = [
  {
    name: 'Cisco Certified Partner',
    icon: Shield,
    description: 'Authorized Cisco networking solutions provider',
  },
  {
    name: 'Microsoft Gold Partner',
    icon: Award,
    description: 'Microsoft 365 & Azure certified implementation partner',
  },
  {
    name: 'Fortinet Partner',
    icon: Shield,
    description: 'Certified FortiGate security solutions provider',
  },
  {
    name: 'Google Cloud Partner',
    icon: BadgeCheck,
    description: 'Google Workspace authorized reseller',
  },
  {
    name: 'Veeam ProPartner',
    icon: CheckCircle2,
    description: 'Certified backup and disaster recovery specialist',
  },
  {
    name: 'Odoo Gold Partner',
    icon: Award,
    description: 'Official Odoo ERP implementation partner',
  },
  {
    name: 'Dell Technologies Partner',
    icon: BadgeCheck,
    description: 'Authorized Dell hardware and solutions reseller',
  },
  {
    name: 'Lenovo Business Partner',
    icon: CheckCircle2,
    description: 'Certified Lenovo enterprise solutions provider',
  },
];

export const CertificatesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="hugo-tag mb-4 inline-block">Certifications</span>
          <h2 className="hugo-title text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            CERTIFIED    EXCELLENCE
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our partnerships and certifications ensure you receive the highest quality solutions and support from industry-leading vendors.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <AnimatedSection
              key={cert.name}
              animation="scale"
              delay={index * 100}
            >
              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <cert.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
