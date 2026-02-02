import { Layout } from '@/components/layout/Layout';
import { Eye, Target, Users, Award, Briefcase, Smile } from 'lucide-react';

const stats = [
  { label: 'Years of experience', value: 30, icon: Award },
  { label: 'ERP Projects implemented', value: 150, icon: Briefcase },
  { label: 'HRM projects implemented', value: 200, icon: Users },
  { label: 'Financial services provided', value: 500, icon: Target },
  { label: 'MSP Services provided', value: 1000, icon: Eye },
  { label: 'Happy customers', value: 6000, icon: Smile },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="page-hero pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            About    US
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong>Established in 1996,</strong> Rosheuvel & Partners Business Group N.V. (RPBG) 
            has been a trusted technology partner for small to large businesses for almost 3 decades 
            accumulating theoretical & practical expertise together with achieving international brand partnerships.
          </p>
          <p className="text-primary font-heading font-semibold text-xl mt-6 italic">
            "Breathing Life Into ICT"
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Illustration */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Eye className="w-24 h-24 text-primary mx-auto mb-6" />
                  <Target className="w-20 h-20 text-primary/60 mx-auto" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-10">
              <div>
                <h2 className="section-title text-3xl md:text-4xl text-foreground mb-6">
                  VISION
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  RPBG, a Surinamese company that harnesses the creativity of the Surinamese people 
                  to work in harmony with its environment to optimally utilize technological possibilities, 
                  in order to provide a variety of products and services that ensure continuous growth 
                  of the company and the creation of well-being for its employees.
                </p>
              </div>

              <div>
                <h2 className="section-title text-3xl md:text-4xl text-foreground mb-6">
                  MISSION
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Rosheuvel & Partners Business Group, better known as RPBG, is a dynamic 
                  Surinamese company that offers products and/or services in Suriname and 
                  the surrounding region through its subsidiaries. From its original discipline 
                  of Information Technology, the service offering has expanded to encompass 
                  the entire field of Information and Communications Technology (ICT), while 
                  also diversifying into related industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl text-foreground mb-4">
              Our    work    in    numbers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These numbers reflect the results we deliver through long-term partnerships and tailored solutions.
            </p>
            
            {/* Dot Separator */}
            <div className="dot-separator mt-6">
              <div className="dot-separator-dots">
                <span /><span /><span />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="stat-number mb-2">{stat.value.toLocaleString()}+</div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
