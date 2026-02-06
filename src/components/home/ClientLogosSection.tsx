import { AnimatedSection } from '@/components/AnimatedSection';

// Client logos - major organizations in Suriname and Caribbean region
const clients = [
  { name: 'Staatsolie', logo: '/clients/staatsolie.png' },
  { name: 'Telesur', logo: '/clients/telesur.png' },
  { name: 'De Surinaamsche Bank', logo: '/clients/dsb.png' },
  { name: 'Hakrinbank', logo: '/clients/hakrinbank.png' },
  { name: 'Assuria', logo: '/clients/assuria.png' },
  { name: 'SURMED', logo: '/clients/surmed.png' },
  { name: 'EBS', logo: '/clients/ebs.png' },
  { name: 'SWM', logo: '/clients/swm.png' },
  { name: 'Parsasco', logo: '/clients/parsasco.png' },
  { name: 'Fernandes Group', logo: '/clients/fernandes.png' },
  { name: 'VSH United', logo: '/clients/vsh.png' },
  { name: 'Surinam Airways', logo: '/clients/slm.png' },
];

// Technology partner logos
const techPartners = [
  { name: 'Cisco', color: '#049fd9' },
  { name: 'Microsoft', color: '#00a4ef' },
  { name: 'Google Cloud', color: '#4285f4' },
  { name: 'Fortinet', color: '#ee3124' },
  { name: 'Dell', color: '#007db8' },
  { name: 'Lenovo', color: '#e2231a' },
  { name: 'Veeam', color: '#00b336' },
  { name: 'Odoo', color: '#875a7b' },
  { name: 'Yeastar', color: '#ff6600' },
  { name: 'Yealink', color: '#1a73e8' },
  { name: 'Sangoma', color: '#f47920' },
  { name: 'Nakivo', color: '#00a5e5' },
  { name: 'APC', color: '#ff0000' },
  { name: 'Exact', color: '#e94e1b' },
  { name: 'XCally', color: '#6366f1' },
];

export const ClientLogosSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Clients Section */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="hugo-tag mb-4 inline-block">Our Clients</span>
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground mb-4">
            Trusted    by    leading    organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From government institutions to Fortune 500 companies, organizations across Suriname and the Caribbean rely on RPBG for their IT needs.
          </p>
        </AnimatedSection>

        {/* Client Logos Grid */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="bg-card rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/30 aspect-[3/2]"
              >
                <span className="font-heading font-bold text-muted-foreground text-sm text-center">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Technology Partners Section */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="hugo-tag mb-4 inline-block">Technology Partners</span>
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground mb-4">
            We    integrate    seamlessly    with    technology    built    for    scale
          </h2>
        </AnimatedSection>

        {/* Marquee Track */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Marquee */}
          <div className="overflow-hidden py-4">
            <div className="hugo-marquee">
              {[...techPartners, ...techPartners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 px-8 py-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/30"
                >
                  <span
                    className="font-heading font-bold text-lg whitespace-nowrap"
                    style={{ color: partner.color }}
                  >
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
