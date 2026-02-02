import { Layout } from '@/components/layout/Layout';
import { User, Linkedin } from 'lucide-react';

const leaders = [
  {
    name: 'Leadership Member 1',
    role: 'Chief Executive Officer',
    description: 'Leading RPBG\'s strategic vision and operations.',
  },
  {
    name: 'Leadership Member 2',
    role: 'Chief Technology Officer',
    description: 'Driving technological innovation across all services.',
  },
  {
    name: 'Leadership Member 3',
    role: 'Chief Operations Officer',
    description: 'Overseeing day-to-day operations and service delivery.',
  },
  {
    name: 'Leadership Member 4',
    role: 'Chief Financial Officer',
    description: 'Managing financial strategy and business growth.',
  },
];

const Leadership = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="page-hero pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Leadership    Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the experienced professionals leading RPBG into the future.
          </p>
          
          {/* Dot Separator */}
          <div className="dot-separator mt-8">
            <div className="dot-separator-dots">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="service-card text-center">
                <div className="p-8">
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                  
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {leader.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {leader.description}
                  </p>
                  
                  {/* Social Link */}
                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
