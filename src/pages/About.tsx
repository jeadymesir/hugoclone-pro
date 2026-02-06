import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Target, Award, Briefcase, Users, Smile } from 'lucide-react';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble, FloatingElement, Sparkle } from '@/components/decorative/Scribbles';

const stats = [
  { label: 'Years of experience', value: '30+', icon: Award },
  { label: 'ERP Projects', value: '150+', icon: Briefcase },
  { label: 'HRM Projects', value: '200+', icon: Users },
  { label: 'Happy Customers', value: '6000+', icon: Smile },
];

const About = () => {
  return (
    <Layout>
      {/* Hero - Hugo style */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6 inline-block">
              About Us
            </div>
            <div className="relative inline-block">
              <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
                About    RPBG
              </h1>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 opacity-40">
                <Scribble variant="underline" className="stroke-primary-foreground/50" />
              </div>
            </div>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mt-4">
              <strong>Established in 1996,</strong> Rosheuvel & Partners Business Group N.V. 
              has been a trusted technology partner for small to large businesses for almost 3 decades.
            </p>
            <p className="text-primary-foreground/90 font-heading font-semibold text-xl mt-8 italic">
              "Breathing Life Into ICT"
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Vision & Mission - Hugo alternating style */}
      <section className="py-24 bg-background relative overflow-hidden">
        <SectionDecorations position="both" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Icon side */}
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center hugo-float relative">
              <div className="text-center">
                <Eye className="w-24 h-24 text-primary mx-auto mb-6" />
                <Target className="w-20 h-20 text-primary/60 mx-auto" />
              </div>
              {/* Scribble accent */}
              <div className="absolute -top-6 -right-6">
                <Scribble variant="star" color="primary" size="sm" className="opacity-40" />
              </div>
            </div>

            {/* Content side */}
            <div className="space-y-12">
              <div>
                <div className="relative inline-block mb-6">
                  <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
                    VISION
                  </h2>
                  <div className="absolute -bottom-2 left-0 w-24">
                    <Scribble variant="underline" color="primary" className="opacity-60" />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  RPBG, a Surinamese company that harnesses the creativity of the Surinamese people 
                  to work in harmony with its environment to optimally utilize technological possibilities, 
                  in order to provide a variety of products and services that ensure continuous growth 
                  of the company and the creation of well-being for its employees.
                </p>
              </div>

              <div>
                <div className="relative inline-block mb-6">
                  <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
                    MISSION
                  </h2>
                  <div className="absolute -bottom-2 left-0 w-28">
                    <Scribble variant="underline" color="primary" className="opacity-60" />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Rosheuvel & Partners Business Group is a dynamic Surinamese company that offers 
                  products and services in Suriname and the surrounding region. From its original 
                  discipline of Information Technology, the service offering has expanded to 
                  encompass the entire field of ICT, while also diversifying into related industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Hugo style */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <FloatingElement className="top-16 right-24 hidden lg:block">
          <Scribble variant="spiral" color="muted" size="md" />
        </FloatingElement>
        <FloatingElement className="bottom-20 left-16 hidden lg:block" style={{ animationDelay: '1s' }}>
          <Sparkle className="w-8 h-8" />
        </FloatingElement>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground mb-4">
                Our    work    in    numbers
              </h2>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48">
                <Scribble variant="underline" color="primary" />
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
              These numbers reflect the results we deliver through long-term partnerships.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 relative group"
                >
                  {/* Hover scribble */}
                  <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Scribble variant="star" color="primary" size="sm" />
                  </div>
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="font-heading text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="hugo-subtitle text-3xl md:text-4xl mb-6">
            Ready    to    partner    with    us?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/about/leadership" className="hugo-cta-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Meet Our Team
            </Link>
            <Link to="/contact" className="hugo-cta bg-background text-foreground hover:bg-background/90">
              Get in Touch
              <ArrowRight className="w-5 h-5 hugo-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
