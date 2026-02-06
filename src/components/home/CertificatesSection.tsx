import { AnimatedSection } from '@/components/AnimatedSection';

// Import partner logos for certifications
import ciscoLogo from '@/assets/partners/cisco.png';
import microsoftLogo from '@/assets/partners/microsoft.png';
import googleCloudLogo from '@/assets/partners/google-cloud.png';
import fortinetLogo from '@/assets/partners/fortinet.png';
import dellLogo from '@/assets/partners/dell.png';
import lenovoLogo from '@/assets/partners/lenovo.png';
import veeamLogo from '@/assets/partners/veeam.png';
import odooLogo from '@/assets/partners/odoo.png';

const certificates = [
  {
    name: 'Cisco Certified Partner',
    logo: ciscoLogo,
    description: 'Authorized Cisco networking solutions provider for enterprise routing, switching, and security.',
  },
  {
    name: 'Microsoft Gold Partner',
    logo: microsoftLogo,
    description: 'Microsoft 365 & Azure certified implementation partner with expertise in cloud solutions.',
  },
  {
    name: 'Fortinet Partner',
    logo: fortinetLogo,
    description: 'Certified FortiGate security solutions provider for next-gen firewall and threat protection.',
  },
  {
    name: 'Google Cloud Partner',
    logo: googleCloudLogo,
    description: 'Google Workspace authorized reseller and cloud infrastructure specialist.',
  },
  {
    name: 'Veeam ProPartner',
    logo: veeamLogo,
    description: 'Certified backup, disaster recovery, and data protection specialist.',
  },
  {
    name: 'Odoo Gold Partner',
    logo: odooLogo,
    description: 'Official Odoo ERP implementation and customization partner.',
  },
  {
    name: 'Dell Technologies Partner',
    logo: dellLogo,
    description: 'Authorized Dell hardware and enterprise solutions reseller.',
  },
  {
    name: 'Lenovo Business Partner',
    logo: lenovoLogo,
    description: 'Certified Lenovo enterprise hardware and solutions provider.',
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
              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 h-full flex flex-col">
                <div className="w-full h-16 flex items-center justify-center mb-4">
                  <img
                    src={cert.logo}
                    alt={`${cert.name} certification`}
                    className="max-h-14 max-w-[140px] object-contain"
                  />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-center">{cert.name}</h3>
                <p className="text-sm text-muted-foreground text-center flex-1">{cert.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
