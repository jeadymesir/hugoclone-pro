import { AnimatedSection } from '@/components/AnimatedSection';
import { Scribble, FloatingElement, Sparkle } from '@/components/decorative/Scribbles';

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
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Floating decorative elements */}
      <FloatingElement className="top-16 right-24 hidden lg:block">
        <Scribble variant="spiral" color="muted" size="md" />
      </FloatingElement>
      
      <FloatingElement className="bottom-20 left-16 hidden lg:block" style={{ animationDelay: '1s' }}>
        <Sparkle className="w-8 h-8" />
      </FloatingElement>

      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="hugo-tag mb-4 inline-block">Certifications</span>
          <div className="relative inline-block">
            <h2 className="hugo-title text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              CERTIFIED    EXCELLENCE
            </h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48">
              <Scribble variant="underline" color="primary" />
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
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
              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 h-full flex flex-col relative group">
                {/* Hover scribble effect */}
                <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Scribble variant="star" color="primary" size="sm" />
                </div>
                
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
