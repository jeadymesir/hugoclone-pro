import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { User, Linkedin, ArrowRight } from 'lucide-react';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble } from '@/components/decorative/Scribbles';

// CEO - Top level
const ceo = {
  name: 'Leadership Member',
  role: 'Chief Executive Officer',
  description: 'Leading RPBG\'s strategic vision and operations for 30 years.',
};

// C-Suite - Second level
const cSuite = [
  {
    name: 'Leadership Member',
    role: 'Chief Operations Officer',
    description: 'Overseeing day-to-day operations and service delivery.',
  },
  {
    name: 'Leadership Member',
    role: 'Chief Financial Officer',
    description: 'Managing financial strategy and business growth.',
  },
  {
    name: 'Leadership Member',
    role: 'Vice President',
    description: 'Supporting executive leadership and strategic initiatives.',
  },
];

// Managers - Third level
const managers = [
  {
    name: 'Leadership Member',
    role: 'Project Manager',
    description: 'Leading project execution and client deliverables.',
  },
  {
    name: 'Leadership Member',
    role: 'Logistics Manager',
    description: 'Managing supply chain and operational logistics.',
  },
  {
    name: 'Leadership Member',
    role: 'Sales Manager',
    description: 'Driving sales strategy and client relationships.',
  },
  {
    name: 'Leadership Member',
    role: 'Development Manager',
    description: 'Overseeing software development and technical teams.',
  },
  {
    name: 'Leadership Member',
    role: 'HR Manager',
    description: 'Managing human resources and talent development.',
  },
];

const LeaderCard = ({ name, role, description, featured = false }: { name: string; role: string; description: string; featured?: boolean }) => (
  <div className={`bg-card rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group relative ${featured ? 'lg:col-span-1' : ''}`}>
    {/* Hover scribble */}
    <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <Scribble variant="star" color="primary" size="sm" />
    </div>
    
    {/* Avatar */}
    <div className={`${featured ? 'w-32 h-32' : 'w-24 h-24'} bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors`}>
      <User className={`${featured ? 'w-16 h-16' : 'w-12 h-12'} text-primary group-hover:text-primary-foreground transition-colors`} />
    </div>
    
    <h3 className={`font-heading font-semibold ${featured ? 'text-xl' : 'text-lg'} text-foreground mb-1`}>
      {name}
    </h3>
    <p className={`text-primary ${featured ? 'text-base' : 'text-sm'} font-medium mb-4`}>
      {role}
    </p>
    <p className="text-muted-foreground text-sm mb-6">
      {description}
    </p>
    
    {/* Social Link */}
    <a
      href="#"
      className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <Linkedin className="w-5 h-5" />
    </a>
  </div>
);

const Leadership = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6 inline-block">
              Our Team
            </div>
            <div className="relative inline-block">
              <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
                Leadership    Team
              </h1>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 opacity-40">
                <Scribble variant="underline" className="stroke-primary-foreground/50" />
              </div>
            </div>
            <p className="text-xl text-primary-foreground/80 mt-4">
              Meet the experienced professionals leading RPBG into the future.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* CEO - Top Level */}
      <section className="py-16 bg-background relative overflow-hidden">
        <SectionDecorations position="both" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <h2 className="hugo-subtitle text-2xl text-foreground">Executive Leadership</h2>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32">
                <Scribble variant="underline" color="primary" className="opacity-50" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-sm">
              <LeaderCard {...ceo} featured />
            </div>
          </div>
          
          {/* Connecting line */}
          <div className="flex justify-center mt-8">
            <div className="w-px h-12 bg-primary/30" />
          </div>
        </div>
      </section>

      {/* C-Suite - Second Level */}
      <section className="py-8 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-muted-foreground">C-Suite & Vice President</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {cSuite.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
          
          {/* Connecting line */}
          <div className="flex justify-center mt-8">
            <div className="w-px h-12 bg-primary/30" />
          </div>
        </div>
      </section>

      {/* Managers - Third Level */}
      <section className="py-8 pb-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-muted-foreground">Management Team</h3>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {managers.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <SectionDecorations position="both" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="relative inline-block mb-6">
            <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
              Want    to    join    our    team?
            </h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48">
              <Scribble variant="underline" color="primary" />
            </div>
          </div>
          <div className="mt-10">
            <Link to="/contact" className="hugo-cta">
              Contact Us
              <ArrowRight className="w-5 h-5 hugo-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
