import { AnimatedSection } from '@/components/AnimatedSection';
import { Scribble, FloatingElement, Sparkle } from '@/components/decorative/Scribbles';

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

// Client logos with imports - Real uploaded logos
import vcbbankLogo from '@/assets/clients/vcbbank.webp';
import siengsiengLogo from '@/assets/clients/siengsieng.webp';
import selfrelianceLogo from '@/assets/clients/selfreliance.webp';
import republicLogo from '@/assets/clients/republic.webp';
import rapidLogo from '@/assets/clients/rapid.webp';
import ppsLogo from '@/assets/clients/pps.webp';
import paragroupLogo from '@/assets/clients/paragroup.webp';
import oxygenLogo from '@/assets/clients/oxygen.webp';
import mcdonaldsLogo from '@/assets/clients/mcdonalds.webp';
import kingsLogo from '@/assets/clients/kings.webp';
import kerstenLogo from '@/assets/clients/kersten.webp';
import bgvsLogo from '@/assets/clients/bgvs.webp';
import assuriaRealLogo from '@/assets/clients/assuria-real.webp';
import alemboLogo from '@/assets/clients/alembo.webp';
import taxi1660Logo from '@/assets/clients/taxi1660.webp';

// Previous client logos
import staatslogieLogo from '@/assets/clients/staatsolie.png';
import telesurLogo from '@/assets/clients/telesur.png';
import dsbLogo from '@/assets/clients/dsb.png';
import hakrinbankLogo from '@/assets/clients/hakrinbank.png';
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
  { name: 'Kersten Distribution', logo: kerstenLogo },
  { name: 'BGVS', logo: bgvsLogo },
  { name: 'Assuria', logo: assuriaRealLogo },
  { name: 'Alembo', logo: alemboLogo },
  { name: 'Taxi 1660', logo: taxi1660Logo },
  { name: 'VCB Bank', logo: vcbbankLogo },
  { name: 'Sieng Sieng', logo: siengsiengLogo },
  { name: 'Self Reliance', logo: selfrelianceLogo },
  { name: 'Republic Bank', logo: republicLogo },
  { name: 'Rapid Import Export', logo: rapidLogo },
  { name: 'PPS Security', logo: ppsLogo },
  { name: 'Para Group', logo: paragroupLogo },
  { name: 'Oxygen Resort', logo: oxygenLogo },
  { name: "McDonald's", logo: mcdonaldsLogo },
  { name: "King's Enterprises", logo: kingsLogo },
  { name: 'Staatsolie', logo: staatslogieLogo },
  { name: 'Telesur', logo: telesurLogo },
  { name: 'De Surinaamsche Bank', logo: dsbLogo },
  { name: 'Hakrinbank', logo: hakrinbankLogo },
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
    <section className="py-24 bg-background overflow-hidden relative">
      {/* Floating decorative elements */}
      <FloatingElement className="top-16 left-20 hidden xl:block">
        <Scribble variant="spiral" color="muted" size="md" />
      </FloatingElement>
      
      <FloatingElement className="bottom-32 right-24 hidden lg:block" style={{ animationDelay: '1s' }}>
        <Sparkle className="w-8 h-8" />
      </FloatingElement>
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Technology Partners Section */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="hugo-tag mb-4 block mx-auto w-fit">Technology Partners</span>
          <div className="relative inline-block">
            <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground mb-4">
              We    partner    with    technology    leaders
            </h2>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-48">
              <Scribble variant="underline" color="primary" className="opacity-60" />
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
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

        {/* Client Logos Marquee - Sliding from left to right */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Marquee */}
          <div className="overflow-hidden py-4">
            <div className="hugo-marquee-reverse">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 px-8 py-6 bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30 flex items-center justify-center min-w-[220px] h-32"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-24 max-w-[180px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
