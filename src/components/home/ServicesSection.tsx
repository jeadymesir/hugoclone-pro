import { Link } from 'react-router-dom';
import { Monitor, Wifi, Lightbulb, Cpu, Briefcase, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Managed IT Services',
    description: 'RPBG provides full IT and cybersecurity support, letting you focus on your core business.',
    path: '/services/managed-it',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Wifi,
    title: 'Internet & Hosting',
    description: 'Provision of B2B and B2C internet connectivity, as well as datacenter services.',
    path: '/services/internet',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Lightbulb,
    title: 'Consultancy',
    description: 'Transform your business with ICT consultancy that turns technology into opportunity.',
    path: '/services/consultancy',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Cpu,
    title: 'Software & Hardware',
    description: 'RPBG offers on-premise or cloud ERP & HR solutions to simplify payroll and automate tasks.',
    path: '/services/software-hardware',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Briefcase,
    title: 'Business Administration',
    description: 'Through our subsidiary Computech, RPBG offers Finance and HR outsourcing.',
    path: '/services/business',
    color: 'from-rose-500 to-rose-600',
  },
  {
    icon: GraduationCap,
    title: 'Tailor-made Trainings',
    description: 'Immerse your team in engaging training courses, tailored to your requirements.',
    path: '/services/trainings',
    color: 'from-cyan-500 to-cyan-600',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our    Services
          </h2>
          
          {/* Dot Separator */}
          <div className="dot-separator mt-6">
            <div className="dot-separator-dots">
              <span /><span /><span />
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.path}
                className="service-card group block"
              >
                {/* Icon Header */}
                <div className={`bg-gradient-to-br ${service.color} p-6 flex items-center justify-center`}>
                  <Icon className="w-12 h-12 text-white" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Learn More */}
                  <div className="mt-4 text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
