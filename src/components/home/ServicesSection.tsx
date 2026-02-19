import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Wifi, Lightbulb, Briefcase, Package, GraduationCap } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Scribble, FloatingElement, Sparkle } from '@/components/decorative/Scribbles';

const services = [
  {
    icon: Monitor,
    title: 'Managed IT Services',
    description: 'From the original discipline of systems management, RPBG has broadened the scope to offer various MSP services including networking, VoIP, disaster recovery, and security solutions.',
    path: '/services/managed-it',
  },
  {
    icon: Wifi,
    title: 'Internet & Hosting',
    description: 'RPBG (Parbonet) is one of the 3 internet providers in Suriname, specializing in providing wireless connectivity. Fast connectivity within 7 business days, no installation costs.',
    path: '/services/internet',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Consultancy',
    description: 'We don\'t just fix problems; we architect solutions that prevent them. IT, Security, and Financial consultancy that solves your business equation.',
    path: '/services/consultancy',
  },
  {
    icon: Package,
    title: 'Software & Hardware',
    description: 'RPBG offers on-premise or cloud ERP & HR solutions including Exact Software, Odoo, and HRMS Plus. Quality hardware from Dell, Lenovo, Cisco, and APC.',
    path: '/services/software-hardware',
  },
  {
    icon: Briefcase,
    title: 'Business Services',
    description: 'Through our subsidiary Computech, RPBG offers Finance and HR outsourcing including bookkeeping, payroll processing, and administrative services.',
    path: '/services/business',
  },
  {
    icon: GraduationCap,
    title: 'Trainings',
    description: 'Immerse your team in engaging training courses, tailored to your own requirements. Technical training, security awareness, software training, and leadership development.',
    path: '/services/trainings',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Hugo-style dashed curve decorations */}
      <div className="absolute top-20 right-0 w-64 h-64 border-r-2 border-t-2 border-dashed border-border rounded-tr-full opacity-30" />
      <div className="absolute bottom-20 left-0 w-48 h-48 border-l-2 border-b-2 border-dashed border-border rounded-bl-full opacity-30" />
      
      {/* Floating scribbles */}
      <FloatingElement className="top-32 left-20 hidden xl:block" style={{ animationDelay: '0.5s' }}>
        <Scribble variant="spiral" color="muted" size="md" />
      </FloatingElement>
      
      <FloatingElement className="bottom-40 right-32 hidden lg:block" style={{ animationDelay: '1s' }}>
        <Sparkle className="w-8 h-8" />
      </FloatingElement>
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header - Hugo style */}
        <AnimatedSection animation="fade-up" className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="hugo-subtitle text-4xl md:text-5xl text-foreground mb-6">
              +    More    Growth,    Less    Risk
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
            Focus on growth, we'll take care of the many small tasks that make the difference between awesome and awful.
          </p>
        </AnimatedSection>
        
        {/* Services Grid - Hugo style with dashed dividers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Link
                  to={service.path}
                  className="hugo-service-card group hover:bg-muted/30 transition-colors block h-full"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Learn More */}
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
