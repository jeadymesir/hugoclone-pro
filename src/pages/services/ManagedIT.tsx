import { Layout } from '@/components/layout/Layout';
import { Check, Network, Phone, Shield, Server } from 'lucide-react';

const sections = [
  {
    id: 'networking',
    icon: Network,
    title: 'NETWORKING',
    items: ['Network design', 'Implementation', 'Network testing + troubleshooting', 'Network maintenance'],
    description: "Your network isn't just cables and hardware - it's the central nervous system of your entire operation, directly impacting performance, security, and employee efficiency.",
    detail: "RPBG's Next-Generation Networking Services deliver a perfectly engineered infrastructure that is fast, robust, and inherently secure. We handle everything, from intelligent Wi-Fi and SD-WAN optimization to 24/7 proactive monitoring and defense against internal and external threats.",
    imagePosition: 'left',
  },
  {
    id: 'voip',
    icon: Phone,
    title: 'VOIP SERVICES',
    items: ['Network design', 'Implementation', 'Network testing + troubleshooting', 'Network maintenance'],
    description: "📞 Upgrade Your Communications. Power Your Productivity.",
    detail: "In a rapidly evolving market, your communication system shouldn't hold you back. RPBG's Enterprise-Grade VoIP Service is designed to scale effortlessly, whether you're adding one new remote employee or opening a whole new branch office across the globe.",
    imagePosition: 'right',
  },
  {
    id: 'disaster',
    icon: Server,
    title: 'DISASTER RECOVERY AND CONTINUITY',
    items: ['Network design', 'Implementation', 'Network testing + troubleshooting', 'Network maintenance'],
    description: "In today's fast-paced digital landscape, business interruption isn't a possibility—it's an inevitability.",
    detail: "RPBG's Disaster Recovery and Business Continuity services are your definitive safety net. We don't just back up data; we engineer resilience, ensuring that when the unexpected strikes, your critical operations are restored rapidly, reliably, and with minimal data loss.",
    imagePosition: 'left',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'SECURITY SOLUTIONS',
    items: [
      '24/7/365 Monitoring and response',
      'Security as a Service',
      'End-point protection',
      'Mail-gateway',
      'Real time IT asset management',
      'Organization-wide cybersecurity set-up and maintenance',
    ],
    description: "Information is one of the most important assets in today's organizations and its protection is crucial.",
    detail: "Security solutions from RPBG are tailored to your organizational needs and ensures that your information is protected at all times from any attacks.",
    imagePosition: 'right',
  },
];

const ManagedIT = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="page-hero pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            MANAGED    IT    SERVICES    (MSP)
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the original discipline of systems management for internal operations, 
            RPBG has broadened the scope to offer various MSP services to clients.
          </p>
          
          {/* Dot Separator */}
          <div className="dot-separator mt-8">
            <div className="dot-separator-dots">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {sections.map((section, index) => {
        const Icon = section.icon;
        return (
          <section
            key={section.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                section.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image/Icon Side */}
                <div className={`${section.imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center">
                    <Icon className="w-32 h-32 text-primary" />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${section.imagePosition === 'right' ? 'lg:order-1' : ''}`}>
                  <h2 className="section-title text-2xl md:text-3xl text-foreground mb-6">
                    {section.title}
                  </h2>
                  
                  {/* Checklist */}
                  <ul className="space-y-3 mb-6">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-success" />
                        </div>
                        <span className="text-foreground">{item}</span>
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
    </Layout>
  );
};

export default ManagedIT;
