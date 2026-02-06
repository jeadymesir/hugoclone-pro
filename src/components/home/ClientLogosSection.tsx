import { AnimatedSection } from '@/components/AnimatedSection';

// Technology partner logos with imports
import ciscoLogo from '@/assets/partners/cisco.png';
import microsoftLogo from '@/assets/partners/microsoft.png';
import googleCloudLogo from '@/assets/partners/google-cloud.png';
import fortinetLogo from '@/assets/partners/fortinet.png';
import dellLogo from '@/assets/partners/dell.png';
import lenovoLogo from '@/assets/partners/lenovo.png';
import odooLogo from '@/assets/partners/odoo.png';
import yeastarLogo from '@/assets/partners/yeastar.png';
import veeamLogo from '@/assets/partners/veeam.png';
import yealinkLogo from '@/assets/partners/yealink.png';
import sangomaLogo from '@/assets/partners/sangoma.png';
import nakivoLogo from '@/assets/partners/nakivo.png';
import xcallyLogo from '@/assets/partners/xcally.png';
import apcLogo from '@/assets/partners/apc.svg';
import exactLogo from '@/assets/partners/exact.svg';

// Client logos with imports
import staatslogieLogo from '@/assets/clients/staatsolie.png';
import telesurLogo from '@/assets/clients/telesur.png';
import dsbLogo from '@/assets/clients/dsb.png';
import hakrinbankLogo from '@/assets/clients/hakrinbank.png';
import assuriaLogo from '@/assets/clients/assuria.png';
import surmedLogo from '@/assets/clients/surmed.png';
import ebsLogo from '@/assets/clients/ebs.png';
import swmLogo from '@/assets/clients/swm.png';
import parsascoLogo from '@/assets/clients/parsasco.png';
import fernandesLogo from '@/assets/clients/fernandes.png';
import vshLogo from '@/assets/clients/vsh.png';
import slmLogo from '@/assets/clients/slm.png';

const techPartners = [
  { name: 'Cisco', logo: ciscoLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Google Cloud', logo: googleCloudLogo },
  { name: 'Fortinet', logo: fortinetLogo },
  { name: 'Dell', logo: dellLogo },
  { name: 'Lenovo', logo: lenovoLogo },
  { name: 'Veeam', logo: veeamLogo },
  { name: 'Odoo', logo: odooLogo },
  { name: 'Yeastar', logo: yeastarLogo },
  { name: 'Yealink', logo: yealinkLogo },
  { name: 'Sangoma', logo: sangomaLogo },
  { name: 'Nakivo', logo: nakivoLogo },
  { name: 'APC', logo: apcLogo },
  { name: 'Exact', logo: exactLogo },
  { name: 'XCally', logo: xcallyLogo },
];

const clients = [
  { name: 'Staatsolie', logo: staatslogieLogo },
  { name: 'Telesur', logo: telesurLogo },
  { name: 'De Surinaamsche Bank', logo: dsbLogo },
  { name: 'Hakrinbank', logo: hakrinbankLogo },
  { name: 'Assuria', logo: assuriaLogo },
  { name: 'SURMED', logo: surmedLogo },
  { name: 'EBS', logo: ebsLogo },
  { name: 'SWM', logo: swmLogo },
  { name: 'Parsasco', logo: parsascoLogo },
  { name: 'Fernandes Group', logo: fernandesLogo },
  { name: 'VSH United', logo: vshLogo },
  { name: 'Surinam Airways', logo: slmLogo },
];

export const ClientLogosSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Technology Partners Section */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="hugo-tag mb-4 inline-block">Technology Partners</span>
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground mb-4">
            We    partner    with    technology    leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Official partnerships with the world's leading technology vendors ensure you receive certified solutions and expert support.
          </p>
        </AnimatedSection>

        {/* Technology Partners Marquee */}
        <div className="relative mb-24">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Marquee */}
          <div className="overflow-hidden py-4">
            <div className="hugo-marquee">
              {[...techPartners, ...techPartners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 px-6 py-4 bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30 flex items-center justify-center min-w-[160px] h-20"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-[120px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Happy Clients Section */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="hugo-tag mb-4 inline-block">Our Happy Clients</span>
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground mb-4">
            Trusted    by    leading    organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From government institutions to Fortune 500 companies, organizations across Suriname and the Caribbean rely on RPBG for their IT needs.
          </p>
        </AnimatedSection>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <AnimatedSection key={client.name} animation="scale" delay={index * 50}>
              <div className="bg-card rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/30 aspect-[3/2]">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
