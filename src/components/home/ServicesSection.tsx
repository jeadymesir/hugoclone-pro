import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Wifi, Lightbulb, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Managed IT Services',
    description: 'Across time zones, systems, and challenges, we\'ll keep your IT running smooth...even on the worst days.',
    path: '/services/managed-it',
  },
  {
    icon: Wifi,
    title: 'Internet & Hosting',
    description: 'Fast, reliable connectivity and datacenter services. Your connection to success.',
    path: '/services/internet',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Consultancy',
    description: 'Transform your business with ICT consultancy that turns technology into opportunity.',
    path: '/services/consultancy',
  },
  {
    icon: Briefcase,
    title: 'Business Solutions',
    description: 'Crash costs, cut friction, and boost efficiency. We\'ll help you scale faster and more profitably.',
    path: '/services/business',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-32 bg-background relative">
      {/* Hugo-style dashed curve decorations */}
      <div className="absolute top-20 right-0 w-64 h-64 border-r-2 border-t-2 border-dashed border-border rounded-tr-full opacity-30" />
      <div className="absolute bottom-20 left-0 w-48 h-48 border-l-2 border-b-2 border-dashed border-border rounded-bl-full opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header - Hugo style */}
        <div className="text-center mb-20">
          <h2 className="hugo-subtitle text-4xl md:text-5xl text-foreground mb-6">
            +    More    Growth,    Less    Risk
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Focus on growth, we'll take care of the many small tasks that make the difference between awesome and awful.
          </p>
        </div>
        
        {/* Services Grid - Hugo style with dashed dividers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.path}
                className="hugo-service-card group hover:bg-muted/30 transition-colors"
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
