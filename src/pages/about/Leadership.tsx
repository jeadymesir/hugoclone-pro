import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { User, ArrowRight } from 'lucide-react';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble } from '@/components/decorative/Scribbles';

// CEO - Top level
const ceo = {
  name: 'Jimmy Rosheuvel',
  role: 'Chief Executive Officer',
};

// C-Suite - Second level
const cSuite = [
  {
    name: 'Christian Morpurgo',
    role: 'Chief Operations Officer',
  },
  {
    name: 'Gracia Beckles',
    role: 'Chief Financial Officer',
  },
  {
    name: 'Aleksandrs Barkans',
    role: 'Vice President',
  },
];

// Managers - Third level
const managers = [
  {
    name: 'Miriam Elmont',
    role: 'Project Manager',
  },
  {
    name: 'Karin Kertotiko',
    role: 'Logistics Manager',
  },
  {
    name: 'Clay Oesmanadi',
    role: 'Sales Manager',
  },
  {
    name: 'Joan Heidanus',
    role: 'Development Manager',
  },
  {
    name: 'Elisa Djosemito',
    role: 'Human Resources Manager',
  },
];

const LeaderCard = ({ name, role, featured = false }: { name: string; role: string; featured?: boolean }) => (
  <div className={`bg-card rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group relative ${featured ? 'lg:col-span-1' : ''}`}>
    {/* Hover scribble */}
    <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <Scribble variant="star" color="primary" size="sm" />
    </div>
    
    {/* Avatar */}
    <div className={`${featured ? 'w-40 h-48' : 'w-32 h-40'} bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors`}>
      <User className={`${featured ? 'w-20 h-20' : 'w-16 h-16'} text-primary group-hover:text-primary-foreground transition-colors`} />
    </div>
    
    <h3 className={`font-heading font-semibold ${featured ? 'text-xl' : 'text-lg'} text-foreground mb-1`}>
      {name}
    </h3>
    <p className={`text-primary ${featured ? 'text-base' : 'text-sm'} font-medium`}>
      {role}
    </p>
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
      <section className="pt-20 pb-8 bg-background relative overflow-hidden">
        <SectionDecorations position="both" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex justify-center">
            <div className="max-w-md">
              <LeaderCard {...ceo} featured />
            </div>
          </div>
          
          {/* Connecting line */}
          <div className="flex justify-center mt-8">
            <div className="w-px h-16 bg-primary/30" />
          </div>
        </div>
      </section>

      {/* C-Suite - Second Level */}
      <section className="py-8 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cSuite.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
          
          {/* Connecting line */}
          <div className="flex justify-center mt-8">
            <div className="w-px h-16 bg-primary/30" />
          </div>
        </div>
      </section>

      {/* Managers - Third Level */}
      <section className="py-8 pb-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
