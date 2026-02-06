import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Network, Phone, Shield, Server } from 'lucide-react';

const sections = [
  {
    id: 'networking',
    icon: Network,
    title: 'NETWORKING',
    items: ['Network design', 'Implementation', 'Network testing + troubleshooting', 'Network maintenance'],
    description: "Your network isn't just cables and hardware—it's the central nervous system of your entire operation, directly impacting performance, security, and employee efficiency.",
    detail: "RPBG's Next-Generation Networking Services deliver a perfectly engineered infrastructure that is fast, robust, and inherently secure. We handle everything, from intelligent Wi-Fi and SD-WAN optimization to 24/7 proactive monitoring and defense against internal and external threats. Stop letting an unstable network sabotage your productivity. Let us design, implement, and manage a high-performance network that is ready for tomorrow's demands, ensuring flawless connectivity and unwavering reliability across your entire enterprise.",
  },
  {
    id: 'voip',
    icon: Phone,
    title: 'VOIP SERVICES',
    items: ['Network design', 'Implementation', 'Network testing + troubleshooting', 'Network maintenance'],
    description: "📞 Upgrade Your Communications. Power Your Productivity. In a rapidly evolving market, your communication system shouldn't hold you back. Traditional phone lines are rigid, expensive to maintain, and lack the flexibility modern business demands.",
    detail: "RPBG's Enterprise-Grade VoIP Service is designed to scale effortlessly, whether you're adding one new remote employee or opening a whole new branch office across the globe.",
  },
  {
    id: 'disaster',
    icon: Server,
    title: 'DISASTER RECOVERY AND CONTINUITY',
    items: ['Network design', 'Implementation', 'Network testing + troubleshooting', 'Network maintenance'],
    description: "In today's fast-paced digital landscape, business interruption isn't a possibility—it's an inevitability. Whether facing a hardware failure, a catastrophic cyberattack, or a natural disaster, can your business survive being offline for hours, or even days?",
    detail: "RPBG's Disaster Recovery and Business Continuity services are your definitive safety net. We don't just back up data; we engineer resilience, ensuring that when the unexpected strikes, your critical operations are restored rapidly, reliably, and with minimal data loss.",
  },
  {
    id: 'security',
    icon: Shield,
    title: 'SECURITY SOLUTIONS',
    items: ['24/7/365 Monitoring and response', 'Security as a Service', 'End-point protection', 'Mail-gateway', 'Real time IT asset management', 'Organization-wide cybersecurity set-up and maintenance'],
    description: "Information is one of the most important assets in today's organizations and its protection is crucial.",
    detail: "Security solutions from RPBG are tailored to your organizational needs and ensures that your information is protected at all times from any attacks.",
  },
];

const ManagedIT = () => {
  return (
    <Layout>
      {/* Hero - Hugo style with curved bottom */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6">
              Services
            </div>
            <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
              Managed    IT    Services    (MSP)
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From the original discipline of systems management for internal operations, RPBG has broadened the scope to offer various MSP services to clients.
            </p>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Service Sections - Alternating layout like Hugo */}
      {sections.map((section, index) => {
        const Icon = section.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section key={section.id} className={`py-24 ${isEven ? 'bg-background' : 'bg-muted/30'}`}>
            <div className="container mx-auto px-6 lg:px-12">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Icon side */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center hugo-float">
                    <Icon className="w-32 h-32 text-primary" />
                  </div>
                </div>

                {/* Content side */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <h2 className="hugo-subtitle text-2xl md:text-3xl text-foreground mb-8">
                    {section.title}
                  </h2>
                  
                  {/* Checklist - Hugo style */}
                  <ul className="space-y-4 mb-8">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 py-3 border-b border-border/50">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.detail}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="hugo-subtitle text-3xl md:text-4xl mb-6">
            Ready    to    get    started?
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Let's discuss how our managed IT services can help your business thrive.
          </p>
          <Link to="/contact" className="hugo-cta bg-background text-foreground hover:bg-background/90">
            Contact Us
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ManagedIT;
