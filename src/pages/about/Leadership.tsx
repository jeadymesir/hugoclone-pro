import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { User, Linkedin, ArrowRight } from 'lucide-react';

const leaders = [
  {
    name: 'Leadership Member 1',
    role: 'Chief Executive Officer',
    description: 'Leading RPBG\'s strategic vision and operations for nearly 30 years.',
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
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6 inline-block">
              Our Team
            </div>
            <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
              Leadership    Team
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Meet the experienced professionals leading RPBG into the future.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Leadership Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                {/* Avatar */}
                <div className="w-28 h-28 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <User className="w-14 h-14 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {leader.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {leader.role}
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  {leader.description}
                </p>
                
                {/* Social Link */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground mb-6">
            Want    to    join    our    team?
          </h2>
          <Link to="/contact" className="hugo-cta">
            Contact Us
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
