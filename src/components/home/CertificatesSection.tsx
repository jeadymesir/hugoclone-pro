import { AnimatedSection } from '@/components/AnimatedSection';

// Import certification badges
import yeastarCert from '@/assets/certifications/yeastar.webp';
import odooCert from '@/assets/certifications/odoo.webp';
import comptiaSecurity from '@/assets/certifications/comptia-security.webp';
import comptiaNetwork from '@/assets/certifications/comptia-network.webp';

const certificates = [
  {
    name: 'CompTIA Security+ Certified',
    logo: comptiaSecurity,
    description: 'Industry-recognized cybersecurity certification validating core security skills and knowledge.',
  },
  {
    name: 'CompTIA Network+ Certified',
    logo: comptiaNetwork,
    description: 'Professional certification for networking infrastructure and troubleshooting expertise.',
  },
  {
    name: 'Yeastar Certified Technician',
    logo: yeastarCert,
    description: 'Certified expertise in Yeastar PBX systems, VoIP solutions, and unified communications.',
  },
  {
    name: 'Odoo 16 Certified',
    logo: odooCert,
    description: 'Official Odoo ERP implementation, customization, and integration specialist.',
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
            Our team holds industry-recognized certifications ensuring you receive expert solutions and support.
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
                <div className="w-full h-24 flex items-center justify-center mb-4">
                  <img
                    src={cert.logo}
                    alt={`${cert.name} certification`}
                    className="max-h-20 max-w-[160px] object-contain"
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
